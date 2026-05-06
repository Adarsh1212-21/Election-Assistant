import React, { useState, useRef, useEffect } from "react";
import { sendChat } from "../services/api";
import { findLocalResponse, quickQuestions } from "../data/chatData";

const BOT_NAME = "Voti";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: "bot",
      text: `Hi! I'm ${BOT_NAME}, your Election Assistant. Ask me anything about voting, registration, or the election process!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const q = text || input.trim();
    if (!q) return;
    setInput("");

    const userMsg = { id: Date.now(), from: "user", text: q };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    let reply;
    try {
      const res = await sendChat(q);
      reply = res.data.botReply;
    } catch {
      reply = findLocalResponse(q);
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, from: "bot", text: reply },
      ]);
      setLoading(false);
    }, 500);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="animate-slide-up min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-6">
      {/* Header banner */}
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 p-6 shadow-glow-violet">
        <h2 className="font-display text-2xl font-bold text-white tracking-tight">
          🗳️ Ask {BOT_NAME}
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          Your AI election guide — ask anything about voting
        </p>
      </div>

      {/* Chat container */}
      <div className="bg-white border border-violet-100 rounded-2xl overflow-hidden flex flex-col h-[480px] shadow-card">

        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-violet-100 bg-gradient-to-r from-blue-50 to-violet-50">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-base shadow-glow-blue flex-shrink-0">
            🗳️
          </div>
          <div>
            <p className="font-display font-semibold text-sm text-ink">{BOT_NAME}</p>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-xs text-indigo-400">Online</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide bg-gradient-to-b from-white to-blue-50/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex animate-pop ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.from === "bot" && (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-0.5 shadow-glow-blue">
                  🗳️
                </div>
              )}
              <div
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed
                  ${
                    msg.from === "user"
                      ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-br-sm shadow-glow-blue"
                      : "bg-white border border-violet-100 text-ink rounded-bl-sm shadow-card"
                  }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-sm flex-shrink-0">
                🗳️
              </div>
              <div className="bg-white border border-violet-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 shadow-card">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick questions */}
        <div className="px-4 pt-2 pb-2 flex gap-2 overflow-x-auto scrollbar-hide border-t border-violet-100 bg-gradient-to-r from-blue-50/50 to-violet-50/50">
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="
                flex-shrink-0 text-xs px-3 py-1.5 rounded-full font-medium
                bg-white border border-violet-200 text-indigo-500
                hover:border-violet-400 hover:text-violet-700
                hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50
                shadow-sm transition-all
              "
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-violet-100 flex gap-2 bg-white">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about voting, documents, booths..."
            className="
              flex-1 bg-blue-50/50 border border-violet-200 rounded-xl px-4 py-2.5
              text-sm text-ink placeholder-indigo-300
              focus:outline-none focus:ring-2 focus:ring-violet-400/40 focus:border-violet-400
              transition
            "
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            className="
              w-10 h-10 rounded-xl flex items-center justify-center
              bg-gradient-to-br from-blue-500 to-violet-600
              text-white shadow-glow-blue
              hover:from-blue-600 hover:to-violet-700
              transition-all duration-200
              disabled:opacity-30 disabled:cursor-not-allowed
            "
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}