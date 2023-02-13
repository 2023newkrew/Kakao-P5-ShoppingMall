import React, { useEffect, useState } from "react";

import useStore from "@store/store";
import { useNavigate } from "react-router-dom";
import { API } from "@utils/fetch";

const Complete = () => {
  const [orderList, setOrderList] = useState([]);
  const { totalPrice, reset } = useStore((state) => state);

  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = async () => {
    const fetchOrderList = await API.sendOrder(totalPrice);
    setOrderList(fetchOrderList);
  };

  const navigate = useNavigate();

  const orderTable = orderList.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  const onClick = () => {
    reset();
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>주문이 성공했습니다.</h2>
      <h3>지금까지 모든 주문</h3>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <th>number</th>
            <th>price</th>
          </tr>
          {orderTable}
        </tbody>
      </table>
      <button className="rainbow rainbow-1" onClick={onClick}>
        첫 페이지로
      </button>
    </div>
  );
};

export default Complete;
