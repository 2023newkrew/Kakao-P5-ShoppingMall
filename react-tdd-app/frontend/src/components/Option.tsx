import { ChangeEvent } from 'react';
import { Option as OptionType } from '../types/option';
import { useOrderContext } from 'contexts/OrderContext';

const Option = ({ name }: OptionType) => {
  const { updateOption } = useOrderContext();

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.checked;
    updateOption(name, currentValue);
  };
  return (
    <form>
      <input
        type="checkbox"
        id={`${name} option`}
        aria-label={`${name} option`}
        defaultChecked={false}
        onChange={handleCheck}
      />
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};
export default Option;
