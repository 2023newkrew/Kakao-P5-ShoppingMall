import { useNavigate } from 'react-router-dom';

export default function OrderForm({ order }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/confirm');
  };

  const productTotalPrice = Object.values(order.products).reduce(
    (acc, quantity) => acc + quantity * 1000,
    0
  );

  const optionTotalPrice = Object.values(order.options).reduce(
    (acc, checked) => acc + (checked ? 500 : 0),
    0
  );

  const totalPrice = productTotalPrice + optionTotalPrice;

  return (
    <form onSubmit={handleSubmit}>
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
      <button type="submit" disabled={!totalPrice}>
        주문
      </button>
    </form>
  );
}
