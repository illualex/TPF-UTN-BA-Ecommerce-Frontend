import React from "react";
import "../styles/CartItem.css";

const CartItem = ({ item, onRemove, onIncrease, onDecrease }) => {
  return (
    <>
      <tr>
        <td className="cart-item-details">
          <div className="cart-item-image-container">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="cart-item-title">{item.title}</div>
        </td>
        <td className="cart-item-price">${item.price.toFixed(2)}</td>
        <td className="cart-item-quantity">
          <button onClick={() => onDecrease(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.id)}>+</button>
        </td>
        <td className="cart-item-action">
          <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
