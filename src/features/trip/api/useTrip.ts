import { useQuery } from '@tanstack/react-query';
import type { Trip } from '../../../api/types/type'; 

async function fetchTrips() {
  const response = await fetch('/data/data.json');
  const data = await response.json();
  return data.trips;
}

export function useTrips() {
  return useQuery<Trip[]>({
    queryKey: ['trips'],
    queryFn: () => fetchTrips(),
    staleTime: Infinity,
  });
}
