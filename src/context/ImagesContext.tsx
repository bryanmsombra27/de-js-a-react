import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
} from "react";

interface ImagesContextValue {
  search: string;
  page: number;
  totalPages: number;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}

interface ImagesContextProvider {
  children: ReactNode;
}

const ImagesContext = createContext<ImagesContextValue | null>(null);

export const ImagesContextProvider = ({ children }: ImagesContextProvider) => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const ctx: ImagesContextValue = {
    search,
    page,
    totalPages,
    setSearch,
    setPage,
    setTotalPages,
  };

  return (
    <ImagesContext.Provider value={ctx}>{children}</ImagesContext.Provider>
  );
};
export const useImagesContext = () => {
  const context = useContext(ImagesContext);

  if (context === null) {
    throw new Error("context was used outside of the provider");
  }

  return context;
};
