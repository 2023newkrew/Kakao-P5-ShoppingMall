import React from "react";

export default function Option({ name, updateOrderData }) {
  const handleChange = (event) => {
    updateOrderData(name, event.target.checked ? 1 : 0);
  };
  return (
    <div>
      <form>
        <input type="checkbox" id={`${name} checkbox`} onChange={handleChange} />
        <label htmlFor={`${name} checkbox`} data-testid="option-label">
          {name}
        </label>
      </form>
    </div>
  );
}
