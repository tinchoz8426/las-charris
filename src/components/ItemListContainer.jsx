import React, { Fragment, useState } from 'react';
import ItemList from './ItemList';
import { products } from './Products';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000);
  })
  promise
    .then((res) =>{
    setItems(res);
  })
    .catch((err) => {
      console.log(err);
  })

  return (
    <Fragment>
      <div className="container-list">
      <ItemList items={items}/>

      </div>
    </Fragment>
  );
};

export default ItemListContainer;
