import { FC, useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { useImagesContext } from "../context/ImagesContext";

interface ResultsProps {}
const Results: FC<ResultsProps> = ({}) => {
  const { data, isLoading, error } = useSearch();
  const { setTotalPages } = useImagesContext();

  useEffect(() => {
    console.log(data, "data desde use effect");
    if (data?.total) {
      const pages = Math.round(data?.total / 20);

      setTotalPages(pages);
    }
  }, [data]);
  return (
    <>
      {data?.hits?.map((item) => (
        <div className="bg-white h-250">
          <img
            src={item.webformatURL}
            className="w-56 h-56"
            alt=""
          />
          <p className="pl-2 pt-2">
            <span className="font-bold">{item.likes}</span> Me gusta
          </p>
          <p className="pl-2">
            <span className="font-bold">{item.views}</span> Veces vista
          </p>

          <a
            href={item.webformatURL}
            target="_blank"
            className="bg-blue-500 text-white py-2 px-4 text-center uppercase font-bold block w-5/6 mx-auto mt-4 text-xs"
          >
            Ver imagen
          </a>
        </div>
      ))}
    </>
  );
};

export default Results;
