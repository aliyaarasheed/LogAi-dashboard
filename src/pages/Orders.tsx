import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="flex-1 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Orders
      </h1>

      <input
        type="text"
        placeholder="Search orders..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-lg mb-6 w-96"
      />

      <div className="bg-white rounded-xl shadow p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Order ID</th>
              <th className="text-left py-3">Customer</th>
              <th className="text-left py-3">Amount</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-4">#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.amount}</td>

                <td>
                  {order.status === "Delivered" ? (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Delivered
                    </span>
                  ) : (
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  )}
                </td>

                <td>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                    View
                  </button>

                  <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Orders;