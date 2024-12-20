import { useState } from "react";
import { toast } from "react-toastify";

const useHelpForm = (onSuccess) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    phone: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (name === "orderNumber" || name === "phone") {
      const numberValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numberValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "file" ? files[0] : value,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nombre y Apellido son obligatorios";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email es obligatorio y debe ser válido";
    if (!formData.orderNumber)
      newErrors.orderNumber = "Número del pedido es obligatorio";
    if (!formData.description)
      newErrors.description = "Descripción es obligatoria";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      toast.success("¡Formulario enviado con éxito!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      onSuccess();
    } else {
      setErrors(newErrors);
    }
  };

  return {
    formData,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    setSubmitted,
  };
};

export default useHelpForm;
