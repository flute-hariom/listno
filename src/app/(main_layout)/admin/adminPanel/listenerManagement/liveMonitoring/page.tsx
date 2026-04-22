"use client";

import { Activity, Bell, HeartPulse, MoreVertical, DollarSign, ArrowRight } from "lucide-react";
import Image from "next/image";

// Dummy data
const listenersOnCall = [
  {
    name: "Anjali K.",
    id: "L-104",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "EXTERNAL",
    status: "On Call",
    talkingWith: "U-8821",
    duration: "06:35",
    earnings: "593",
  },
  {
    name: "Vikram S.",
    id: "L-305",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "INTERNAL",
    status: "On Call",
    talkingWith: "U-1192",
    duration: "02:50",
    earnings: "136",
  },
  {
    name: "Rohan D.",
    id: "L-511",
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    type: "EXTERNAL",
    status: "Online",
    talkingWith: "--",
    duration: "--:--",
    earnings: "0",
  },
];

// Top Stats Card Component
function StatCard({ title, value, change, changeType, icon: Icon, unit }: any) {
  const isPositive = changeType === "positive";
  return (
    <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm flex-1 min-w-[280px]">
      <div className="flex justify-between items-start mb-6">
        <p className="text-[14px] text-gray-500 font-medium">{title}</p>
        <div className={`p-2 rounded-lg ${unit ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'}`}>
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-[36px] font-bold text-gray-950 tracking-tight">{value}</h3>
        {unit && <span className="text-[20px] font-medium text-gray-600">/{unit}</span>}
      </div>
      {change && (
        <div className={`flex items-center gap-1.5 mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          <span className="text-[12px] font-bold">{change}</span>
          <span className="text-[12px] font-medium text-gray-400">vs last hr</span>
        </div>
      )}
    </div>
  );
}

export default function LiveMonitoringPage() {
  return (
    <div className="p-8 bg-[#f6f7fb] min-h-screen">
      {/* Page Header */}
      <div className="mb-10 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold text-gray-950">Live Monitoring</h1>
            <div className="w-2 h-2 rounded-full bg-blue-500 mt-1"></div>
          </div>
          <p className="text-sm text-gray-500 mt-1.5">Real-time view of ongoing calls and active listeners.</p>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <div className="relative"><Bell size={20} /><div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#f6f7fb]"></div></div>
          <p className="text-xs font-medium">11:21 AM | 4/19/2026</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex gap-6 mb-10  pb-4 -mb-4">
        <StatCard title="Currently Live Calls" value="24" change="↑ 12%" changeType="positive" icon={Activity} />
        <StatCard title="Listeners Online" value="142" icon={ArrowRight} />
        <StatCard title="Live Platform Earnings/Hr" value="₹45,000" unit="Hr" change="↑ 5%" changeType="positive" icon={DollarSign} />
      </div>

      {/* Listener Table Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden w-full">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Listener Call Activity</h2>
        </div>
        
        {/* TABLE WRAPPER FOR SCROLLING */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead className="bg-[#fafafa] text-gray-400 text-[11px] uppercase font-semibold tracking-wider">
              <tr>
                <th className="px-6 py-4">Listener</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Live Status</th>
                <th className="px-6 py-4">Talking With</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Current Earnings</th>
                <th className="px-6 py-4 text-right">Admin Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {listenersOnCall.map((listener, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 flex items-center gap-3.5">
                    <Image src={listener.avatar} alt={listener.name} width={40} height={40} className="rounded-full" />
                    <div>
                      <p className="font-semibold text-[14px] text-gray-900">{listener.name}</p>
                      <p className="text-[11px] text-gray-400">{listener.id}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${listener.type === "INTERNAL" ? "bg-purple-50 text-purple-600" : "bg-gray-100 text-gray-600"}`}>
                      {listener.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 text-[12px] font-medium px-2.5 py-1 rounded-full w-fit ${listener.status === "On Call" ? "bg-blue-50 text-blue-600" : "bg-green-50 text-green-600"}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${listener.status === "On Call" ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                      {listener.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-gray-600 font-medium">{listener.talkingWith}</td>
                  <td className="px-6 py-4 text-[13px] text-gray-900 font-medium tabular-nums">{listener.duration}</td>
                  <td className="px-6 py-4 text-[13px] text-green-600 font-bold">₹{listener.earnings}</td>
                  
                  {/* ADMIN ACTIONS COLUMN */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-100 text-blue-600 text-[11px] font-semibold hover:bg-blue-50 transition">
                        <HeartPulse size={14} /> Connection Health
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-100 text-gray-600 text-[11px] font-semibold hover:bg-gray-50 transition">
                        <Bell size={14} /> System Nudge
                      </button>
                      {/*<button className="text-gray-400 hover:text-gray-600 px-1">
                          <MoreVertical size={16} />
                      </button>*/}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}