"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RechargeModal from "@/src/components/wallet/RechargeModal";

const transactions = [
  {
    id: 1,
    title: "Session with Dr. Sarah Johnson",
    time: "2 hours ago",
    amount: -270,
  },
  {
    id: 2,
    title: "Wallet Recharge",
    time: "Jan 6, 2026",
    amount: 1000,
  },
  {
    id: 3,
    title: "Session with Amit Patel",
    time: "Jan 5, 2026",
    amount: -180,
  },
  {
    id: 4,
    title: "Wallet Recharge",
    time: "Jan 4, 2026",
    amount: 2000,
  },
  {
    id: 5,
    title: "Session with Priya Sharma",
    time: "Jan 3, 2026",
    amount: -450,
  },
];

export default function WalletPage() {
  const [balance] = useState(2450);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gray-100 px-4 md:px-10 py-6">

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

        {/* Back Button */}
        <button
          onClick={() => router.push("/userOnboarding/dashboard")}
          className="bg-white px-4 py-2 rounded-full shadow text-sm hover:bg-gray-50"
        >
          ← Back
        </button>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-3">
          <button className="bg-white px-4 py-2 rounded-full shadow text-sm hover:bg-gray-50">
            Profile
          </button>

          <button className="bg-white px-4 py-2 rounded-full shadow text-sm hover:bg-gray-50">
            User Switch
          </button>

          <button className="bg-red-100 text-red-500 px-4 py-2 rounded-full shadow text-sm hover:bg-red-200">
            Logout
          </button>
        </div>
      </div>

      {/* Wallet Card */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-2xl shadow-lg mb-6">
        <p className="text-sm opacity-80">Available Balance</p>

        <h1 className="text-4xl font-bold mt-1">₹{balance}</h1>

        <button
          onClick={() => setOpen(true)}
          className="mt-6 bg-white/20 hover:bg-white/30 transition px-6 py-3 rounded-xl w-full md:w-60"
        >
          + Add Money
        </button>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl p-6 shadow mb-6 w-full">
        <h3 className="font-semibold mb-4">Payment Methods</h3>

        <button className="border rounded-xl w-full py-3 text-gray-600 hover:bg-gray-50">
          Add Payment Method
        </button>
      </div>

      {/* Transactions */}
      <div className="w-full">
        <h3 className="font-semibold mb-4">Recent Transactions</h3>

        <div className="space-y-4">
          {transactions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>

              <span
                className={`font-semibold ${
                  item.amount > 0 ? "text-green-600" : "text-red-500"
                }`}
              >
                {item.amount > 0 ? "+" : ""}₹{item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Recharge Modal */}
      {open && (
        <RechargeModal
          balance={balance}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}