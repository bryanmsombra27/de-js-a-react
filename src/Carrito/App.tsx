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
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface CarritoAppProps {}

const CarritoApp: FC<CarritoAppProps> = ({}) => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <Info />
                  <Courses title="Cursos En Línea" />
                  <Footer />
                </>
              }
            />
            <Route
              path="/mis-cursos"
              element={
                <>
                  <Header />
                  <Courses title="Mis Cursos" />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default CarritoApp;
