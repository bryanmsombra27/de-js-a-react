import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryClient";
import City from "./components/City";
import Wheater from "./components/Wheater";
import { useState } from "react";
import { Coords } from "./api/cities";

function App() {
  const [coords, setCoords] = useState<{}>({});
  const [pollution, setPollution] = useState<{}>({});

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-6">
              <City
                setCoords={setCoords}
                setPollution={setPollution}
              />
            </div>
            <div className="col-6">
              <Wheater
                wheater={coords}
                pollution={pollution}
              />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
