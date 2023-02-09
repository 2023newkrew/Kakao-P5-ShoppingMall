import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../contexts/OrderContext";

const BASE_URL = "http://localhost:5000";

export default function CompletePage({ setStep }) {
  const [orderCompleteList, setOrderCompleteList] = useState([]);
  const { resetOrderData } = useContext(OrderContext);

  const fetchData = async () => {
    const resData = await (await axios.get(`${BASE_URL}/order`)).data;
    setOrderCompleteList(resData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const orderCompleteTable = orderCompleteList.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));
  return (
    <div>
      {orderCompleteList.length === 0 ? (
        <div>loading</div>
      ) : (
        <>
          <h1>주문이 완료되었습니다.</h1>
          <table>
            <thead>
              <tr>
                <th>order-number</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>{orderCompleteTable}</tbody>
          </table>

          <button
            onClick={() => {
              resetOrderData();
              setStep(0);
            }}
          >
            첫 페이지로
          </button>
        </>
      )}
    </div>
  );
}
