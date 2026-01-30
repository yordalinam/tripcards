import { useState } from "react";
import "./FilterInput.scss";

interface FilterInputProps {
  onFilterChange: (searchTerm: string) => void;
}

export function FilterInput({ onFilterChange }: FilterInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterChange(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    onFilterChange("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search trips..."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && <button onClick={handleClear}>Clear</button>}
    </div>
  );
}
