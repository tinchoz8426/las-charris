import React from "react";
import { Button } from "react-bootstrap";

const ItemDetail = ({ items }) => {
  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={items.img} alt="img" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-start">
            <h2>$ {items.price}</h2>
            <h2>{items.title}</h2>
            <h3 className="pb-5">{items.description}</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                paddingBottom: "1rem",
              }}
            >
              <Button variant="danger">
                -
              </Button>
              <p style={{ marginBottom: "0" }}></p>
              <Button variant="success">
                +
              </Button>
            </div>
            <Button variant="primary" className="align-self-center w-50">Agregar al carrito</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
