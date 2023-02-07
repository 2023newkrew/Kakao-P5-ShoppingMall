import Option from './Option';

export default function Options({ options, order, handleOptionOrderChange }) {
  return (
    <>
      <h2>상품 옵션</h2>
      <div>옵션당 가격: ₩500</div>
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
