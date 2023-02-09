import React, { useState } from "react";

export default function SummaryPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div>
        여행 상품 : <span data-testid="products-price">000</span>
      </div>
      <div>
        옵션 : <span data-testid="options-price">000</span>
      </div>
      <form>
        <input
          type={"checkbox"}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          id="confirm-checkbox"
        />

        <label htmlFor="confirm-checkbox">주문을 확인하셨습니까?</label>
        <button disabled={!checked} type="submit">
          주문 실행
        </button>
      </form>
    </div>
  );
}
