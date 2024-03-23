import Favorites from "./components/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Main />}
              />
              <Route
                path="/favoritos"
                element={<Favorites />}
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
