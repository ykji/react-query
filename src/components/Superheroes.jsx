import {
  useAddSuperHero,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Superheroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error } = useSuperHeroesData({
    onSuccess,
    onError,
  });

  const { mutate: addHero } = useAddSuperHero();

  const handleAddHero = () => {
    console.log({ name, alterEgo });
    addHero({ name, alterEgo });
  };

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Superheroes</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alter ego"
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHero}>Add hero</button>
      </div>
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
