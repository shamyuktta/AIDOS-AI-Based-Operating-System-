import "./SettingItem.css";

interface Props {
  title: string;
  value: string;
}

export default function SettingItem({ title, value }: Props) {
  return (
    <div className="setting-item">
      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>

      <button>Edit</button>
    </div>
  );
}