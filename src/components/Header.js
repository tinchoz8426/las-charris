import { Carousel } from "react-bootstrap";
import carouselImage1 from '../assets/images/carousel1.webp';
import carouselImage2 from '../assets/images/carousel2.webp';
import carouselImage3 from '../assets/images/carousel3.webp';
import "./Header.css";

function Header() {
  return (
    <Carousel className="carousel-container" variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="Imagen Carrusel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="Imagen Carrusel 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage3}
          alt="Imagen Carrusel 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
