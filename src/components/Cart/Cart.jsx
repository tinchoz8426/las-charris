import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "../Cart/Cart.css";

function CartPrueba() {
  const { removeItem, products, clear, totalItems, totalPrice } = useCart();

  return (
    <div className="container bloque-producto">
      {products.length > 0 ? (
        <>
          {products.map((elem) => (
            <>
              <div className="contenedor-productos">
                <h1>
                  {elem.title} - Cantidad: {elem.quantity} unidades
                </h1>
                <div className="contenedor-sumas">
                  <h1>${elem.price * elem.quantity}</h1>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(elem)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </>
          ))}
          <h1 className="align-self-center">
            Subtotal: ${totalPrice()} ({totalItems()} unidades)
          </h1>
          <div className="contenedor-pagar-vaciar">
            <button className="btn btn-success">Pagar</button>
            <button
              className="btn btn-warning"
              onClick={() => clear(products.elem)}
            >
              Vaciar carrito
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="align-self-center">No hay productos en su carrito.</h3>

          <Link to="/">
            <button className="btn btn-warning">Volver a la tienda</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default CartPrueba;
