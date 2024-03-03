import { useState } from "react";
import "./css/custom.css";
import "./css/tailwind.css";

import Spinner from "./components/Spinner";
import Results from "./components/Results";
import Form from "./components/Form";

export type Resume = {
  brand: any;
  year: any;
  type: any;
  total: any;
};

function App() {
  const [resume, setResume] = useState<Resume>({
    brand: 0,
    total: 0,
    type: 0,
    year: 0,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <div className="container mx-auto">
        <div
          id="contenido"
          className="pb-10"
        >
          <header className="bg-teal-500 text-white py-3 font-bold uppercase">
            <h1 className="text-center">Cotiza tu seguro de Auto</h1>
          </header>
          <Form
            setResume={setResume}
            setIsLoading={setIsLoading}
          />
          {isLoading ? <Spinner /> : <Results resume={resume} />}
        </div>
      </div>
    </>
  );
}

export default App;
