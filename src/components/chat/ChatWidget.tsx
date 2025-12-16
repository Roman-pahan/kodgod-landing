import React, { useState, useEffect, useRef } from "react";

type Sender = "user" | "system";

interface ChatMessage {
  id: number;
  text: string;
  time: string;
  from: Sender;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Менеджер подключится с минуты на минуту.",
      time: "08:48",
      from: "system",
    },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setIsOpen((v) => !v);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const now = new Date();
    const time = now.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        time,
        from: "user",
      },
    ]);
    setInput("");
    setShowSuccess(true);

    // убираем зелёную плашку через 3 секунды
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // автоскролл вниз при новых сообщениях
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button className="chat-toggle-btn" onClick={toggleOpen}>
        Чат со специалистом
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Чат со специалистом</span>
            <button
              className="chat-close-btn"
              onClick={toggleOpen}
              aria-label="Закрыть чат"
            >
              ×
            </button>
          </div>

          <div className="chat-date-pill">сегодня</div>

          <div className="chat-body" ref={bodyRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.from === "user"
                    ? "chat-row chat-row-user"
                    : "chat-row chat-row-system"
                }
              >
                {msg.from === "system" ? (
                  <div className="chat-system-text">{msg.text}</div>
                ) : (
                  <div className="chat-bubble chat-bubble-user">
                    <div className="chat-bubble-text">{msg.text}</div>
                    <div className="chat-bubble-time">{msg.time}</div>
                  </div>
                )}
              </div>
            ))}

            {showSuccess && (
              <div className="chat-success-overlay">
                <div className="chat-success-card">
                  <div className="chat-success-icon">✔</div>
                  <div className="chat-success-main">
                    Спасибо, ваше сообщение отправлено.
                  </div>
                </div>
              </div>
            )}
          </div>

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Введите сообщение..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </>
  );
};
