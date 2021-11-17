import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const products = {
        id: 1,
        title: "Srunchie Aurora",
        description: "Scrunchie modelo Aurora, tenemos los mejores Scrunchies.",
        price: 345,
        stock: 5,
        img: "https://res.cloudinary.com/tinchoz8426/image/upload/v1636715435/img1_efa3lm.jpg",
      };
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise
      .then((res) => {
        setItems(res);
      })
      .catch(() => {
        console.log("Error al cargar");
      })
      .finally(() => {
        console.log("Se cargó correctamente");
      });
  }, []);

  return (
    <Fragment>
      {items && items.id ? (
        <ItemDetail items={items} />
      ) : (
        <h1 className="text-center">Cargando...</h1>
      )}
    </Fragment>
  );
};

export default ItemDetailContainer;
