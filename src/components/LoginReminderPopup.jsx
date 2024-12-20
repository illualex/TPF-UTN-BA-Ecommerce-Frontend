import React from "react";
import "../styles/LoginReminderPopup.css";

const LoginReminderPopup = ({ isOpen, onClose, onLoginRedirect }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        <h3>¡Atención!</h3>
        <p>
          Para finalizar tu compra necesitas iniciar sesión en tu cuenta y
          completar el pago.
        </p>
        <button className="login-button" onClick={onLoginRedirect}>
          Iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default LoginReminderPopup;
