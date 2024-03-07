import { FC, FormEvent, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addCost, resetCosts } from "../store/ListSlice";
import { newBudget } from "../store/BudgetSlice";

interface AddCostsProps {}
const AddCosts: FC<AddCostsProps> = ({}) => {
  const [form, setForm] = useState<{
    name: string;
    cost: number;
  }>({
    cost: 0,
    name: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addCost({
        name: form.name,
        price: form.cost,
      })
    );
    setForm({
      cost: 0,
      name: "",
    });
  };
  const resetBudget = () => {
    dispatch(newBudget());
    dispatch(resetCosts());
  };

  return (
    <div className="contenido primario">
      <h2 className="text-center">Añade tus gastos aqui</h2>
      <form
        id="agregar-gasto"
        action="#"
        onSubmit={submit}
      >
        <div className="form-group">
          <label htmlFor="gasto">Gasto:</label>
          <input
            type="text"
            className="form-control"
            id="gasto"
            placeholder="Nombre Gasto"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            type="text"
            className="form-control"
            id="cantidad"
            placeholder="Cantidad en $"
            onChange={handleChange}
            value={form.cost}
            name="cost"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Agregar
        </button>

        <button
          type="button"
          className="btn btn-primary ml-3"
          onClick={resetBudget}
        >
          cambiar presupuesto
        </button>
      </form>
    </div>
  );
};

export default AddCosts;
