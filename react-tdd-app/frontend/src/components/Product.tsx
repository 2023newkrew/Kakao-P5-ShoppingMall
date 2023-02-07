import { Product as ProductType } from '../types/product';

type Props = ProductType;

const Product = ({ name, imagePath }: Props) => {
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
        <input type="number" name="quantity" min="0" defaultValue={0} className="w-1/2" />
      </form>
    </div>
  );
};
export default Product;
