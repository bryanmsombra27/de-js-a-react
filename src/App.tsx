import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import MainContent from "./components/MainContent";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <header>
            <h1 className="text-center">Gasto Semanal</h1>
          </header>
          <MainContent />
        </div>
      </Provider>
    </>
  );
}

export default App;
