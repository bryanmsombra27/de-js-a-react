import { Field, Formik, FormikHelpers, Form as Formulario } from "formik";
import { FC } from "react";
import * as Yup from "yup";
import { Email, addNewEmail } from "../store/EmailSlice";
import { useAppDispatch } from "../store/hooks";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface FormProps {}

interface Form {
  email: string;
  title: string;
  message: string;
}

const Form: FC<FormProps> = ({}) => {
  const dispatch = useAppDispatch();

  const submit = async (
    values: Form,
    { setSubmitting, resetForm }: FormikHelpers<Form>
  ) => {
    console.log(values);
    const resp = await MySwal.fire({
      title: "¿Desea enviar el correo?",
      text: "Si no lo envia en este momento, podra reenviarlo cuando lo necesite",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1ece3e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    const email: Email = {
      email: values.email,
      title: values.title,
      message: values.message,
      isSend: resp.value ? true : false,
    };

    dispatch(addNewEmail(email));

    resetForm();
    if (resp.value) {
      MySwal.fire({
        title: "Enviado!",
        text: "El correo ha sido enviado!",
        icon: "success",
      });
    } else {
      MySwal.fire({
        title: "No se envio!",
        text: "El correo no se envio, pero podra reenviarlo cuando lo desee!",
        icon: "error",
      });
    }
    setSubmitting(false);
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Formato de correo invalido")
      .required("campo obligatorio"),
    title: Yup.string().required("campo obligatorio"),
    message: Yup.string().required("campo obligatorio"),
  });

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", title: "", message: "" }}
        onSubmit={submit}
      >
        {({ errors, touched, isValid, isSubmitting, isValidating, dirty }) => (
          <Formulario className="space-y-3">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="font-regular font-medium"
              >
                Email:
              </label>

              <Field
                name="email"
                placeholder="Email Destino, ej: mkt@empresa.com"
                className="border border-gray-300 px-3 py-2 rounded-lg"
              />
              {errors.email && touched.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="asunto"
                className="font-regular font-medium"
              >
                Asunto:
              </label>
              <Field
                name="title"
                placeholder="Asunto..."
                className="border border-gray-300 px-3 py-2 rounded-lg"
              />
              {errors.title && touched.title && (
                <span className="error">{errors.title}</span>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="mensaje"
                className="font-regular font-medium"
              >
                Mensaje:
              </label>
              <Field
                name="message"
                placeholder="Mensaje de Email"
                className="border border-gray-300 px-3 py-2 rounded-lg h-36"
              />
              {errors.message && touched.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>

            <div
              id="botones"
              className="flex gap-5"
            >
              <button
                type="submit"
                className={`flex-1 bg-pink-600 text-white flex justify-center gap-2 items-center p-3 ${
                  (!dirty || !isValid) && "opacity-50"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Enviar
              </button>

              <button
                className="flex-1 bg-gray-800 text-white flex justify-center gap-2 items-center p-3"
                type="reset"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Reset
              </button>
            </div>
          </Formulario>
        )}
      </Formik>
    </>
  );
};

export default Form;
