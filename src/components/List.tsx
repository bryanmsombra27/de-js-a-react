import { FC } from "react";
import Results from "./Results";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { deleteCost } from "../store/ListSlice";

interface ListProps {}
const List: FC<ListProps> = ({}) => {
  const costs = useAppSelector((state) => state.costs);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteCost({ id }));
  };

  return (
    <div className="contenido secundario">
      <h2 className="text-center">Listado</h2>

      <div id="gastos">
        <ul className="list-group">
          {costs.map((cost) => (
            <li
              className="list-group-item d-flex align-items-center justify-content-between"
              key={cost.id}
            >
              <p className="m-0">{cost.name}</p>

              <span className="badge rounded-pill badge-primary">
                ${cost.price}
              </span>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(cost.id!)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Results />
    </div>
  );
};

export default List;
