import { motion } from "framer-motion";
import { FaBoxOpen, FaBuilding, FaChartLine, FaCut, FaGraduationCap, FaHeartbeat, FaIndustry, FaLaptopCode, FaRing, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/IndustriesSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/IndustriesSection.jsx");
var industries = [
	{
		name: "Retail",
		icon: FaShoppingCart,
		delay: .1
	},
	{
		name: "Real Estate",
		icon: FaBuilding,
		delay: .2
	},
	{
		name: "Health Care",
		icon: FaHeartbeat,
		delay: .3
	},
	{
		name: "Education",
		icon: FaGraduationCap,
		delay: .4
	},
	{
		name: "FMCG",
		icon: FaBoxOpen,
		delay: .5
	},
	{
		name: "E-Commerce",
		icon: FaShoppingCart,
		delay: .6
	},
	{
		name: "IT & SaaS",
		icon: FaLaptopCode,
		delay: .7
	},
	{
		name: "Manufacturing",
		icon: FaIndustry,
		delay: .8
	},
	{
		name: "Beauty & Salon",
		icon: FaCut,
		delay: .9
	},
	{
		name: "Jewelry",
		icon: FaRing,
		delay: 1
	},
	{
		name: "Hospitality",
		icon: FaUtensils,
		delay: 1.1
	},
	{
		name: "Finance",
		icon: FaChartLine,
		delay: 1.2
	}
];
function IndustriesSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 lg:py-24 relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 relative z-10",
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
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-xs font-bold uppercase tracking-wider mb-4",
						children: "Specialized Focus"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "section-title mb-4",
						children: ["Industries We ", /* @__PURE__ */ jsx("span", {
							className: "gradient-text-purple",
							children: "Transform"
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "section-subtitle max-w-xl mx-auto",
						children: "Our AI-powered strategies are tailored to the unique challenges and opportunities of your specific industry."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: industries.map((ind, i) => /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: {
						delay: i % 4 * .1,
						duration: .4
					},
					className: "glass-card p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-brand-purple/50 transition-all duration-300",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/50 group-hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all duration-300",
						children: /* @__PURE__ */ jsx(ind.icon, { className: "text-white/60 group-hover:text-white text-xl transition-colors" })
					}), /* @__PURE__ */ jsx("h4", {
						className: "text-white font-bold group-hover:text-brand-yellow transition-colors",
						children: ind.name
					})]
				}, ind.name))
			})]
		})]
	});
}
//#endregion
export { IndustriesSection as default };
