import "./SortToggle.scss";

type SortDirection = "asc" | "desc";

interface SortToggleProps {
  onSortChange: (direction: SortDirection) => void;
  sortDirection: SortDirection;
}

export function SortToggle({ onSortChange, sortDirection }: SortToggleProps) {
  const toggleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    onSortChange(newDirection);
  };

  return (
    <>
      <div className="sort-content">
        <button className={`sort-toggle ${sortDirection}`} onClick={toggleSort}>
          {sortDirection === "asc" && "Ascending  ▲"}
          {sortDirection === "desc" && "Descending ▼"}
        </button>
      </div>
    </>
  );
}
