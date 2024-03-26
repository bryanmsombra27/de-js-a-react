import { FC, FormEvent, useEffect } from "react";
import { useImagesContext } from "../context/ImagesContext";
import useSearch from "../hooks/useSearch";

interface SearchProps {}
const Search: FC<SearchProps> = ({}) => {
  const { search, setSearch, setPage } = useImagesContext();
  const { refetch } = useSearch();

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setPage(1);
    refetch();
  };

  return (
    <>
      <div className="buscador max-w-lg mx-auto ">
        <form
          id="formulario"
          className=""
          onSubmit={submit}
        >
          <div>
            <input
              type="text"
              className="mt-3 rounded w-full p-2 "
              placeholder="Término de búsqueda. Ejemplo: Café o Futbol"
              id="termino"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />

            <input
              type="submit"
              value="Buscar Imágenes"
              className="mt-5 w-full py-2 bg-yellow-400 cursor-pointer font-bold uppercase hover:bg-yellow-500 rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
