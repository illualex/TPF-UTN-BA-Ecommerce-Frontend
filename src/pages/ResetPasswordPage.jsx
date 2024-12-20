import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axiosInstance from "../utils/axiosConfig";
import { toast } from "react-toastify";
import "../styles/ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { reset_token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!password || !confirmPassword) {
      toast.error("Por favor, completa todos los campos.", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.error(
        "Las contraseñas no coinciden. Por favor verifica e intenta nuevamente.",
        {
          position: "top-center",
          theme: "colored",
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await axiosInstance.post(`/api/auth/reset-password/${reset_token}`, {
        password,
      });

      toast.success("¡Contraseña actualizada con éxito!", {
        position: "top-center",
        theme: "colored",
        autoClose: 3000,
        onClose: () => navigate("/signup"),
      });
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Error al restablecer contraseña.",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    } finally {
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Actualizando..." : "Actualizar Contraseña"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ResetPasswordPage;
