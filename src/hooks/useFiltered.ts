import { useMemo } from "react";
import type { Trip } from "../api/types/type"; 

type SortDirection = "asc" | "desc" | null;

interface UseFilteredTripsProps {
  trips: Trip[];
  searchQuery: string;
  sortDirection: SortDirection;
}

export const useFilteredTrips = ({
  trips,
  searchQuery,
  sortDirection,
}: UseFilteredTripsProps) => {
  return useMemo(() => {
    const result = trips.filter((trip) =>
      trip.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortDirection) {
      result.sort((a, b) => {
        const ratingDiff = b.rating - a.rating;
        return sortDirection === "asc" ? -ratingDiff : ratingDiff;
      });
    }
    return result;
  }, [trips, searchQuery, sortDirection]);
};
