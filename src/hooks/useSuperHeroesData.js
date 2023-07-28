import axios from "axios";
import { useQuery } from "react-query";

const fetcher = () => axios.get("http://localhost:4000/superheroes");

export const useSuperHeroesData = ({ onSuccess, onError }) => {
  return useQuery("super-heroes", fetcher, {
    enabled: false,
    // cacheTime: 10000,
    staleTime: 5000, // default is 0
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    refetchInterval: 3000,
    refetchIntervalInBackground: false, // false is default
    onSuccess,
    onError,
    select: (data) => {
      const transformedData = data.data.map(
        (element) => element.name + " Changed"
      );
      return transformedData;
    },
  });
};
