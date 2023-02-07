import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductList from "../components/product/ProductList";

const MainPage = ({ totalPrice, setTotalPrice, setProductList }) => {
  return (
    <>
      <Header />
      <ProductList setTotalPrice={setTotalPrice} setProductList={setProductList} />
      <Footer totalPrice={totalPrice} />
    </>
  );
};

export default MainPage;
