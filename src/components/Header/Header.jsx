import carouselImage1 from "../../assets/images/carousel1.webp";
import carouselImage2 from "../../assets/images/carousel2.webp";
import carouselImage3 from "../../assets/images/carousel3.webp";
import "./Header.css";

function Header() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-container"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carouselImage1} className="d-block w-100" alt="Lascharris" />
        </div>
        <div className="carousel-item">
          <img src={carouselImage2} className="d-block w-100" alt="Lascharris" />
        </div>
        <div className="carousel-item">
          <img src={carouselImage3} className="d-block w-100" alt="Lascharris" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Header;
