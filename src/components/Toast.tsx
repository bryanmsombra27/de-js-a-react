import { FC } from "react";

interface ToastProps {
  message: string;
}
const Toast: FC<ToastProps> = ({ message }) => {
  return (
    <div className="toast-container position-fixed top-0 end-0 p-3">
      <div
        id="toast"
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header bg-danger text-white">
          <strong className="me-auto text-white">App Recetas</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
};

export default Toast;
