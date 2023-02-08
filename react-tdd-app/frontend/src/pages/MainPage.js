import ProductList from "../components/product/ProductList";
import MainLayoutComponent from "../templates/MainLayoutComponent";

const MainPage = ({ setTotalPrice, setProductList }) => {
  return (
    <MainLayoutComponent header footer>
      <ProductList />
    </MainLayoutComponent>
  );
};

export default MainPage;
