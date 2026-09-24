import { motion } from "framer-motion";
import { FaBrain, FaChartBar, FaCogs, FaHeadset, FaMoneyBillWave, FaRocket } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/WhyChooseSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/WhyChooseSection.jsx");
var reasons = [
	{
		title: "AI-Powered Solutions",
		desc: "Leveraging cutting-edge AI to automate tasks, optimize campaigns, and drive exponential growth.",
		icon: FaBrain
	},
	{
		title: "Data-Driven Marketing",
		desc: "Every decision is backed by deep analytics, ensuring maximum impact and minimal waste.",
		icon: FaChartBar
	},
	{
		title: "Seamless Automation",
		desc: "We build custom workflows that save you hundreds of operational hours every month.",
		icon: FaCogs
	},
	{
		title: "ROI Focused",
		desc: "Our strategies are designed with one primary goal: increasing your bottom line.",
		icon: FaMoneyBillWave
	},
	{
		title: "Fast Delivery",
		desc: "Agile methodologies ensure rapid deployment without compromising on premium quality.",
		icon: FaRocket
	},
	{
		title: "Dedicated Support",
		desc: "Your growth is our priority. Get round-the-clock support from our expert team.",
		icon: FaHeadset
	}
];
function WhyChooseSection() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-16 lg:py-24 relative overflow-hidden bg-black/20",
		children: [/* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent pointer-events-none" }), /* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-6",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-4",
					children: /* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							x: -30
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "font-display font-black text-4xl md:text-5xl text-white mb-6 leading-tight",
								children: [
									"Why Choose ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "gradient-text-gold",
										children: "MAGDIO?"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-white/60 leading-relaxed mb-8",
								children: "We aren't just another agency. We are an AI Growth Studio that acts as an extension of your team, bringing technical prowess and marketing genius to the table."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-6",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "glass-card-premium p-6 border-l-4 border-l-brand-yellow",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "text-3xl font-display font-black text-white mb-1",
										children: "98%"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-white/50 text-sm",
										children: "Client Retention Rate"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "glass-card-premium p-6 border-l-4 border-l-brand-purple",
									children: [/* @__PURE__ */ jsx("h4", {
										className: "text-3xl font-display font-black text-white mb-1",
										children: "5x"
									}), /* @__PURE__ */ jsx("p", {
										className: "text-white/50 text-sm",
										children: "Average ROI increase"
									})]
								})]
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-8 grid md:grid-cols-2 gap-6",
					children: reasons.map((reason, i) => /* @__PURE__ */ jsxs(motion.div, {
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
						className: "glass-card p-6 group hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-10 h-10 rounded-lg flex items-center justify-center bg-brand-blue/20 text-brand-lightblue mb-4 border border-brand-blue/30 group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ jsx(reason.icon, { size: 18 })
							}),
							/* @__PURE__ */ jsx("h4", {
								className: "text-lg font-bold text-white mb-2",
								children: reason.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-white/50 text-sm leading-relaxed",
								children: reason.desc
							})
						]
					}, reason.title))
				})]
			})
		})]
	});
}
//#endregion
export { WhyChooseSection as default };
