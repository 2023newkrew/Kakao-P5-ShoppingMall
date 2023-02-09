import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Order from '../pages/order';
import { PRODUCTS, OPTIONS } from '../mocks/data';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedNavigate,
}));

describe('상품 목록', () => {
  test('상품 이미지', async () => {
    render(<Order />);

    const productImages = await screen.findAllByRole('img');
    expect(productImages).toHaveLength(PRODUCTS.length);

    const srcTexts = productImages.map((image) => image.src);
    expect(
      srcTexts.every((srcText, index) =>
        srcText.endsWith(PRODUCTS[index].imagePath)
      )
    ).toBe(true);

    const altTexts = productImages.map((image) => image.alt);
    expect(altTexts).toEqual(PRODUCTS.map((product) => product.name));
  });

  test('상품 수량', async () => {
    render(<Order />);

    const productInputs = await screen.findAllByRole('spinbutton');
    expect(productInputs).toHaveLength(PRODUCTS.length);

    const productQuantities = productInputs.map((input) => input.value);
    expect(productQuantities).toEqual(Array(PRODUCTS.length).fill('0'));
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

    const productTotalPrice = await screen.findByText(/^상품 총 가격/i);
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
    expect(options).toHaveLength(OPTIONS.length);

    const labelTexts = options.map((option) => option.labels[0].textContent);
    expect(labelTexts).toEqual(OPTIONS.map((option) => option.name));
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

    const optionTotalPrice = await screen.findByText(/^옵션 총 가격/i);
    const options = await screen.findAllByRole('checkbox');

    userEvent.click(options[0]);
    expect(optionTotalPrice).toHaveTextContent('₩500');

    userEvent.click(options[1]);
    expect(optionTotalPrice).toHaveTextContent('₩1,000');
  });
});

describe('주문', () => {
  test('주문서에 상품/옵션이 있을 때만 주문 버튼을 클릭할 수 있다.', async () => {
    render(<Order />);

    const totalPrice = await screen.findByText(/^총 가격/i);
    const orderButton = await screen.findByRole('button', { name: /주문/i });
    const productInputs = await screen.findAllByRole('spinbutton');

    expect(totalPrice).toHaveTextContent('₩0');
    expect(orderButton).toBeDisabled();

    userEvent.type(productInputs[0], '1');
    expect(totalPrice).toHaveTextContent('₩1,000');
    expect(orderButton).toBeEnabled();
  });

  test('주문 버튼을 클릭하면 주문 확인 페이지로 이동한다.', async () => {
    render(<Order />);

    const orderButton = await screen.findByRole('button', { name: /주문/i });
    const productInputs = await screen.findAllByRole('spinbutton');

    userEvent.type(productInputs[0], '1');
    userEvent.click(orderButton);
    expect(mockedNavigate).toBeCalledWith('/confirm');
  });
});
