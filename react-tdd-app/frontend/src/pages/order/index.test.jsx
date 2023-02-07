import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Order from '.';

test('상품 이미지', async () => {
  render(<Order />);

  const productImages = await screen.findAllByRole('img', {
    name: /^상품/i,
  });
  expect(productImages).toHaveLength(4);

  const altTexts = productImages.map((image) => image.alt);
  expect(altTexts).toEqual([
    '상품 - Good America',
    '상품 - Good England',
    '상품 - Good Germany',
    '상품 - Good Portland',
  ]);
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
