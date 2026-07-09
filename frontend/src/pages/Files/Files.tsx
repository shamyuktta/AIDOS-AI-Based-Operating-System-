import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import FileCard from "../../components/FileCard/FileCard";

export default function Files() {
  return (
    <>
      <Header title="Files" />

      <SearchBar />

      <h2 style={{ color: "white" }}>Downloads</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <FileCard fileName="Resume.pdf" />
        <FileCard fileName="photo.jpg" />
        <FileCard fileName="Project.zip" />
      </div>

      <h2 style={{ color: "white" }}>Desktop</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <FileCard fileName="Presentation.pptx" />
        <FileCard fileName="Notes.docx" />
      </div>

      <h2 style={{ color: "white" }}>Documents</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginBottom: "35px",
        }}
      >
        <FileCard fileName="Assignment.pdf" />
        <FileCard fileName="Certificates.docx" />
      </div>

      <h2 style={{ color: "white" }}>Pictures</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <FileCard fileName="Wallpaper.png" />
        <FileCard fileName="Profile.jpg" />
      </div>
    </>
  );
}