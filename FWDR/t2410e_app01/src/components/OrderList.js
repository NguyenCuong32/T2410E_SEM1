import orders from "../data/orderlist.json";
import Order from "./Order";
function OrderList() {
  return (
    <div>
      <ul>
        {orders.map((item) => (
          <Order name={item.name} quantity={item.quantity}></Order>
        ))}
      </ul>
    </div>
  );
}
export default OrderList;
