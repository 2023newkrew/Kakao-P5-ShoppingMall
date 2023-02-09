export default function Option({ name, checked, handleOptionOrderChange }) {
  const id = `${name}-checkbox`;

  const handleChange = (event) => {
    handleOptionOrderChange('options', name, event.target.checked);
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
