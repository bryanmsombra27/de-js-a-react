import { createContext, useState, useContext, ReactNode } from "react";
import { autos } from "./db";
export interface CarsFilter {
  brand: string;
  year: string;
  minPrice: string;
  maxPrice: string;
  doors: string;
  transmision: string;
  color: string;
}
export interface Cars {
  brand: string;
  model: string;
  year: number;
  precio: number;
  doors: number;
  color: string;
  transmision: string;
}
interface CarsContext {
  cars: Cars[];
  addFilters: (obj: any) => void;
  resetFilters: () => void;
}

interface CarsContextProvider {
  children: ReactNode;
}
const CarsContext = createContext<CarsContext | null>(null);

export const CarsContextProvider = ({ children }: CarsContextProvider) => {
  const [cars, setCars] = useState<Cars[]>(autos);

  const addFilters = (filtered: any) => {
    let filteredCars: Cars[] = [];
    for (const filter in filtered) {
      if (filteredCars.length == 0) {
        const newCars = cars.filter((car: any) => {
          if (filter == "minPrice") {
            return +car.precio <= +filtered[filter];
          } else if (filter == "maxPrice") {
            return +car.precio >= +filtered[filter];
          }
          return car[filter] == filtered[filter];
        });
        filteredCars = newCars;
      } else {
        const newCars = filteredCars.filter((car: any) => {
          if (filter == "minPrice") {
            return +car.precio <= +filtered[filter];
          } else if (filter == "maxPrice") {
            return +car.precio >= +filtered[filter];
          }
          return car[filter] == filtered[filter];
        });
        filteredCars = newCars;
      }
    }
    setCars(filteredCars);
  };

  const resetFilters = () => {
    setCars(autos);
  };

  return (
    <CarsContext.Provider value={{ cars, addFilters, resetFilters }}>
      {children}
    </CarsContext.Provider>
  );
};
export const useCarsContext = () => {
  const context = useContext(CarsContext);

  if (context === null) {
    throw new Error("context was used outside of the provider");
  }

  return context;
};
