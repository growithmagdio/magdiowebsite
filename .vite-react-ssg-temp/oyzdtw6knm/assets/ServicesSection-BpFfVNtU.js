import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaBullhorn, FaChartPie, FaCode, FaPaintBrush } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/ServicesSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/ServicesSection.jsx");
var services = [
	{
		category: "Marketing",
		icon: FaBullhorn,
		title: "Digital Marketing",
		desc: "Data-driven campaigns to boost your ROI and brand visibility.",
		path: "/digital-marketing-company-in-chennai-magdio",
		color: "text-orange-400",
		bg: "bg-orange-500/10 border-orange-500/20"
	},
	{
		category: "Development",
		icon: FaCode,
		title: "Web & App Development",
		desc: "Scalable software, websites, and mobile apps built for the future.",
		path: "/services/web-development",
		color: "text-blue-400",
		bg: "bg-blue-500/10 border-blue-500/20"
	},
	{
		category: "Branding",
		icon: FaPaintBrush,
		title: "Brand Identity",
		desc: "Premium logo design and complete branding guidelines.",
		path: "/services/branding-services",
		color: "text-pink-400",
		bg: "bg-pink-500/10 border-pink-500/20"
	},
	{
		category: "Analytics",
		icon: FaChartPie,
		title: "Data & Tracking",
		desc: "Advanced Google Analytics and Tag Manager setups.",
		path: "/services/google-analytics-setup",
		color: "text-emerald-400",
		bg: "bg-emerald-500/10 border-emerald-500/20"
	}
];
function ServicesSection() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 lg:py-24 relative overflow-hidden",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "text-center mb-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider mb-4",
						children: "Our Expertise"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "section-title mb-4",
						children: ["Full-Stack ", /* @__PURE__ */ jsx("span", {
							className: "gradient-text-gold",
							children: "Digital Services"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "section-subtitle max-w-xl mx-auto",
						children: "Comprehensive solutions to scale your business, from initial strategy to final execution."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
				children: [services.map((svc, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: i * .1 },
					className: "glass-card-premium p-8 group hover:-translate-y-2 transition-all duration-300",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${svc.bg}`,
							children: /* @__PURE__ */ jsx(svc.icon, {
								size: 24,
								className: svc.color
							})
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-brand-yellow font-bold text-xs uppercase tracking-wider mb-2 block",
							children: svc.category
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "font-display font-bold text-white text-xl mb-3 group-hover:text-brand-lightblue transition-colors",
							children: svc.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-white/60 text-sm leading-relaxed mb-8",
							children: svc.desc
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: svc.path,
							className: "flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-brand-yellow transition-colors mt-auto",
							children: ["Discover More ", /* @__PURE__ */ jsx(FaArrowRight, { className: "group-hover:translate-x-1 transition-transform" })]
						})
					]
				}, svc.title)), /* @__PURE__ */ jsx(Link, {
					to: "/services",
					className: "block",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: 5 * .1 },
						className: "p-8 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/5 transition-all h-full",
						style: { background: "linear-gradient(135deg, rgba(242,179,0,0.1) 0%, transparent 100%)" },
						children: [/* @__PURE__ */ jsxs("h3", {
							className: "font-display font-bold text-white text-2xl mb-4",
							children: [
								"Explore All 25+ ",
								/* @__PURE__ */ jsx("br", {}),
								" Services"
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 rounded-full bg-brand-yellow text-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(242,179,0,0.4)]",
							children: /* @__PURE__ */ jsx(FaArrowRight, {})
						})]
					})
				})]
			})]
		})
	});
}
//#endregion
export { ServicesSection as default };
