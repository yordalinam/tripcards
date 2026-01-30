import { useTrips } from "../../features/trip/hooks/useTrip";
import { Card } from "../Card/Card";
import type { Trip } from "../../api/types/type";

export function CardList() {
  const { data: trips } = useTrips();

  return (
    <div>
      {trips?.map((trip: Trip) => (
        <Card key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
