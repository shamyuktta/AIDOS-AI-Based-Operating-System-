import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "./Topbar";

export default function MainLayout() {
  return (
    <div
      style={{
        display: "flex",
        background: "#0f1117",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "280px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Topbar />

        <main
          style={{
            padding: "35px",
            color: "white",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}