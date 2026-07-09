import Header from "../../components/Header/Header";
import MemoryCard from "../../components/MemoryCard/MemoryCard";

export default function Memory() {
  return (
    <>
      <Header
        title="Memory"
        subtitle="AI remembers your preferences"
      />

      <MemoryCard
        icon="🌐"
        title="Preferred Browser"
        value="Chrome"
      />

      <MemoryCard
        icon="🎨"
        title="Theme"
        value="Dark"
      />

      <MemoryCard
        icon="📁"
        title="Downloads Folder"
        value="C:\\Users\\Samyuktha\\Downloads"
      />

      <MemoryCard
        icon="🧠"
        title="AI Memory"
        value="Enabled"
      />

      <MemoryCard
        icon="💾"
        title="Storage Used"
        value="125 MB"
      />
    </>
  );
}