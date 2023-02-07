import React, { useEffect, useState } from 'react';
import { QuantityInputProps } from 'types';

function QuantityInput({ name, imagePath, description }: QuantityInputProps) {
  const [quantity, setQuantity] = useState('' as string | number);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const { value } = event.target;

    console.log('r', value, value.replace(regex, ''));
    setQuantity(value.replace(regex, ''));
  };
  useEffect(() => {
    console.log(quantity);
  });

  return (
    <div>
      <img alt={`${name}`} src={imagePath} />

      <div className="margin-top--10">
        <span className="margin-right--10">{name}</span>
        <input
          type="text"
          value={quantity}
          onChange={(event) => {
            handleOnChange(event);
          }}
        />
      </div>
    </div>
  );
}

export default QuantityInput;
