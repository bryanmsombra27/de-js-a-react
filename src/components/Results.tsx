import { FC } from "react";
import { useAppSelector } from "../store/hooks";

interface ResultsProps {}
const Results: FC<ResultsProps> = ({}) => {
  const { budget } = useAppSelector((state) => state.budget);
  const costs = useAppSelector((state) => state.costs);
  const redu = +costs.reduce((prev, curr) => +prev + +curr.price, 0);
  const rest = +budget - redu;
  const percentage = (rest * 100) / budget;

  const dinamicClass =
    percentage > 70
      ? "alert-success"
      : percentage > 50
      ? "alert-warning"
      : "alert-danger";

  return (
    <div
      id="presupuesto"
      className="presupuesto"
    >
      <div className="alert alert-primary">
        <p>
          Presupuesto: $ <span id="total">{budget}</span>{" "}
        </p>
      </div>
      <div className={`restante alert alert-success ${dinamicClass}`}>
        <p>
          Restante: $ <span id="restante">{rest}</span>
        </p>
      </div>
    </div>
  );
};

export default Results;
