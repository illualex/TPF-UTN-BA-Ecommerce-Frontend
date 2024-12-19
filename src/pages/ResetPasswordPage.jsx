import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axiosInstance from "../utils/axiosConfig";
import { toast, ToastContainer } from "react-toastify"; // Importar Toastify
import "react-toastify/dist/ReactToastify.css"; // Importar estilos de Toastify
import "../styles/ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar envíos duplicados
  const { reset_token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Evitar doble envío
    if (isSubmitting) return;

    // Verificar que los campos no estén vacíos
    if (!password || !confirmPassword) {
      toast.error("Por favor, completa todos los campos.", {
        position: "bottom-center",
        theme: "colored",
      });
      return;
    }

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      toast.error(
        "Las contraseñas no coinciden. Por favor verifica e intenta nuevamente.",
        {
          position: "bottom-center",
          theme: "colored",
        }
      );
      return;
    }

    // Bloquear el botón durante el envío
    setIsSubmitting(true);

    try {
      await axiosInstance.post(
        `/api/auth/reset-password/${reset_token}`,
        { password }
      );

      toast.success("¡Contraseña actualizada con éxito!", {
        position: "bottom-center",
        theme: "colored",
        autoClose: 3000, // Duración de 3 segundos
        onClose: () => navigate("/signup"), // Redirigir después de cerrar el toast
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Error al restablecer contraseña.",
        {
          position: "bottom-center",
          theme: "colored",
        }
      );
    } finally {
      // Rehabilitar el botón después del envío
      setIsSubmitting(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <main>
      <div className="reset-password-page-wrapper">
        <h1 className="reset-password-title">Restablecer Contraseña</h1>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <label>
            Nueva Contraseña
            <div className="password-input-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Ingresa tu nueva contraseña"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <label>
            Confirmar Contraseña
            <div className="password-input-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="Confirma tu nueva contraseña"
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>

          <button
            className="update-password-btn"
            type="submit"
            disabled={isSubmitting} // Deshabilitar el botón mientras se envía
          >
            {isSubmitting ? "Actualizando..." : "Actualizar Contraseña"}
          </button>
        </form>
      </div>
      {/* ToastContainer para mostrar notificaciones */}
      <ToastContainer position="bottom-center" theme="colored" />
    </main>
  );
};

export default ResetPasswordPage;
