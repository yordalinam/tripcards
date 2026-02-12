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
      trip.name.toLowerCase().includes(searchQuery.toLowerCase()) || trip.description.toLowerCase().includes(searchQuery.toLowerCase())

    );

    if (sortDirection) {
      result.sort((a, b) => {
        const NameA = a.name.toLowerCase()
        const NameB = b.name.toLowerCase()
        if(NameA>NameB){
          return sortDirection === 'asc' ? -1 : 1
        }
        if(NameB>NameA){
          return sortDirection === 'asc' ? 1 : -1
        }
        return 0
      });
    }
    return result;
  }, [trips, searchQuery, sortDirection]);
};
