import { useMemo } from "react";
import type { Trip } from "../api/types/type"; 

interface UseFilteredTripsProps {
  trips: Trip[];
  searchQuery: string;
}

export const useFilteredTrips = ({
  trips,
  searchQuery,
}: UseFilteredTripsProps) => {
  return useMemo(() => {
    return trips.filter((trip) =>
      trip.name.toLowerCase().includes(searchQuery.toLowerCase()) || trip.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [trips, searchQuery]);
};
