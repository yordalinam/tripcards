import type { Trip } from "../../../api/types/type";
import { Card } from "../../../components/Card/Card";

interface CardsGridContentProps {
  trips: Trip[];
  onTripSelect: (trip: Trip) => void;
}

export const CardsGridContent = ({
  trips,
  onTripSelect,
}: CardsGridContentProps) => {
  if (trips.length === 0) {
    return <div className="no-results">No trips found</div>;
  }

  return (
    <div className="cards-grid">
      {trips.map((trip) => (
        <Card key={trip.id} trip={trip} onMoreInfo={() => onTripSelect(trip)} />
      ))}
    </div>
  );
};
