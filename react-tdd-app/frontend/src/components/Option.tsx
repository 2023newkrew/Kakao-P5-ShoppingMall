import { Option as OptionType } from '../types/option';

type Props = OptionType;
const Option = ({ name }: Props) => {
  return (
    <form>
      <input type="checkbox" id={`${name} option`} />
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
};
export default Option;
