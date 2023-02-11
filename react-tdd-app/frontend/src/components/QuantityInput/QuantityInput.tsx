import React, { useContext, useEffect, useState } from 'react';
import { OrderStateContext } from 'contexts/OrderContext';
import { QuantityInputProps } from 'types';
import { removeCharacter } from 'utils/shared';

function QuantityInput({ name, imagePath, updateOrder }: QuantityInputProps) {
  const [quantity, setQuantity] = useState(0 as number);
  const { order } = useContext(OrderStateContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuantity(removeCharacter(value));
    updateOrder(removeCharacter(value), name);
  };

  useEffect(() => {
    if (order.travel.name !== name) {
      setQuantity(0);
    } else {
      setQuantity(order.travel.quantity);
    }
  }, [order]);

  return (
    <div>
      <img alt={`${name}`} src={imagePath} />
      <div className="margin-top--10">
        <span className="margin-right--10">{name}</span>
        <input
          type="text"
          aria-label="quantity input"
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
