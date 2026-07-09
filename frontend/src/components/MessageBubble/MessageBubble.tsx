import "./MessageBubble.css";

type MessageBubbleProps = {
  sender: "AI" | "User";
  message: string;
};

export default function MessageBubble({
  sender,
  message,
}: MessageBubbleProps) {
  const isAI = sender === "AI";

  return (
    <div className={`message-container ${isAI ? "left" : "right"}`}>
      <div className={`message-bubble ${isAI ? "ai" : "user"}`}>
        <strong>{sender}</strong>

        <p>{message}</p>
      </div>
    </div>
  );
}