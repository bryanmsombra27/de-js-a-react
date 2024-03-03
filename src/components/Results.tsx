import { FC } from "react";
import { Resume } from "../App";

interface ResultsProps {
  resume: Resume;
}
const Results: FC<ResultsProps> = ({ resume }) => {
  return (
    <>
      <div id="resultado">
        {resume && (
          <>
            <p>Marca: {resume.brand}</p>
            <p>Tipo de seguro: {resume.type}</p>
            <p>Año: {resume.year}</p>
            <p>Costo Total: {resume.total}</p>
          </>
        )}
      </div>
    </>
  );
};

export default Results;
