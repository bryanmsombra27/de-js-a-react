import { FC, useEffect } from "react";
import { useWheater } from "../hooks/useCities";
import { Coords } from "../api/cities";

interface WheaterProps {
  wheater: any;
  pollution: any;
}
const Wheater: FC<WheaterProps> = ({ wheater, pollution }) => {
  useEffect(() => {
    console.log(pollution);
  }, [pollution]);

  return wheater.name ? (
    <>
      <div className="container">
        <h2 className="text-center">Clima en {wheater.name}</h2>

        <h1 className="fs-1 text-center">{wheater.main.temp}°</h1>
        <h4 className=" text-center">
          Temperatura maxima: {wheater.main.temp_max}°
        </h4>
        <h4 className=" text-center">
          Temperatura minima: {wheater.main.temp_min}°
        </h4>
        <h4 className=" text-center">
          Sensacion Termica: {wheater.main.feels_like}°
        </h4>
        <h4 className=" text-center">Humedad: {wheater.main.humidity}%</h4>
        <h4 className=" text-center">
          Amanacer: {new Date(wheater.sys.sunrise).toLocaleTimeString()}
        </h4>
        <h4 className=" text-center">
          Atardecer: {new Date(wheater.sys.sunset).toLocaleTimeString()}
        </h4>
      </div>
      {pollution?.list && (
        <div className="container mt-5 ">
          <h2 className="text-center">Calidad del aire </h2>
          <h4 className=" text-center">
            Monoxido de carbono(CO): {pollution.list[0].components.co}
          </h4>
          <h4 className=" text-center">
            Monoxido de nitrogeno(NO): {pollution.list[0].components.no}
          </h4>
          <h4 className=" text-center">
            dioxido de carbono(NO<sub>2</sub> ):{" "}
            {pollution.list[0].components.no2}
          </h4>
          <h4 className=" text-center">
            Ozono(O<sub>3</sub>): {pollution.list[0].components.o3}
          </h4>
          <h4 className=" text-center">
            Dioxido de sulfuro: {pollution.list[0].components.so2}
          </h4>
          <h4 className=" text-center">
            Amoniaco: {pollution.list[0].components.nh3}
          </h4>
          <h4 className=" text-center">
            Particulas PM<sub>2.5</sub>: {pollution.list[0].components.pm2_5}
          </h4>
          <h4 className=" text-center">
            Particulas PM<sub>10</sub> : {pollution.list[0].components.pm10}
          </h4>
        </div>
      )}
    </>
  ) : null;
};

export default Wheater;
