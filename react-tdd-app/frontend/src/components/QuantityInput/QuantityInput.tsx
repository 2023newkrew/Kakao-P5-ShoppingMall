import React from 'react';

type QuantityInputProps = {
  name: string;
  imagePath: string;
  description: string;
};

function QuantityInput({ name, imagePath, description }: QuantityInputProps) {
  return (
    <div>
      <img alt={`${name}`} src={imagePath} />

      <div className="margin-top--10">
        <span className="margin-right--10">{name}</span>
        <input type="number" />
      </div>
    </div>
  );
}

export default QuantityInput;
