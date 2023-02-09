import { screen } from '@testing-library/react';
import useRender from '@/tests/hooks/use-render';
import OrderForm from './order-form';

describe('OrderForm', () => {
  it('should render correctly', () => {
    useRender(<OrderForm />);

    const checkboxEl = screen.getByTestId('order-form-checkbox');
    const buttonEl = screen.getByTestId('order-form-button');

    expect(checkboxEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });
});
