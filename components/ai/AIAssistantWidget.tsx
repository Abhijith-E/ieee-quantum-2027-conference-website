"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  MoreHorizontal
} from 'lucide-react';

const SUGGESTIONS = [
  "When is the paper deadline?",
  "How do I reach the venue?",
  "Which sessions match my research?",
  "How do I request a visa letter?"
];

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/ai-chat',
  });

  const handleOpen = () => {
    setIsOpen(true);
    setHasOpened(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    append({
      role: 'user',
      content: suggestion
    });
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[calc(100vw-3rem)] max-w-sm sm:w-96 h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-200 flex flex-col overflow-hidden origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-navy p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center relative">
                  <Bot size={20} className="text-gold" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">AI Assistant</h3>
                  <p className="text-[10px] text-slate-300 flex items-center gap-1 font-medium">
                    <Sparkles size={10} className="text-gold" /> Powered by Claude
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <Minimize2 size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
              
              {/* Welcome Message */}
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-700 shadow-sm max-w-[85%]">
                    <p>Hello! I'm your official IEEE ICQST 2027 AI Assistant. I can help you with scheduling, venue details, submission deadlines, and more.</p>
                  </div>
                </motion.div>
              )}

              {/* Suggestions (Only show when empty) */}
              {messages.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col gap-2 mt-2"
                >
                  {SUGGESTIONS.map((suggestion, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs text-left bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl hover:border-gold hover:text-navy transition-colors shadow-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}

              {/* Messages */}
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div 
                    key={m.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                        <Bot size={16} />
                      </div>
                    )}
                    
                    <div className={`p-4 text-sm shadow-sm max-w-[85%] ${
                      m.role === 'user' 
                        ? 'bg-gold text-navy font-medium rounded-2xl rounded-tr-sm' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-tl-sm'
                    }`}>
                      {m.content}
                    </div>

                    {m.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                        <User size={16} />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center gap-1 w-16 justify-center">
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                    <motion.div className="w-1.5 h-1.5 bg-slate-400 rounded-full" animate={{ y: [0, -5, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-100 shrink-0">
              <div className="relative flex items-center">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask anything about ICQST 2027..."
                  className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-navy text-white rounded-xl hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-navy transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      {!isOpen && (
        <motion.button
          onClick={handleOpen}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-16 h-16 bg-navy text-gold rounded-full shadow-[0_10px_40px_rgba(15,23,42,0.3)] border-2 border-gold flex items-center justify-center relative group"
        >
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-full border border-gold opacity-50 group-hover:animate-ping"></div>
          
          <Sparkles size={28} className="relative z-10" />
          
          {/* Badge */}
          {!hasOpened && (
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center">
              1
            </span>
          )}
        </motion.button>
      )}

    </div>
  );
}
