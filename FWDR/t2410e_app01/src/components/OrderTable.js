import orders from "../data/orderlist.json";
function OrderTable() {
  return (
   <table className="table m-2">
    <thead>
            <th>ID</th>
            <th>Product name</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            {orders.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
   </table>
  );
}
export default OrderTable;
