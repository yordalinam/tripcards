import type { Trip } from "../../api/types/type";
import "./Card.scss";
import { Button } from "../buttons/PrimaryButton/PrimaryButton";

interface CardProps {
  trip: Trip;
  onMoreInfo: () => void;
}

export function Card({ trip, onMoreInfo }: CardProps) {
  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} />
      <div className="card-content">
        <span>{trip.name}</span>
        <div className="rating">{"★".repeat(trip.rating)}</div>
        <p>{trip.description}</p>
        <Button onClick={onMoreInfo}>More Info</Button>
      </div>
    </div>
  );
}
