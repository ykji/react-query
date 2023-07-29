import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetch = (page) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${page}`);

const PaginatedQueries = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error, isFetching } = useQuery(
    ["colors", page],
    () => fetch(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data?.data.map(({ id, label }) => {
        return (
          <div style={{ marginTop: "20px" }} key={id}>
            {id} {label}
          </div>
        );
      })}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <button onClick={() => setPage(page + 1)} disabled={page === 5}>
        Next
      </button>
      {isFetching && <p>Loading data in background</p>}
    </>
  );
};

export default PaginatedQueries;
