export default function OrderHistory({ orderHistory }) {
  return (
    <>
      <h2>주문 내역</h2>
      <table>
        <thead>
          <tr>
            <th>주문 번호</th>
            <th>주문 가격</th>
          </tr>
        </thead>
        <tbody>
          {orderHistory.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
