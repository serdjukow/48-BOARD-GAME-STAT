import { useToast } from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { fetchStatistics } from "../services/statistics"


const useStatisticsQuery = () => {
  const toast = useToast()
  return useQuery({
    queryFn: () => fetchStatistics(),
    queryKey: [`statistics`],
    refetchInterval: 2000,
    cacheTime: 2000,
    options: {
      keepPreviousData: true,
      refetchOnWindowFocus: true,
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast({
          status: "error",
          title: err.message,
          position: "top-right",
        })
      }
    },
  })
}

export { useStatisticsQuery }
