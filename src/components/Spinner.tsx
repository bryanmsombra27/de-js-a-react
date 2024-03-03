import { FC } from "react";
import "../css/custom.css";

interface SpinnerProps {}
const Spinner: FC<SpinnerProps> = ({}) => {
  return (
    <>
      <div id="cargando">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
