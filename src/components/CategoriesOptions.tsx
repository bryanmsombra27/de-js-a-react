import { FC } from "react";
import useCategory from "../hooks/useCategory";
import { setCategory } from "../slices/CategorySlice";
import { useAppDispatch } from "../store/hooks";

interface CategoriesOptionsProps {}
const CategoriesOptions: FC<CategoriesOptionsProps> = ({}) => {
  const { categories } = useCategory();
  const dispatch = useAppDispatch();

  const selectedCategory = (e: any) => {
    dispatch(setCategory({ id: e.target.value }));
  };

  return (
    <>
      <select
        id="categorias"
        className="form-select"
        onChange={selectedCategory}
      >
        <option defaultValue={""}>-- Seleccione --</option>

        {categories?.map((category, index) => (
          <option
            value={category.strCategory}
            key={`${category.idCategory}+${index}`}
          >
            {category.strCategory}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoriesOptions;
