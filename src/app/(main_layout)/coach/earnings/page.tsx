"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DollarSign,
  TrendingUp,
  Calendar,
  Download,
  ArrowLeft,
  CreditCard,
  Check,
  X,
} from "lucide-react";

interface Transaction {
  id: string;
  type: "session" | "withdrawal" | "bonus";
  clientName?: string;
  sessionType?: string;
  amount: number;
  date: string;
  status: "completed" | "pending" | "failed";
}

interface WithdrawalMethod {
  id: string;
  type: "bank" | "upi" | "paytm";
  details: string;
  isDefault: boolean;
}

export default function CoachEarnings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "overview" | "transactions" | "withdraw"
  >("overview");
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  const totalEarnings = 145250;
  const availableBalance = 45000;
  const pendingAmount = 12000;
  const thisMonthEarnings = 45000;

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "session",
      clientName: "Priya Sharma",
      sessionType: "Video Call",
      amount: 800,
      date: "Today, 10:30 AM",
      status: "completed",
    },
    {
      id: "2",
      type: "session",
      clientName: "Rahul Verma",
      sessionType: "Audio Call",
      amount: 600,
      date: "Yesterday, 3:00 PM",
      status: "completed",
    },
    {
      id: "3",
      type: "withdrawal",
      amount: -25000,
      date: "Dec 5, 2024",
      status: "completed",
    },
    {
      id: "4",
      type: "session",
      clientName: "Ananya Patel",
      sessionType: "Chat Session",
      amount: 400,
      date: "Dec 4, 2024",
      status: "completed",
    },
    {
      id: "5",
      type: "bonus",
      amount: 5000,
      date: "Dec 3, 2024",
      status: "completed",
    },
    {
      id: "6",
      type: "session",
      clientName: "Vikram Singh",
      sessionType: "Video Call",
      amount: 800,
      date: "Dec 3, 2024",
      status: "completed",
    },
    {
      id: "7",
      type: "session",
      clientName: "Meera Iyer",
      sessionType: "Video Call",
      amount: 800,
      date: "Dec 2, 2024",
      status: "pending",
    },
    {
      id: "8",
      type: "session",
      clientName: "Arjun Nair",
      sessionType: "Audio Call",
      amount: 600,
      date: "Dec 1, 2024",
      status: "completed",
    },
  ]);

  const [withdrawalMethods] = useState<WithdrawalMethod[]>([
    {
      id: "1",
      type: "bank",
      details: "HDFC Bank - ****4567",
      isDefault: true,
    },
    {
      id: "2",
      type: "upi",
      details: "coach@oksbi",
      isDefault: false,
    },
    {
      id: "3",
      type: "paytm",
      details: "9876543210",
      isDefault: false,
    },
  ]);

  const stats = [
    {
      label: "Total Earnings",
      value: `₹${totalEarnings.toLocaleString()}`,
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500",
    },
    {
      label: "This Month",
      value: `₹${thisMonthEarnings.toLocaleString()}`,
      icon: TrendingUp,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-500",
    },
    {
      label: "Available Balance",
      value: `₹${availableBalance.toLocaleString()}`,
      icon: CreditCard,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500",
    },
    {
      label: "Pending Clearance",
      value: `₹${pendingAmount.toLocaleString()}`,
      icon: Calendar,
      color: "from-orange-500 to-yellow-600",
      bgColor: "bg-orange-500",
    },
  ];

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (amount > availableBalance) {
      alert("Insufficient balance");
      return;
    }
    if (!selectedMethod) {
      alert("Please select a withdrawal method");
      return;
    }

    alert(
      `Withdrawal request of ₹${amount} submitted successfully! Funds will be transferred within 2-3 business days.`,
    );
    setShowWithdrawModal(false);
    setWithdrawAmount("");
    setSelectedMethod("");
  };

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => router.push("/coach/dashboard")}
            className="p-2 hover:bg-white/50 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Earnings & Payments
            </h1>
            <p className="text-gray-600">Track your income and withdrawals</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-md mb-6 flex gap-2">
          {[
            { key: "overview", label: "Overview", icon: "📊" },
            { key: "transactions", label: "Transactions", icon: "📝" },
            { key: "withdraw", label: "Withdraw", icon: "💸" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                  >
                    <div
                      className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-600 mb-1 text-sm">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">Withdraw Funds</h3>
                  <DollarSign className="w-8 h-8" />
                </div>
                <p className="text-green-100 mb-2">Available Balance</p>
                <p className="text-4xl font-bold">
                  ₹{availableBalance.toLocaleString()}
                </p>
              </button>

              <div className="bg-white rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Earnings Breakdown
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Video Sessions (12)</span>
                    <span className="font-bold text-gray-800">₹9,600</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Audio Sessions (8)</span>
                    <span className="font-bold text-gray-800">₹4,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Chat Sessions (5)</span>
                    <span className="font-bold text-gray-800">₹2,000</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-gray-600 font-semibold">
                      Bonuses & Tips
                    </span>
                    <span className="font-bold text-green-600">₹5,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Recent Transactions
                </h2>
                <button
                  onClick={() => setActiveTab("transactions")}
                  className="text-purple-600 font-semibold hover:underline"
                >
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {transactions.slice(0, 5).map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {transaction.type === "session" &&
                          transaction.clientName}
                        {transaction.type === "withdrawal" && "Withdrawal"}
                        {transaction.type === "bonus" && "Performance Bonus"}
                      </p>
                      <p className="text-sm text-gray-600">
                        {transaction.sessionType || transaction.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p
                        className={`font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.amount > 0 ? "+" : ""}₹
                        {Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === "completed"
                            ? "bg-green-100 text-green-700"
                            : transaction.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="space-y-4">
            {/* Filters */}
            <div className="bg-white rounded-2xl p-4 shadow-md flex flex-wrap gap-3">
              <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                <option>All Transactions</option>
                <option>Sessions</option>
                <option>Withdrawals</option>
                <option>Bonuses</option>
              </select>
              <select className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                <option>All Time</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
              <button className="ml-auto px-6 py-2 bg-purple-50 text-purple-600 rounded-xl font-semibold hover:bg-purple-100 transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>

            {/* Transactions List */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Type
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Details
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        Status
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.map((transaction) => (
                      <tr
                        key={transaction.id}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {transaction.date}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              transaction.type === "session"
                                ? "bg-blue-100 text-blue-700"
                                : transaction.type === "withdrawal"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-green-100 text-green-700"
                            }`}
                          >
                            {transaction.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800">
                          {transaction.type === "session" &&
                            `${transaction.clientName} - ${transaction.sessionType}`}
                          {transaction.type === "withdrawal" && "Bank Transfer"}
                          {transaction.type === "bonus" && "Performance Bonus"}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              transaction.status === "completed"
                                ? "bg-green-100 text-green-700"
                                : transaction.status === "pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                          >
                            {transaction.status}
                          </span>
                        </td>
                        <td
                          className={`px-6 py-4 text-right font-bold ${transaction.amount > 0 ? "text-green-600" : "text-red-600"}`}
                        >
                          {transaction.amount > 0 ? "+" : ""}₹
                          {Math.abs(transaction.amount).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Withdraw Tab */}
        {activeTab === "withdraw" && (
          <div className="space-y-6">
            {/* Available Balance Card */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <p className="text-green-100 mb-2">Available for Withdrawal</p>
              <p className="text-5xl font-bold mb-6">
                ₹{availableBalance.toLocaleString()}
              </p>
              <button
                onClick={() => setShowWithdrawModal(true)}
                className="px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Withdraw Now
              </button>
            </div>

            {/* Withdrawal Methods */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Withdrawal Methods
              </h3>
              <div className="space-y-3">
                {withdrawalMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 capitalize">
                          {method.type}
                        </p>
                        <p className="text-sm text-gray-600">
                          {method.details}
                        </p>
                      </div>
                    </div>
                    {method.isDefault && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                        Default
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 font-semibold hover:border-purple-300 hover:text-purple-600 transition-all">
                + Add New Method
              </button>
            </div>

            {/* Withdrawal History */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Withdrawals
              </h3>
              <div className="space-y-3">
                {transactions
                  .filter((t) => t.type === "withdrawal")
                  .map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">
                          Bank Transfer
                        </p>
                        <p className="text-sm text-gray-600">
                          {transaction.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-red-600">
                          ₹{Math.abs(transaction.amount).toLocaleString()}
                        </p>
                        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Withdraw Funds
              </h2>
              <button
                onClick={() => setShowWithdrawModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <p className="text-gray-600 mb-2">Available Balance</p>
                <p className="text-3xl font-bold text-green-600">
                  ₹{availableBalance.toLocaleString()}
                </p>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Withdrawal Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  {[5000, 10000, 25000].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setWithdrawAmount(amount.toString())}
                      className="flex-1 py-2 bg-purple-50 text-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-100 transition-all"
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Withdrawal Method
                </label>
                <div className="space-y-2">
                  {withdrawalMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full p-4 border-2 rounded-xl text-left transition-all flex items-center justify-between ${
                        selectedMethod === method.id
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-gray-800 capitalize">
                          {method.type}
                        </p>
                        <p className="text-sm text-gray-600">
                          {method.details}
                        </p>
                      </div>
                      {selectedMethod === method.id && (
                        <Check className="w-5 h-5 text-purple-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Withdrawal requests are processed
                  within 2-3 business days. A nominal processing fee may apply.
                </p>
              </div>

              <button
                onClick={handleWithdraw}
                className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Confirm Withdrawal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-40">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/coach/dashboard" },
            { icon: "📥", label: "Requests", path: "/coach/requests" },
            { icon: "📅", label: "Schedule", path: "/coach/schedule" },
            {
              icon: "💰",
              label: "Earnings",
              path: "/coach/earnings",
              active: true,
            },
            { icon: "👤", label: "Profile", path: "/coach/setup" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center gap-1 ${item.active ? "text-purple-600" : "text-gray-600"}`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
