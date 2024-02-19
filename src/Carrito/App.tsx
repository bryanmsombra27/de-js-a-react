import { FC } from "react";
import "./css/custom.css";
import "./css/normalize.css";
import "./css/skeleton.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { store } from "./data/store";

interface CarritoAppProps {}
const CarritoApp: FC<CarritoAppProps> = ({}) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Hero />
        <Info />
        <Courses />
        <Footer />
      </Provider>
    </>
  );
};

export default CarritoApp;
