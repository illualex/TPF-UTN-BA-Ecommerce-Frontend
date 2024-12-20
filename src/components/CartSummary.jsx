import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook para redirigir
import { toast } from "react-toastify";
import useCartForm from "../hooks/useCartForm";
import { useCart } from "../hooks/useCart"; // Hook para manipular el carrito
import { useGlobalContext } from "../contexts/GlobalContext"; // Para obtener el usuario logueado
import LoginReminderPopup from "../components/LoginReminderPopup"; // Popup de recordatorio de login
import "../styles/CartSummary.css";
import envioOca from "../assets/images/icons/envio-oca.png";
import envioArgentino from "../assets/images/icons/envio-argentino.png";
import envioAndreani from "../assets/images/icons/envio-andreani.png";
import envioExpress from "../assets/images/icons/envio-express.png";

const CartSummary = ({ cartItems, onSubmit, onRemove }) => {
  const navigate = useNavigate();
  const { clearCart } = useCart(); // Hook para limpiar el carrito
  const { username } = useGlobalContext(); // Obtener el usuario logueado

  const {
    postalCode,
    setPostalCode,
    shipping,
    setShipping,
    payment,
    setPayment,
    discountCode,
    setDiscountCode,
    errors,
    handleSubmit,
    submitted,
  } = useCartForm(onSubmit);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    }).format(price);
  };

  const handleFinalizarCompra = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    if (!cartItems.length) {
      toast.error("El carrito está vacío.");
      return;
    }

    if (!postalCode || !shipping || !payment) {
      toast.error("Por favor complete todos los campos.", {position: "bottom-right", theme: "colored", });
      return;
    }

    if (!username) {
      setIsPopupOpen(true); // Muestra el popup si el usuario no está logueado
      return;
    }

    toast.info("Procesando compra...", { autoClose: 2000, position: "bottom-right", theme: "colored", });

    try {
      // Simula una carga de 2 segundos
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Aquí se muestra el mensaje de éxito cuando la compra es procesada
      toast.success("¡Compra realizada con éxito!", { autoClose: 3000, position: "bottom-right", theme: "colored", });

      // Eliminar todos los productos del carrito
      cartItems.forEach((item) => onRemove(item.id));

      // Redirigir a la página de productos después de 5 segundos
      setTimeout(() => {
        navigate("/products");
      }, 2000);
    } catch (error) {
      toast.error("Ocurrió un error. Intenta nuevamente.");
    }
  };

  const handleLoginRedirect = () => {
    setIsPopupOpen(false);
    navigate("/signup"); // Redirige a la página de login/registro
  };

  return (
    <div className="cart-summary">
      <h3>Resumen de Compra</h3>
      <form onSubmit={handleFinalizarCompra}>
        <div className="shipping-section">
          <h4>Envío:</h4>
          <div className="shipping-details">
            <div className="postal-code">
              <label htmlFor="postal-code">Código postal:</label>
              <input
                id="postal-code"
                type="number"
                placeholder="Código postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                min="0"
              />
              {errors.postalCode && (
                <span className="error" style={{ color: "red" }}>
                  {errors.postalCode}
                </span>
              )}
            </div>

            <div className="shipping-options">
              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="oca"
                  checked={shipping === "oca"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                <img src={envioOca} alt="OCA" className="shipping-image" />
                OCA
              </label>
              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="correo-argentino"
                  checked={shipping === "correo-argentino"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                <img
                  src={envioArgentino}
                  alt="Correo Argentino"
                  className="shipping-image"
                />
                Correo Argentino
              </label>
              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="andreani"
                  checked={shipping === "andreani"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                <img
                  src={envioAndreani}
                  alt="Andreani"
                  className="shipping-image"
                />
                Andreani
              </label>
              <label className="shipping-option">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shipping === "express"}
                  onChange={(e) => setShipping(e.target.value)}
                />
                <img
                  src={envioExpress}
                  alt="Envío Express"
                  className="shipping-image"
                />
                Envío Express
              </label>
              {errors.shipping && (
                <span className="error" style={{ color: "red" }}>
                  {errors.shipping}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="payment-section">
          <h4>Forma de Pago:</h4>
          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="credit-card"
                checked={payment === "credit-card"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Tarjeta de Crédito/Débito
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={payment === "paypal"}
                onChange={(e) => setPayment(e.target.value)}
              />
              PayPal
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="transfer"
                checked={payment === "transfer"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Transferencia Bancaria
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cash"
                checked={payment === "cash"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Pago en Efectivo
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="wallet"
                checked={payment === "wallet"}
                onChange={(e) => setPayment(e.target.value)}
              />
              Billeteras Virtuales
            </label>
            {errors.payment && (
              <span className="error" style={{ color: "red" }}>
                {errors.payment}
              </span>
            )}
          </div>
        </div>

        <div className="discount-section">
          <label htmlFor="discount-code">Código de descuento:</label>
          <input
            id="discount-code"
            type="text"
            placeholder="Introduce tu código"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
          />
        </div>

        <div className="total-section">
          <p>Precio: {formatPrice(total)}</p>
        </div>

        <button type="submit">Finalizar Compra</button>
      </form>

      {/* Popup de recordatorio de login */}
      <LoginReminderPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onLoginRedirect={handleLoginRedirect}
      />
    </div>
  );
};

export default CartSummary;
