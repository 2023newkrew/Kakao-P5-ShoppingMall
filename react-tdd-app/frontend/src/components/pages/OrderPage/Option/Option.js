import React from "react";

export default function Option({ name }) {
  return (
    <div>
      <form>
        <input type="checkbox" id={`${name} checkbox`} />
        <label htmlFor={`${name} checkbox`} data-testid="option-label">
          {name}
        </label>
      </form>
    </div>
  );
}
