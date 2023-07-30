import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetch = ({ pageParam = 1 }) =>
  axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);

const InfiniteQueries = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery("colors", fetch, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 5) {
        return pages.length + 1;  
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {data?.pages.map((page, index) => (
        <Fragment key={index}>
          {page.data.map(({ id, label }) => {
            return (
              <div style={{ marginTop: "20px" }} key={id}>
                {id} {label}
              </div>
            );
          })}
        </Fragment>
      ))}

      <button disabled={!hasNextPage} onClick={fetchNextPage}>
        Load more {isFetchingNextPage && "Fetching"}
      </button>
    </>
  );
};

export default InfiniteQueries;
