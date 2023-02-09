import { fireEvent, screen } from '@testing-library/react';
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

  it('button should be disabled when checkbox is not checked', () => {
    useRender(<OrderForm />);

    const checkboxEl = screen.getByTestId('order-form-checkbox');
    const buttonEl = screen.getByTestId('order-form-button');

    expect(buttonEl).toBeDisabled();

    fireEvent.click(checkboxEl);

    expect(buttonEl).not.toBeDisabled();

    fireEvent.click(checkboxEl);

    expect(buttonEl).toBeDisabled();
  });
});
