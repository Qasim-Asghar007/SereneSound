import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import GradientText from "./GradientText";

const FN_URL = "/.netlify/functions/gemini";

const PRE_PROMPT = `
You are SereneAI, a calming, supportive assistant.
Keep answers concise, kind, and actionable.
If the user asks about Pakistan laws/rights, cite sections when possible.
ALWAYS return ONLY raw HTML with these rules:
1. Use ONLY <h2>, <p>, <ul>, and <li> tags
2. NEVER use markdown, code blocks, or backticks
3. NEVER include <html>, <head>, or <body> tags
4. NEVER wrap responses in triple backticks (\`\`\`)
5. Return ONLY the content that should be rendered directly
6. If you violate these rules, the user will see broken formatting
`.trim();

const Chatbot = () => {
  const prePrompts = [
    "How can I practice mindfulness to reduce stress?",
    "What are some common signs of burnout?",
    "Can you suggest a simple breathing exercise for anxiety?",
  ];

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);

  const messagesEndRef = useRef(null);
  const chatAreaRef = useRef(null);

  const cleanGeminiResponse = (response) => {
    let cleaned = response.trim();

    if (cleaned.startsWith("```")) {
      const langMatch = cleaned.match(/^```(\w*)\n/);
      if (langMatch) {
        cleaned = cleaned.substring(langMatch[0].length);
      } else {
        cleaned = cleaned.substring(3);
      }
      if (cleaned.endsWith("```")) {
        cleaned = cleaned.slice(0, -3);
      }
      cleaned = cleaned.trim();
    }

    cleaned = cleaned
      .replace(/^html\n/i, "")
      .replace(/\\n/g, "\n")
      .trim();

    return cleaned;
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const sendMessage = async (e) => {
    if (e.type === "submit" || (e.key === "Enter" && !e.shiftKey)) {
      e.preventDefault();

      if (!input.trim() || loading) return;
      const text = input.trim();
      setInput("");
      await askGemini(text);
    }
  };

  const askGemini = async (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);
    setShowPrompts(false);

    try {
      const fullPrompt = `${PRE_PROMPT}\n\nUser Query: ${text}`;

      const res = await fetch(FN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: fullPrompt }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const errText =
          data?.error?.message ||
          data?.error?.raw ||
          JSON.stringify(data?.error || data) ||
          `HTTP ${res.status}`;
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: `❌ ${errText}` },
        ]);
        return;
      }

      let reply =
        data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
        "...";

      const cleanReply = cleanGeminiResponse(reply);

      setMessages((prev) => [...prev, { role: "bot", text: cleanReply }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `❌ ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fluid-container Chatbot-section">
      <div className="chatbot-container">
        <div className="chatbot-header">
          <GradientText
            colors={["#6a5acd", "#9370db", "#ba55d3", "#40c4ff", "#6a5acd"]}
            animationSpeed={5}
            className="fs-2 chatbot-title"
          >
            Serene AI
          </GradientText>
          <br />
          <p className="chatbot-description fw-bolder text-center">
            Your Personal AI Therapist
          </p>
        </div>

        <div className="chat-area" ref={chatAreaRef}>
          <div className="messages">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`message ${m.role}`}
                dangerouslySetInnerHTML={{ __html: m.text }}
              />
            ))}
            {loading && (
              <div className="typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {}
            <div ref={messagesEndRef} />
          </div>

          {showPrompts && (
            <div className="pre-prompts">
              <span
                className="prompt-pill"
                onClick={() => setInput(prePrompts[0])}
              >
                {prePrompts[0]}
              </span>
              <div className="middle-row">
                <span
                  className="prompt-pill"
                  onClick={() => setInput(prePrompts[1])}
                >
                  {prePrompts[1]}
                </span>
                <span
                  className="prompt-pill"
                  onClick={() => setInput(prePrompts[2])}
                >
                  {prePrompts[2]}
                </span>
              </div>
            </div>
          )}

          <div className="text-area">
            <form className="text-area-bottom" onSubmit={sendMessage}>
              <textarea
                className="chat-input"
                placeholder="Hi! How can I help you..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={sendMessage}
                disabled={loading}
                rows="3"
                aria-label="Chat input"
              />
              <button type="submit" className="send-btn" disabled={loading}>
                ➤
              </button>
            </form>
          </div>
        </div>
      </div>

      {}
      <div className="custom-shape-divider-bottom-1755525492">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </section>
  );
};

export default Chatbot;