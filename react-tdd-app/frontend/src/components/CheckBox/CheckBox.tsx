import React, { useState } from 'react';

type CheckBoxProps = {
  name: string;
  description: string;
};

function CheckBox({ name, description }: CheckBoxProps) {
  return (
    <label htmlFor={name}>
      <input type="checkbox" name={name} />
      {name}
    </label>
  );
}

export default CheckBox;
