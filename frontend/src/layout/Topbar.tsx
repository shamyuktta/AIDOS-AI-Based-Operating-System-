import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header
      style={{
        height: "70px",
        background: "#111827",
        borderBottom: "1px solid #1f2937",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
      }}
    >
      <h2
        style={{
          color: "white",
          margin: 0,
        }}
      >
        AI Desktop OS
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Search color="white" />
        <Bell color="white" />
        <UserCircle2 color="white" size={32} />
      </div>
    </header>
  );
}