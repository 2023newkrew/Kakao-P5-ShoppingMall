import Option from './Option';

export default function Options({ options, order, handleOptionOrderChange }) {
  const optionTotalPrice = Object.values(order.options).reduce(
    (acc, checked) => acc + (checked ? 500 : 0),
    0
  );

  return (
    <>
      <h2>상품 옵션</h2>
      <div>옵션당 가격: ₩500</div>
      <div>옵션 총 가격: ₩{optionTotalPrice.toLocaleString()}</div>
      <ul>
        {options.map(({ name }) => (
          <Option
            key={name}
            name={name}
            checked={order.options[name]}
            handleOptionOrderChange={handleOptionOrderChange}
          />
        ))}
      </ul>
    </>
  );
}
