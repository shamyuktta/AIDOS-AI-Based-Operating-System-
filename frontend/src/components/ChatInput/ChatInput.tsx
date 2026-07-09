import "./ChatInput.css";
import { Paperclip, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="chat-input-container">
      <button className="icon-button">
        <Paperclip size={20} />
      </button>

      <input
        type="text"
        placeholder="Type your command..."
      />

      <button className="send-button">
        <Send size={18} />
      </button>
    </div>
  );
}