import { useTrips } from "../../features/trip/api/useTrip";
import { useState } from "react";
import type { Trip } from "../../api/types/type";
import { CardsGridContent } from "../../features/trip/CardsGridContent/CardsGridContent";
import { Modal } from "../Modal/Modal";
import { CardModalContent } from "../../features/trip/CardModalContent/CardModalContent";
import useDebounce from "../../hooks/useDebounce";
import { useFilteredTrips } from "../../hooks/useFiltered";
import { useSortedTrips } from "../../hooks/useSorted";
import { FilterInput } from "../FilterInput/FilterInput";
import { SortToggle } from "../SortToggle/SortToggle";
import "./CardList.scss";

export function CardsList() {
  const { data: trips = [], isLoading, isError } = useTrips();
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [searchCard, setSearchCard] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const debouncedSearch = useDebounce(searchCard, 500);
  const filteredTrips = useFilteredTrips({
    trips,
    searchQuery: debouncedSearch,
  });

  const sortedTrips = useSortedTrips({
    trips: filteredTrips,
    sortDirection,
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">Loading trips...</div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="error-container">
        <div className="error-icon">💥</div>
        <div>Error loading trips</div>
      </div>
    );
  }

  return (
    <>
      <div className="sort-filter-container">
        <FilterInput onFilterChange={setSearchCard} searchCard={searchCard} />
        <SortToggle
          onSortChange={setSortDirection}
          sortDirection={sortDirection}
        />
      </div>
      <CardsGridContent trips={sortedTrips} onTripSelect={setSelectedTrip} />
      {selectedTrip && (
        <Modal isOpen={true} onClose={() => setSelectedTrip(null)}>
          <CardModalContent trip={selectedTrip} />
        </Modal>
      )}
    </>
  );
}
