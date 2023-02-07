import { ChangeEvent, memo, useContext } from 'react';
import { Product as ProductType } from '../types/product';
import { OrderContext } from 'contexts/OrderContext';

type Props = ProductType;

const Product = ({ name, imagePath }: Props) => {
  const { updateProductCount } = useContext(OrderContext);

  const handleUpdateCount = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = parseInt(e.target.value, 10);

    if (Number.isNaN(currentValue)) {
      updateProductCount(name, 0);
      return;
    }
    updateProductCount(name, currentValue);
  };

  return (
    <div className="mr-2 flex flex-col items-center text-center">
      <div className="relative w-full bg-gray-300 object-scale-down pb-[56.25%]">
        <img
          className="absolute top-0 left-0 h-full w-full"
          src={`http://localhost:4000${imagePath}`}
          alt={`${name} product`}
        />
      </div>
      <form className="mt-4 flex justify-center">
        <label className="mr-2 text-center">{name}</label>
        <input
          type="number"
          aria-label={`${name} quantity`}
          name={`${name} quantity`}
          min="0"
          className="w-1/2"
          defaultValue={0}
          onChange={handleUpdateCount}
        />
      </form>
    </div>
  );
};
export default memo(Product);
