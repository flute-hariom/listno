"use client";

import { useState } from "react";

const amounts = [100, 250, 500, 1000, 2000, 5000];

export default function RechargeModal({
  balance,
  onClose,
}: {
  balance: number;
  onClose: () => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [method, setMethod] = useState("upi");

  const newBalance = balance + (selectedAmount || 0);

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">

      {/* Scrollable container */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Recharge Wallet</h2>
            <p className="text-sm text-gray-500">
              Current Balance: ₹{balance}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button>
        </div>

        {/* Amount selection */}
        <h3 className="font-semibold mb-3">Select Amount</h3>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {amounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`border rounded-xl py-2 font-medium transition ${
                selectedAmount === amt
                  ? "border-purple-600 text-purple-600 bg-purple-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <input
          type="number"
          placeholder="Enter custom amount"
          className="border rounded-xl w-full p-3 mb-6 outline-none focus:border-purple-600"
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
        />

        {/* Payment methods */}
        <h3 className="font-semibold mb-3">Select Payment Method</h3>

        <div className="space-y-3">
          <button
            onClick={() => setMethod("upi")}
            className={`w-full border p-4 rounded-xl text-left transition ${
              method === "upi"
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <p className="font-medium">UPI</p>
            <p className="text-sm text-gray-500">PhonePe, GPay, Paytm</p>
          </button>

          <button
            onClick={() => setMethod("card")}
            className={`w-full border p-4 rounded-xl text-left transition ${
              method === "card"
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <p className="font-medium">Credit / Debit Card</p>
            <p className="text-sm text-gray-500">Visa, Mastercard</p>
          </button>

          <button
            onClick={() => setMethod("netbanking")}
            className={`w-full border p-4 rounded-xl text-left transition ${
              method === "netbanking"
                ? "border-purple-600 bg-purple-50"
                : "border-gray-300 hover:border-gray-400"
            }`}
          >
            <p className="font-medium">Net Banking</p>
            <p className="text-sm text-gray-500">All major banks</p>
          </button>
        </div>

        {/* Summary */}
        <div className="bg-gray-100 rounded-xl p-4 mt-6 text-sm">
          <div className="flex justify-between mb-2">
            <span>Recharge Amount</span>
            <span>₹{selectedAmount}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Current Balance</span>
            <span>₹{balance}</span>
          </div>

          <div className="flex justify-between font-semibold text-purple-600">
            <span>New Balance</span>
            <span>₹{newBalance}</span>
          </div>
        </div>

        {/* Pay button */}
        <button className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
          Proceed to Pay ₹{selectedAmount}
        </button>

        <p className="text-xs text-center text-gray-500 mt-3">
          🔒 Your payment is 100% secure and encrypted
        </p>

      </div>
    </div>
  );
}