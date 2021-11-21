import React from "react";
import { Row, Container, Col, Button, Image } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = ({ items }) => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col className="d-flex align-items-center justify-content-center">
            <Image style={{ maxHeight: "350px", objectFit: "cover" }} src={items.img} rounded />
          </Col>
          <Col className="info-container">
            <div className="d-flex flex-column justify-content-start">
              <h2>{items.title}</h2>
              <h2>$ {items.price}</h2>
              <p className="pb-5">{items.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  alignItems: "center",
                  paddingBottom: "1rem",
                }}
              >
                <Button variant="danger">-</Button>
                <p style={{ marginBottom: "0" }}>0</p>
                <Button variant="success">+</Button>
              </div>
              <Button style={{backgroundColor:"#ebabba", border:"none", color:"#000"}} className="align-self-center w-50">
                Agregar al carrito
              </Button>
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
