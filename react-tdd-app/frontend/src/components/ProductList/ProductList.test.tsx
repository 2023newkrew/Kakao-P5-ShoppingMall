import React from 'react';
import { fireEvent, render } from 'utils/testUtils';
import { ProductList } from 'components';
import { ProductListProps } from 'types';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';

describe('<ProductList />', () => {
  const travelProductListProps = {
    products: [
      { name: 'test name1', imagePath: 'test.jpeg', description: 'test description' },
      { name: 'test name2', imagePath: 'test.jpeg', description: 'test description' },
      { name: 'test name3', imagePath: 'test.jpeg', description: 'test description' },
      { name: 'test name4', imagePath: 'test.jpeg', description: 'test description' },
    ],
    price: TRAVEL_PRODUCT_PRICE,
    type: 'products',
  } as ProductListProps;

  const optionProductListProps = {
    products: [
      { name: 'test name1', description: 'test description' },
      { name: 'test name2', description: 'test description' },
      { name: 'test name3', description: 'test description' },
      { name: 'test name4', description: 'test description' },
    ],
    price: OPTION_PRODUCT_PRICE,
    type: 'options',
  } as ProductListProps;

  test('product list의 type이 products이면 최종으로 입력한 product외의 quantity는 모두 0이 되어야 한다.', () => {
    const { getAllByRole } = render(<ProductList {...travelProductListProps} />);

    const inputs = getAllByRole('textbox');

    fireEvent.change(inputs[0], {
      target: {
        value: 3,
      },
    });
    expect(inputs[0]).toHaveAttribute('value', '3');

    fireEvent.change(inputs[2], {
      target: {
        value: 3,
      },
    });

    expect(inputs[0]).toHaveAttribute('value', '0');
    expect(inputs[1]).toHaveAttribute('value', '0');
    expect(inputs[2]).toHaveAttribute('value', '3');
    expect(inputs[3]).toHaveAttribute('value', '0');
  });

  test('하나의 travel product에 개수를 입력하면 총가격은 (입력한값 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByText } = render(<ProductList {...travelProductListProps} />);
    const inputs = getAllByRole('textbox');
    const totalPrice = getByText(/총합:/) as HTMLParagraphElement;

    fireEvent.change(inputs[0], {
      target: {
        value: 7,
      },
    });
    expect(totalPrice.innerHTML).toBe(`총합: ${travelProductListProps.price * 7}`);
  });

  test('여러개의 travel product에 각각 개수를 입력하면 총가격은 (마지막에 입력한값 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByText } = render(<ProductList {...travelProductListProps} />);
    const inputs = getAllByRole('textbox');
    const totalPrice = getByText(/총합:/) as HTMLParagraphElement;

    fireEvent.change(inputs[0], {
      target: {
        value: 7,
      },
    });

    fireEvent.change(inputs[0], {
      target: {
        value: 3,
      },
    });

    expect(totalPrice.innerHTML).toBe(`총합: ${travelProductListProps.price * 3}`);
  });

  test('하나의 option product를 체크하면 총가격은 (1 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByText } = render(<ProductList {...optionProductListProps} />);
    const inputs = getAllByRole('checkbox');
    const totalPrice = getByText(/총합:/) as HTMLParagraphElement;

    fireEvent.click(inputs[0]);

    expect(totalPrice.innerHTML).toBe(`총합: ${optionProductListProps.price}`);
  });

  test('여러개의 option product를 체크하면 총가격은 (체크한개수 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByText } = render(<ProductList {...optionProductListProps} />);
    const inputs = getAllByRole('checkbox');
    const totalPrice = getByText(/총합:/) as HTMLParagraphElement;

    fireEvent.click(inputs[0]);
    fireEvent.click(inputs[1]);
    fireEvent.click(inputs[2]);

    expect(totalPrice.innerHTML).toBe(`총합: ${optionProductListProps.price * 3}`);
  });
});
