import { useRecoilState } from "recoil"
import { selectedOptionsState } from "../recoil/optionState"

export function Option ({ name, description, isChecked }) {
  const [ selectedOptions, setSelectedOptions ] = useRecoilState(selectedOptionsState);
  function handleOptionChange (event) {
    const newSelectedOptions = new Set([...selectedOptions]);
    if (event.target.checked) {
      newSelectedOptions.add(name)
    } else {
      newSelectedOptions.delete(name)
    }
    setSelectedOptions(new Set([...newSelectedOptions]))
  }
  return (
    <li>
      <input type='checkbox' value={isChecked} onChange={handleOptionChange}/>
      <span>{name}</span>
      <span>{description}</span>
    </li>
  )
}