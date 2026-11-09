"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader2, GraduationCap } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I’m your Bells University admissions assistant. Ask me anything about programmes, admissions, campus life, or departments.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    const currentMessages = [...messages, userMessage];
    setMessages(currentMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: currentMessages.slice(-10).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "The chat service is temporarily unavailable right now. Please try again in a moment.",
          },
        ]);
        setIsLoading(false);
        return;
      }

      const data = (await response.json().catch(() => null)) as
        | { reply?: string }
        | null;
      const reply = data?.reply?.trim();
      if (!reply) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "The chat service is temporarily unavailable right now. Please try again in a moment.",
          },
        ]);
        setIsLoading(false);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The chat service is temporarily unavailable right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickPrompts = ["How to apply?", "Programs offered?", "Placement stats?", "Scholarship info?"];

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: "spring", damping: 22, stiffness: 320 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[80] w-[360px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 24px 60px rgba(13,33,59,0.18), 0 4px 16px rgba(0,0,0,0.1)",
              height: "500px",
              border: "1px solid rgba(13,33,59,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #0d213b 0%, #163c54 100%)" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm">Bells Assistant</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white/50 text-[11px]">Online · Instant replies</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#f8f9fb]">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === "user" ? "bg-brand-primary" : "bg-brand-secondary"
                      }`}
                  >
                    {msg.role === "user" ? (
                      <User className="w-3 h-3 text-white" />
                    ) : (
                      <Bot className="w-3 h-3 text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                      ? "bg-brand-primary text-white rounded-2xl rounded-tr-sm"
                      : "bg-white text-gray-700 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100"
                      }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-2 flex-row">
                  <div className="w-6 h-6 rounded-full bg-brand-secondary flex items-center justify-center">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                    <div className="flex gap-1 items-center h-3">
                      {[0, 150, 300].map((delay) => (
                        <span key={delay} className="w-1.5 h-1.5 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick prompts — shown only initially */}
            {messages.length === 1 && (
              <div className="px-3 pb-2 pt-1 bg-[#f8f9fb] border-t border-gray-100 flex gap-1.5 flex-wrap flex-shrink-0">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => { setInput(p); setTimeout(() => inputRef.current?.focus(), 50); }}
                    className="px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <div className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 items-center flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about admissions, programs…"
                className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center disabled:opacity-30 hover:bg-brand-primary-dark transition-colors"
              >
                {isLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating trigger button */}
      <motion.button
        onClick={() => setIsOpen((p) => !p)}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-4 sm:right-6 z-[80] w-13 h-13 w-[52px] h-[52px] rounded-full flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(135deg, #c0392b 0%, #962d22 100%)",
          boxShadow: "0 6px 20px rgba(192,57,43,0.4), 0 2px 8px rgba(0,0,0,0.12)",
        }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "close" : "open"}
            initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18 }}
          >
            {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
          </motion.div>
        </AnimatePresence>
        {!isOpen && <span className="absolute inset-0 rounded-full animate-ping bg-brand-primary/25" />}
      </motion.button>
    </>
  );
}
