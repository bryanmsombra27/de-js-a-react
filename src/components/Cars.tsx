import { FC } from "react";
import { useCarsContext } from "../data/CarsContext";

interface CarsProps {}
const Cars: FC<CarsProps> = ({}) => {
  const { cars } = useCarsContext();

  return (
    <>
      <h1>Resultados</h1>
      <div id="resultado">
        {cars.map((item) => (
          <>
            <div
              className="flex"
              key={item.model}
            >
              <span>{item.color}</span>
              <span>{item.brand}</span>
              <span>{item.model}</span>
              <span>{item.precio}</span>
              <span>{item.doors}</span>
              <span>{item.transmision}</span>
              <span>{item.year}</span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Cars;
