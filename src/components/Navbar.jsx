import React, { useState, useEffect, useRef } from "react"; // useRef agregado
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo/titulo3.png";
import {
  FaMagnifyingGlass,
  FaCartPlus,
  FaUserLarge,
  FaBars,
  FaBarsStaggered,
} from "react-icons/fa6";
import { useGlobalContext } from "../contexts/GlobalContext";
import axiosInstance from "../utils/axiosConfig";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda
  const { getCartItemCount, username, logout } = useGlobalContext(); // Asegúrate de tener los datos del usuario en el contexto
  const navigate = useNavigate(); // Aquí defines navigate
  
  // Referencia para el dropdown del usuario
  const userMenuRef = useRef(null);

  // Función para cerrar el menú si se hace clic fuera de él
  const handleClickOutside = (e) => {
    if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
      setIsMenuOpen(false); // Cerrar el dropdown
    }
  };

  useEffect(() => {
    // Añadir el event listener para detectar clics fuera del dropdown
    document.addEventListener("click", handleClickOutside);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/home");  // Redirigir a la página de inicio después de cerrar sesión
  };
  

  const handleSearch = async () => {
    try {
      if (!searchTerm.trim()) {
        console.warn("Por favor, ingresa un término de búsqueda.");
        navigate("/products", { state: { searchResults: null } });
        return;
      }

      const response = await axiosInstance.get(
        `/api/products/search?name=${encodeURIComponent(
          searchTerm
        )}`
      );

      const products = response?.data?.payload?.products || [];
      console.log("Productos obtenidos del backend:", products);

      if (products.length === 0) {
        console.log(
          "No se encontraron productos para el término proporcionado."
        );
      }

      navigate("/products", { state: { searchResults: products, searchTerm } });
    } catch (err) {
      console.error("Error al buscar productos:", err.message || err);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-top">
          <Link to="/home" className="navbar-logo-link">
            <img src={logo} alt="GamerMania Logo" className="navbar-logo" />
          </Link>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button className="search-button" onClick={handleSearch}>
              <FaMagnifyingGlass className="search-icon" />
            </button>
          </div>

          <div className={`navbar-icons ${isMenuOpen ? "active" : ""}`}>
            <Link to="/cart" className="btn-cart">
              <FaCartPlus />
              {getCartItemCount() > 0 && (
                <span className="cart-item-count">{getCartItemCount()}</span>
              )}
            </Link>

            {username ? (
              <div className="user-menu" ref={userMenuRef}>
                <button className="btn-user" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <FaUserLarge />
                  &nbsp;{username}
                </button>
                <div className={`user-dropdown ${isMenuOpen ? "show" : ""}`}>
                  <Link to="/account" className="user-dropdown-link">
                    <button>Mi Cuenta</button>
                  </Link>
                  <button onClick={handleLogout}>Cerrar Sesión</button>
                </div>
              </div>
            ) : (
              <Link to="/signup" className="btn-login">
                <FaUserLarge />
                &nbsp;Iniciar sesión
              </Link>
            )}
          </div>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>

        <div className={`navbar-bottom ${isMenuOpen ? "active" : ""}`}>
          <Link to="/home" className="navbar-link">
            Inicio
          </Link>
          <Link to="/products" className="navbar-link">
            Productos
          </Link>
          <Link to="/custom" className="navbar-link">
            Arma tu PC
          </Link>
          <Link to="/help" className="navbar-link">
            Ayuda
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
