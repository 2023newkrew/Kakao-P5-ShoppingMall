import Credit from "../components/credit/Credit";
import Header from "../components/header/Header";

const CreditPage = ({ productList }) => {
  return (
    <>
      <Header />
      <Credit productList={productList} />
    </>
  );
};

export default CreditPage;
