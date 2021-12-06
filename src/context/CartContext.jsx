import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => console.log("cambio context", products));

  const addItem = (data, cantidad) => {
    if (isInCart(data)) {
      products.map((prod) => {
        if (prod.id === data.id) {
          return (prod.quantity += cantidad);
        }
        return null //si saco me marca error linea 14:27 map esperaba un valor para retornar
      });
    } else {
      setProducts((state) => {
        return [...state, { ...data, quantity: cantidad }];
      });
    }
  };

  const removeItem = (product) => {
    const dataFiltrada = products.filter((elem) => elem !== product);
    setProducts(dataFiltrada);
    console.log("se elimino --", products);
  };

  function clear() {
    setProducts([]);
  }

  const isInCart = (data) => {
    if (products?.find((elem) => elem.id === data.id)) {
      return true;
    }
  };

  const totalItems = () =>
    products.reduce((acum, items) => acum + items.quantity, 0);
  const totalPrice = () =>
    products.reduce((acum, items) => acum + items.price * items.quantity, 0);

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, clear, products, totalItems, totalPrice }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
