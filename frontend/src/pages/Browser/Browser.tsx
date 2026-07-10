import Header from "../../components/Header/Header";
import BrowserCard from "../../components/BrowserCard/BrowserCard";

export default function Browser() {
  return (
    <>
      <Header title="Browser Automation" />

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        <BrowserCard
          icon="🌐"
          title="Open Website"
          description="Launch any website using AI."
        />

        <BrowserCard
          icon="🔍"
          title="Search Google"
          description="Search anything instantly."
        />

        <BrowserCard
          icon="📸"
          title="Take Screenshot"
          description="Capture browser screenshots."
        />

        <BrowserCard
          icon="⬇"
          title="Download Manager"
          description="Manage browser downloads."
        />

        <BrowserCard
          icon="🕒"
          title="Browser History"
          description="View recent browsing activity."
        />
      </div>
    </>
  );
}