import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => axios.get("http://localhost:4000/superheroes");
const fetchfriends = () => axios.get("http://localhost:4000/friends");

const ParallelQueries = () => {
  useQuery("super-heroes", fetchSuperHeroes);
  useQuery("friends", fetchfriends);

  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
