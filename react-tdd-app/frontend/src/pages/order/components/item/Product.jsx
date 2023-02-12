export default function Product({
  name,
  imagePath,
  description,
  value,
  handleOrderChange,
}) {
  const id = `${name}-number`;

  const handleChange = (event) => {
    const quantity = Math.max(0, event.target.value);
    handleOrderChange(name, quantity);
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
          value={value}
          min="0"
          onChange={handleChange}
        />
      </label>
    </li>
  );
}
