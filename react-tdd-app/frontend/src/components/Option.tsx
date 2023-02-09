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
    <form className="py-2">
      <input
        type="checkbox"
        id={`${name} option`}
        aria-label={`${name} option`}
        defaultChecked={false}
        onChange={handleCheck}
      />
      <label className="ml-2" htmlFor={`${name} option`}>
        {name}
      </label>
    </form>
  );
};
export default Option;
