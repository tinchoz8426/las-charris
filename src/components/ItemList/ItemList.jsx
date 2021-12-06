import React, { Fragment } from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
  return(
    <Fragment>
      {items.map((item)=>{
        return <Item key={item.id} item={item}/>
      })}
    </Fragment>
  )
}

export default ItemList;