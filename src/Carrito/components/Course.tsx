import { FC } from "react";

type Course = {
  id?: number;
  title?: string;
  author?: string;
  stars?: string;
  courseImage?: string;
  stock?: number;
  totalPrice?: number;
  discountPrice?: number;
};

interface CourseProps {
  course: Course;
}
const Course: FC<CourseProps> = ({ course }) => {
  return (
    <>
      <div className="card">
        <img
          src={course.courseImage}
          className="imagen-curso u-full-width"
        />
        <div className="info-card">
          <h4>{course.title}</h4>
          <p>{course.author}</p>
          <img src={course.stars} />
          <p>
            Cupos disponibles: <strong>{course.stock}</strong>{" "}
          </p>
          <p className="precio">
            ${course.totalPrice}{" "}
            <span className="u-pull-right ">${course.discountPrice}</span>
          </p>
          <a
            href="#"
            className="u-full-width button-primary button input agregar-carrito"
          >
            Agregar Al Carrito
          </a>
        </div>
      </div>
    </>
  );
};

export default Course;
