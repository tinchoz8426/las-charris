import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import img1 from "../assets/images/img1.jpg";

function ItemCount(props) {

  // Comienzo logica ItemCount
  const [amount, setAmount] = useState(1);

  const onIncrease = () => {
    const newValue = amount + 1;
    if (newValue <= props.stock) {
      setAmount(newValue);
    }
  };

  const onDecrease = () => {
    const newValue = amount - 1;
    if (props.initial <= newValue) {
      setAmount(newValue);
    }
  };
  // Final logica ItemCount

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={img1}
        style={{ maxHeight: "242px", objectFit: "cover" }}
      />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ textTransform: "uppercase", textAlign: "center" }}>
          Scrunchie
        </Card.Title>
        <Card.Text>
         Tenemos un monton de diseños de Scrunchies para que lleves el que mas te guste.
        </Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <Button variant="danger" onClick={ onDecrease }>
            -
          </Button>
          <p style={{ marginBottom: "0" }}>{amount}</p>
          <Button variant="success" onClick={ onIncrease }>
            +
          </Button>
        </div>
        <Button variant="primary">Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCount;
