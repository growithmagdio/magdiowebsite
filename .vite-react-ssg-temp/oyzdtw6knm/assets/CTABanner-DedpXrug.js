import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/CTABanner.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/CTABanner.jsx");
function CTABanner() {
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 lg:py-24 px-6 relative",
		children: /* @__PURE__ */ jsx("div", {
			className: "max-w-6xl mx-auto",
			children: /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					scale: .95
				},
				whileInView: {
					opacity: 1,
					scale: 1
				},
				viewport: { once: true },
				className: "relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center border border-white/10",
				style: {
					background: "linear-gradient(135deg, rgba(26,34,184,0.3) 0%, rgba(138,43,226,0.3) 50%, rgba(242,179,0,0.1) 100%)",
					boxShadow: "0 0 80px rgba(26,34,184,0.3), inset 0 0 60px rgba(255,255,255,0.05)"
				},
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[#03030b] -z-20" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30 -z-10" }),
					/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/30 rounded-full blur-[120px] -z-10" }),
					/* @__PURE__ */ jsxs("h2", {
						className: "font-display font-black text-5xl md:text-6xl text-white mb-6 leading-tight",
						children: [
							"Ready to Grow Your ",
							/* @__PURE__ */ jsx("br", {}),
							"Business with ",
							/* @__PURE__ */ jsx("span", {
								className: "gradient-text-gold",
								children: "AI?"
							})
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light",
						children: "Join the visionary brands that are scaling faster and smarter with MAGDIO. Your transformation starts here."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto",
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "w-full sm:w-auto justify-center px-10 py-5 rounded-full font-bold text-white bg-gradient-to-r from-brand-blue to-brand-purple shadow-[0_0_30px_rgba(26,34,184,0.5)] hover:shadow-[0_0_50px_rgba(138,43,226,0.8)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-lg",
							children: ["Start Your Journey ", /* @__PURE__ */ jsx(FaArrowRight, {})]
						})
					})
				]
			})
		})
	});
}
//#endregion
export { CTABanner as default };
