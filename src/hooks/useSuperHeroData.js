import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetcher = (heroId) =>
  axios.get(`http://localhost:4000/superheroes/${heroId}`);

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();

  return useQuery(["super-hero", heroId], () => fetcher(heroId), {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heroes") 
        ?.data?.find((hero) => hero.id === parseInt(heroId));

      if (hero) {
        return {
          data: hero,
        };
      } else {
        return undefined; // this is reuired in case there is no cache data
      }
    },
  });
};
