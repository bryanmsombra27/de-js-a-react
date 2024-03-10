import { useMutation, useQuery } from "react-query";
import { Coords, getCity, getPollution, getWheater } from "../api/cities";

export const useCity = () => {
  const { error, isLoading, data, mutate } = useMutation({
    mutationKey: "city",
    mutationFn: async (name: string) => {
      const datos = await getCity(name);

      console.log(datos, "DATA DESDE USE CITY");
      return datos;
    },
  });

  return {
    error,
    isLoading,
    data,
    mutate,
  };
};

export const useWheater = () => {
  const {
    error,
    isLoading,
    data,
    mutate: getWeather,
  } = useMutation({
    mutationKey: ["weather"],
    mutationFn: async (coords: Coords) => await getWheater(coords),
  });

  return {
    error,
    isLoading,
    data,
    getWeather,
  };
};

export const usePollution = () => {
  const {
    data,
    error,
    mutate: getPollutionData,
  } = useMutation({
    mutationKey: ["pollution"],
    mutationFn: async (coords: Coords) => await getPollution(coords),
  });

  return {
    data,
    error,
    getPollutionData,
  };
};
