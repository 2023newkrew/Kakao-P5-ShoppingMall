import axios from 'axios';
import { memo, useEffect, useMemo, useState } from 'react';
import Product from './Product';
import { Product as ProductType } from 'types/product';
import { Option as OptionType } from 'types/option';
import ErrorBanner from './ErrorBanner';
import Option from './Option';
import { useOrderContext } from 'contexts/OrderContext';
import { OPTION_PRICE, PRODUCT_PRICE } from 'constants/price';

export type OrderType = 'products' | 'options';
interface Props {
  orderType: OrderType;
}

const item = {
  products: {
    title: 'Products',
    price: PRODUCT_PRICE,
  },
  options: {
    title: 'Options',
    price: OPTION_PRICE,
  },
};

const Type = ({ orderType }: Props) => {
  const { options, products } = useOrderContext();
  const [items, setItems] = useState<ProductType[] | OptionType[]>([]);
  const [error, setError] = useState(false);

  const totalProductsPrice = Array.from(products).reduce((totalPrice, [, price]) => {
    return totalPrice + price * PRODUCT_PRICE;
  }, 0);

  const totalOptionsPrice = useMemo(() => {
    return Array.from(options).reduce((totalPrice, [, checked]) => {
      if (!checked) {
        return totalPrice;
      }
      return totalPrice + OPTION_PRICE;
    }, 0);
  }, [options]);

  useEffect(() => {
    const loadItems = async (orderType: OrderType) => {
      try {
        const response = await axios.get(`http://localhost:4000/${orderType}`);
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
  const renderItems = () => {
    return orderType === 'products' ? renderProducts() : renderOptions();
  };
  return (
    <div>
      <h2>{item[orderType].title}</h2>
      <p>개당 가격 : ₩{item[orderType].price}</p>
      <p>총 가격 : ₩{orderType === 'products' ? totalProductsPrice : totalOptionsPrice}</p>
      <div className="flex" style={{ flexDirection: orderType === 'products' ? 'row' : 'column' }}>
        {renderItems()}
      </div>
    </div>
  );
};
export default memo(Type);
