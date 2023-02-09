import { useState } from 'react';

const SummaryPage = () => {
  const [confirmChecked, setConfirmChecked] = useState(false);
  return (
    <div>
      <form>
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={confirmChecked}
          onChange={(e) => setConfirmChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문내용을 확인하셨나요?</label>
        <br />
        <button disabled={!confirmChecked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};
export default SummaryPage;
