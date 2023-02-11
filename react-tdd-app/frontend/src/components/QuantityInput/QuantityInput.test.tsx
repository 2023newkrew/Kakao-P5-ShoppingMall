import React from 'react';
import { fireEvent, render } from 'mocks/testUtils';
import { QuantityInput } from 'components';
import { QuantityInputProps } from 'types';

describe('<QuantityInput />', () => {
  const quantityInputProps = {
    name: 'test name',
    imagePath: 'test.jpeg',
    description: 'test description',
    updateOrder: jest.fn(),
  } as QuantityInputProps;

  test('input의 value를 자연수로 변경할 때 입력한 값으로 변해야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox', { name: /quantity input/ });
    fireEvent.change(input, {
      target: {
        value: 1,
      },
    });
    expect(input).toHaveAttribute('value', '1');
  });

  test('input의 value를 음수로 변경할 때 입력이 안되고 value는 0이 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox', { name: /quantity input/ });
    fireEvent.change(input, {
      target: {
        value: -1,
      },
    });
    expect(input).toHaveAttribute('value', '1');
  });

  test('input의 value를 숫자외의 문자로 변경할 때 입력이 안되고 value는 0이 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox', { name: /quantity input/ });
    fireEvent.change(input, {
      target: {
        value: '문자',
      },
    });
    expect(input).toHaveAttribute('value', '0');
  });
});
