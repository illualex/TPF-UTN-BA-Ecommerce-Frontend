import React, { useState } from "react";
import "../styles/SignUpPage.css";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosConfig";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor, ingresa todos los campos.", {
        position: "bottom-right",
        theme: "colored",
      });
      return;
    }

    try {
      const response = await axiosInstance.post("/api/auth/login", {
        email,
        password,
      });

      const token = response.data.payload.token;
      const user = response.data.payload.user;

      if (token) {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        login(user);

        toast.success("Inicio de sesión exitoso.", {
          position: "bottom-right",
          autoClose: 2500,
        });

        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (err) {
      toast.error("Error al iniciar sesión. Verifica tus credenciales.", {
        position: "bottom-right",
        theme: "colored",
      });
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
