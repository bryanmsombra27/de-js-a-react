import { FC } from "react";

interface SpinnerProps {}
const Spinner: FC<SpinnerProps> = ({}) => {
  return (
    <div
      className="spinner-border text-danger"
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;
