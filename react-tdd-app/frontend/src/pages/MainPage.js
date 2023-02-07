import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductList from "../components/product/ProductList";

const MainPage = ({ totalPrice, setTotalPrice }) => {
  return (
    <>
      <Header />
      <ProductList setTotalPrice={setTotalPrice} />
      <Footer totalPrice={totalPrice} />
    </>
  );
};

export default MainPage;
