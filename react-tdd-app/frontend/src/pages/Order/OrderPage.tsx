import Type from 'components/Type';

const OrderPage = () => {
  return (
    <div className="p-10">
      <div>
        <h1>Travel Products</h1>
        <div>
          <Type orderType="products" />
        </div>
        <div className="mt-5 flex">
          <div className="w-1/2">
            <Type orderType="options" />
          </div>
          <div className="flex w-1/2 flex-col items-center">
            <h2 className="w-full">Total Price: $2,000 </h2>
            <br />
            <button className="w-1/2 min-w-[80px]">주문</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderPage;
