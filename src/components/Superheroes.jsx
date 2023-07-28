import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

const Superheroes = () => {
  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData({ onSuccess, onError });

  console.log({
    isLoading,
    isFetching,
  });

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Superheroes</h1>
      {/* {data?.data.map(({ name }) => (
        <p key={name}>{name}</p>
      ))} */}
      <br />
      <br />
      <br />
      {data && data.map((name) => <li>{name}</li>)}
      <button onClick={refetch}>fetch</button>
    </>
  );
};

export default Superheroes;
