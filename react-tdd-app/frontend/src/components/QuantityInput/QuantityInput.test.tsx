import React from 'react';
import { fireEvent, render } from 'utils/testUtils';
import { QuantityInput } from 'components';
import { QuantityInputProps } from 'types';

describe('<QuantityInput />', () => {
  const quantityInputProps = {
    name: 'test name',
    imagePath: 'test.jpeg',
    description: 'test description',
    updateOrder: jest.fn(),
  } as QuantityInputProps;

  it('input의 value를 자연수로 변경할 때 입력한 값으로 변해야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: 1,
      },
    });
    expect(input).toHaveAttribute('value', '1');
  });

  it('input의 value를 음수로 변경할 때 입력이 안되고 value는 0이 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: -1,
      },
    });
    expect(input).toHaveAttribute('value', '1');
  });

  it('input의 value를 숫자외의 문자로 변경할 때 입력이 안되고 value는 0이 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const input = getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: '문자',
      },
    });
    expect(input).toHaveAttribute('value', '0');
  });

  it('img의 alt에 상품 이름이 포함 되어야한다.', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const image = getByRole('img') as HTMLImageElement;

    expect(image.alt).toContain(quantityInputProps.name);
  });

  it('img의 src에 .jpeg 확장자를 가진 파일 경로가 들어와야 한다. ', () => {
    const { getByRole } = render(<QuantityInput {...quantityInputProps} />);
    const image = getByRole('img') as HTMLImageElement;

    expect(image.src).toContain('.jpeg');
  });
});
