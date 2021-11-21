import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ item }) => {
  return (
    <Fragment>
      <Link className="card-container" to={`/product/${item.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={item.img}
          style={{ maxHeight: "242px", objectFit: "cover" }}
        />
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title
            style={{ textTransform: "uppercase", textAlign: "center" }}
          >
            {item.title}
          </Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingBottom: "1rem",
            }}
          >
            <p className="fs-5 mb-0">${item.price}</p>
          </div>
          <Button style={{backgroundColor:"#ebabba", border:"none", color:"#000"}}>Agregar al carrito</Button>
        </Card.Body>
      </Card>
      </Link>
    </Fragment>
  );
};

export default Item;
