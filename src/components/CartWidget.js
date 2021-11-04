import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import './CartWidget.css';

function CartWidget() {
  return (
    <Fragment>
      <div className="cart-container">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <p>0</p>
      </div>
    </Fragment>
  );
}

export default CartWidget;
