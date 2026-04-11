"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_REPLIES = [
  "Báo giá thiết kế nội thất?",
  "Khảo sát miễn phí không?",
  "Bao lâu hoàn thành?",
  "Thanh toán như thế nào?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Chào bạn! 👋 Em là trợ lý AI của MKG & FADI. Em có thể tư vấn về thiết kế và thi công nội thất hoặc đặt lịch khảo sát miễn phí. Bạn cần hỗ trợ gì ạ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [shown, setShown] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show widget hint after 5s
    const t = setTimeout(() => setShown(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text?: string) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Em xin lỗi, có lỗi xảy ra. Vui lòng gọi 0817 424 242 để được hỗ trợ ngay nhé!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hint bubble */}
      {shown && !open && (
        <div
          className="fixed bottom-24 right-6 z-[9998] px-4 py-2 text-xs font-semibold text-black rounded-full cursor-pointer animate-bounce"
          style={{ background: "#c8a45c", boxShadow: "0 4px 20px rgba(200,164,92,0.5)" }}
          onClick={() => setOpen(true)}
        >
          💬 Cần tư vấn nội thất?
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => { setOpen(!open); setShown(false); }}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all"
        style={{
          background: open ? "#333" : "linear-gradient(135deg, #c8a45c, #a88a3e)",
          boxShadow: "0 8px 32px rgba(200,164,92,0.4)",
          border: "2px solid rgba(200,164,92,0.3)",
        }}
        aria-label="Mở chat hỗ trợ"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[9998] flex flex-col rounded-2xl overflow-hidden"
          style={{
            width: "min(380px, calc(100vw - 24px))",
            height: "520px",
            background: "#0f0f0f",
            border: "1px solid rgba(200,164,92,0.25)",
            boxShadow: "0 25px 80px rgba(0,0,0,0.8)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #c8a45c, #a88a3e)" }}
          >
            <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-lg">🏠</div>
            <div>
              <div className="text-black text-sm font-bold">MKG & FADI Tư Vấn AI</div>
              <div className="text-black/60 text-xs">● Online — Phản hồi ngay lập tức</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed"
                  style={
                    m.role === "user"
                      ? { background: "#c8a45c", color: "#000", borderBottomRightRadius: "4px" }
                      : { background: "#1a1a1a", color: "#e0e0e0", border: "1px solid rgba(255,255,255,0.06)", borderBottomLeftRadius: "4px" }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-4 py-2 rounded-2xl text-sm" style={{ background: "#1a1a1a", borderBottomLeftRadius: "4px" }}>
                  <span className="flex gap-1 items-center text-white/40">
                    <span className="animate-bounce delay-0">●</span>
                    <span className="animate-bounce delay-150">●</span>
                    <span className="animate-bounce delay-300">●</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          {messages.length < 3 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-xs px-3 py-1 rounded-full transition-all"
                  style={{ background: "rgba(200,164,92,0.12)", color: "#c8a45c", border: "1px solid rgba(200,164,92,0.25)" }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="flex items-center gap-2 p-3 flex-shrink-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Nhập câu hỏi..."
              className="flex-1 px-3 py-2 rounded-lg text-sm text-white outline-none"
              style={{ background: "#1a1a1a", border: "1px solid rgba(200,164,92,0.2)" }}
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-black font-bold disabled:opacity-40 transition-opacity"
              style={{ background: "#c8a45c" }}
            >
              ➤
            </button>
          </div>

          {/* Footer */}
          <div className="text-center py-2 text-[10px] text-white/20 flex-shrink-0">
            AI có thể mắc lỗi — Hotline chính xác: <a href="tel:+84817424242" className="text-[#c8a45c]">0817 424 242</a>
          </div>
        </div>
      )}
    </>
  );
}
