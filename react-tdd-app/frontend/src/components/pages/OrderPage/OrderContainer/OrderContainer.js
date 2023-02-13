import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import Option from "../Option/Option";
import ErrorBanner from "../../../ErrorBanner";
import "./OrderContainer.css";
import { OrderContext, pricePerItem } from "../../../../contexts/OrderContext";
import { REQUEST_PATH } from "../../../../constant";

const BASE_URL = "http://localhost:5000";
export default function OrderContainer({ requestPath }) {
  const [itemInfoList, setItemInfoList] = useState([]);
  const [isError, setIsError] = useState(false);
  const { totals, updateOrderData } = useContext(OrderContext);

  const fetchData = async (path) => {
    try {
      const res = await axios.get(`${BASE_URL}/${path}`);
      setItemInfoList(res.data);
    } catch (error) {
      setIsError(true);
    }
  };
  useEffect(() => {
    fetchData(requestPath);
  }, [requestPath]);

  if (isError) return <ErrorBanner message={"에러가 발생했습니다."} />;
  const ItemComponent = requestPath === REQUEST_PATH.products ? Product : Option;
  return (
    <div className="order-container">
      <h2>상품 종류 : {requestPath}</h2>
      <p>하나당 가격 : {pricePerItem[requestPath]}</p>
      <p>총 가격 : {totals[requestPath]}</p>
      <div
        className="order-container-items"
        style={{ flexDirection: requestPath === REQUEST_PATH.products ? "row" : "column" }}
      >
        {itemInfoList.map((itemInfo) => (
          <ItemComponent
            key={itemInfo.name}
            name={itemInfo.name}
            imagePath={itemInfo.imagePath}
            updateOrderData={(itemName, itemCount) => updateOrderData(itemName, itemCount, requestPath)}
          />
        ))}
      </div>
    </div>
  );
}
