import { t as fetchBlogs } from "../main.mjs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/BlogSection.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/home/BlogSection.jsx");
function BlogSection() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		let isMounted = true;
		const loadLatestBlogs = async () => {
			try {
				const data = await fetchBlogs();
				if (isMounted) setBlogs(data.slice(0, 3));
			} catch (err) {
				console.error("Error loading latest blogs on main page:", err);
			} finally {
				if (isMounted) setLoading(false);
			}
		};
		loadLatestBlogs();
		const handleUpdate = () => {
			loadLatestBlogs();
		};
		window.addEventListener("magdio_blogs_updated", handleUpdate);
		return () => {
			isMounted = false;
			window.removeEventListener("magdio_blogs_updated", handleUpdate);
		};
	}, []);
	if (!loading && blogs.length === 0) return null;
	return /* @__PURE__ */ jsxs("section", {
		className: "py-24 relative overflow-hidden bg-[#03030b]",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-[140px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute top-1/3 right-10 w-[25rem] h-[25rem] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-6 relative z-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
						className: "text-xs font-bold uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 border border-brand-yellow/20 px-3.5 py-1.5 rounded-full inline-block mb-4",
						children: "Latest Insights & News"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "text-3xl md:text-5xl font-display font-bold text-white",
						children: ["Stay Ahead with Our ", /* @__PURE__ */ jsx("span", {
							className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-purple to-brand-blue",
							children: "Latest Blogs"
						})]
					})] }), /* @__PURE__ */ jsxs(Link, {
						to: "/blog",
						className: "group inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-brand-yellow transition-colors shrink-0",
						children: [/* @__PURE__ */ jsx("span", { children: "View All Articles" }), /* @__PURE__ */ jsx(FaArrowRight, { className: "text-xs group-hover:translate-x-1.5 transition-transform" })]
					})]
				}), loading ? /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8",
					children: [
						1,
						2,
						3
					].map((n) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl bg-white/5 border border-white/10 h-96 animate-pulse p-6 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ jsx("div", { className: "h-44 bg-white/10 rounded-xl mb-4" }),
							/* @__PURE__ */ jsx("div", { className: "h-4 bg-white/10 rounded w-3/4 mb-2" }),
							/* @__PURE__ */ jsx("div", { className: "h-4 bg-white/10 rounded w-1/2" })
						]
					}, n))
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-8",
					children: blogs.map((blog, i) => /* @__PURE__ */ jsxs(motion.article, {
						initial: {
							opacity: 0,
							y: 30
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .5,
							delay: i * .15
						},
						className: "group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(26,34,184,0.25)] flex flex-col h-full",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: `/blog/${blog.slug || blog.id}`,
							className: "relative h-52 overflow-hidden block",
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10" }),
								blog.category && /* @__PURE__ */ jsx("span", {
									className: "absolute top-4 left-4 z-20 px-3 py-1 text-[10px] font-bold tracking-wider text-black bg-brand-yellow rounded-full uppercase",
									children: blog.category
								}),
								/* @__PURE__ */ jsx("img", {
									src: blog.imageUrl || "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
									alt: blog.title,
									className: "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out",
									loading: "lazy",
									onError: (e) => {
										e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
									}
								})
							]
						}), /* @__PURE__ */ jsxs("div", {
							className: "p-6 flex flex-col flex-grow",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center justify-between text-xs text-white/50 mb-3 border-b border-white/5 pb-3",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(FaCalendarAlt, { className: "text-brand-yellow" }),
											" ",
											blog.date
										]
									}), /* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ jsx(FaClock, { className: "text-brand-blue" }),
											" ",
											blog.readTime || "5 min read"
										]
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-xl font-bold font-display text-white mb-3 group-hover:text-brand-yellow transition-colors line-clamp-2 leading-snug",
									children: /* @__PURE__ */ jsx(Link, {
										to: `/blog/${blog.slug || blog.id}`,
										children: blog.title
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-white/60 text-sm mb-6 line-clamp-3 flex-grow font-light leading-relaxed",
									children: blog.excerpt
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-auto pt-4 border-t border-white/10 flex items-center justify-between",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "flex items-center gap-1.5 text-xs text-white/50",
										children: [
											/* @__PURE__ */ jsx(FaUser, { className: "text-brand-purple" }),
											" ",
											blog.author || "Admin"
										]
									}), /* @__PURE__ */ jsxs(Link, {
										to: `/blog/${blog.slug || blog.id}`,
										className: "text-brand-blue font-semibold text-sm flex items-center gap-2 group-hover:text-brand-yellow transition-colors",
										children: [/* @__PURE__ */ jsx("span", { children: "Read Article" }), /* @__PURE__ */ jsx(FaArrowRight, { className: "text-xs transform group-hover:translate-x-1 transition-transform" })]
									})]
								})
							]
						})]
					}, blog.id || i))
				})]
			})
		]
	});
}
//#endregion
export { BlogSection as default };
