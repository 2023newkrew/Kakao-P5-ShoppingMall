import OrderList from './components/OrderList';
import ConfirmForm from './components/ConfirmForm';

export default function Confirm() {
  return (
    <>
      <h1>주문 확인</h1>
      <OrderList />
      <ConfirmForm />
    </>
  );
}
