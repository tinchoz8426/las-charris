import Mailer from "../components/Mailer/Mailer";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center pt-5">¡Estamos aquí para lo que necesites!</h1>
          <p className="text-center fs-4">Envianos tu consulta y nos pondremos en contacto a la brevedad.</p>
        </div>
      </div>
      <Mailer />
    </>
  );
};

export default Contact;
