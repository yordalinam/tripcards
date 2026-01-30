import { FilterInput } from "../../../components/FilterInput/FilterInput";
import { SortToggle } from "../../../components/SortToggle/SortToggle";
import "./CardsGridFilter.scss";

interface CardsGridFiltersProps {
  onSearchChange: (term: string) => void;
  onSortChange: (direction: "asc" | "desc") => void;
}

export const CardsGridFilters = ({
  onSearchChange,
  onSortChange,
}: CardsGridFiltersProps) => (
  <div className="cards-grid-filters">
    <FilterInput onFilterChange={onSearchChange} />
    <SortToggle onSortChange={onSortChange} />
  </div>
);
