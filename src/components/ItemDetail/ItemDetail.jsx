import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ItemDetail/ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";


function ItemDetail({ objeto }) {
  const { addItem } = useCart();

  const [itemCountVisible, setItemCountVisible] = useState(true);
  const [buyButtonVisibility, setBuyButtonVisibility] = useState(true);

  const [itemsCount, setItemsCount] = useState(0);

  const onAdd = (count) => {
    setItemsCount(count);
  };

  const onAddToCart = (item, quantity) => {
    addItem(item, quantity);
    setItemCountVisible(false);
    setBuyButtonVisibility(false);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row py-5">
          <div className="col d-flex align-items-center justify-content-center">
            <img
              style={{
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
              src={objeto.img}
              alt="Foto producto"
            />
          </div>
          <div className="col info-container">
            <div className="d-flex flex-column justify-content-start">
              <h2>{objeto.title}</h2>
              <h2>$ {objeto.price}</h2>
              <p>{objeto.description}</p>
              {itemCountVisible && (
                <ItemCount stock={objeto.stock} initial={0} onAdd={onAdd} />
              )}
              {buyButtonVisibility && (
                <button
                  onClick={() => onAddToCart(objeto, itemsCount)}
                  className="w-50 align-self-center"
                  style={{
                    backgroundColor: "rgb(79, 192, 172)",
                    border: "none",
                    padding: "1rem 0.5rem",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                  }}
                  disabled={itemsCount === 0}
                >
                  Agregar al carrito
                </button>
              )}
                                <div className="col text-muted d-flex align-items-center">
                  Stock: {objeto.stock} unidades disponibles.
                  </div>
              {!buyButtonVisibility && (
                <div className="contenedor-terminar-compra">
                  <h1>x{itemsCount} Unidades</h1>
                  <Link to="/cart">
                    <button
                      className="w-50 align-self-center"
                      style={{
                        backgroundColor: "rgb(79, 192, 172)",
                        border: "none",
                        padding: "1rem 0.5rem",
                        borderRadius: "10px",
                        textTransform: "uppercase",
                      }}
                    >
                      Terminar compra
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ItemDetail;
