import { render, screen } from '@testing-library/react';
import ProductList from './product-list';

describe('ProductList Component', () => {
  it('ProductList component renders correctly', () => {
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

    render(<ProductList products={products} />);

    const productEls = screen.getAllByText(/Product/);

    expect(productEls).toHaveLength(products.length);

    productEls.forEach((productEl, index) => {
      expect(productEl).toBeInTheDocument();
      expect(productEl).toHaveTextContent(products[index].name);
    });
  });
});
