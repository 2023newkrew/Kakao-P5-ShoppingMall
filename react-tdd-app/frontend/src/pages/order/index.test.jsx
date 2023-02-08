import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Order from '.';

describe('상품 목록', () => {
  test('상품 이미지', async () => {
    render(<Order />);

    const productImages = await screen.findAllByRole('img');
    expect(productImages).toHaveLength(4);

    const srcTexts = productImages.map((image) => image.src);
    expect(srcTexts.every((srcText) => srcText.startsWith('http'))).toBe(true);

    const altTexts = productImages.map((image) => image.alt);
    expect(altTexts).toEqual(['America', 'England', 'Germany', 'Portland']);
  });

  test('상품 수량', async () => {
    render(<Order />);

    const productInputs = await screen.findAllByRole('spinbutton');
    expect(productInputs).toHaveLength(4);

    const productQuantities = productInputs.map((input) => input.value);
    expect(productQuantities).toEqual(['0', '0', '0', '0']);
  });

  test('잘못된 상품 수량 입력', async () => {
    render(<Order />);

    const productInputs = await screen.findAllByRole('spinbutton');
    const productInput = productInputs[0];

    userEvent.clear(productInput);
    expect(parseInt(productInput.value, 10)).toBeGreaterThanOrEqual(0);

    userEvent.type(productInput, 'a');
    expect(parseInt(productInput.value, 10)).toBeGreaterThanOrEqual(0);

    userEvent.type(productInput, '-1');
    expect(parseInt(productInput.value, 10)).toBeGreaterThanOrEqual(0);
  });

  test('상품 총 가격', async () => {
    render(<Order />);

    const productTotalPrice = await screen.findByText(/상품 총 가격/i);
    const productInputs = await screen.findAllByRole('spinbutton');

    userEvent.type(productInputs[0], '1');
    expect(productTotalPrice).toHaveTextContent('₩1,000');

    userEvent.type(productInputs[1], '2');
    expect(productTotalPrice).toHaveTextContent('₩3,000');
  });
});

describe('상품 옵션 목록', () => {
  test('상품 옵션', async () => {
    render(<Order />);

    const options = await screen.findAllByRole('checkbox');
    expect(options).toHaveLength(3);

    const labelTexts = options.map((option) => option.labels[0].textContent);
    expect(labelTexts).toEqual(['Insurance', 'Dinner', 'FirstClass']);
  });

  test('상품 옵션 선택', async () => {
    render(<Order />);

    const options = await screen.findAllByRole('checkbox');
    const option = options[0];
    expect(option.checked).toBe(false);

    userEvent.click(option);
    expect(option.checked).toBe(true);

    userEvent.click(option);
    expect(option.checked).toBe(false);
  });

  test('상품 옵션 총 가격', async () => {
    render(<Order />);

    const optionTotalPrice = await screen.findByText(/옵션 총 가격/i);
    const options = await screen.findAllByRole('checkbox');

    userEvent.click(options[0]);
    expect(optionTotalPrice).toHaveTextContent('₩500');

    userEvent.click(options[1]);
    expect(optionTotalPrice).toHaveTextContent('₩1,000');
  });
});
