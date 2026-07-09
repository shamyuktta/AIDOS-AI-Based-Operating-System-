import Header from "../../components/Header/Header";
import HistoryItem from "../../components/HistoryItem/HistoryItem";

export default function History() {
  return (
    <>
      <Header
        title="History"
        subtitle="Recent AI activities"
      />

      <HistoryItem
        time="Today - 9:30 PM"
        action="Opened VS Code"
      />

      <HistoryItem
        time="Today - 8:45 PM"
        action="Organized Downloads"
      />

      <HistoryItem
        time="Yesterday"
        action="Opened Chrome"
      />

      <HistoryItem
        time="Monday"
        action="Generated Project Files"
      />
    </>
  );
}