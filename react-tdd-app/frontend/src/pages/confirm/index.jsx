import OrderList from './components/OrderList';
import ConfirmForm from './components/ConfirmForm';
import { useOrderStore } from '../../stores/orderStore';

export default function Confirm() {
  const order = useOrderStore((state) => state.order);

  return (
    <>
      <h1>주문 확인</h1>
      <OrderList order={order} />
      <ConfirmForm />
    </>
  );
}
