import React, { useState } from "react";
import "../styles/RegisterPage.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify"; // Importar toast
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar el CSS

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "El nombre es requerido";
    if (!lastName) formErrors.lastName = "El apellido es requerido";
    if (!dni) formErrors.dni = "El DNI es requerido";
    if (!phone) formErrors.phone = "El número de teléfono es requerido";
    if (!email) formErrors.email = "El email es requerido";
    if (!password) formErrors.password = "La contraseña es requerida";
    if (password !== confirmPassword)
      formErrors.confirmPassword = "Las contraseñas no coinciden";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Utilizar toast.promise para mostrar la notificación según el resultado
      toast
        .promise(
          axios.post("http://localhost:5000/api/auth/register", {
            name,
            lastName,
            dni,
            phone,
            email,
            password,
          }),
          {
            pending: "Registrando usuario...",
            success:
              "¡Correo De Registro Enviado! Confirma tu correo para completar el registro.",
            error: "El correo ya está registrado en nuestro sistema.",
          }
        )
        .then(() => {
          setTimeout(() => {
            navigate("/signup");
          }, 5000); // Retraso de 2 segundos
        })
        .catch((err) => {
          console.error(err);
          // Si se produce un error, el toast de error ya se maneja con la promesa
        });
    }
  };

  return (
    <main>
      <div className="register-page-wrapper">
        <h1 className="register-title">Crea un Usuario</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nombre
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  // Permite solo letras (mayúsculas y minúsculas), acentos, ñ y espacio
                  setName(
                    e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
                  );
                }}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </label>

            <label>
              Apellido
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  // Permite solo letras (mayúsculas y minúsculas), acentos, ñ y espacio
                  setLastName(
                    e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]/g, "")
                  );
                }}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </label>
          </div>

          <div className="form-row">
            <label>
              DNI
              <input
                type="text"
                name="dni"
                value={dni}
                onChange={(e) => {
                  // Permite solo números
                  setDni(e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              {errors.dni && (
                <span className="error-message">{errors.dni}</span>
              )}
            </label>

            <label>
              Número de Teléfono
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => {
                  // Permite solo números
                  setPhone(e.target.value.replace(/[^0-9]/g, ""));
                }}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </label>
          </div>

          <label>
            Correo Electrónico
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </label>

          <div className="form-row">
            <label>
              Contraseña
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="toggle-password-visibility"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </label>

            <label>
              Repetir Contraseña
              <div className="password-container">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() =>
                    setConfirmPasswordVisible(!confirmPasswordVisible)
                  }
                  className="toggle-password-visibility"
                >
                  {confirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </label>
          </div>

          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </form>
        <div className="register-links">
          <p>
            ¿Ya tienes una cuenta? <Link to="/signup">Inicia sesión</Link>
          </p>
          <p>
            ¿Te olvidaste la contraseña?{" "}
            <Link to="/recover">Recupérala aquí</Link>
          </p>
        </div>
      </div>
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

export default RegisterPage;
