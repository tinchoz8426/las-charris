import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import { products } from "../Products";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    setLoader(true);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    promise
      .then((res) => {
        catId ? setItems(res.filter((items) => items.category === catId)) :
        setItems(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => (
        setLoader(false)
      ));
  },[catId]);

  return ( loader ? <Spinner/> :
    <Fragment>
      <div className="container-list">
        <ItemList items={items} />
      </div>
    </Fragment>
  );
};

export default ItemListContainer;