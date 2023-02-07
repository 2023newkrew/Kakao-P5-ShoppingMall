import { fireEvent, screen } from '@testing-library/react';
import { Product } from '@/containers/app';
import useRender from '@/tests/hooks/use-render';
import ProductItem from './product-item';

describe('ProductItem component', () => {
  it('should render correctly', () => {
    const product: Product = {
      name: 'test',
      imagePath: '/test.jpg',
      description: 'test description',
    };

    useRender(<ProductItem product={product} />);

    const productItemTitleEl = screen.getByText('test');
    const productItemImageEl = screen.getByRole('img');
    const productItemCountEl = screen.getByDisplayValue('0');

    expect(productItemTitleEl).toBeInTheDocument();
    expect(productItemImageEl).toBeInTheDocument();
    expect(productItemCountEl).toBeInTheDocument();
  });

  it('should render correctly with basket and be able to increase and decrease the value', () => {
    const product: Product = {
      name: 'test',
      imagePath: '/test.jpg',
      description: 'test description',
    };

    useRender(<ProductItem product={product} />);

    const productItemCountEl = screen.getByDisplayValue('0');

    expect(productItemCountEl).toHaveValue(0);

    fireEvent.input(productItemCountEl, { target: { value: 1 } });
    expect(productItemCountEl).toHaveValue(1);

    fireEvent.input(productItemCountEl, { target: { value: 5 } });
    expect(productItemCountEl).toHaveValue(5);

    fireEvent.input(productItemCountEl, { target: { value: 2 } });
    expect(productItemCountEl).toHaveValue(2);
  });

  it('should render images correctly', () => {
    const product: Product = {
      name: 'test',
      imagePath: '/test.jpg',
      description: 'test description',
    };

    useRender(<ProductItem product={product} />);

    const productItemImageEl = screen.getByRole('img');

    expect(productItemImageEl).toHaveAttribute('src', `${process.env.REACT_APP_API_URL}/test.jpg`);
  });
});
