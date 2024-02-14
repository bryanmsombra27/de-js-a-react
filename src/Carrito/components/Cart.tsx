import { FC } from "react";
import carrito from "../img/cart.png";

interface CartProps {}
const Cart: FC<CartProps> = ({}) => {
  return (
    <li className="submenu">
      <img
        src={carrito}
        id="img-carrito"
      />
      <div id="carrito">
        <table
          id="lista-carrito"
          className="u-full-width"
        >
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>

        <a
          href="#"
          id="vaciar-carrito"
          className="button u-full-width"
        >
          Vaciar Carrito
        </a>
      </div>
    </li>
  );
};

export default Cart;
