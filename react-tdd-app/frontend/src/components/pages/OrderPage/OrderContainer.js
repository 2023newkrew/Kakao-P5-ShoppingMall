import React, { useEffect, useState } from "react";
import Product from "./Product";
import Option from "./Option";
import axios from "axios";
import "./OrderContainer.css";
import ErrorBanner from "../../ErrorBanner";

const BASE_URL = "http://localhost:5000";
export default function OrderContainer({ requestPath }) {
  const [itemInfoList, setItemInfoList] = useState([]);
  const [isError, setIsError] = useState(false);
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
  const ItemComponent = requestPath === "products" ? Product : Option;
  return (
    <div className="order-container">
      <h2>상품 종류 : </h2>
      <p>하나당 가격 : </p>
      <p>총 가격 : </p>
      <div className="order-container-items" style={{ flexDirection: requestPath === "products" ? "row" : "column" }}>
        {itemInfoList.map((itemInfo) => (
          <ItemComponent key={itemInfo.name} name={itemInfo.name} imagePath={itemInfo.imagePath} />
        ))}
      </div>
    </div>
  );
}
