export default function OrderForm({ order }) {
  const productTotalPrice = Object.values(order.products).reduce(
    (acc, quantity) => acc + quantity * 1000,
    0
  );

  const optionTotalPrice = Object.values(order.options).reduce(
    (acc, checked) => acc + (checked ? 500 : 0),
    0
  );

  const totalPrice = productTotalPrice + optionTotalPrice;

  return (
    <>
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
      <button type="submit" disabled={!totalPrice}>
        주문
      </button>
    </>
  );
}
