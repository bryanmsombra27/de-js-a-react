import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addBudget } from "../store/BudgetSlice";

interface InitialBudgetProps {}
const InitialBudget: FC<InitialBudgetProps> = ({}) => {
  const [initialBudget, setInitialBudget] = useState<number>(0);
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    const value = +e.target.value;
    setInitialBudget(value);
  };
  const handleBudget = () => {
    dispatch(
      addBudget({
        budget: initialBudget,
        isBudget: true,
      })
    );
  };

  return (
    <div className="row contenido-principal">
      <div className="col">
        <label htmlFor="">Presupuesto</label>
        <input
          type="number"
          className="form-control"
          onChange={handleChange}
          value={initialBudget}
        />

        <button
          className="btn btn-primary mt-4"
          onClick={handleBudget}
        >
          Agregar presupuesto
        </button>
      </div>
    </div>
  );
};

export default InitialBudget;
