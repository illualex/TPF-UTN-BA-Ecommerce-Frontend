import React, { useState } from "react";
import "../styles/SignUpPage.css"; // Asegúrate de que el CSS esté importado
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Íconos para mostrar/ocultar la contraseña
import { Link } from "react-router-dom"; // Importar Link para redirigir a la página de registro
import axios from "axios"; // Importar Axios
import { toast } from "react-toastify"; // Importar react-toastify

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor ingresa todos los campos"); // Usando toast en lugar de alert
      return;
    }
    try {
      // Realizar la solicitud al backend para iniciar sesión
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      // Asumir que el backend devuelve un token al iniciar sesión correctamente
      const token = response.data.payload.token;
      const user = response.data.payload.user;

      if (token) {
        localStorage.setItem("user", JSON.stringify(user));
        // Guardar el token en localStorage o en el contexto global si es necesario
        localStorage.setItem("token", token);
        login(user); // Puedes actualizar el estado de login en el contexto si es necesario
        navigate("/home"); // Redirigir a la página de inicio
      }
    } catch (err) {
      // Manejo de errores, como usuario no encontrado o contraseña incorrecta
      toast.error("Error al iniciar sesión. Verifica tus credenciales."); // Usando toast en lugar de alert
      console.error(err);
    }
  };

  return (
    <main>
      <div className="sign-up-container">
        <h1 className="sign-up-title">Inicio de sesión</h1>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label>
            Correo Electrónico
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
                  required
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="eye-icon"
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </label>
          </div>

          <button type="submit" className="btn-signup">
            Iniciar Sesión
          </button>
        </form>

        {/* Enlace para redirigir al usuario a la página de registro */}
        <div className="sign-up-links">
          <p>
            ¿No tienes cuenta? <Link to="/register">Registrarse aquí</Link>
          </p>
          <p>
            ¿Te olvidaste la contraseña?{" "}
            <Link to="/recover">Recupérala aquí</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
