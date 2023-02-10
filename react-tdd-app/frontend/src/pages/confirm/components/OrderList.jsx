export default function OrderList({ order, subtotalPrice, totalPrice }) {
  return (
    <>
      <h2>여행 상품: ₩{subtotalPrice.products.toLocaleString()}</h2>
      <ul>
        {Object.entries(order.products).map(([name, quantity]) => (
          <li key={name}>
            {quantity} {name}
          </li>
        ))}
      </ul>
      <h2>상품 옵션: ₩{subtotalPrice.options.toLocaleString()}</h2>
      <ul>
        {Object.entries(order.options).map(
          ([name, checked]) => checked && <li key={name}>{name}</li>
        )}
      </ul>
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
    </>
  );
}
