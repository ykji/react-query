import "./App.css";
import Home from "./components/Home";
import Superheroes from "./components/Superheroes";
import { Link, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

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
          <Route path="/super-heroes" element={<Superheroes />} />
        </Routes>
      </div>
      <ReactQueryDevtools initialIsOpen={true} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
