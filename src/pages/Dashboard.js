import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FaBoxOpen,
  FaLayerGroup,
  FaExclamationTriangle,
  FaChartLine,
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
} from "react-icons/fa";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [lowStockItems, setLowStockItems] = useState([
    { name: "Smartphone", quantity: 3 },
    { name: "Laptop", quantity: 2 },
    { name: "Headphones", quantity: 5 },
  ]);

  const recentSales = [
    { product: "Smartphone", price: "$500" },
    { product: "Laptop", price: "$1200" },
    { product: "Headphones", price: "$150" },
  ];

  const topSellingProducts = [
    { name: "Smartphone", icon: <FaMobileAlt />, price: "$500" },
    { name: "Laptop", icon: <FaLaptop />, price: "$1200" },
    { name: "Headphones", icon: <FaHeadphones />, price: "$150" },
  ];

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 8, 17, 14, 22],
        borderColor: "#10b981",
        backgroundColor: "rgba(16, 185, 129, 0.25)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#10b981",
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Monthly Sales Trend",
        color: "#ffffff",
        font: { size: 16 },
      },
    },
    scales: {
      x: { ticks: { color: "#9ca3af" }, grid: { display: false } },
      y: {
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255,255,255,0.1)" },
        beginAtZero: true,
      },
    },
  };

  const handleRestockAll = () => {
    const updated = lowStockItems.map(item => ({
      ...item,
      quantity: item.quantity + 5,
    }));
    setLowStockItems(updated);
  };

  return (
    <div
      className="flex min-h-screen font-['Plus_Jakarta_Sans']"
      style={{
        background:
          "linear-gradient(circle at 80% 20%, rgba(4, 58, 37, 1) 20%, rgba(6, 43, 43, 1) 50%, rgb(2, 11, 44) 100%)",
      }}
    >
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 text-white overflow-y-auto pt-20">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-emerald-400/80">
            Welcome back! Here is what's happening today.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { title: "Total Products", value: "150", icon: <FaBoxOpen />, color: "text-blue-400" },
            { title: "Total Stock", value: "320", icon: <FaLayerGroup />, color: "text-emerald-400" },
            { title: "Low Stock", value: lowStockItems.length, icon: <FaExclamationTriangle />, color: "text-red-400" },
            { title: "Total Sales", value: "75", icon: <FaChartLine />, color: "text-purple-400" },
          ].map((card, i) => (
            <div
              key={i}
              className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-xl"
            >
              <div className={`text-xl ${card.color}`}>{card.icon}</div>
              <p className="text-gray-400 text-sm">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Chart + Low Stock */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 h-80 bg-white/5 rounded-2xl p-4 border border-white/10">
            <Line data={salesData} options={salesOptions} />
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-4">Low Stock Items</h3>

            <div className="flex-1 space-y-3">
              {lowStockItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between p-2 bg-white/5 rounded"
                >
                  <span>{item.name}</span>
                  <span className="text-red-400 font-bold">
                    {item.quantity} left
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleRestockAll}
              className="mt-4 py-2 bg-emerald-500 text-black rounded font-bold"
            >
              Restock All
            </button>
          </div>
        </div>

        {/* Bottom Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Recent Sales</h3>
            {recentSales.map((sale, i) => (
              <div key={i} className="flex justify-between py-2">
                <span>{sale.product}</span>
                <span className="text-emerald-400 font-bold">
                  {sale.price}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <h3 className="text-xl font-bold mb-4">Top Selling Products</h3>
            {topSellingProducts.map((p, i) => (
              <div key={i} className="flex justify-between py-2">
                <span className="flex gap-2 items-center">
                  {p.icon} {p.name}
                </span>
                <span className="font-bold">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
