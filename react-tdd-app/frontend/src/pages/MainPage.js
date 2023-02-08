import ProductList from "../components/product/ProductList";
import MainLayoutComponent from "../templates/MainLayoutComponent";

const MainPage = ({ totalPrice, setTotalPrice, setProductList }) => {
  return (
    <MainLayoutComponent header footer>
      <ProductList setTotalPrice={setTotalPrice} setProductList={setProductList} />
    </MainLayoutComponent>
  );
};

export default MainPage;
