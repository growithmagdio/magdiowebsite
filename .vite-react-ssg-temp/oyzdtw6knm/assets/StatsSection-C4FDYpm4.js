import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/StatsSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/StatsSection.jsx");
function Counter({ from, to, duration = 2 }) {
	const nodeRef = useRef(null);
	const inView = useInView(nodeRef, { once: true });
	const [count, setCount] = useState(from);
	useEffect(() => {
		if (inView) {
			let start = null;
			const step = (timestamp) => {
				if (!start) start = timestamp;
				const progress = Math.min((timestamp - start) / (duration * 1e3), 1);
				setCount(Math.floor(progress * (to - from) + from));
				if (progress < 1) window.requestAnimationFrame(step);
			};
			window.requestAnimationFrame(step);
		}
	}, [
		inView,
		from,
		to,
		duration
	]);
	return /* @__PURE__ */ jsx("span", {
		ref: nodeRef,
		children: count
	});
}
var stats = [
	{
		label: "Projects Completed",
		value: 250,
		suffix: "+"
	},
	{
		label: "Happy Clients",
		value: 120,
		suffix: "+"
	},
	{
		label: "ROI Generated",
		value: 5,
		suffix: "x"
	},
	{
		label: "AI Automations Built",
		value: 50,
		suffix: "+"
	}
];
function StatsSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-12 lg:py-20 relative border-y border-white/5 bg-black/40",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-6",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10",
				children: stats.map((stat, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "text-center px-4",
					children: [/* @__PURE__ */ jsxs("h3", {
						className: "font-display font-black text-4xl md:text-5xl text-white mb-2 tracking-tight flex items-center justify-center",
						children: [/* @__PURE__ */ jsx(Counter, {
							from: 0,
							to: stat.value
						}), /* @__PURE__ */ jsx("span", {
							className: "text-brand-yellow ml-1",
							children: stat.suffix
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-white/50 text-sm font-medium uppercase tracking-wider",
						children: stat.label
					})]
				}, stat.label))
			})
		})
	});
}
//#endregion
export { StatsSection as default };
