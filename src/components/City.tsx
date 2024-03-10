import { FC, useEffect, useState } from "react";
import { useCity, usePollution, useWheater } from "../hooks/useCities";
import { Coords } from "../api/cities";

interface CityProps {
  setCoords: React.Dispatch<React.SetStateAction<{}>>;
  setPollution: React.Dispatch<React.SetStateAction<{}>>;
}
const City: FC<CityProps> = ({ setCoords, setPollution }) => {
  const { mutate, data, error, isLoading } = useCity();
  const { data: wheaterData, getWeather } = useWheater();
  const { data: pollutionData, getPollutionData } = usePollution();
  const [city, setCity] = useState<string>("");

  useEffect(() => {
    console.log(data, "ciudad");
    if (data) {
      getWeather({
        lat: data.lat,
        lng: data.lon,
      });
      getPollutionData({
        lat: data.lat,
        lng: data.lon,
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(wheaterData, "DATA DEL CLIMA");

    if (wheaterData) {
      setCoords(wheaterData);
    }
  }, [wheaterData]);

  useEffect(() => {
    if (pollutionData) {
      setPollution(pollutionData);
    }
  }, [pollutionData]);

  const handleCity = async () => {
    mutate(city);
  };
  return (
    <>
      <label htmlFor="">Ciudad</label>
      <input
        type="text"
        className="form-control my-3"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={handleCity}
      >
        Buscar clima
      </button>
    </>
  );
};

export default City;
