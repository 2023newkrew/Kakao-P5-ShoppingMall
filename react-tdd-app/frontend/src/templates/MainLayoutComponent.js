import React from "react";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

const MainLayoutComponent = ({ children, header, footer }) => {
  return (
    <>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </>
  );
};

export default MainLayoutComponent;
