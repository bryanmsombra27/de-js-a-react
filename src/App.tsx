import "./css/app.css";
import "./css/normalize.css";
import "./css/skeleton.css";

import { CarsContextProvider } from "./data/CarsContext";
import Cars from "./components/Cars";
import Form from "./components/Form";

function App() {
  return (
    <>
      <CarsContextProvider>
        <h1>Buscador de Autos</h1>

        <div className="contenedor">
          <Form />
          <Cars />
        </div>
      </CarsContextProvider>
    </>
  );
}

export default App;
