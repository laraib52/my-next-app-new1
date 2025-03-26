"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [totalSales, setTotalSales] = useState(0);

  // Simulate fetching sales revenue data
  useEffect(() => {
    setTimeout(() => {
      setTotalSales(125000); // Sample total sales data
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Total Sales Revenue */}
      <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-lg text-center">
        <h2 className="text-lg font-semibold text-gray-700">Total Sales Revenue</h2>
        <p className="text-2xl font-bold text-green-600 mt-2">${totalSales.toLocaleString()}</p>
      </div>

      {/* Admin & User Actions */}
      <div className="mt-8 flex flex-wrap gap-6">
        <button
          onClick={() => router.push("/products")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Manage Products
        </button>
        <button
          onClick={() => alert("Feature Coming Soon!")}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-600 transition"
        >
          View Orders
        </button>
        <button
          onClick={() => alert("Feature Coming Soon!")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          Customer Reports
        </button>
      </div>
    </div>
  );
}
