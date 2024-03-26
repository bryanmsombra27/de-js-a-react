import axios from "../config/axios";
import { ImagesResponse } from "../interfaces/search.interface";

export const searchCategory = async (search: string, page: number) => {
  try {
    const { data } = await axios.get<ImagesResponse>(
      `?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&page=${page}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
