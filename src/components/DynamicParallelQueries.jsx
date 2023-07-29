import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetcher = (heroId) =>
  axios.get(`http://localhost:4000/superheroes/${heroId}`);

const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-heroes", heroId],
        queryFn: () => fetcher(heroId),
      };
    })
  );

  console.log({ queryResults });

  return <div>DynamicParallelQueries</div>;
};

export default DynamicParallelQueries;
