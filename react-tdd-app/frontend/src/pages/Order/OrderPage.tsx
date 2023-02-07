import Type from 'components/Type';
import { OPTION_PRICE, PRODUCT_PRICE } from 'constants/price';
import { OrderContext } from 'contexts/OrderContext';
import { useContext } from 'react';

const getSumOfNumbers = (numbers: number[]) => numbers.reduce((sum, value) => sum + value, 0);
const getCheckedCount = (checkValues: boolean[]) => checkValues.reduce((sum, value) => (value ? sum + 1 : sum), 0);

const OrderPage = () => {
  const { products, options } = useContext(OrderContext);
  const totalPrice =
    PRODUCT_PRICE * getSumOfNumbers(Array.from(products.values())) +
    OPTION_PRICE * getCheckedCount(Array.from(options.values()));

  return (
    <div className="p-10">
      <div>
        <h1>Travel Products</h1>
        <div>
          <Type orderType="products" />
        </div>
        <div className="mt-5 flex">
          <div className="w-1/2">
            <Type orderType="options" />
          </div>
          <div className="flex w-1/2 flex-col items-center">
            <h2 className="w-full">Total Price: ₩{totalPrice} </h2>
            <br />
            <button className="w-1/2 min-w-[80px]">주문</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
