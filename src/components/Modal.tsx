import { FC, ReactNode } from "react";

interface ModalProps {
  body: ReactNode;
  title: string;
  footer?: ReactNode;
}
const Modal: FC<ModalProps> = ({ body, footer, title }) => {
  return (
    <div
      className="modal fade"
      id="modal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable open">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-3 font-bold"
              id="staticBackdropLabel"
            >
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{body}</div>
          {footer && (
            <div className="modal-footer flex justify-content-between">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
