import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/TestimonialsSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/TestimonialsSection.jsx");
var testimonials = [
	{
		id: 1,
		name: "Sarah Jenkins",
		role: "CMO, RetailTech",
		content: "MAGDIO completely transformed our digital presence. Their AI-driven approach to our ad campaigns increased our ROI by 300% within the first quarter.",
		rating: 5
	},
	{
		id: 2,
		name: "David Chen",
		role: "Founder, Elevate SaaS",
		content: "The web app they built for us is nothing short of a masterpiece. Fast, beautiful, and the conversion rates are through the roof. Truly a premium agency.",
		rating: 5
	},
	{
		id: 3,
		name: "Emily Rodriguez",
		role: "Director of Marketing, Luxura",
		content: "Their strategic approach to SEO and content marketing put us on the first page of Google for all our highly competitive keywords. Unbelievable results.",
		rating: 5
	}
];
function TestimonialsSection() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setIndex((prev) => prev === testimonials.length - 1 ? 0 : prev + 1);
		}, 5e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ jsx("section", {
		className: "py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-[#03030b] to-[#06071a]",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-4xl mx-auto px-6 text-center",
			children: [
				/* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "mb-12",
					children: [/* @__PURE__ */ jsxs("h2", {
						className: "section-title mb-4",
						children: ["Client ", /* @__PURE__ */ jsx("span", {
							className: "gradient-text-purple",
							children: "Success Stories"
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "section-subtitle",
						children: "Don't just take our word for it."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative h-[300px] flex items-center justify-center",
					children: /* @__PURE__ */ jsx(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ jsx(motion.div, {
							initial: {
								opacity: 0,
								scale: .9,
								y: 20
							},
							animate: {
								opacity: 1,
								scale: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								scale: .9,
								y: -20
							},
							transition: { duration: .5 },
							className: "absolute w-full",
							children: /* @__PURE__ */ jsxs("div", {
								className: "glass-card-premium p-10 md:p-14 relative border-brand-purple/20 shadow-[0_0_50px_rgba(138,43,226,0.1)]",
								children: [
									/* @__PURE__ */ jsx(FaQuoteLeft, { className: "absolute top-6 left-6 text-brand-purple/20 text-6xl" }),
									/* @__PURE__ */ jsx("div", {
										className: "flex justify-center gap-1 mb-6",
										children: [...Array(testimonials[index].rating)].map((_, i) => /* @__PURE__ */ jsx(FaStar, { className: "text-brand-yellow text-xl" }, i))
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "text-lg md:text-xl text-white leading-relaxed mb-8 font-medium italic relative z-10",
										children: [
											"\"",
											testimonials[index].content,
											"\""
										]
									}),
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
										className: "font-display font-bold text-white text-lg",
										children: testimonials[index].name
									}), /* @__PURE__ */ jsx("p", {
										className: "text-white/50 text-sm",
										children: testimonials[index].role
									})] })
								]
							})
						}, index)
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "flex justify-center gap-2 mt-8",
					children: testimonials.map((_, i) => /* @__PURE__ */ jsx("button", {
						onClick: () => setIndex(i),
						className: `h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-yellow" : "w-2 bg-white/20"}`,
						"aria-label": `Go to testimonial ${i + 1}`
					}, i))
				})
			]
		})
	});
}
//#endregion
export { TestimonialsSection as default };
