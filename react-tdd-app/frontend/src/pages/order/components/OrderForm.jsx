import { useNavigate } from 'react-router-dom';

export default function OrderForm({ children, totalPrice }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/confirm');
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <h2>총 가격: ₩{totalPrice.toLocaleString()}</h2>
      <button type="submit" disabled={!totalPrice}>
        주문
      </button>
    </form>
  );
}
