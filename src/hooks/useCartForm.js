import { useState } from "react";

const useCartForm = (onSubmit) => {
  const [postalCode, setPostalCode] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");
  const [discountCode, setDiscountCode] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!postalCode || isNaN(postalCode))
      newErrors.postalCode = "El código postal debe ser un número válido.";
    if (!shipping) newErrors.shipping = "Debes seleccionar un método de envío.";
    if (!payment) newErrors.payment = "Debes seleccionar una forma de pago.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit({ postalCode, shipping, payment, discountCode });
      setSubmitted(true);
    }
  };

  return {
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
  };
};

export default useCartForm;
