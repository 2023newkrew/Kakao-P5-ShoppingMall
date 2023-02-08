import React, { useContext, useEffect, useState } from 'react';
import { OrderStateContext } from 'contexts/OrderContext';
import { QuantityInputProps } from 'types';

function QuantityInput({ name, imagePath, description, updateOrder }: QuantityInputProps) {
  const [quantity, setQuantity] = useState(0 as number);
  const { order } = useContext(OrderStateContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[^0-9]/g;
    const { value } = event.target;
    setQuantity(Number(value.replace(regex, '')));
    updateOrder(Number(value.replace(regex, '')), name);
  };

  useEffect(() => {
    if (order.products.name !== name) {
      setQuantity(0);
    }
  }, [order]);

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
