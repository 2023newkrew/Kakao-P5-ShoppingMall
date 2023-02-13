import React from "react";

const CreditProductList = ({ element }) => {
  return (
    <li>
      <div data-testid="count">{element.count}</div>
      <div data-testid="title">{element.title}</div>
      <ul>
        {element.isInsurance && <li>insurance</li>}
        {element.isDinner && <li>isDinner</li>}
        {element.isFirstClass && <li>isFirstClass</li>}
      </ul>
    </li>
  );
};

export default CreditProductList;
