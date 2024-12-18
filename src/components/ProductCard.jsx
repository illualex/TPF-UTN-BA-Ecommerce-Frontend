import React from "react";
import "../styles/ProductCard.css";
import { useGlobalContext } from "../contexts/GlobalContext";

const ProductCard = ({ id, image, title, price }) => {
  const { addToCart } = useGlobalContext();

  const handleAddToCart = () => {
    const product = { id, image, title, price };
    addToCart(product);
  };

  const formattedPrice = price.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">{formattedPrice}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Agregar al carro
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
