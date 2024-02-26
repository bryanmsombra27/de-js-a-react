import { FC } from "react";

import Course from "./Course";
import { useAppDispatch, useAppSelector } from "../data/hook";
import { useLocation } from "react-router-dom";

interface CoursesProps {
  title: string;
}
const Courses: FC<CoursesProps> = ({ title }) => {
  const courses = useAppSelector((state) => state.cursos);
  const myCourses = useAppSelector((state) => state.misCursos);
  const location = useLocation();

  return (
    <div
      id="lista-cursos"
      className="container"
    >
      <h1
        id="encabezado"
        className="encabezado"
      >
        {title}
      </h1>
      <div className="grid-container">
        {location.pathname == "/"
          ? courses.map((course) => (
              <Course
                course={course}
                key={course.id}
              />
            ))
          : myCourses.map((course) => (
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
