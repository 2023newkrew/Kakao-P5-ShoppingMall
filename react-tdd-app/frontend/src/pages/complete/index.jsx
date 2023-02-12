import OrderHistory from './components/OrderHistory';

export default function Complete() {
  return (
    <>
      <h1>주문 완료</h1>
      <OrderHistory orderHistory={[]} />
    </>
  );
}
