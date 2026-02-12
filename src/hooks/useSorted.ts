import { useMemo } from "react";
import type { Trip } from "../api/types/type"; 

interface UseSortedTripsProps {
  trips: Trip[];
  sortDirection: "asc" | "desc"
}

export const useSortedTrips = ({
  trips,
  sortDirection,
}: UseSortedTripsProps) => {
  return useMemo(() => {
   const sorted = [...trips].sort((a, b) => {
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
          return sorted;
    }, [trips, sortDirection]);
};
