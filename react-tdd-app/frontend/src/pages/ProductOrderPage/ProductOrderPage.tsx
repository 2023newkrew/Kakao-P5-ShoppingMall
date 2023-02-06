import React from 'react';
import { QuantityInput, CheckBox } from 'components';

const countries = [
  {
    name: 'America',
    imagePath: '/images/america.jpeg',
    description: 'Good America',
  },
  {
    name: 'England',
    imagePath: '/images/america.jpeg',
    description: 'Good England',
  },
  {
    name: 'Germany',
    imagePath: '/images/america.jpeg',
    description: 'Good Germany',
  },
  {
    name: 'Portland',
    imagePath: '/images/america.jpeg',
    description: 'Good Portland',
  },
];
const options = [
  {
    name: 'Insurance',
    description: '안전한 여행을 위해서!',
  },
  {
    name: 'Dinner',
    description: '맛있는 저녁과 함께하는 여행!',
  },
  {
    name: 'FirstClass',
    description: '편안한 비행을 위해서!',
  },
];

// option products랑 같이 쓸 수 있나!?
// 일단 여기 두고 좀더 확인하기
function TravelProducts() {
  return (
    <section>
      <h2>주문 종류</h2>
      <p>하나의 가격: $1000</p>
      <ul className="flex-row">
        {countries.map((country) => (
          <li key={country.name}>
            <QuantityInput name={country.name} imagePath={country.imagePath} description={country.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function OptionProducts() {
  return (
    <section>
      <h2>주문 종류</h2>
      <p>하나의 가격: $500</p>
      <ul>
        {options.map((option) => (
          <li key={option.name}>
            <CheckBox name={option.name} description={option.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProductOrderPage() {
  return (
    <main>
      <header>
        <h1>Travel Products</h1>
      </header>
      <TravelProducts />
      <OptionProducts />
      <section>
        <h2>Total Price: value</h2>
        <button type="button">주문하기</button>
      </section>
    </main>
  );
}

export default ProductOrderPage;
