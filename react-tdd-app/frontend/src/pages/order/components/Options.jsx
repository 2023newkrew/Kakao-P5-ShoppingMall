import { unitPrice } from '../../../stores/orderStore';
import Option from './Option';

export default function Options({
  options,
  order,
  subtotalPrice,
  handleOrderChange,
}) {
  return (
    <>
      <h2>상품 옵션</h2>
      <div>옵션당 가격: ₩{unitPrice.options.toLocaleString()}</div>
      <div>옵션 총 가격: ₩{subtotalPrice.options.toLocaleString()}</div>
      <ul>
        {options.map(({ name }) => (
          <Option
            key={name}
            name={name}
            checked={order.options[name]}
            handleOrderChange={handleOrderChange}
          />
        ))}
      </ul>
    </>
  );
}
