import React, { useState } from "react";
import axios from "axios";
import "../styles/RecoverPasswordPage.css";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); // Estado para el error del email
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(""); // Limpiar el error del correo antes de hacer una nueva validación

    if (!email) {
      // Si el correo está vacío, mostramos el error
      setEmailError("El correo electrónico es requerido");
      return;
    }

    toast
      .promise(
        axios.post("http://localhost:5000/api/auth/forgot-password", { email }),
        {
          pending: "Enviando correo de recuperación...",
          success: "¡Correo enviado con éxito! Revisa tu bandeja de entrada.",
        }
      )
      .then((response) => {
        // Redirigir después de enviar el correo exitosamente
        setTimeout(() => {
          navigate("/signup");
        }, 4800);
      })
      .catch((err) => {
        if (err.response) {
          const { message } = err.response.data;

          if (message === "USER_NOT_FOUND") {
            // Mostrar un mensaje amigable si el correo no está registrado
            toast.error("El correo no está registrado en nuestra base de datos.");
          } else {
            toast.error("Ocurrió un error inesperado. Inténtalo nuevamente.");
          }
        } else if (err.request) {
          toast.error("No se pudo conectar con el servidor. Verifica tu conexión.");
        } else {
          toast.error("Error al enviar la solicitud.");
        }
      });
  };

  return (
    <main>
      <div className="recover-page-wrapper">
        <h1 className="recover-title">Recuperación de Contraseña</h1>
        <form className="recover-form" onSubmit={handleSubmit}>
          <label>
            Correo Electrónico
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
            />
            {emailError && <span className="error-message">{emailError}</span>}
          </label>
          <button type="submit">Enviar correo de recuperación</button>
        </form>

        <div className="recover-links">
          <p>
            ¿Tienes una cuenta? <Link to="/signup">Inicia sesión aquí</Link>
          </p>
          <p>
            ¿No tienes cuenta? <Link to="/register">Registrarse aquí</Link>
          </p>
        </div>
      </div>

      {/* ToastContainer para mostrar las notificaciones */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </main>
  );
};

export default RecoverPasswordPage;
