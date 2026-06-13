import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const revenueData = [
    { month: "Jan", revenue: 12000 },
    { month: "Feb", revenue: 18000 },
    { month: "Mar", revenue: 25000 },
    { month: "Apr", revenue: 32000 },
    { month: "May", revenue: 40000 },
    { month: "Jun", revenue: 52000 },
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/dashboard")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="flex-1 p-8">
        <h2>Loading dashboard...</h2>
      </main>
    );
  }

  return (
    <main className="flex-1 p-10">
      <div className="mb-8">
        <h1 className="text-5xl font-bold text-slate-900">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 text-xl mt-2">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Products</p>
              <h2 className="text-5xl font-bold mt-2">
                {stats.totalProducts}
              </h2>
              <p className="text-green-600 mt-3">
                +12% from last month
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-3xl">
              📦
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Orders</p>
              <h2 className="text-5xl font-bold mt-2">
                {stats.totalOrders}
              </h2>
              <p className="text-green-600 mt-3">
                +23% from last month
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
              🛒
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-4xl font-bold mt-2">
                {stats.revenue}
              </h2>
              <p className="text-green-600 mt-3">
                +18% from last month
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
              💰
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Low Stock</p>
              <h2 className="text-5xl font-bold mt-2">
                {stats.lowStock}
              </h2>
              <p className="text-orange-500 mt-3">
                Needs attention
              </p>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl">
              📈
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-8">
        <h2 className="text-3xl font-bold mb-6">
          Sales & Revenue Trend
        </h2>

        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;