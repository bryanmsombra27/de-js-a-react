import { Provider } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import ScheduleList from "./components/ScheduleList";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <h2 className="text-center my-5 titulo">
          Administrador de Pacientes de Veterinaria
        </h2>
        <div className="container mt-5 p-5">
          <div
            id="contenido"
            className="row"
          >
            <div className="col-md-6 agregar-cita">
              <Form />
            </div>
            <div className="col-md-6">
              <ScheduleList />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
