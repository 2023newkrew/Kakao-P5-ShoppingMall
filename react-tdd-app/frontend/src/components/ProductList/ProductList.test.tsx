import React from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { ProductList } from 'components';
import { ProductListProps } from 'types';

describe('<ProductList />', () => {
  const productListProps = {
    products: [{ name: 'test name', imagePath: 'test.jpeg', description: 'test description' }],
    price: 1000,
    type: 'products',
  } as ProductListProps;

  it('가격과 list가 잘 랜더링 되어야 한다.', () => {
    const { getByRole } = render(<ProductList {...productListProps} />);

    const productPrice = getByRole('paragraph') as HTMLParagraphElement;
    console.log(productPrice.innerHTML);
    expect(productPrice.innerHTML).toBe(`하나의 가격: ${productListProps.price}`);

    const productList = getByRole('list');
    const { getAllByRole } = within(productList);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(productListProps.products.length);
  });

  it('product type이 products이면 최종으로 입력한 product외의 quantity는 모두 0이 되어야 한다.', () => {});
});
