import React from 'react';
import { fireEvent, render } from 'mocks/testUtils';
import { ProductList } from 'components';
import { TRAVEL_PRODUCT_PRICE, OPTION_PRODUCT_PRICE } from 'utils/constants';
import {
  travelProductListProps,
  optionProductListProps,
  TRAVEL_PRODUCT_PRIMARY_QUANTITY,
  TRAVEL_PRODUCT_SECONDARY_QUANTITY,
  OPTION_PRODUCT_CHECK_COUNT,
} from 'mocks/testData';

describe('<ProductList />', () => {
  test('product list의 type이 products이면 최종으로 입력한 product외의 quantity는 모두 0이 되어야 한다.', () => {
    const { getAllByRole } = render(<ProductList {...travelProductListProps} />);

    const inputs = getAllByRole('textbox', { name: /quantity input/ });

    fireEvent.change(inputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });
    expect(inputs[0]).toHaveAttribute('value', '3');

    fireEvent.change(inputs[2], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });

    expect(inputs[0]).toHaveAttribute('value', '0');
    expect(inputs[1]).toHaveAttribute('value', '0');
    expect(inputs[2]).toHaveAttribute('value', '3');
    expect(inputs[3]).toHaveAttribute('value', '0');
  });

  test('하나의 travel product에 개수를 입력하면 총가격은 (입력한값 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByLabelText } = render(<ProductList {...travelProductListProps} />);
    const inputs = getAllByRole('textbox', { name: /quantity input/ });
    const totalPrice = getByLabelText('product total price') as HTMLParagraphElement;

    fireEvent.change(inputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });
    expect(totalPrice.innerHTML).toBe(`총합: ${TRAVEL_PRODUCT_PRICE * TRAVEL_PRODUCT_PRIMARY_QUANTITY}`);
  });

  test('여러개의 travel product에 각각 개수를 입력하면 총가격은 (마지막에 입력한값 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByLabelText } = render(<ProductList {...travelProductListProps} />);
    const inputs = getAllByRole('textbox', { name: /quantity input/ });
    const totalPrice = getByLabelText('product total price') as HTMLParagraphElement;

    fireEvent.change(inputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });

    fireEvent.change(inputs[2], {
      target: {
        value: TRAVEL_PRODUCT_SECONDARY_QUANTITY,
      },
    });

    expect(totalPrice.innerHTML).toBe(`총합: ${TRAVEL_PRODUCT_PRICE * TRAVEL_PRODUCT_SECONDARY_QUANTITY}`);
  });

  test('여러개의 option product를 체크하면 총가격은 (체크한개수 * product가격)이 되어야 한다.', () => {
    const { getAllByRole, getByLabelText } = render(<ProductList {...optionProductListProps} />);
    const inputs = getAllByRole('checkbox', { name: /check input/ });
    const totalPrice = getByLabelText('product total price') as HTMLParagraphElement;

    for (let i = 0; i < OPTION_PRODUCT_CHECK_COUNT; i++) {
      fireEvent.click(inputs[i]);
    }

    expect(totalPrice.innerHTML).toBe(`총합: ${OPTION_PRODUCT_PRICE * OPTION_PRODUCT_CHECK_COUNT}`);
  });
});
