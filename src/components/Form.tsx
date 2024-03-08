import { useFormik, Form as FormikForm, Formik } from "formik";
import { Schedule, addSchedule, editSchedule } from "../store/ListSlice";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
interface FormProps extends Schedule {}

const initialState: FormProps = {
  date: "",
  name: "",
  phone: "",
  hour: "",
  symptoms: "",
  property: "",
};
const validationSchema = Yup.object({
  date: Yup.string().required("Campo obligatorio"),
  name: Yup.string().required("Campo obligatorio"),
  phone: Yup.string().required("Campo obligatorio"),
  hour: Yup.string().required("Campo obligatorio"),
  symptoms: Yup.string().required("Campo obligatorio"),
});

const Form = ({}) => {
  const dispatch = useAppDispatch();
  const { schedule, editMode } = useAppSelector((state) => state.citas);

  const {
    handleSubmit,
    errors,
    handleChange,
    values,
    setValues,
    resetForm,
    touched,
  } = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: (values) => {
      if (editMode) {
        dispatch(editSchedule({ ...values }));
        resetForm();
      } else {
        dispatch(addSchedule({ ...values }));
        resetForm();
      }
    },
  });

  useEffect(() => {
    editScheduleMode(schedule);
  }, [editMode]);

  const editScheduleMode = (schedule: Schedule) => {
    setValues({
      date: schedule.date,
      name: schedule.name,
      phone: schedule.phone,
      hour: schedule.hour,
      symptoms: schedule.symptoms,
      id: schedule.id,
      property: schedule.property,
    });
  };

  return (
    <>
      <form
        id="nueva-cita"
        onSubmit={handleSubmit}
      >
        <legend className="mb-4">Datos del Paciente</legend>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">
            Nombre Mascota:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre Mascota"
              onChange={handleChange}
              value={values.name}
            />
            {errors.name && touched.name && (
              <span className="text-danger my-2 d-block">{errors.name}</span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">
            Propietario:
          </label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="text"
              name="property"
              className="form-control"
              placeholder="Nombre Dueño de la Mascota"
              onChange={handleChange}
              value={values.property}
            />
            {errors.property && touched.property && (
              <span className="text-danger my-2 d-block">
                {errors.property}
              </span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Teléfono:</label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Número de Teléfono"
              onChange={handleChange}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <span className="text-danger my-2 d-block">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Fecha:</label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="date"
              name="date"
              className="form-control"
              onChange={handleChange}
              value={values.date}
            />
            {errors.date && touched.date && (
              <span className="text-danger my-2 d-block">{errors.date}</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Hora:</label>
          <div className="col-sm-8 col-lg-8">
            <input
              type="time"
              name="hour"
              className="form-control"
              onChange={handleChange}
              value={values.hour}
            />
            {errors.hour && touched.hour && (
              <span className="text-danger my-2 d-block">{errors.hour}</span>
            )}
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-4 col-lg-4 col-form-label">Sintomas:</label>
          <div className="col-sm-8 col-lg-8">
            <textarea
              name="symptoms"
              className="form-control"
              onChange={handleChange}
              value={values.symptoms}
            ></textarea>
            {errors.symptoms && touched.symptoms && (
              <span className="text-danger my-2 d-block">
                {errors.symptoms}
              </span>
            )}
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-success w-100 d-block"
          >
            {editMode ? "Editar Cita" : "Crear Cita"}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
