import { OPTION_PRICE, PRODUCT_PRICE } from 'constants/price';
import { useOrderContext } from 'contexts/OrderContext';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SummaryPage = () => {
  const navigate = useNavigate();
  const { products, options, totalPrice } = useOrderContext();
  const [confirmChecked, setConfirmChecked] = useState(false);

  const orderOptions = Array.from(options)
    .filter(([, checked]) => checked)
    .map(([option]) => option);

  useEffect(() => {
    if (products.size !== 0) {
      return;
    }
    navigate('/', { replace: true });
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <h2 className="mb-4 text-center">주문 내용</h2>
        <div className="flex flex-col items-center p-2">
          <h3 className="mb-1">주문 상품</h3>
          <ul>
            {Array.from(products).map(([location, amount]) => (
              <li key={location}>
                <p>
                  {location}, {amount}개, {amount * PRODUCT_PRICE}원
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center p-2">
          <h3 className="mb-1">포함 옵션</h3>
          <ul>
            {orderOptions.map((option) => (
              <li key={option}>
                <p>
                  {option}, {OPTION_PRICE}원
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <form className="flex flex-col items-center p-2" onSubmit={handleSubmit}>
        <p className="font-semibold">총 주문금액 : {totalPrice}원</p>
        <div className="mb-2">
          <label className="mr-2 select-none" htmlFor="confirm-checkbox">
            주문내용을 확인하셨나요?
          </label>
          <input
            type="checkbox"
            id="confirm-checkbox"
            checked={confirmChecked}
            onChange={(e) => setConfirmChecked(e.target.checked)}
          />
        </div>
        <button disabled={!confirmChecked} type="submit">
          주문하기
        </button>
      </form>
    </div>
  );
};
export default SummaryPage;
