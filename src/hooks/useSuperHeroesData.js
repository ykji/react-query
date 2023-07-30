import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const fetcher = () => axios.get("http://localhost:4000/superheroes");

const addhero = (hero) => axios.post("http://localhost:4000/superheroes", hero);

export const useSuperHeroesData = ({ onSuccess, onError }) => {
  return useQuery("super-heroes", fetcher, {
    // enabled: false,
    // cacheTime: 10000,
    staleTime: 5000, // default is 0
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    // refetchInterval: 3000,
    refetchIntervalInBackground: false, // false is default
    onSuccess,
    onError,
    // select: (data) => {
    //   const transformedData = data.data.map(
    //     (element) => element.name + " Changed"
    //   );
    //   return transformedData;
    // },
  });
};

export const useAddSuperHero = () => {
  const queryClient = useQueryClient();
  return useMutation(addhero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
