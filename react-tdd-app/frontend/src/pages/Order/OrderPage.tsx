import { useNavigate } from 'react-router-dom';
import Type from 'components/Type';
import { useOrderContext } from 'contexts/OrderContext';

const OrderPage = () => {
  const navigate = useNavigate();
  const { totalPrice, products } = useOrderContext();

  const productsCount = Array.from(products.values()).length;
  const canGoNext = products.size === 0 || productsCount === 0;

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
            <h2 className="w-full">총 주문 가격 : ₩{totalPrice} </h2>
            <br />
            <button
              className="w-1/2 min-w-[80px]"
              disabled={canGoNext}
              onClick={() => {
                navigate('/summary');
              }}
            >
              주문
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
