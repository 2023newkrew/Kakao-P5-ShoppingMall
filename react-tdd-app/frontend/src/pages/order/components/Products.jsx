function Product({
  name,
  imagePath,
  description,
  quantity,
  handleProductOrderChange,
}) {
  const id = `${name}-number`;

  const handleChange = (event) => {
    const value = Math.max(0, event.target.value);
    handleProductOrderChange(name, value);
  };

  return (
    <li>
      <img src={imagePath} alt={description} />
      <label htmlFor={id}>
        {name}
        <input
          type="number"
          id={id}
          value={quantity}
          min="0"
          onChange={handleChange}
        />
      </label>
    </li>
  );
}

export default function Products({
  products,
  order,
  handleProductOrderChange,
}) {
  return (
    <>
      <h2>여행 상품</h2>
      <div>상품당 가격: ₩1,000</div>
      <ul>
        {products.map(({ name, imagePath, description }) => (
          <Product
            key={name}
            name={name}
            imagePath={imagePath}
            description={`상품 - ${description}`}
            quantity={order.products[name]}
            handleProductOrderChange={handleProductOrderChange}
          />
        ))}
      </ul>
    </>
  );
}
