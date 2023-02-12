import { fireEvent, render } from 'mocks/testUtils';
import { server } from 'mocks/server';
import { ProductOrderPage } from 'pages';
import { OPTION_PRODUCT_PRICE, TRAVEL_PRODUCT_PRICE } from 'utils/constants';
import {
  productsLength,
  optionsLength,
  TRAVEL_PRODUCT_PRIMARY_QUANTITY,
  TRAVEL_PRODUCT_DEFAULT_QUANTITY,
  OPTION_PRODUCT_CHECK_COUNT,
} from 'mocks/testData';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<ProductOrderPage />', () => {
  test('server로부터 travel product data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /travel product list item$/i });

    expect(items).toHaveLength(productsLength);
  });
  test('server로부터 option data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /option product list item$/i });

    expect(items).toHaveLength(optionsLength);
  });

  test('[주문하기] 버튼을 눌렀을 때 주문 확인 페이지로 넘어가야 한다.', async () => {
    const { findAllByRole, getByRole } = render(<ProductOrderPage />);
    const travelInputs = (await findAllByRole('textbox', { name: /quantity input/ })) as HTMLInputElement[];
    const orderButton = getByRole('button', { name: '주문하기' }) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });
    fireEvent.click(orderButton);
    expect(mockedUsedNavigate).toHaveBeenNthCalledWith(1, '/confirm');
  });

  test('travel product를 선택한 경우에는 [주문하기] 버튼이 enable 되어야 한다.', async () => {
    const { findAllByRole, getByRole } = render(<ProductOrderPage />);
    const travelInputs = (await findAllByRole('textbox', { name: /quantity input/ })) as HTMLInputElement[];
    const orderButton = getByRole('button', { name: '주문하기' }) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });

    expect(orderButton.disabled).toBe(false);
  });

  test('travel product를 선택하지 않은 경우에는 [주문하기] 버튼이 disable 되어야 한다.', async () => {
    const { findAllByRole, getByRole } = render(<ProductOrderPage />);
    const travelInputs = (await findAllByRole('textbox', { name: /quantity input/ })) as HTMLInputElement[];

    const orderButton = getByRole('button', { name: '주문하기' }) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });
    fireEvent.change(travelInputs[0], {
      target: {
        value: TRAVEL_PRODUCT_DEFAULT_QUANTITY,
      },
    });
    expect(orderButton.disabled).toBe(true);
  });

  test('travel product와 option product를 선택했을 때, Total Price는 각 product의 총 가격을 합친 값이어야한다.', async () => {
    const { findAllByRole, getByLabelText } = render(<ProductOrderPage />);

    const travelInputs = (await findAllByRole('textbox', { name: /quantity input/ })) as HTMLInputElement[];
    const optionInputs = (await findAllByRole('checkbox', { name: /check input/ })) as HTMLInputElement[];

    const totalPrice = getByLabelText('total price');

    fireEvent.change(travelInputs[0], {
      target: {
        value: TRAVEL_PRODUCT_PRIMARY_QUANTITY,
      },
    });
    for (let i = 0; i < OPTION_PRODUCT_CHECK_COUNT; i++) {
      fireEvent.click(optionInputs[i]);
    }

    expect(totalPrice.innerHTML).toBe(
      `${TRAVEL_PRODUCT_PRICE * TRAVEL_PRODUCT_PRIMARY_QUANTITY + OPTION_PRODUCT_PRICE * OPTION_PRODUCT_CHECK_COUNT}`,
    );
  });
});
