import { useEffect, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/PremiumBackground.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/PremiumBackground.jsx");
var COLORS = [
	{
		r: 239,
		g: 68,
		b: 68
	},
	{
		r: 249,
		g: 115,
		b: 22
	},
	{
		r: 168,
		g: 85,
		b: 247
	},
	{
		r: 59,
		g: 130,
		b: 246
	},
	{
		r: 236,
		g: 72,
		b: 153
	}
];
function getColorString(t, alpha) {
	const count = COLORS.length;
	const scaledT = Math.max(0, Math.min(.9999, t)) * (count - 1);
	const index = Math.floor(scaledT);
	const nextIndex = Math.min(index + 1, count - 1);
	const ratio = scaledT - index;
	return `rgba(${Math.round(COLORS[index].r * (1 - ratio) + COLORS[nextIndex].r * ratio)}, ${Math.round(COLORS[index].g * (1 - ratio) + COLORS[nextIndex].g * ratio)}, ${Math.round(COLORS[index].b * (1 - ratio) + COLORS[nextIndex].b * ratio)}, ${alpha})`;
}
function PremiumBackground() {
	if (typeof window !== "undefined" && window.innerWidth < 768) return null;
	const canvasRef = useRef(null);
	const isHoveredRef = useRef(false);
	const mouse = useRef({
		x: 0,
		y: 0,
		active: false,
		clientX: 0,
		clientY: 0
	});
	const lastMouse = useRef({
		x: 0,
		y: 0
	});
	const TRAIL_LENGTH = 16;
	const trail = useRef(Array.from({ length: TRAIL_LENGTH }, () => ({
		x: 0,
		y: 0
	})));
	const sparks = useRef([]);
	const parallax = useRef({
		x: 0,
		y: 0
	});
	useEffect(() => {
		if (window.innerWidth < 768) return;
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animationFrameId;
		let width = window.innerWidth;
		let height = window.innerHeight;
		const updateSize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = width * dpr;
			canvas.height = height * dpr;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
			ctx.scale(dpr, dpr);
		};
		updateSize();
		window.addEventListener("resize", updateSize, { passive: true });
		trail.current.forEach((t) => {
			t.x = width / 2;
			t.y = height / 2;
		});
		const NUM_PARTICLES = width < 768 ? 15 : 35;
		const particles = [];
		for (let i = 0; i < NUM_PARTICLES; i++) particles.push({
			x: Math.random() * width,
			y: Math.random() * height,
			ox: Math.random() * width,
			oy: Math.random() * height,
			vx: (Math.random() - .5) * .2,
			vy: (Math.random() - .5) * .2,
			size: Math.random() * 1.5 + .8,
			depth: Math.random() * 1 + .4,
			baseAlpha: Math.random() * .4 + .2,
			alpha: 0,
			pulseSpeed: Math.random() * .02 + .005,
			angle: Math.random() * Math.PI * 2,
			driftSpeed: Math.random() * .008 + .002
		});
		const gridSpacing = width < 768 ? 75 : 60;
		const blobs = [
			{
				baseX: .25,
				baseY: .3,
				freqX: 15e-5,
				freqY: 2e-4,
				color: "rgba(168, 85, 247, ",
				radiusFactor: .45
			},
			{
				baseX: .75,
				baseY: .75,
				freqX: 1e-4,
				freqY: 25e-5,
				color: "rgba(59, 130, 246, ",
				radiusFactor: .55
			},
			{
				baseX: .5,
				baseY: .5,
				freqX: 2e-4,
				freqY: 12e-5,
				color: "rgba(236, 72, 153, ",
				radiusFactor: .35
			}
		];
		let time = 0;
		const animate = (timestamp) => {
			if (document.hidden || width < 768) return;
			time = timestamp;
			const baseGrad = ctx.createLinearGradient(0, 0, width, height);
			baseGrad.addColorStop(0, "#04081c");
			baseGrad.addColorStop(.5, "#03030b");
			baseGrad.addColorStop(1, "#0a0514");
			ctx.fillStyle = baseGrad;
			ctx.fillRect(0, 0, width, height);
			blobs.forEach((blob) => {
				const bx = width * blob.baseX + Math.sin(time * blob.freqX) * width * .15;
				const by = height * blob.baseY + Math.cos(time * blob.freqY) * height * .15;
				const radius = Math.min(width, height) * blob.radiusFactor;
				const grad = ctx.createRadialGradient(bx, by, 0, bx, by, radius);
				grad.addColorStop(0, `${blob.color}0.12)`);
				grad.addColorStop(.5, `${blob.color}0.04)`);
				grad.addColorStop(1, "rgba(0,0,0,0)");
				ctx.fillStyle = grad;
				ctx.beginPath();
				ctx.arc(bx, by, radius, 0, Math.PI * 2);
				ctx.fill();
			});
			const targetParallaxX = mouse.current.active ? (mouse.current.x - width / 2) * .025 : 0;
			const targetParallaxY = mouse.current.active ? (mouse.current.y - height / 2) * .025 : 0;
			parallax.current.x += (targetParallaxX - parallax.current.x) * .05;
			parallax.current.y += (targetParallaxY - parallax.current.y) * .05;
			ctx.globalCompositeOperation = "lighter";
			particles.forEach((p) => {
				p.angle += p.driftSpeed;
				p.ox += p.vx;
				p.oy += p.vy;
				if (p.ox < -50) p.ox = width + 50;
				if (p.ox > width + 50) p.ox = -50;
				if (p.oy < -50) p.oy = height + 50;
				if (p.oy > height + 50) p.oy = -50;
				let curX = p.ox + Math.sin(p.angle) * 12;
				let curY = p.oy + Math.cos(p.angle) * 12;
				if (mouse.current.active) {
					const dx = curX - mouse.current.x;
					const dy = curY - mouse.current.y;
					const distSq = dx * dx + dy * dy;
					if (distSq < 22500) {
						const dist = Math.sqrt(distSq);
						const force = (150 - dist) / 150;
						curX += dx / (dist || 1) * force * 35 * p.depth;
						curY += dy / (dist || 1) * force * 35 * p.depth;
					}
				}
				p.x = curX + parallax.current.x * p.depth;
				p.y = curY + parallax.current.y * p.depth;
				p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed) * .12;
			});
			const maxDistSq = 9025;
			for (let i = 0; i < NUM_PARTICLES; i++) {
				const p1 = particles[i];
				for (let j = i + 1; j < NUM_PARTICLES; j++) {
					const p2 = particles[j];
					const dx = p1.x - p2.x;
					const dy = p1.y - p2.y;
					const distSq = dx * dx + dy * dy;
					if (distSq < maxDistSq) {
						ctx.strokeStyle = `rgba(168, 85, 247, ${(95 - Math.sqrt(distSq)) / 95 * .06 * Math.min(p1.alpha, p2.alpha)})`;
						ctx.lineWidth = .55;
						ctx.beginPath();
						ctx.moveTo(p1.x, p1.y);
						ctx.lineTo(p2.x, p2.y);
						ctx.stroke();
					}
				}
			}
			particles.forEach((p) => {
				ctx.fillStyle = getColorString((p.x / width + p.depth / 1.4) / 2 % 1, p.alpha);
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
				ctx.fill();
			});
			const cols = Math.ceil(width / gridSpacing) + 1;
			const rows = Math.ceil(height / gridSpacing) + 1;
			const activeGridRadius = 180;
			const activeGridRadiusSq = activeGridRadius * activeGridRadius;
			ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
			ctx.beginPath();
			for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
				const gx = c * gridSpacing;
				const gy = r * gridSpacing;
				if (mouse.current.active) {
					const dx = gx - mouse.current.x;
					const dy = gy - mouse.current.y;
					if (dx * dx + dy * dy >= activeGridRadiusSq) {
						ctx.moveTo(gx, gy);
						ctx.arc(gx, gy, .75, 0, Math.PI * 2);
					}
				} else {
					ctx.moveTo(gx, gy);
					ctx.arc(gx, gy, .75, 0, Math.PI * 2);
				}
			}
			ctx.fill();
			if (mouse.current.active) for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
				const gx = c * gridSpacing;
				const gy = r * gridSpacing;
				const dx = gx - mouse.current.x;
				const dy = gy - mouse.current.y;
				const distSq = dx * dx + dy * dy;
				if (distSq < activeGridRadiusSq) {
					const dist = Math.sqrt(distSq);
					const pullFactor = (activeGridRadius - dist) / activeGridRadius;
					const pull = pullFactor * 8.5;
					const drawX = gx - dx / (dist || 1) * pull;
					const drawY = gy - dy / (dist || 1) * pull;
					const size = .75 + pullFactor * .95;
					const opacity = .04 + pullFactor * .16;
					ctx.fillStyle = getColorString((dist / activeGridRadius + time * 1e-4) % 1, opacity);
					ctx.beginPath();
					ctx.arc(drawX, drawY, size, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			if (mouse.current.active) {
				const isHovered = isHoveredRef.current;
				const t = time * 4e-5 % 1;
				const radialRadius = isHovered ? 440 : 300;
				const radialGrad = ctx.createRadialGradient(mouse.current.x, mouse.current.y, 0, mouse.current.x, mouse.current.y, radialRadius);
				radialGrad.addColorStop(0, getColorString(t, isHovered ? .2 : .14));
				radialGrad.addColorStop(.2, getColorString((t + .15) % 1, isHovered ? .14 : .09));
				radialGrad.addColorStop(.45, getColorString((t + .35) % 1, isHovered ? .07 : .04));
				radialGrad.addColorStop(1, "rgba(0,0,0,0)");
				ctx.globalCompositeOperation = "screen";
				ctx.fillStyle = radialGrad;
				ctx.beginPath();
				ctx.arc(mouse.current.x, mouse.current.y, radialRadius, 0, Math.PI * 2);
				ctx.fill();
				trail.current[0].x = mouse.current.x;
				trail.current[0].y = mouse.current.y;
				for (let i = 1; i < TRAIL_LENGTH; i++) {
					const prev = trail.current[i - 1];
					const curr = trail.current[i];
					curr.x += (prev.x - curr.x) * .28;
					curr.y += (prev.y - curr.y) * .28;
				}
				ctx.globalCompositeOperation = "screen";
				for (let i = TRAIL_LENGTH - 1; i >= 0; i--) {
					const p = trail.current[i];
					const ratio = i / TRAIL_LENGTH;
					const size = (1 - ratio) * 18 + 3;
					const opacity = (1 - ratio) * .22;
					const color = getColorString((ratio + time * 12e-5) % 1, opacity);
					const trailGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
					trailGrad.addColorStop(0, color);
					trailGrad.addColorStop(1, "rgba(0,0,0,0)");
					ctx.fillStyle = trailGrad;
					ctx.beginPath();
					ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
					ctx.fill();
				}
			}
			ctx.globalCompositeOperation = "screen";
			sparks.current.forEach((s) => {
				s.x += s.vx;
				s.y += s.vy;
				s.life -= s.decay;
				s.vx *= .96;
				s.vy *= .96;
				if (s.life > 0) {
					ctx.fillStyle = getColorString(s.colorRatio, s.life * .7);
					ctx.beginPath();
					ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
					ctx.fill();
				}
			});
			sparks.current = sparks.current.filter((s) => s.life > 0);
			ctx.globalCompositeOperation = "source-over";
			animationFrameId = requestAnimationFrame(animate);
		};
		animationFrameId = requestAnimationFrame(animate);
		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			const newX = e.clientX - rect.left;
			const newY = e.clientY - rect.top;
			mouse.current.x = newX;
			mouse.current.y = newY;
			mouse.current.clientX = e.clientX;
			mouse.current.clientY = e.clientY;
			mouse.current.active = true;
			const dx = newX - lastMouse.current.x;
			const dy = newY - lastMouse.current.y;
			const speedSq = dx * dx + dy * dy;
			if (speedSq > 6.25) {
				const numSparks = Math.min(2, Math.floor(Math.sqrt(speedSq) / 4));
				for (let i = 0; i < numSparks; i++) sparks.current.push({
					x: newX,
					y: newY,
					vx: (Math.random() - .5) * 1.6 - dx * .08,
					vy: (Math.random() - .5) * 1.6 - dy * .08,
					size: Math.random() * 2 + .8,
					life: 1,
					decay: Math.random() * .02 + .015,
					colorRatio: time * 1e-4 % 1
				});
			}
			lastMouse.current.x = newX;
			lastMouse.current.y = newY;
		};
		const handleMouseLeave = () => {
			mouse.current.active = false;
		};
		const handleMouseEnter = () => {
			mouse.current.active = true;
		};
		const handleMouseOver = (e) => {
			const target = e.target;
			if (!target) return;
			if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button") || target.closest(".service-card") || target.closest(".glass-card") || target.closest(".btn-primary") || target.closest(".btn-secondary") || target.classList?.contains("nav-link")) isHoveredRef.current = true;
			else isHoveredRef.current = false;
		};
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		document.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseenter", handleMouseEnter);
		window.addEventListener("mouseover", handleMouseOver, { passive: true });
		return () => {
			cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", updateSize);
			window.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseenter", handleMouseEnter);
			window.removeEventListener("mouseover", handleMouseOver);
		};
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent",
		children: [/* @__PURE__ */ jsx("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 w-full h-full block"
		}), /* @__PURE__ */ jsx("div", { className: "noise-overlay" })]
	});
}
//#endregion
export { PremiumBackground as default };
