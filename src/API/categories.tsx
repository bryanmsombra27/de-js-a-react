import { FilterByCategory } from "../interfaces/FilterCategories.interface";
import { ReceiptDetailsResponse } from "../interfaces/ReceiptDetails.interface";
import { Categories } from "../interfaces/categories.interface";
import axios from "./axios";

export const getCategories = async () => {
  try {
    const { data } = await axios.get<Categories>("/categories.php");

    return data.categories;
  } catch (error) {
    console.log(error);
    throw new Error("Error al cargar las categorias");
  }
};

export const filterByCategory = async (filter: string) => {
  try {
    const { data } = await axios.get<FilterByCategory>(
      `/filter.php?c=${filter}`
    );

    return data.meals;
  } catch (error) {
    console.log(error);
    throw new Error("Error en la categoria seleccionada");
  }
};

export const getRecipe = async (id: string) => {
  try {
    // const { data } = await axios.get<ReceiptDetailsResponse>(
    //   `/lookup.php?i=${id}`
    // );
    const { data } = await axios.get<any>(`/lookup.php?i=${id}`);

    return data.meals && data?.meals[0];
  } catch (error) {
    console.log(error);
    throw new Error("Error en la receta seleccionada");
  }
};
