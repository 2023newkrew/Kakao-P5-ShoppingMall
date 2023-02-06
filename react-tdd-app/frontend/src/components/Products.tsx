import { Product as ProductType } from '../types/product';

type Props = ProductType;

const Product = ({ name, imagePath }: Props) => {
  return (
    <div className="text-center">
      <img className="w-3/4" src={`http://localhost:5000/${imagePath}`} alt={`${name} product`} />
      <form className="mt-4">
        <label className="text-right">{name}</label>
        <input type="number" name="quantity" min="0" defaultValue={0} className="ml-3" />
      </form>
    </div>
  );
};
export default Product;
