import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../data/hook";
import {
  Carrito,
  addToCart,
  clearCart,
  lessToCart,
  removeFromCart,
} from "../data/carritoSlice";
import {
  addSpaceCourse,
  removeSpaceCourse,
  resetAllSpaceCourse,
  resetSpaceCourse,
} from "../data/cursosSlice";

interface CartProps {}
const Cart: FC<CartProps> = ({}) => {
  const dispatch = useAppDispatch();
  const carrito = useAppSelector((state) => state.carrito);
  const totalPrice = carrito.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  const addCart = (item: Carrito) => {
    dispatch(
      addToCart({
        id: item.id,
        courseImage: item.image,
        title: item.name,
        discountPrice: item.price,
        stock: item.stock,
      })
    );
    dispatch(removeSpaceCourse({ id: item.id }));
  };
  const lessFromCart = (id: number) => {
    dispatch(
      lessToCart({
        id,
      })
    );
    dispatch(
      addSpaceCourse({
        id,
      })
    );
  };
  const removeCourseFromCart = (id: number) => {
    dispatch(removeFromCart({ id }));
    dispatch(resetSpaceCourse({ id }));
  };

  const cleanCart = () => {
    dispatch(clearCart());
    dispatch(resetAllSpaceCourse());
  };

  return (
    <li className="submenu">
      <img
        src="img-carritoApp/cart.png"
        id="img-carrito"
      />
      <div id="carrito">
        {carrito.length > 0 ? (
          <>
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
              <tbody>
                {carrito.map((item) => (
                  <tr
                    key={item.id}
                    className="relative"
                    // onClick={() => removeCourseFromCart(item.id)}
                  >
                    <td>
                      <img
                        src={item.image}
                        alt=""
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      {item.quantity > 1 && (
                        <span
                          className="margin-x"
                          onClick={() => lessFromCart(item.id)}
                        >
                          -
                        </span>
                      )}

                      {item.quantity}
                      {item.quantity < item.stock && (
                        <span
                          className="margin-x"
                          onClick={() => addCart(item)}
                        >
                          +
                        </span>
                      )}
                      <span
                        onClick={() => removeCourseFromCart(item.id)}
                        className="float-button"
                      >
                        X
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="totalPrice">
              <h6>
                Total a pagar: <strong>${totalPrice}</strong>
              </h6>
            </div>

            <a
              href="#"
              id="vaciar-carrito"
              className="button u-full-width"
              onClick={(e) => {
                e.preventDefault();
                cleanCart();
              }}
            >
              Vaciar Carrito
            </a>
          </>
        ) : (
          <h5>No se han agregado cursos al carrito</h5>
        )}
      </div>
    </li>
  );
};

export default Cart;
