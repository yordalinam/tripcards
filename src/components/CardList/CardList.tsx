import { useTrips } from "../../features/trip/api/useTrip";
import { useState } from "react";
import type { Trip } from "../../api/types/type";
import { CardsGridContent } from "../../features/trip/CardsGridContent/CardsGridContent";
import { Modal } from "../Modal/Modal";
import { CardModalContent } from "../../features/trip/CardModalContent/CardModalContent";
import useDebounce from "../../hooks/useDebounce";
import { useFilteredTrips } from "../../hooks/useFiltered";
import { CardsGridFilters } from "../../features/trip/CardsGridFilter/CardsGridFilter";

export function CardsList() {
  const { data: trips = [], isLoading, isError } = useTrips();
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [searchCard, setSearchCard] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null,
  );

  const debouncedSearch = useDebounce(searchCard, 500);
  const filteredTrips = useFilteredTrips({
    trips,
    searchQuery: debouncedSearch,
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
        <div className="error-icon">⚠️</div>
        <div className="error-message">Error loading trips</div>
      </div>
    );
  }

  return (
    <>
      <CardsGridFilters
        onSearchChange={setSearchCard}
        onSortChange={setSortDirection}
      />
      <CardsGridContent trips={filteredTrips} onTripSelect={setSelectedTrip} />
      {selectedTrip && (
        <Modal isOpen={true} onClose={() => setSelectedTrip(null)}>
          <CardModalContent trip={selectedTrip} />
        </Modal>
      )}
    </>
  );
}
