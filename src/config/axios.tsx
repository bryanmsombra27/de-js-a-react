import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PIXABAY_API_URL,
  // baseURL: `${process.env.REACT_APP_PIXABAY_API_URL}/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`,
});

export default axiosInstance;
