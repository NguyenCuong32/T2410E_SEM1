import orders from '../data/orderlist.json'
function OrderTable()
{
    return (
        <div>
            <div className='table'>
                <thead>
                    <th>ID</th>
                    <th>Product name</th>
                    <th>Quantity</th>
                </thead>
                <tbody>
                    {orders.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </div>
        </div>
    );
}
export default OrderTable;