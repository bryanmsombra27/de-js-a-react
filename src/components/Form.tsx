import { FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Resume } from "../App";

interface FormProps {
  setResume: React.Dispatch<React.SetStateAction<Resume>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const brands: any = {
  500: "Americano",
  700: "Europeo",
  200: "Asiatico",
};
const years: any = {
  100: "2015",
  200: "2016",
  300: "2017",
  400: "2018",
  500: "2019",
  600: "2020",
};
const types: any = {
  500: "basico",
  1000: "completo",
};

const Form: FC<FormProps> = ({ setResume, setIsLoading }) => {
  const validationSchema = Yup.object({
    brand: Yup.string().required("Campo obligatorio"),
    type: Yup.string().required("Campo obligatorio"),
    year: Yup.string().required("Campo obligatorio"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      brand: "",
      year: "",
      type: "",
    },
    onSubmit: (values) => {
      console.log(values);
      setIsLoading(true);
      const total = +values.brand + +values.type + +values.year;

      setTimeout(() => {
        const form = {
          brand: brands[values.brand],
          year: years[values.year],
          type: types[values.type],
          total: total,
        };

        setResume(form);
        setIsLoading(false);
      }, 1500);
    },
  });

  return (
    <>
      <form
        className="mt-10 max-w-lg mx-auto"
        action="#"
        id="cotizar-seguro"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center mb-5">
          <label
            className="font-bold  uppercase mr-2 w-20"
            htmlFor="marca"
          >
            Marca:
          </label>
          <select
            className="flex-1 bg-gray-100 p-3 appearance-none"
            id="brand"
            onChange={handleChange}
            value={values.brand}
          >
            <option value="">- Seleccionar -</option>
            <option value="500">Americano</option>
            <option value="200">Asiatico</option>
            <option value="700">Europeo</option>
          </select>
          {errors.brand && (
            <span style={{ color: "red" }}> {errors.brand} </span>
          )}
        </div>
        <div className="flex items-center mb-5">
          <label
            className="font-bold  uppercase mr-2 w-20"
            htmlFor="year"
          >
            Año:
          </label>
          <select
            className="flex-1 bg-gray-100 p-3 appearance-none"
            id="year"
            onChange={handleChange}
            value={values.year}
          >
            <option value="100">2015</option>
            <option value="200">2016</option>
            <option value="300">2017</option>
            <option value="400">2018</option>
            <option value="500">2019</option>
            <option value="600">2020</option>
          </select>

          {errors.year && <span style={{ color: "red" }}> {errors.year} </span>}
        </div>
        <fieldset>
          <legend className="font-bold  uppercase text-2xl text-center w-full">
            Tipo Seguro
          </legend>

          <div className="flex justify-around mt-5">
            <div>
              <label className="font-bold  uppercase mr-2">Básico</label>
              <input
                type="radio"
                name="type"
                value="500"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="font-bold  uppercase mr-2">Completo</label>
              <input
                type="radio"
                name="type"
                value="1000"
                onChange={handleChange}
              />
              {errors.type && (
                <span style={{ color: "red" }}> {errors.type} </span>
              )}
            </div>
          </div>
        </fieldset>

        <div className="flex  justify-center py-4">
          <button
            type="submit"
            className="mx-auto bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-20 rounded"
          >
            Cotizar Seguro
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
