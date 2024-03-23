import { FC } from "react";
import CategoriesOptions from "./CategoriesOptions";

interface CategoriesProps {}
const Categories: FC<CategoriesProps> = ({}) => {
  return (
    <>
      <div className="d-md-flex justify-content-md-center mt-5 ">
        <form className="card col-md-8 bg-light p-5">
          <div>
            <label
              htmlFor="categorias"
              className="form-label"
            >
              Categoría
            </label>
            <CategoriesOptions />
          </div>
        </form>
      </div>
    </>
  );
};

export default Categories;
