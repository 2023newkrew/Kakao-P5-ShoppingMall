import React from 'react';
import { CheckBoxProps } from 'types';

function CheckBox({ name, updateOrder }: CheckBoxProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    updateOrder(name, checked);
  };

  return (
    <label htmlFor={name}>
      <input type="checkbox" id={name} onChange={handleOnChange} />
      {name}
    </label>
  );
}

export default CheckBox;
