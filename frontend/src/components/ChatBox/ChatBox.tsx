import "./ChatBox.css";

import MessageBubble from "../MessageBubble/MessageBubble";
import ChatInput from "../ChatInput/ChatInput";

export default function ChatBox() {
  return (
    <div className="chat-box">

      <MessageBubble
        sender="AI"
        message="Hello! I'm AIDOS. How can I help you today?"
      />

      <MessageBubble
        sender="User"
        message="Organize my Downloads folder."
      />

      <ChatInput />

    </div>
  );
}