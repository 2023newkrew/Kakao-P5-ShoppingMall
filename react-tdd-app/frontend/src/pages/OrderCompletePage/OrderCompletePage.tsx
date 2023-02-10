import React, { useContext, useEffect, useState } from 'react';
import { Order } from 'types';
import api from 'utils/api';
import { OrderStateContext } from 'contexts/OrderContext';

function OrderCompletePage() {
  const { total } = useContext(OrderStateContext);
  const [orders, setOrders] = useState([] as Order[]);

  useEffect(() => {
    addCurrentOrder();
  }, []);

  const addCurrentOrder = async () => {
    const res = await api.post('/order', {
      totals: { total },
    });

    setOrders(res);
  };
  return (
    <main className="text-center">
      <h1>주문이 성공했습니다.</h1>
      <h2>지금까지 모든 주문</h2>
      <ul style={{ width: '300px', margin: '0 auto' }}>
        {orders.map((order) => {
          return (
            <li className="flex-row" key={order.orderNumber}>
              <div>
                <h3>주문번호</h3>
                <p>{order.orderNumber}</p>
              </div>
              <div>
                <h3>주문가격</h3>
                <p>{order.price}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default OrderCompletePage;
