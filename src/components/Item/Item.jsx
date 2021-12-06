import React from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img style={{ maxHeight: "242px", objectFit: "cover" }} src={item.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">${item.price}</p>
          <Link to={`/item/${item.id}`} style={{backgroundColor:"rgb(79, 192, 172)", border:"none", color:"#fff"}} className="btn btn-primary">
            Comprar
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item;
