import "./App.css";
import Pagination from "./components/Pagination";
import Results from "./components/Results";
import Search from "./components/Search";
import { ImagesContextProvider } from "./context/ImagesContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ImagesContextProvider>
        <>
          <h1 className="text-center text-3xl text-white my-10 font-bold uppercase">
            Buscador de Imágenes Pixabay
          </h1>

          <Search />
          <div
            id="resultado"
            className="container mx-auto mt-10  flex flex-wrap gap-5 h-full"
          >
            <Results />
          </div>

          <Pagination />
        </>
      </ImagesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
