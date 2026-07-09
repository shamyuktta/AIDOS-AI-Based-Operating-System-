import "./HistoryItem.css";

type Props = {
  time: string;
  action: string;
};

export default function HistoryItem({ time, action }: Props) {
  return (
    <div className="history-item">
      <div className="history-dot"></div>

      <div className="history-content">
        <h3>{action}</h3>
        <p>{time}</p>
      </div>
    </div>
  );
}