import "./ChatInput.css";
import { Paperclip, Send } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: ChatInputProps) {
  return (
    <div className="chat-input-container">
      <button className="icon-button" type="button">
        <Paperclip size={20} />
      </button>

      <input
        type="text"
        placeholder="Type your command..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSend();
          }
        }}
      />

      <button
        className="send-button"
        type="button"
        onClick={onSend}
      >
        <Send size={18} />
      </button>
    </div>
  );
}