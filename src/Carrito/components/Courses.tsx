import { FC } from "react";

import Course from "./Course";
import { useAppDispatch, useAppSelector } from "../data/hook";

interface CoursesProps {}
const Courses: FC<CoursesProps> = ({}) => {
  const courses = useAppSelector((state) => state.cursos);

  return (
    <div
      id="lista-cursos"
      className="container"
    >
      <h1
        id="encabezado"
        className="encabezado"
      >
        Cursos En Línea
      </h1>
      <div className="grid-container">
        {courses.map((course) => (
          <Course
            course={course}
            key={course.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
