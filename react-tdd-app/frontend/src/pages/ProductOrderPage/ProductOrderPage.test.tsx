import { fireEvent, render, screen, within } from '@testing-library/react';
import { server } from 'mocks/server';
import { ProductOrderPage } from 'pages';
import { removeCharacter } from 'utils/shared';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<ProductOrderPage />', () => {
  test('server로부터 travel product data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /products$/i });

    expect(items).toHaveLength(4);
  });
  test('server로부터 option data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /options$/i });

    expect(items).toHaveLength(3);
  });

  test('[주문하기] 버튼을 눌렀을 때 주문 확인 페이지로 넘어가야 한다.', () => {});

  test('travel product를 선택하지 않은 경우에는 [주문하기] 버튼이 disable 되어야 한다.', async () => {
    const { findAllByRole, findByRole } = render(<ProductOrderPage />);
    const travelInputs = await findAllByRole('textbox');
    const optionInputs = await findAllByRole('checkbox');
    const orderButton = (await findByRole('button', { name: '주문하기' })) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: 3,
      },
    });
    fireEvent.change(travelInputs[0], {
      target: {
        value: 0,
      },
    });
    fireEvent.click(optionInputs[0]);
    expect(orderButton.disabled).toBe(true);
  });

  test('travel product와 option product를 선택했을 때, Total Price는 각 product의 총 가격을 합친 값이어야한다.', async () => {
    const { findAllByText, findByRole, findAllByRole } = render(<ProductOrderPage />);
    const productTotalPrices = (await findAllByText(/총합:/)) as HTMLParagraphElement[];
    const totalPrice = (await findByRole('heading', { name: /Total Price:/ })) as HTMLHeadingElement;
    const travelInputs = (await findAllByRole('textbox')) as HTMLInputElement[];
    const optionInputs = (await findAllByRole('checkbox')) as HTMLInputElement[];

    fireEvent.change(travelInputs[0], {
      target: {
        value: 3,
      },
    });
    fireEvent.click(optionInputs[0]);

    let totalSum = 0;
    for (const productTotalPrice of productTotalPrices) {
      totalSum += removeCharacter(productTotalPrice.innerHTML);
    }

    expect(totalPrice.innerHTML).toBe(`Total Price: $${totalSum}`);
  });
});
