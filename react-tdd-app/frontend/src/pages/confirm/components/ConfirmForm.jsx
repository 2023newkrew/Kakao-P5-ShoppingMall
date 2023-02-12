import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ConfirmForm() {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/complete');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="confirm-checkbox">
        <input
          type="checkbox"
          id="confirm-checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        주문하려는 것을 확인하셨나요?
      </label>
      <br />
      <button type="submit" disabled={!checked}>
        주문 확인
      </button>
    </form>
  );
}
