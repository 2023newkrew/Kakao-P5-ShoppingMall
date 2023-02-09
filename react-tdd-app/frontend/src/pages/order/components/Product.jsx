export default function Product({
  name,
  imagePath,
  description,
  quantity,
  handleOrderChange,
}) {
  const id = `${name}-number`;

  const handleChange = (event) => {
    const value = Math.max(0, event.target.value);
    handleOrderChange(name, value);
  };

  return (
    <li>
      <img src={imagePath} alt={name} />
      <p>{description}</p>
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
