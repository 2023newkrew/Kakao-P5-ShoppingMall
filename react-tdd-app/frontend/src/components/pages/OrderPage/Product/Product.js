import React from "react";
import "./Product.css";

export default function Product({ name, imagePath, updateOrderData }) {
  const handleChange = (event) => {
    updateOrderData(name, event.target.value);
  };

  return (
    <div className="product-container">
      <img src={`http://localhost:4000${imagePath}`} alt={`${name} product`} />
      <form>
        <label htmlFor={`${name}-product-input`}>{name}</label>
        <input type="number" min="0" defaultValue={0} id={`${name}-product-input`} onChange={handleChange}></input>
      </form>
    </div>
  );
}
