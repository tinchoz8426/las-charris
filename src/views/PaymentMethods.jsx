import './PaymentMethods.css';
import paymentImage from "../assets/images/payment-image.png";

const PaymentMethods = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center pt-5">Nuestros medios de pago</h1>
          <p className="text-center fs-4">
            Pronto iremos añadiendo mas medios de pago, para que puedas elegir
            tu preferido.
          </p>
        </div>
        <div className="row payment-container">
          <div className="col d-flex align-items-center payment-image-container">
            <img src={paymentImage} alt="Medios de pago" />
          </div>
          <div className="col d-flex align-items-center">
            <ul className="payment-list">
                <li>💳 Efectivo</li>
                <li>💳 Transferencia bancaria</li>
                <li>💳 Mercado Pago - Proximamente</li>
                <li>💳 Todo Pago - Proximamente</li>
                <li>💳 MODO - Proximamente</li>
                <li>💳 Tarjetas de credito y debito- Proximamente</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
