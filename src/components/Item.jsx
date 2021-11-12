import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Fragment>
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
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Item;
