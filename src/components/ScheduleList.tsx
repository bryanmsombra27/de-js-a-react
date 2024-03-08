import { FC } from "react";
import { useAppSelector } from "../store/hooks";
import ScheduleListItem from "./ScheduleListItem";

interface ScheduleListProps {}
const ScheduleList: FC<ScheduleListProps> = ({}) => {
  const citas = useAppSelector((state) => state.citas.schedules);
  return (
    <>
      <h2
        id="administra"
        className="mb-4"
      >
        Administra tus Citas
      </h2>
      <ul
        id="citas"
        className="list-group lista-citas"
      >
        {citas.map((cita) => (
          <ScheduleListItem
            schedule={cita}
            key={cita.id}
          />
        ))}
      </ul>
    </>
  );
};

export default ScheduleList;
