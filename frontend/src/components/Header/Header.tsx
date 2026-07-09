import "./Header.css";

type Props = {
  title: string;
  subtitle?: string;
};

export default function Header({
  title,
  subtitle,
}: Props) {
  return (
    <div className="header">
      <h1>{title}</h1>

      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}