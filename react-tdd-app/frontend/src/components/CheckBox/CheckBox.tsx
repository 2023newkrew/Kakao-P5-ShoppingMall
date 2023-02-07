import React, { useState } from 'react';
import { CheckBoxProps } from 'types';

function CheckBox({ name, description }: CheckBoxProps) {
  return (
    <label htmlFor={name}>
      <input type="checkbox" name={name} />
      {name}
    </label>
  );
}

export default CheckBox;
