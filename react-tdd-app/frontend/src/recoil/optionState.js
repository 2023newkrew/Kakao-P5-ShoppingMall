import { atom, selector } from 'recoil';
export const selectedOptionsState = atom({
  key: 'selectedOptions', // unique ID (with respect to other atoms/selectors)
  default: new Set([]), // default value (aka initial value)
});
export const selectedOptionCountState = selector({
  key: 'selectedOptionCount',
  get: (({get}) => {
    const optionObj = get(selectedOptionsState);
    const count = optionObj.size;

    return count;
  })
})