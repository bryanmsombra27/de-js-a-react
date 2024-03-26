import { FC } from "react";
import { useImagesContext } from "../context/ImagesContext";

interface PaginationProps {}
const Pagination: FC<PaginationProps> = ({}) => {
  const { page, totalPages, setPage } = useImagesContext();

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const prevPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  return (
    <div
      id="paginacion"
      className="container mx-auto mb-10 text-center mt-5 text-white font-bold"
    >
      <span
        className="cursor-pointer"
        onClick={prevPage}
      >
        {" "}
        {"<"}{" "}
      </span>
      {page}
      <span className="mx-1">de</span>
      <span>{totalPages}</span>
      <span
        className="cursor-pointer"
        onClick={nextPage}
      >
        {" "}
        {">"}{" "}
      </span>
    </div>
  );
};

export default Pagination;
