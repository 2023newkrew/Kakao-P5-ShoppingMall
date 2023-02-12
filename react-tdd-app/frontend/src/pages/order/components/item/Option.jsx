export default function Option({ name, value, handleOrderChange }) {
  const id = `${name}-checkbox`;

  const handleChange = (event) => {
    handleOrderChange(name, event.target.checked);
  };

  return (
    <li>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={value}
          onChange={handleChange}
        />
        {name}
      </label>
    </li>
  );
}
