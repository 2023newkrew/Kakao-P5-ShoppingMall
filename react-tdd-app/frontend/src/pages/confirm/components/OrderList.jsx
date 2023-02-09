export default function OrderList({ order }) {
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
      <h2>여행 상품: ₩{productTotalPrice.toLocaleString()}</h2>
      <ul>
        {Object.entries(order.products).map(([name, quantity]) => (
          <li key={name}>
            {quantity} {name}
          </li>
        ))}
      </ul>
      <h2>상품 옵션: ₩{optionTotalPrice.toLocaleString()}</h2>
      <ul>
        {Object.entries(order.options).reduce(
          (acc, [name, checked]) =>
            checked ? [...acc, <li key={name}>{name}</li>] : acc,
          []
        )}
      </ul>
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
    </>
  );
}
