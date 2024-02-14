import { FC } from "react";
import logo from "../img/logo.jpg";
import Cart from "./Cart";

interface HeaderProps {}
const Header: FC<HeaderProps> = ({}) => {
  return (
    <header
      id="header"
      className="header"
    >
      <div className="container">
        <div className="row">
          <div className="four columns">
            <img
              src={logo}
              id="logo"
            />
          </div>
          <div className="two columns u-pull-right">
            <ul>
              <Cart />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
