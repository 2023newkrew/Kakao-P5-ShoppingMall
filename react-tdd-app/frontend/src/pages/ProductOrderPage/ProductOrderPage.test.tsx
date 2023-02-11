import { fireEvent, render } from 'utils/testUtils';
import { server } from 'mocks/server';
import { ProductOrderPage } from 'pages';
import { OPTION_PRODUCT_PRICE, TRAVEL_PRODUCT_PRICE } from 'utils/constants';

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
    const items = await findAllByRole('listitem', { name: /travel$/i });

    expect(items).toHaveLength(4);
  });
  test('server로부터 option data를 가져올 수 있다.', async () => {
    const { findAllByRole } = render(<ProductOrderPage />);
    const items = await findAllByRole('listitem', { name: /option$/i });

    expect(items).toHaveLength(3);
  });

  test('[주문하기] 버튼을 눌렀을 때 주문 확인 페이지로 넘어가야 한다.', async () => {
    const { findAllByRole, findByRole } = render(<ProductOrderPage />);
    const travelInputs = await findAllByRole('textbox');
    const orderButton = (await findByRole('button', { name: '주문하기' })) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: 3,
      },
    });
    fireEvent.click(orderButton);
    expect(mockedUsedNavigate).toHaveBeenNthCalledWith(1, '/confirm');
  });

  test('travel product를 선택한 경우에는 [주문하기] 버튼이 enable 되어야 한다.', async () => {
    const { findAllByRole, findByRole } = render(<ProductOrderPage />);
    const travelInputs = await findAllByRole('textbox');
    const orderButton = (await findByRole('button', { name: '주문하기' })) as HTMLButtonElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: 3,
      },
    });

    expect(orderButton.disabled).toBe(false);
  });

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
    const { findAllByRole, getByRole } = render(<ProductOrderPage />);

    const travelInputs = (await findAllByRole('textbox')) as HTMLInputElement[];
    const optionInputs = (await findAllByRole('checkbox')) as HTMLInputElement[];

    const totalPrice = getByRole('heading', { name: /Total Price:/ }) as HTMLHeadingElement;

    fireEvent.change(travelInputs[0], {
      target: {
        value: 3,
      },
    });
    fireEvent.click(optionInputs[0]);

    expect(totalPrice.innerHTML).toBe(`Total Price: $${TRAVEL_PRODUCT_PRICE * 3 + OPTION_PRODUCT_PRICE}`);
  });
});
