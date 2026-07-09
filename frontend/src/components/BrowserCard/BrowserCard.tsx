import "./BrowserCard.css";

type BrowserCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function BrowserCard({
  icon,
  title,
  description,
}: BrowserCardProps) {
  return (
    <div className="browser-card">
      <div className="browser-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}