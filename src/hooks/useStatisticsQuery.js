import { useQuery } from "@tanstack/react-query"
import { fetchStatistics } from "../services/statistics"

const useStatisticsQuery = () => {
  return useQuery({
    queryFn: () => fetchStatistics(),
    queryKey: [`statistics`],
    refetchInterval: 2000,
    cacheTime: 2000,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    }
  })
}

export { useStatisticsQuery }
