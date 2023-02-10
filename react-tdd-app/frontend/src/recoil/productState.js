import { atom } from 'recoil';
export const selectedProductState = atom({
  key: 'selectedProductState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
export const orderCountState = atom({
  key: 'orderCount',
  default: ''
})