import Credit from "../components/credit/Credit";
import Header from "../components/header/Header";
import MainLayoutComponent from "../templates/MainLayoutComponent";

const CreditPage = ({ productList }) => {
  return (
    <MainLayoutComponent header>
      <Credit productList={productList} />
    </MainLayoutComponent>
  );
};

export default CreditPage;
