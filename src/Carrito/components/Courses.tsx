import { FC } from "react";
import courses from "../data/courses.json";
import Course from "./Course";

interface CoursesProps {}
const Courses: FC<CoursesProps> = ({}) => {
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
