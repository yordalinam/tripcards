import "./FilterInput.scss";

interface FilterInputProps {
  onFilterChange: (searchCard: string) => void;
  searchCard: string;
}

export function FilterInput({ onFilterChange, searchCard }: FilterInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange(e.target.value);
  };

  const handleClear = () => {
    onFilterChange("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Search trips..."
        value={searchCard}
        onChange={handleChange}
      />
      {searchCard && (
        <button className="clear-btn" onClick={handleClear}>
          ×
        </button>
      )}
    </div>
  );
}
