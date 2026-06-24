"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChat } from 'ai/react';
import { 
  Sparkles, 
  Send, 
  Bot, 
  User, 
  FileText,
  Calendar,
  Plane,
  CreditCard,
  FileQuestion,
  MessageSquare
} from 'lucide-react';

const TOPICS = [
  { id: "submissions", name: "Submissions", icon: FileText, suggestions: ["What is the page limit for papers?", "Is the review process double-blind?", "How do I format references?"] },
  { id: "program", name: "Program", icon: Calendar, suggestions: ["Which sessions match my research?", "Who are the keynote speakers?", "When does the conference start?"] },
  { id: "travel", name: "Travel & Venue", icon: Plane, suggestions: ["How do I reach the venue?", "Are there discounted hotels?", "Is there parking available?"] },
  { id: "registration", name: "Registration", icon: CreditCard, suggestions: ["What are the ticket prices?", "Do students get a discount?", "Can I get a refund?"] },
  { id: "visa", name: "Visa Process", icon: FileQuestion, suggestions: ["How do I request a visa letter?", "How long does a visa take?", "Do I need a transit visa?"] },
  { id: "general", name: "General FAQ", icon: MessageSquare, suggestions: ["What is the dress code?", "Will sessions be recorded?", "Is there dietary accommodation?"] },
];

export default function AIAssistantFullPage() {
  const [activeTopic, setActiveTopic] = useState(TOPICS[0].id);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/ai-chat',
  });

  const handleSuggestionClick = (suggestion: string) => {
    append({
      role: 'user',
      content: suggestion
    });
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const activeTopicData = TOPICS.find(t => t.id === activeTopic);

  return (
    <div className="flex h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)] w-full max-w-7xl mx-auto bg-white md:border-x border-slate-200 overflow-hidden">
      
      {/* Left Sidebar (Topics) */}
      <div className="hidden md:flex flex-col w-72 border-r border-slate-200 bg-slate-50">
        <div className="p-6 border-b border-slate-200 bg-white">
          <h2 className="text-xl font-extrabold text-navy flex items-center gap-2">
            <Bot className="text-gold" /> AI Assistant
          </h2>
          <p className="text-xs text-slate-500 mt-2 font-medium flex items-center gap-1">
            <Sparkles size={12} className="text-gold" /> Powered by Claude Sonnet
          </p>
        </div>
        
        <div className="p-4">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">Suggested Topics</h3>
          <div className="space-y-1">
            {TOPICS.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  activeTopic === topic.id 
                    ? 'bg-gold/10 text-gold-dark border border-gold/20' 
                    : 'text-slate-600 hover:bg-white hover:text-navy hover:shadow-sm border border-transparent'
                }`}
              >
                <topic.icon size={18} className={activeTopic === topic.id ? 'text-gold' : 'text-slate-400'} />
                {topic.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white h-full relative">
        
        {/* Mobile Header */}
        <div className="md:hidden p-4 border-b border-slate-200 bg-navy text-white flex items-center gap-3 shrink-0">
          <Bot className="text-gold" />
          <div>
            <h2 className="font-bold">AI Assistant</h2>
            <p className="text-[10px] text-slate-300 font-medium">Powered by Claude</p>
          </div>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col gap-6">
          
          {/* Welcome Message */}
          {messages.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                <Bot size={20} />
              </div>
              <div className="flex flex-col gap-4 max-w-2xl">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl rounded-tl-sm p-6 text-slate-700">
                  <p className="font-medium">Welcome to the IEEE ICQST 2027 AI Assistant!</p>
                  <p className="text-sm mt-2">I have access to the full conference schedule, venue information, submission guidelines, and author policies. How can I help you today?</p>
                </div>

                {/* Topic Suggestions View */}
                <div className="mt-4">
                  <h4 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-2">
                    {activeTopicData && <activeTopicData.icon size={16} />}
                    {activeTopicData?.name} Questions
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeTopicData?.suggestions.map((suggestion, i) => (
                      <button
                        key={i}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-sm text-left bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-full hover:border-gold hover:bg-gold/5 hover:text-navy transition-all shadow-sm"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Messages */}
          <AnimatePresence initial={false}>
            {messages.map((m) => (
              <motion.div 
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                    <Bot size={20} />
                  </div>
                )}
                
                <div className={`p-5 text-sm shadow-sm md:text-base max-w-[85%] md:max-w-2xl leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-gold text-navy font-medium rounded-3xl rounded-tr-sm' 
                    : 'bg-slate-50 border border-slate-200 text-slate-700 rounded-3xl rounded-tl-sm'
                }`}>
                  {m.content}
                </div>

                {m.role === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 border border-slate-300">
                    <User size={20} />
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
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0">
                <Bot size={20} />
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-3xl rounded-tl-sm p-5 shadow-sm flex items-center gap-1.5 w-20 justify-center">
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} />
                <motion.div className="w-2 h-2 bg-slate-400 rounded-full" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} />
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 md:p-6 bg-white border-t border-slate-200 shrink-0">
          <form onSubmit={handleSubmit} className="relative flex items-center max-w-4xl mx-auto">
            <input
              value={input}
              onChange={handleInputChange}
              placeholder="Ask the assistant anything..."
              className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-full text-base focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/20 transition-all shadow-inner"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 w-10 h-10 flex items-center justify-center bg-navy text-white rounded-full hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-navy transition-colors shadow-md"
            >
              <Send size={18} className="ml-0.5" />
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[10px] text-slate-400">AI can make mistakes. Verify important dates on the official website.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
