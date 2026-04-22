"use client";

import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, Phone } from "lucide-react";

// Mock Data
const listener = {
  id: "L-299",
  name: "Rahul M.",
  type: "EXTERNAL",
  level: "Normal",
  status: "Blocked",
  joined: "Jan 2023",
  rating: 4.2,
  totalCalls: 312,
  stats: { callsTaken: 18, talkTime: "4h 15m", earnings: 8450 },
  categories: ["Mental Health", "Relationships", "Career"],
  fraudIndicators: { shortCalls: "2%", rejectRate: "15%" },
  recentActivity: [
    { time: "10:45 AM", event: "Call Ended", details: "Duration: 45 mins. Rating: 5 stars." },
    { time: "10:00 AM", event: "Call Accepted", details: "User ID: IJ-9921" },
    { time: "09:00 AM", event: "Login", details: "Status changed to Online" },
  ]
};

export default function ListenerProfilePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen text-gray-900">
      
      {/* 1. BACK BUTTON */}
      <button onClick={() => router.back()} className="flex items-center text-gray-500 hover:text-gray-900 mb-6 text-sm font-medium">
        <ChevronLeft size={18} className="mr-1" /> Back to All Listeners
      </button>

      {/* 2. HEADER CARD (Contains Info + Tabs) */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="p-6 flex items-start gap-6">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-20 h-20 rounded-full" />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{listener.name}</h2>
            <p className="text-sm text-gray-500 mt-1">ID: {id} • Joined {listener.joined}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-md">EXTERNAL</span>
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-md">Normal</span>
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-md">{listener.status}</span>
              <span className="ml-2 text-yellow-500 font-semibold text-sm">★ {listener.rating} <span className="text-gray-400 font-normal">(1.2k reviews)</span></span>
              <span className="ml-2 text-gray-500 text-sm flex items-center gap-1"><Phone size={14}/> {listener.totalCalls} Total Calls</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg text-sm font-medium">Adjust Level</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium">Force Logout</button>
          </div>
        </div>

        {/* TABS (Inside the Card) */}
        <div className="px-6 flex gap-8 border-t border-gray-100">
          {["Overview", "Performance", "Financials", "Logs"].map((tab, idx) => (
            <button key={tab} className={`py-4 text-sm font-medium ${idx === 0 ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. MAIN DASHBOARD BODY (Stats + Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-semibold text-lg">Daily Stats (Today)</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500">Calls Taken</p>
              <p className="text-2xl font-bold mt-1">{listener.stats.callsTaken}</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500">Talk Time</p>
              <p className="text-2xl font-bold mt-1">{listener.stats.talkTime}</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <p className="text-sm text-gray-500">Earnings</p>
              <p className="text-2xl font-bold text-green-600 mt-1">₹{listener.stats.earnings.toLocaleString()}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between mb-6">
              <h3 className="font-semibold text-lg">Recent Activity</h3>
              <button className="text-sm text-indigo-600 font-medium">View All Logs</button>
            </div>
            <div className="space-y-6">
              {listener.recentActivity.map((act, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-sm text-gray-400 w-20 pt-1">{act.time}</div>
                  <div>
                    <p className="font-medium text-gray-900">{act.event}</p>
                    <p className="text-sm text-gray-500">{act.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {listener.categories.map(cat => (
                <span key={cat} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">{cat}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-semibold mb-4">AI Fraud Indicators</h3>
            <div className="space-y-4">
              <div className="flex justify-between"><span className="text-sm text-gray-600">Short Calls (&lt;1m)</span> <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded">{listener.fraudIndicators.shortCalls}</span></div>
              <div className="flex justify-between"><span className="text-sm text-gray-600">Call Reject Rate</span> <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-1 rounded">{listener.fraudIndicators.rejectRate}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}