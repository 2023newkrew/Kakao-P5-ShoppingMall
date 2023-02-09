import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import { Product as ProductType } from 'types/product';
import { Option as OptionType } from 'types/option';
import ErrorBanner from 'components/ErrorBanner';
import Option from 'components/Option';
import Product from 'components/Product';
import { useOrderContext } from 'contexts/OrderContext';
import { OPTION_PRICE, PRODUCT_PRICE } from 'constants/price';

export type OrderType = 'products' | 'options';
type ItemType = { type: 'products'; items: ProductType[] } | { type: 'options'; items: OptionType[] };
interface Props {
  orderType: OrderType;
}

const info = {
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
  const { totalOptionsPrice, totalProductsPrice } = useOrderContext();
  const [data, setData] = useState<ItemType | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadItems = async (orderType: OrderType) => {
      try {
        const response = await axios.get(`http://localhost:4000/${orderType}`);
        setData({ type: orderType, items: response.data });
      } catch (error) {
        setError(true);
      }
    };

    loadItems(orderType);
  }, [orderType]);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const renderItems = () => {
    switch (data?.type) {
      case 'products':
        return data.items.map(({ imagePath, name }) => <Product key={name} name={name} imagePath={imagePath} />);
      case 'options':
        return data.items.map(({ name }) => <Option key={name} name={name} />);
    }
  };

  return (
    <div>
      <h2>{info[orderType].title}</h2>
      <p>개당 가격 : ₩{info[orderType].price}</p>
      <p>총 가격 : ₩{orderType === 'products' ? totalProductsPrice : totalOptionsPrice}</p>
      <div className="flex" style={{ flexDirection: orderType === 'products' ? 'row' : 'column' }}>
        {renderItems()}
      </div>
    </div>
  );
};
export default memo(Type);
