import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { reSendEmail, removeEmail } from "../store/EmailSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
interface EmailsProps {}
const Emails: FC<EmailsProps> = ({}) => {
  const emails = useAppSelector((state) => state.emails);
  const dispatch = useAppDispatch();

  const deleteEmail = (id: string) => {
    dispatch(removeEmail(id));
  };

  const resentEmail = (id: string) => {
    dispatch(reSendEmail(id));
    MySwal.fire({
      title: "Enviado!",
      text: "El correo ha sido enviado!",
      icon: "success",
    });
  };

  return (
    <>
      {emails.length > 0 ? (
        <>
          <h5 className="text-3xl">Emails Enviados</h5>
          {emails.map((email) => (
            <div
              className="mt-2 "
              key={email.id}
            >
              <span
                className="close"
                onClick={() => deleteEmail(email.id!)}
              >
                X
              </span>
              <h3 className="title">{email.title}</h3>
              <p>{email.message}</p>

              {!email.isSend && (
                <button
                  className="btn"
                  onClick={() => resentEmail(email.id!)}
                >
                  Enviar
                </button>
              )}
            </div>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Emails;
