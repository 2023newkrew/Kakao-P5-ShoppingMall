import React, { useContext, useEffect, useState } from 'react';
import { OrderStateContext } from 'contexts/OrderContext';
import { QuantityInputProps } from 'types';
import { removeCharacter } from 'utils/shared';

function QuantityInput({ name, imagePath, description, updateOrder }: QuantityInputProps) {
  const [quantity, setQuantity] = useState(0 as number);
  const { order } = useContext(OrderStateContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(removeCharacter(value));
    updateOrder(removeCharacter(value), name);
  };

  useEffect(() => {
    if (order.products.name !== name) {
      setQuantity(0);
    } else {
      setQuantity(order.products.quantity);
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
