import React, { Fragment, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";
import { products } from "./Products";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  const [loader, setLoader] = useState(false);
  const { itemId } = useParams();
  useEffect(() => {
    setLoader(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    promise
      .then((res) => {
        itemId && setItems(res.find((items) => items.id === itemId));
      })
      .catch(() => {
        console.log("Error al cargar");
      })
      .finally(() => {
        setLoader(false)
      });
  }, [itemId]);

  return ( loader ? <Spinner/> :
    <Fragment>
      
        <ItemDetail items={items} />

    </Fragment>
  );
};

export default ItemDetailContainer;
