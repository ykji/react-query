import "./App.css";
import Home from "./components/Home";
import Superheroes from "./components/Superheroes";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SuperHero from "./components/SuperHero";
import ParallelQueries from "./components/ParallelQueries";
import DynamicParallelQueries from "./components/DynamicParallelQueries";
import DependentQueries from "./components/DependentQueries";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/super-heroes">Superheroes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/super-heroes" element={<Superheroes />}></Route>
          <Route path="/super-heroes/:heroId" element={<SuperHero />} />
          <Route path="/parallel-queries" element={<ParallelQueries />} />
          <Route path="/paginated-queries" element={<PaginatedQueries />} />
          <Route path="/infinite-queries" element={<InfiniteQueries />} />
          <Route
            path="/dynamic-parallel-queries"
            element={<DynamicParallelQueries heroIds={[1, 3]} />}
          />
          <Route
            path="/dependent-queries"
            element={<DependentQueries email={"yvarshney44@gmail.com"} />}
          />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
