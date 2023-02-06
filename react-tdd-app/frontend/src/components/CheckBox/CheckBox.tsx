import React, { useState } from 'react';

type CheckBoxProps = {
  name: string;
  description: string;
};

function CheckBox({ name, description }: CheckBoxProps) {
  const [test, setTest] = useState(0);
  console.log(test);
  return (
    <label htmlFor={name}>
      <input
        type="checkbox"
        name={name}
        onClick={() => {
          setTest(test + 1);
        }}
      />
      {name}
    </label>
  );
}

export default CheckBox;
