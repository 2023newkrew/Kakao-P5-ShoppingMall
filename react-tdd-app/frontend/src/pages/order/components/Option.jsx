export default function Option({ name, checked, handleOrderChange }) {
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
          checked={checked}
          onChange={handleChange}
        />
        {name}
      </label>
    </li>
  );
}
