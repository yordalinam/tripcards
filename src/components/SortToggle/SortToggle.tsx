import { useState } from "react";
import "./SortToggle.scss";

type SortDirection = "asc" | "desc";

interface SortToggleProps {
  onSortChange: (direction: SortDirection) => void;
}

export function SortToggle({ onSortChange }: SortToggleProps) {
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const toggleSort = () => {
    const newDirection = direction === "asc" ? "desc" : "asc";
    setDirection(newDirection);
    onSortChange(newDirection);
  };

  return (
    <>
      <span>Sort ratings by: </span>
      <button className={`sort-toggle ${direction}`} onClick={toggleSort}>
        {direction === "asc" && "Ascending ↥"}
        {direction === "desc" && "Descending ↧"}
      </button>
    </>
  );
}
