import { render, screen } from '@testing-library/react';
import { Product } from '@/containers/app';
import ProductList from './product-list';

describe('ProductList Component', () => {
  const products: Product[] = [
    {
      name: 'Product 1',
      imagePath: '/images/product-1.jpg',
      description: 'Product 1 description',
    },
    {
      name: 'Product 2',
      imagePath: '/images/product-2.jpg',
      description: 'Product 2 description',
    },
    {
      name: 'Product 3',
      imagePath: '/images/product-3.jpg',
      description: 'Product 3 description',
    },
    {
      name: 'Product 4',
      imagePath: '/images/product-4.jpg',
      description: 'Product 4 description',
    },
  ];

  it('ProductList component renders correctly', () => {
    render(<ProductList products={products} />);

    const productEls = screen.getAllByText(/Product/);
    const productCountEl = screen.getByTestId('total-price');
    const productInputEls = screen.getAllByRole('spinbutton');

    expect(productEls).toHaveLength(products.length);
    expect(productCountEl).toBeInTheDocument();
    expect(productInputEls).toHaveLength(products.length);

    productEls.forEach((productEl, index) => {
      expect(productEl).toBeInTheDocument();
      expect(productEl).not.toHaveTextContent('Product 5');
      expect(productEl).toHaveTextContent(products[index].name);
    });
  });

  /* FIXME: Zustand state is not updated in the test */
  /* TODO: Fix this test */
  /*
  it('Update total prices with product inputs', () => {
    render(<ProductList products={products} />);

    const productCountEl = screen.getByTestId('total-price');
    const productInputEls = screen.getAllByRole('spinbutton');

    expect(productCountEl).toHaveTextContent('0');

    fireEvent.input(productInputEls[0], { target: { value: 1 } });
    expect(productInputEls[0]).toHaveValue(1);
    expect(productCountEl).toHaveTextContent('1000');

    fireEvent.input(productInputEls[1], { target: { value: 2 } });
    expect(productInputEls[1]).toHaveValue(2);
    expect(productCountEl).toHaveTextContent('3000');

    fireEvent.input(productInputEls[2], { target: { value: 2 } });
    expect(productInputEls[2]).toHaveValue(2);
    expect(productCountEl).toHaveTextContent('5');

    fireEvent.input(productInputEls[3], { target: { value: 2 } });
    expect(productInputEls[3]).toHaveValue(2);
    expect(productCountEl).toHaveTextContent('7');
  });
  */
});
