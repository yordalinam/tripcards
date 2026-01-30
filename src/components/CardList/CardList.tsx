import { useTrips } from "../../features/trip/hooks/useTrip";
import { useState } from "react";
import type { Trip } from "../../api/types/type";
import { CardsGridContent } from "../../features/CardsGridContent/CardsGridContent";
import { Modal } from "../Modal/Modal";
import { CardModalContent } from "../../features/CardModalContent/CardModalContent";

export function CardList() {
  const { data: trips = [], isLoading, isError } = useTrips();
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);

  if (isLoading) {
    return <div>Loading trips...</div>;
  }
  if (isError) {
    return (
      <div>
        <div>Error loading trips</div>
      </div>
    );
  }

  return (
    <>
      <CardsGridContent
        trips={trips}
        onTripSelect={(trip) => setSelectedTrip(trip)}
      />
      {selectedTrip && (
        <Modal isOpen={true} onClose={() => setSelectedTrip(null)}>
          <CardModalContent trip={selectedTrip} />
        </Modal>
      )}
    </>
  );
}
