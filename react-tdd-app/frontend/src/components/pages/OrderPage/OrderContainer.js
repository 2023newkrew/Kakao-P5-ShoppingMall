import React, { useEffect, useState } from "react";
import Product from "./Product";
import Option from "./Option";
import axios from "axios";

export default function OrderContainer({ itemType }) {
  const [itemInfoList, setItemInfoList] = useState([]);
  const fetchData = async (path) => {
    try {
      const res = await axios.get(`http://localhost:4000/${path}`);
      setItemInfoList(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData(itemType);
  }, [itemType]);

  const ItemComponent = itemType === "products" ? Product : Option;
  return (
    <div style={{ display: "flex" }}>
      {itemInfoList.map((itemInfo) => (
        <ItemComponent key={itemInfo.name} name={itemInfo.name} imagePath={itemInfo.imagePath} />
      ))}
    </div>
  );
}
