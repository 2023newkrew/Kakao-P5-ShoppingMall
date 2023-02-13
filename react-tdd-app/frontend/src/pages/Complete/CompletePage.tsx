import axios from 'axios';
import ErrorBanner from 'components/ErrorBanner';
import { useOrderContext } from 'contexts/OrderContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface OrderComplete {
  orderNumber: number;
  price: number;
}
const useOrderComplete = () => {
  const { totalPrice } = useOrderContext();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<OrderComplete[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const response = await axios.post('http://localhost:4000/order', { totals: { total: totalPrice } });
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrder();
  }, [totalPrice]);

  return { isLoading, data, error };
};

const CompletePage = () => {
  const navigate = useNavigate();
  const { isLoading, error, data } = useOrderComplete();
  const { reset: resetContext } = useOrderContext();

  const handleGoBack = () => {
    resetContext();
    navigate('/', { replace: true });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <ErrorBanner message="주문 정보를 불러오지 못했습니다." />
        <button>다시 불러오기</button>
      </div>
    );
  }
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <h2 className="mb-4">주문을 완료하였습니다.</h2>
        {data && (
          <>
            <p>{data[data.length - 1].orderNumber}번 주문</p>
            <p>주문 금액 : {data[data.length - 1].price}원</p>
          </>
        )}

        <button className="mt-2" onClick={handleGoBack}>
          돌아가기
        </button>
      </div>
    </div>
  );
};
export default CompletePage;
