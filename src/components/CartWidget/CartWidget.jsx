import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import "./CartWidget.css";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Fragment>
      <Link to="/cart" style={{color: "black"}}>
        <div className="cart-container">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          
        </div>
      </Link>
    </Fragment>
  );
}

export default CartWidget;
