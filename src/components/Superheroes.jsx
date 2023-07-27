import axios from "axios";
import { useQuery } from "react-query";

const fetcher = () => axios.get("http://localhost:4000/superheroes");

const Superheroes = () => {
  const { isLoading, data, isError, error } = useQuery("super-heroes", fetcher);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h1>Superheroes</h1>
      {data?.data.map(({ name }) => (
        <p key={name}>{name}</p>
      ))}
    </>
  );
};

export default Superheroes;
