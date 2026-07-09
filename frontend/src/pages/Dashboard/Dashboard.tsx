import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

export default function Dashboard() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "35px",
        }}
      >
        <Header title="Dashboard" />

        <Button
          text="Run AI Scan"
          onClick={() => alert("AI Scan Started")}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        <Card title="Tasks Completed" value="24" />

        <Card title="Files Organized" value="128" />

        <Card title="Commands Executed" value="589" />

        <Card title="AI Status" value="Ready" />
      </div>
    </>
  );
}