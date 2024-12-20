import React, { useState } from "react";
import "../styles/Footer.css";
import logo from "../assets/images/logo/titulo1.png";
import axiosInstance from "../utils/axiosConfig";
import { toast, Slide } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!email) {
      toast.error("Por favor, ingresa un correo electrónico.", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axiosInstance.post("/api/subscriptions", {
        email,
      });
      toast.success("¡Te has suscrito exitosamente!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
      setEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        toast.error("Este correo ya está suscrito.", {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
        });
      } else {
        toast.error(
          "Ocurrió un error al suscribirte. Inténtalo de nuevo más tarde.",
          {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Slide,
          }
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section left">
          <h2>Enlaces de Ayuda Rápida</h2>
          <ul>
            <li>
              <a href="#">Información de Nosotros</a>
            </li>
            <li>
              <a href="#">Cómo Realizar un Pedido</a>
            </li>
            <li>
              <a href="#">Formas de Pago</a>
            </li>
            <li>
              <a href="#">Garantía / Cambios / Devoluciones</a>
            </li>
            <li>
              <a href="#">Formas de Envío</a>
            </li>
            <li>
              <a href="#">Cómo Seguir un Envío</a>
            </li>
          </ul>
        </div>

        <div className="footer-section middle">
          <img src={logo} alt="Logo" className="logo-img" />
          <p>
            &copy; {new Date().getFullYear()} GamerMania. Todos los derechos
            reservados.
          </p>
        </div>

        <div className="footer-section right">
          <h2>Suscríbete a nuestras Noticias</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="input-gmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="btn-subscribe"
              disabled={isSubmitting}
            >
              Suscribirse
            </button>
          </form>
          <div className="social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
