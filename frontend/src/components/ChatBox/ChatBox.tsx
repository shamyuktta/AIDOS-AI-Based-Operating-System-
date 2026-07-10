import "./ChatBox.css";

import { useState } from "react";

import api from "../../services/api";

import MessageBubble from "../MessageBubble/MessageBubble";
import ChatInput from "../ChatInput/ChatInput";

type Message = {
  sender: "AI" | "User";
  message: string;
};

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "AI",
      message: "Hello! I'm AIDOS. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "User" as const,
      message: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await api.post("/chat", {
        message: input,
      });

      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          message: response.data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          message: "Backend is not running.",
        },
      ]);
    }

    setInput("");
  };

  return (
    <div className="chat-box">
      <div>
        {messages.map((msg, index) => (
          <MessageBubble
            key={index}
            sender={msg.sender}
            message={msg.message}
          />
        ))}
      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={sendMessage}
      />
    </div>
  );
}