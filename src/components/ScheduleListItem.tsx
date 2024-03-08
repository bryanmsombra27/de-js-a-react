import { FC } from "react";
import { Schedule, enablingEditMode, removeSchedule } from "../store/ListSlice";
import { useAppDispatch } from "../store/hooks";
import { useFormik, useFormikContext } from "formik";

interface ScheduleListItemProps {
  schedule: Schedule;
}
const ScheduleListItem: FC<ScheduleListItemProps> = ({ schedule }) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeSchedule({ id }));
  };
  const edit = (schedule: Schedule) => {
    dispatch(enablingEditMode({ schedule }));
  };

  return (
    <>
      <li className="list-group-item">
        <p>
          Nombre de la mascota: <span>{schedule.name}</span>{" "}
        </p>
        <p>
          Nombre de Propietario: <span>{schedule.property}</span>{" "}
        </p>
        <p>
          Telefono: <span>{schedule.phone}</span>{" "}
        </p>
        <p>
          Fecha: <span>{schedule.date}</span>{" "}
        </p>
        <p>
          Hora: <span>{schedule.hour}</span>{" "}
        </p>
        <p>
          Sintomas: <span>{schedule.symptoms}</span>{" "}
        </p>

        <button
          className="btn btn-danger mx-3"
          onClick={() => handleDelete(schedule.id!)}
        >
          Eliminar
        </button>
        <button
          className="btn btn-warning"
          onClick={() => edit(schedule)}
        >
          Editar
        </button>
      </li>
    </>
  );
};

export default ScheduleListItem;
