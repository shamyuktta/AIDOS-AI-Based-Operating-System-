import "./FileCard.css";
import { FileText } from "lucide-react";

type Props = {
  fileName: string;
};

export default function FileCard({ fileName }: Props) {
  return (
    <div className="file-card">
      <FileText size={22} />
      <span>{fileName}</span>
    </div>
  );
}