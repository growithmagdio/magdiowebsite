import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaRobot, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/FloatingElements.jsx
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/FloatingElements.jsx");
function FloatingElements() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [showBackToTop, setShowBackToTop] = useState(false);
	const [isChatOpen, setIsChatOpen] = useState(false);
	const [messages, setMessages] = useState([{
		text: "Hello! I'm the MAGDIO AI Assistant. To get started, what is your name?",
		sender: "bot"
	}]);
	const [inputValue, setInputValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const messagesEndRef = useRef(null);
	const chatStepRef = useRef(0);
	const leadDataRef = useRef({
		name: "",
		contact: "",
		requirements: ""
	});
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [
		messages,
		isTyping,
		isChatOpen
	]);
	const showBackToTopRef = useRef(false);
	useEffect(() => {
		let ticking = false;
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const totalScroll = window.scrollY || document.documentElement.scrollTop;
					const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
					setScrollProgress(windowHeight > 0 ? Math.round(totalScroll / windowHeight * 100) / 100 : 0);
					const shouldShow = totalScroll > 500;
					if (shouldShow !== showBackToTopRef.current) {
						showBackToTopRef.current = shouldShow;
						setShowBackToTop(shouldShow);
					}
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const handleSendMessage = async (e) => {
		e?.preventDefault();
		if (!inputValue.trim()) return;
		const userMsg = inputValue.trim();
		setMessages((prev) => [...prev, {
			text: userMsg,
			sender: "user"
		}]);
		setInputValue("");
		setIsTyping(true);
		const step = chatStepRef.current;
		setTimeout(async () => {
			let botResponse = "";
			if (step === 0) {
				leadDataRef.current.name = userMsg;
				botResponse = `Nice to meet you, ${userMsg}! Could you provide your email address or phone number so our experts can reach you?`;
				chatStepRef.current = 1;
			} else if (step === 1) {
				leadDataRef.current.contact = userMsg;
				botResponse = `Thanks! Briefly describe what you're looking for (e.g., new website, SEO, digital marketing, AI solutions).`;
				chatStepRef.current = 2;
			} else if (step === 2) {
				leadDataRef.current.requirements = userMsg;
				botResponse = `Perfect. Let me process that for you...`;
				chatStepRef.current = 3;
			} else if (step >= 3) botResponse = "Thanks! Our team will contact you soon. Feel free to use the WhatsApp button below if you need immediate assistance.";
			setMessages((prev) => [...prev, {
				text: botResponse,
				sender: "bot"
			}]);
			setIsTyping(false);
			if (chatStepRef.current === 3 && step === 2) {
				setIsTyping(true);
				const waLink = `https://wa.me/918838887303?text=${`Hi Magdio Team!%0A%0A*New Lead from AI Bot*%0AName: ${leadDataRef.current.name}%0AContact: ${leadDataRef.current.contact}%0ARequirements: ${leadDataRef.current.requirements}`}`;
				import("firebase/firestore").then(({ collection, addDoc, serverTimestamp }) => {
					(globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/firebase.js"), import("../main.mjs")).then(({ db }) => {
						addDoc(collection(db, "contacts"), {
							name: leadDataRef.current.name,
							email: leadDataRef.current.contact,
							message: leadDataRef.current.requirements,
							source: "ai_chatbot",
							createdAt: serverTimestamp()
						}).catch((e) => console.error("Firebase save failed:", e));
					}).catch((e) => console.error("Firebase init failed:", e));
				}).catch((e) => console.error("Firebase import failed:", e));
				setTimeout(() => {
					setMessages((prev) => [...prev, {
						text: "I've processed your request! ✅\n\nTo get an instant reply from our human team, please click below to send these details directly to our admin on WhatsApp:",
						sender: "bot",
						isAction: true,
						actionLink: waLink,
						actionText: "Send details via WhatsApp"
					}]);
					setIsTyping(false);
				}, 1500);
			}
		}, 1e3);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(motion.div, {
		className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-yellow z-50 origin-left",
		style: { scaleX: scrollProgress }
	}), /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none",
		children: [
			/* @__PURE__ */ jsx(AnimatePresence, { children: showBackToTop && /* @__PURE__ */ jsx(motion.button, {
				initial: {
					opacity: 0,
					scale: .5,
					y: 20
				},
				animate: {
					opacity: 1,
					scale: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					scale: .5,
					y: 20
				},
				onClick: scrollToTop,
				className: "w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-brand-yellow/50 hover:text-brand-yellow transition-all duration-300 shadow-lg pointer-events-auto",
				"aria-label": "Back to top",
				children: /* @__PURE__ */ jsx(FaArrowUp, {})
			}) }),
			/* @__PURE__ */ jsx(motion.a, {
				href: "https://wa.me/918838887303",
				target: "_blank",
				rel: "noopener noreferrer",
				whileHover: { scale: 1.1 },
				whileTap: { scale: .9 },
				className: "w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all pointer-events-auto",
				"aria-label": "Contact on WhatsApp",
				children: /* @__PURE__ */ jsx(FaWhatsapp, {})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative pointer-events-auto",
				children: [/* @__PURE__ */ jsx(AnimatePresence, { children: isChatOpen && /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20,
						scale: .9
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: 20,
						scale: .9
					},
					className: "absolute bottom-16 right-0 w-[340px] h-[450px] glass-card-premium p-4 flex flex-col shadow-2xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex justify-between items-center mb-4 border-b border-white/10 pb-3",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx(FaRobot, { className: "text-brand-yellow text-xl" }), /* @__PURE__ */ jsx("span", {
									className: "font-display font-bold text-white",
									children: "MAGDIO AI"
								})]
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setIsChatOpen(false),
								className: "text-white/50 hover:text-white transition-colors",
								children: /* @__PURE__ */ jsx(FaTimes, {})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex-1 overflow-y-auto mb-4 flex flex-col gap-3 pr-2",
							style: {
								scrollbarWidth: "none",
								msOverflowStyle: "none"
							},
							children: [
								messages.map((msg, idx) => /* @__PURE__ */ jsxs(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									className: `p-3 text-sm rounded-2xl max-w-[85%] whitespace-pre-wrap ${msg.sender === "user" ? "bg-brand-yellow text-black self-end rounded-tr-sm font-medium" : "bg-brand-blue/20 border border-brand-blue/30 text-white/80 self-start rounded-tl-sm"}`,
									children: [msg.text, msg.isAction && /* @__PURE__ */ jsxs("a", {
										href: msg.actionLink,
										target: "_blank",
										rel: "noreferrer",
										className: "mt-3 block w-full text-center py-2 px-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors",
										children: [/* @__PURE__ */ jsx(FaWhatsapp, { className: "inline-block mr-2 text-lg" }), msg.actionText]
									})]
								}, idx)),
								isTyping && /* @__PURE__ */ jsxs(motion.div, {
									initial: { opacity: 0 },
									animate: { opacity: 1 },
									className: "bg-brand-blue/20 border border-brand-blue/30 text-white/80 self-start rounded-2xl rounded-tl-sm p-3 max-w-[85%] flex items-center gap-1.5 h-[44px]",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce",
											style: { animationDelay: "0ms" }
										}),
										/* @__PURE__ */ jsx("span", {
											className: "w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce",
											style: { animationDelay: "150ms" }
										}),
										/* @__PURE__ */ jsx("span", {
											className: "w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce",
											style: { animationDelay: "300ms" }
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { ref: messagesEndRef })
							]
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: handleSendMessage,
							className: "mt-auto relative",
							children: [/* @__PURE__ */ jsx("input", {
								type: "text",
								value: inputValue,
								onChange: (e) => setInputValue(e.target.value),
								placeholder: "Type your message...",
								className: "w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors"
							}), /* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-yellow text-black flex items-center justify-center text-sm font-bold hover:scale-105 transition-transform",
								children: "→"
							})]
						})
					]
				}) }), /* @__PURE__ */ jsx(motion.button, {
					onClick: () => setIsChatOpen(!isChatOpen),
					whileHover: { scale: 1.1 },
					whileTap: { scale: .9 },
					className: "w-14 h-14 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white text-xl shadow-glow-blue hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-all z-50 relative",
					"aria-label": "Open AI Chat",
					children: isChatOpen ? /* @__PURE__ */ jsx(FaTimes, {}) : /* @__PURE__ */ jsx(FaRobot, {})
				})]
			})
		]
	})] });
}
//#endregion
export { FloatingElements as default };
