import "./MemoryCard.css";

type MemoryCardProps = {
  icon: string;
  title: string;
  value: string;
};

export default function MemoryCard({
  icon,
  title,
  value,
}: MemoryCardProps) {
  return (
    <div className="memory-card">
      <div className="memory-left">
        <span className="memory-icon">{icon}</span>

        <h3>{title}</h3>
      </div>

      <span className="memory-value">{value}</span>
    </div>
  );
}