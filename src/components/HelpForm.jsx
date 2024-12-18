import React from "react";
import useHelpForm from "../hooks/useHelpForm";
import "../styles/HelpForm.css";
import { ToastContainer } from "react-toastify"; // Importa ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar los estilos de Toastify

const HelpForm = ({ onSuccess }) => {
  const {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    setSubmitted,
  } = useHelpForm(onSuccess);

  return (
    <>
      <form className="help-form" onSubmit={handleSubmit}>
        <label>
          Nombre y Apellido
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Número del Pedido
          <input
            type="text"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            pattern="\d*"
            title="Por favor ingrese solo números"
          />
          {errors.orderNumber && (
            <span className="error">{errors.orderNumber}</span>
          )}
        </label>

        <label>
          Número de Teléfono (Opcional)
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            pattern="\d*"
            title="Por favor ingrese solo números"
          />
        </label>

        <label>
          Descripción
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </label>

        <label>
          Imagen del Producto (Opcional)
          <input type="file" name="image" onChange={handleChange} />
        </label>

        <button type="submit">Enviar</button>
      </form>

      {/* Contenedor de las notificaciones */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default HelpForm;
