import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRobot, FaArrowUp, FaTimes } from 'react-icons/fa';

export default function FloatingElements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  // Chat State
  const [messages, setMessages] = useState([
    { text: "Hello! I'm the MAGDIO AI Assistant. To get started, what is your name?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Chat Logic State
  const chatStepRef = useRef(0);
  const leadDataRef = useRef({ name: '', contact: '', requirements: '' });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isChatOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);

      if (totalScroll > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInputValue('');
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
      } else if (step >= 3) {
        botResponse = "Thanks! Our team will contact you soon. Feel free to use the WhatsApp button below if you need immediate assistance.";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);

      // Transitioning to Step 3: Save to Firebase & Generate WhatsApp Notification
      if (chatStepRef.current === 3 && step === 2) {
         setIsTyping(true);
         
         // 1. Prepare WhatsApp Link
         const waText = `Hi Magdio Team!%0A%0A*New Lead from AI Bot*%0AName: ${leadDataRef.current.name}%0AContact: ${leadDataRef.current.contact}%0ARequirements: ${leadDataRef.current.requirements}`;
         const waLink = `https://wa.me/918838887303?text=${waText}`;

         // 2. Try saving to Firebase in the background (silent fail if not configured)
         import('firebase/firestore').then(({ collection, addDoc, serverTimestamp }) => {
           import('../firebase').then(({ db }) => {
             addDoc(collection(db, 'contacts'), {
               name: leadDataRef.current.name,
               email: leadDataRef.current.contact, 
               message: leadDataRef.current.requirements,
               source: 'ai_chatbot',
               createdAt: serverTimestamp()
             }).catch(e => console.error("Firebase save failed:", e));
           }).catch(e => console.error("Firebase init failed:", e));
         }).catch(e => console.error("Firebase import failed:", e));

         // 3. Always Show WhatsApp Button
         setTimeout(() => {
           setMessages(prev => [...prev, { 
             text: "I've processed your request! ✅\n\nTo get an instant reply from our human team, please click below to send these details directly to our admin on WhatsApp:", 
             sender: 'bot',
             isAction: true,
             actionLink: waLink,
             actionText: "Send details via WhatsApp"
           }]);
           setIsTyping(false);
         }, 1500);
      }
    }, 1000);
  };

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-yellow z-50 origin-left"
        style={{ scaleX: scrollProgress }}
      />

      {/* ── Floating Buttons Container ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none">
        
        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-brand-yellow/50 hover:text-brand-yellow transition-all duration-300 shadow-lg pointer-events-auto"
              aria-label="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/918838887303"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white text-2xl shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all pointer-events-auto"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>

        {/* AI Chatbot Toggle */}
        <div className="relative pointer-events-auto">
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                className="absolute bottom-16 right-0 w-[340px] h-[450px] glass-card-premium p-4 flex flex-col shadow-2xl"
              >
                <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <FaRobot className="text-brand-yellow text-xl" />
                    <span className="font-display font-bold text-white">MAGDIO AI</span>
                  </div>
                  <button onClick={() => setIsChatOpen(false)} className="text-white/50 hover:text-white transition-colors">
                    <FaTimes />
                  </button>
                </div>

                <div 
                  className="flex-1 overflow-y-auto mb-4 flex flex-col gap-3 pr-2"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {messages.map((msg, idx) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={idx} 
                      className={`p-3 text-sm rounded-2xl max-w-[85%] whitespace-pre-wrap ${
                        msg.sender === 'user' 
                          ? 'bg-brand-yellow text-black self-end rounded-tr-sm font-medium' 
                          : 'bg-brand-blue/20 border border-brand-blue/30 text-white/80 self-start rounded-tl-sm'
                      }`}
                    >
                      {msg.text}
                      
                      {msg.isAction && (
                        <a 
                          href={msg.actionLink}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 block w-full text-center py-2 px-4 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors"
                        >
                          <FaWhatsapp className="inline-block mr-2 text-lg" />
                          {msg.actionText}
                        </a>
                      )}
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-brand-blue/20 border border-brand-blue/30 text-white/80 self-start rounded-2xl rounded-tl-sm p-3 max-w-[85%] flex items-center gap-1.5 h-[44px]"
                    >
                      <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="mt-auto relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-brand-yellow/50 transition-colors"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-brand-yellow text-black flex items-center justify-center text-sm font-bold hover:scale-105 transition-transform"
                  >
                    →
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsChatOpen(!isChatOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-brand-blue to-brand-purple flex items-center justify-center text-white text-xl shadow-glow-blue hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] transition-all z-50 relative"
            aria-label="Open AI Chat"
          >
            {isChatOpen ? <FaTimes /> : <FaRobot />}
          </motion.button>
        </div>

      </div>
    </>
  );
}
