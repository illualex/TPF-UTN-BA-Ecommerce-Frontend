import React from "react";
import Logo from "../assets/images/icons/construccion.png";
import "../styles/CustomPage.css";

const CustomPage = () => {
  return (
    <main>
      <div className="construction-container">
        <div className="message">
          <img src={Logo} alt="Logo en construcción" />
          <h1>¡Estamos en construcción!</h1>
          <p>
            ¡Gracias por tu paciencia!
            <br /> Estamos trabajando para que esta página esté disponible
            pronto.
          </p>
        </div>
      </div>
    </main>
  );
};

export default CustomPage;
