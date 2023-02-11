import { OrderStateContext } from 'contexts/OrderContext';
import React, { useContext, useEffect, useRef } from 'react';
import { CheckBoxProps } from 'types';

function CheckBox({ name, updateOrder }: CheckBoxProps) {
  const { order } = useContext(OrderStateContext);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    updateOrder(name, checked);
  };

  const checkBoxInput = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (order.option.has(name)) {
      if (checkBoxInput.current instanceof Element) checkBoxInput.current.checked = true;
    }
  }, []);

  return (
    <label htmlFor={name}>
      <input type="checkbox" id={name} onChange={handleOnChange} ref={checkBoxInput} />
      {name}
    </label>
  );
}

export default CheckBox;
