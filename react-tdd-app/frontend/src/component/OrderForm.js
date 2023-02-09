import React, { useState } from "react";
import "./OrderForm.css";

const PRODUCT_PRICE = 1000;
const OPTION_PRICE = 500;

function OrderForm({ productResource, optionResource, onSubmit }) {
  const products = productResource.read();
  const options = optionResource.read();

  const [selectedProducts, selectProducts] = useState(() =>
    products.map(({ name }) => ({
      name,
      price: PRODUCT_PRICE,
      amount: 0,
    }))
  );

  const [selectedOptions, selectOptions] = useState(() =>
    options.map(({ name }) => ({
      name,
      price: OPTION_PRICE,
      amount: 0,
    }))
  );

  const productTotalPrice = selectedProducts
    .map(({ amount, price }) => amount * price)
    .reduce((p, c) => p + c, 0);

  const optionTotalPrice = selectedOptions
    .map(({ amount, price }) => amount * price)
    .reduce((p, c) => p + c, 0);

  const totalPrice = productTotalPrice + optionTotalPrice;

  const handleProductInputChange = (event) => {
    const { target } = event;

    const nextSelectedProducts = [...selectedProducts];
    const targetProduct = nextSelectedProducts.find(
      ({ name }) => name === target.name
    );
    targetProduct.amount = Number(target.value);

    selectProducts(nextSelectedProducts);
  };

  const handleOptionInputChange = (event) => {
    const { target } = event;

    const nextSelectedOptions = [...selectedOptions];
    const targetOption = nextSelectedOptions.find(
      ({ name }) => name === target.name
    );
    targetOption.amount = Number(target.checked);

    selectOptions(nextSelectedOptions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredSelectedProducts = selectedProducts.filter(({ amount }) =>
      Boolean(amount)
    );

    const filteredSelectedOptions = selectedOptions.filter(({ amount }) =>
      Boolean(amount)
    );

    onSubmit({
      products: filteredSelectedProducts,
      options: filteredSelectedOptions,
    });
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <fieldset className="order-form__product-fieldset">
        <legend>Products</legend>
        <dl>
          <dt>하나의 가격</dt>
          <dd>{PRODUCT_PRICE}</dd>
          <dt>선택 상품 가격</dt>
          <dd aria-label="선택 상품 가격">{productTotalPrice}</dd>
        </dl>
        <div>
          {products.map(({ name, imagePath }) => (
            <label key={name}>
              <img src={imagePath} alt={`${name} scene`} />
              {name}
              <input
                type="number"
                name={name}
                defaultValue="0"
                onChange={handleProductInputChange}
              />
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="order-form__option-fieldset">
        <legend>Options</legend>
        <dl>
          <dt>하나의 가격</dt>
          <dd>{OPTION_PRICE}</dd>
          <dt>선택 옵션 가격</dt>
          <dd aria-label="선택 옵션 가격">{optionTotalPrice}</dd>
        </dl>
        <div>
          {options.map(({ name }) => (
            <label key={name}>
              <input
                type="checkbox"
                name={name}
                defaultChecked={false}
                onChange={handleOptionInputChange}
              />
              {name}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="order-form__summary-fieldset">
        <dl>
          <dt>Total Price</dt>
          <dd aria-label="Total Price">{totalPrice}</dd>
        </dl>
        <input type="submit" value="주문하기" />
      </fieldset>
    </form>
  );
}

export default OrderForm;
