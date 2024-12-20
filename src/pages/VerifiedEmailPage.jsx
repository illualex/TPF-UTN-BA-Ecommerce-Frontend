import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import "../styles/VerifiedEmailPage.css";

const VerifiedEmailPage = () => {
  const { verificationToken } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axiosInstance.get(`/api/auth/verify/${verificationToken}`);
      } catch (error) {
        console.error("Error verificando el correo:", error);

        navigate("/error");
      }
    };

    if (verificationToken) {
      verifyEmail();
    }
  }, [verificationToken, navigate]);

  return (
    <div className="verification-container">
      <h1>¡Correo Electrónico Verificado!</h1>
      <p>
        Tu correo ha sido verificado con éxito. Ahora puedes cerrar esta
        ventana.
      </p>
      <button onClick={() => navigate("/home")}>Cerrar</button>
    </div>
  );
};

export default VerifiedEmailPage;
