import { OptionProduct, Order, ProductListProps, TravelProduct } from 'types';
import { OPTION_PRODUCT_PRICE, TRAVEL_PRODUCT_PRICE } from 'utils/constants';

export const products = [
  {
    name: 'America',
    imagePath: '/images/america.jpeg',
    description: 'Good America',
  },
  {
    name: 'England',
    imagePath: '/images/england.jpeg',
    description: 'Good England',
  },
  {
    name: 'Germany',
    imagePath: '/images/germany.jpeg',
    description: 'Good Germany',
  },
  {
    name: 'Portland',
    imagePath: '/images/portland.jpeg',
    description: 'Good Portland',
  },
] as TravelProduct[];

export const productsLength = products.length;

export const options = [
  {
    name: 'Insurance',
    description: '안전한 여행을 위해서!',
  },
  {
    name: 'Dinner',
    description: '맛있는 저녁과 함께하는 여행!',
  },
  {
    name: 'FirstClass',
    description: '편안한 비행을 위해서!',
  },
] as OptionProduct[];

export const optionsLength = options.length;

export const orderHistories = [
  { orderNumber: 12345678, price: 10000 },
  { orderNumber: 11234567, price: 14000 },
] as Order[];

export const orderHistoriesLength = orderHistories.length;

export const travelProductListProps = {
  products: [
    { name: 'test name1', imagePath: 'test.jpeg' },
    { name: 'test name2', imagePath: 'test.jpeg' },
    { name: 'test name3', imagePath: 'test.jpeg' },
    { name: 'test name4', imagePath: 'test.jpeg' },
  ],
  price: TRAVEL_PRODUCT_PRICE,
  type: 'travel',
} as ProductListProps;

export const optionProductListProps = {
  products: [{ name: 'test name1' }, { name: 'test name2' }, { name: 'test name3' }, { name: 'test name4' }],
  price: OPTION_PRODUCT_PRICE,
  type: 'option',
} as ProductListProps;

export const TRAVEL_PRODUCT_PRIMARY_QUANTITY = 3;
export const TRAVEL_PRODUCT_SECONDARY_QUANTITY = 7;
export const TRAVEL_PRODUCT_DEFAULT_QUANTITY = 0;

export const OPTION_PRODUCT_CHECK_COUNT = 2;
