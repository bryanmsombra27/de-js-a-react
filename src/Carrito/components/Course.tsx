import { FC } from "react";
import { addToCart } from "../data/carritoSlice";
import { useAppDispatch } from "../data/hook";
import { removeSpaceCourse } from "../data/cursosSlice";

export type Course = {
  id: number;
  title: string;
  author?: string;
  stars?: string;
  courseImage: string;
  stock: number;
  totalPrice?: number;
  discountPrice: number;
};

interface CourseProps {
  course: Course;
}
const Course: FC<CourseProps> = ({ course }) => {
  const dispatch = useAppDispatch();

  const addCart = (item: Course) => {
    dispatch(
      addToCart({
        id: item.id,
        courseImage: item.courseImage,
        title: item.title,
        discountPrice: item.discountPrice,
        stock: item.stock,
      })
    );
    dispatch(removeSpaceCourse({ id: item.id }));
  };

  return (
    <>
      <div className={`card ${course.stock == 0 && "notAvailable"}`}>
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
          {course.stock > 0 && (
            <a
              href="#"
              className="u-full-width button-primary button input agregar-carrito"
              onClick={(e) => {
                e.preventDefault();
                addCart(course);
              }}
            >
              Agregar Al Carrito
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
