import type { Trip } from "../../api/types/type";
import "./Card.scss";

interface CardProps {
  trip: Trip;
}

export function Card({ trip }: CardProps) {
  return (
    <div className="card">
      <img src={trip.image} alt={trip.name} />
      <h3>{trip.name}</h3>
      <div>{trip.rating}</div>
      <p>{trip.description}</p>
      <button>Show More</button>
    </div>
  );
}
