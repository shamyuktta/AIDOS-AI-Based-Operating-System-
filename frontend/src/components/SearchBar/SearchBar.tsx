import "./SearchBar.css";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <Search size={20} />

      <input
        type="text"
        placeholder="Search files..."
      />
    </div>
  );
}