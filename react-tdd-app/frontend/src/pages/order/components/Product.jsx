export default function Product({
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
      <img src={imagePath} alt={name} />
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
      <p>{description}</p>
    </li>
  );
}
