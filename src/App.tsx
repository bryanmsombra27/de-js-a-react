import Form from "./components/Form";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Emails from "./components/Emails";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="max-w-3xl mx-auto p-10">
          <h1 className="text-4xl text-gray-700 pt-32">Enviar mails</h1>
          <div className="bg-white rounded-lg shadow-xl p-10 mt-5">
            <Form />
          </div>
        </div>
        <div className="p-absolute">
          <Emails />
        </div>
      </Provider>
    </>
  );
}

export default App;
