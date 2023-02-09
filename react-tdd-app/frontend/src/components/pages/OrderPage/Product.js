import React from "react";

export default function Product({ name, imagePath }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img src={`http://localhost:4000${imagePath}`} alt={`${name} product`} style={{ width: "75%" }} />
      <form>
        <label htmlFor={`${name}-product-input`}>{name}</label>
        <input type="number" min="0" defaultValue={0} id={`${name}-product-input`}></input>
      </form>
    </div>
  );
}
