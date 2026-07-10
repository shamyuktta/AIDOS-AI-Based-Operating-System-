import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./pages/Dashboard/Dashboard";
import Chat from "./pages/Chat/Chat";
import Files from "./pages/Files/Files";
import Browser from "./pages/Browser/Browser";
import Memory from "./pages/Memory/Memory";
import History from "./pages/History/History";
import Settings from "./pages/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          minHeight: "100vh",
          padding: "35px",
          background: "#0F172A",
          color: "white",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/chat" element={<Chat />} />

          <Route path="/files" element={<Files />} />

          <Route path="/browser" element={<Browser />} />

          <Route path="/memory" element={<Memory />} />

          <Route path="/history" element={<History />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;