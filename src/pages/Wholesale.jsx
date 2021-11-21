import workImage from "../assets/images/work-image.png";
import { Row, Container, Col, Image } from "react-bootstrap";

const Wholesale = () => {
  return (
    <>
      <Container>
        <Row className="py-5">
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <h1>Página en construcción</h1>
            <Image
              style={{ maxHeight: "350px", objectFit: "cover" }}
              src={workImage}
              rounded
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Wholesale;
