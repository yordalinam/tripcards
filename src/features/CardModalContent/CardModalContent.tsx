import type { Trip } from "../../api/types/type";
import Star from "../../assets/svg/Star";

interface TripModalContentProps {
  trip: Trip;
}

export const CardModalContent = ({ trip }: TripModalContentProps) => (
  <>
    <div className="modal-image">
      <img src={trip.image} alt={trip.name} />
    </div>
    <h2>{trip.name}</h2>
    <div className="rating">★{"★".repeat(Math.floor(trip.rating - 1))}</div>
    <p>{trip.long_description}</p>
  </>
);
