import React from "react";
import "./Product.css";

export default function Product({ name, imagePath }) {
  return (
    <div className="product-container">
      <img src={`http://localhost:4000${imagePath}`} alt={`${name} product`} />
      <form>
        <label htmlFor={`${name}-product-input`}>{name}</label>
        <input type="number" min="0" defaultValue={0} id={`${name}-product-input`}></input>
      </form>
    </div>
  );
}
