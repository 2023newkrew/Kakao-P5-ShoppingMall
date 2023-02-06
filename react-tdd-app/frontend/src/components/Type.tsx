import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from './Products';
import { Product as ProductType } from 'types/product';
import { Option as OptionType } from 'types/option';
import ErrorBanner from './ErrorBanner';
import Option from './Option';

export type OrderType = 'products' | 'options';
interface Props {
  orderType: OrderType;
}

const Type = ({ orderType }: Props) => {
  const [items, setItems] = useState<ProductType[] | OptionType[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadItems = async (orderType: OrderType) => {
      try {
        const response = await axios.get(`http://localhost:5000/${orderType}`);
        setItems(response.data);
      } catch (error) {
        setError(true);
      }
    };

    loadItems(orderType);
  }, [orderType]);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const renderProducts = () => {
    const products = items as ProductType[];
    return products.map(({ imagePath, name }) => <Product key={name} name={name} imagePath={imagePath} />);
  };
  const renderOptions = () => {
    const options = items as OptionType[];
    return options.map(({ name }) => <Option key={name} name={name} />);
  };

  return <div>{orderType === 'products' ? renderProducts() : renderOptions()}</div>;
};
export default Type;
