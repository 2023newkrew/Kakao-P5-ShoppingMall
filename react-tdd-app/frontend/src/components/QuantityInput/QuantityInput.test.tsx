import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { QuantityInput } from 'components';

describe('<QuantityInput />', () => {
  const quantityInputProps = {
    name: 'test name',
    imagePath: 'test.jpeg',
    description: 'test description',
  };

  it('name text와 input이 잘 생성되어야 한다.', () => {
    const { getByText, getByRole } = render(<QuantityInput {...quantityInputProps} />);
    getByText('test name');
    getByRole('spinbutton');
  });

  it('input의 value를 숫자로 변경할 때 입력한 값으로 변해야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('spinbutton');
    fireEvent.change(input, {
      target: {
        value: 1,
      },
    });
    expect(input).toHaveAttribute('value', 1);
  });

  it('input의 value를 숫자외의 문자로 변경할 때 입력이 안되고 value는 null이 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('spinbutton');
    fireEvent.change(input, {
      target: {
        value: '문자',
      },
    });
    expect(input).toHaveAttribute('value', '');
  });

  // 이미지 잘 들어가나 test
});
