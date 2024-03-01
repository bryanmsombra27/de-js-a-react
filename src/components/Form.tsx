import { FC } from "react";
import { useFormik, FormikConfig } from "formik";
import { CarsFilter, useCarsContext } from "../data/CarsContext";
interface FormProps {}
const Form: FC<FormProps> = ({}) => {
  const { addFilters, resetFilters } = useCarsContext();
  const { handleSubmit, handleChange, values } = useFormik<CarsFilter>({
    initialValues: {
      brand: "",
      year: "",
      minPrice: "",
      maxPrice: "",
      doors: "",
      transmision: "",
      color: "",
    },
    onSubmit: (values: any) => {
      let obj: any = {};
      for (const key in values) {
        if (values[key] !== "") {
          obj = {
            ...obj,
            [key]: values[key],
          };
        }
      }

      addFilters(obj);
    },
  });

  return (
    <>
      <form
        id="buscador"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="three columns">
            <label htmlFor="marca">Marca</label>
            <select
              className="u-full-width"
              id="marca"
              name="brand"
              value={values.brand}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="Chevrolet">Chevrolet</option>
              <option value="Ford">Ford</option>
              <option value="Dodge">Dodge</option>
            </select>
          </div>
          <div className="three columns">
            <label htmlFor="year">Año</label>
            <select
              className="u-full-width"
              id="year"
              name="year"
              value={values.year}
              onChange={handleChange}
            >
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="">Seleccione</option>
            </select>
          </div>
          <div className="three columns">
            <label htmlFor="minimo">Precio Min</label>
            <select
              className="u-full-width"
              id="minimo"
              name="minPrice"
              value={values.minPrice}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
              <option value="70000">70,000</option>
              <option value="80000">80,000</option>
              <option value="90000">90,000</option>
            </select>
          </div>
          <div className="three columns">
            <label htmlFor="maximo">Precio Max</label>
            <select
              className="u-full-width"
              id="maximo"
              name="maxPrice"
              value={values.maxPrice}
              onChange={handleChange}
            >
              <option value="">Seleccione</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
              <option value="70000">70,000</option>
              <option value="80000">80,000</option>
              <option value="90000">90,000</option>
            </select>
          </div>
          <div className="row">
            <div className="four columns">
              <label htmlFor="puertas">Puertas</label>
              <select
                className="u-full-width"
                id="puertas"
                name="doors"
                value={values.doors}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="2">2</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="four columns">
              <label htmlFor="transmision">Transmisión</label>
              <select
                className="u-full-width"
                id="transmision"
                name="transmision"
                value={values.transmision}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="automatico">Automática</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            <div className="four columns">
              <label htmlFor="color">Color</label>
              <select
                className="u-full-width"
                id="color"
                name="color"
                value={values.color}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Negro">Negro</option>
                <option value="Azul">Azul</option>
                <option value="Blanco">Blanco</option>
                <option value="Rojo">Rojo</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit">Buscar</button>
        <button
          type="button"
          style={{ marginLeft: "25px" }}
          onClick={resetFilters}
        >
          eliminar filtros
        </button>
      </form>
    </>
  );
};

export default Form;
