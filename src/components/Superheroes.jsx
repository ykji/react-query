import { Link, Outlet } from "react-router-dom";
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data?.data.map(({ name, id }) => (
          <Link key={id} to={`/super-heroes/${id}`}>
            {name}
          </Link>
        ))}
        <Outlet />
      </div>
      <br />
      <br />
      <br />
      {/* {data && data.map((name) => <li>{name}</li>)}
      <button onClick={refetch}>fetch</button> */}
    </>
  );
};

export default Superheroes;
