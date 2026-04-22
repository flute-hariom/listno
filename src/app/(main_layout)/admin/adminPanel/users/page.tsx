"use client";
import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  Ban,
  MoreVertical,
  Users,
  Activity,
  IndianRupee,
  Wallet,
  Calendar, 
  Upload, 
  Download
} from "lucide-react";

  


const users = [
  {
    name: "Alex Martin",
    city: "Mumbai",
    email: "alex@email.com",
    phone: "+91 98765 43210",
    plan: "Premium",
    sessions: 12,
    spent: "₹8,500",
    wallet: "₹1,200",
    status: "active",
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    email: "priya@email.com",
    phone: "+91 98765 43211",
    plan: "Standard",
    sessions: 8,
    spent: "₹12,000",
    wallet: "₹500",
    status: "active",
  },
  {
    name: "John Doe",
    city: "Bangalore",
    email: "john@email.com",
    phone: "+91 98765 43212",
    plan: "Standard",
    sessions: 5,
    spent: "₹3,500",
    wallet: "₹0",
    status: "inactive",
  },
  {
    name: "Amit Kumar",
    city: "Chennai",
    email: "amit@email.com",
    phone: "+91 98765 43213",
    plan: "Enterprise",
    sessions: 15,
    spent: "₹15,600",
    wallet: "₹2,500",
    status: "active",
  },


];
 
export default function UserManagement() {
    const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Status");
  const options = ["All Status", "Active", "Inactive", "Suspended"];

  return (
    <div className="p-3 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-semibold text-[#111827]">
            User Management
          </h1>
          <p className="text-[14px] text-[#6B7280] mt-1">
            Manage and monitor all platform users
          </p>
        </div>

       <div className="flex gap-3">
  {/* Last 30 Days */}
  <button className="flex items-center gap-2 px-4 h-[45px] border border-[#E5E7EB] rounded-lg text-[14px] text-[#374151] bg-white hover:bg-[#F3F4F6] transition-colors duration-200">
    <Calendar className="w-4 h-4 text-[#6B7280]" />
    Last 30 Days
  </button>

  {/* Import */}
  <button className="flex items-center gap-2 px-4 h-[45px] border border-[#E5E7EB] rounded-lg text-[14px] text-[#374151] bg-white hover:bg-[#F3F4F6] transition-colors duration-200">
    <Upload className="w-4 h-4 text-[#6B7280]" />
    Import
  </button>

  {/* Export Users */}
  <button className="flex items-center gap-2 px-4 h-[45px] bg-[#7C3AED] text-white rounded-lg text-[14px] font-medium hover:bg-[#6D28D9] transition-colors duration-200 shadow-sm">
    <Download className="w-4 h-4 text-white" />
    Export Users
  </button>
</div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {[
          {
            title: "Total Users",
            value: "12,458",
            icon: Users,
            bg: "bg-[#EEF2FF]",
            color: "text-[#4F46E5]",
          },
          {
            title: "Active Users",
            value: "8,234",
            icon: Activity,
            bg: "bg-[#ECFDF5]",
            color: "text-[#059669]",
          },
          {
            title: "Total Revenue",
            value: "₹8.5L",
            icon: IndianRupee,
            bg: "bg-[#F5F3FF]",
            color: "text-[#7C3AED]",
          },
          {
            title: "Avg. Spent",
            value: "₹6,820",
            icon: Wallet,
            bg: "bg-[#ECFDF5]",
            color: "text-[#059669]",
          },
        ].map((card, i) => {
          const Icon = card.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-[16px] border border-[#F3F4F6] shadow-sm p-5 flex items-center gap-4"
            >
              <div
                className={`w-[48px] h-[48px] flex items-center justify-center rounded-xl ${card.bg}`}
              >
                <Icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <div>
                <p className="text-[14px] text-[#6B7280]">
                  {card.title}
                </p>
                <h2 className="text-[22px] font-semibold text-[#111827]">
                  {card.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[16px] border border-[#F3F4F6] shadow-sm p-5">
        {/* Search */}
       
       <div className="flex gap-4 mb-5 relative">
      
      {/* Search Bar */}
      <div className="flex items-center h-[40px] w-[420px] border border-[#E5E7EB] rounded-lg bg-white px-4">
        <Search className="w-4 h-4 text-[#9CA3AF]" />
        <input
          type="text"
          placeholder="Search users by name or email..."
          className="w-full ml-2 bg-transparent outline-none text-[14px] text-[#111827] placeholder-[#9CA3AF]"
        />
      </div>

      {/* Status Filter */}
      <div className="relative w-[420px]">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between h-[40px] w-full px-4 rounded-lg bg-white text-[14px] transition-all duration-200
          ${open ? "border border-[#7C3AED] ring-1 ring-[#7C3AED]" : "border border-[#E5E7EB] hover:bg-[#F3F4F6]"}`}
        >
          <div className="flex items-center">
            <Filter className="w-4 h-4 text-[#6B7280] mr-2" />
            <span className="text-[#374151]">{selected}</span>
          </div>
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute top-[45px] left-0 w-full bg-white border border-[#E5E7EB] rounded-lg shadow-md z-10 overflow-hidden">
            {options.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className={`px-4 py-2 text-[14px] cursor-pointer
                ${selected === item ? "bg-[#2563EB] text-white" : "text-[#374151] hover:bg-[#F3F4F6]"}`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  


        {/* Table */}
        <table className="w-full text-[14px]">
          <thead className="text-[#6B7280]">
            <tr className="border-b border-[#F3F4F6]">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th>User</th>
              <th>Contact</th>
              <th>Role & Activity</th>
              <th>Sessions</th>
              <th>Spent</th>
              <th>Wallet</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, i) => (
              <tr
                key={i}
                className="border-b border-[#F3F4F6] hover:bg-[#F9FAFB]"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full" />
                    <div>
                      <p className="font-medium text-[#111827]">
                        {user.name}
                      </p>
                      <p className="text-[12px] text-[#6B7280]">
                        {user.city}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <p className="text-[#111827]">{user.email}</p>
                  <p className="text-[12px] text-[#6B7280]">
                    {user.phone}
                  </p>
                </td>

                <td>
                  <span className="px-2 py-1 bg-[#F3F4F6] rounded-md text-[12px] text-[#374151]">
                    {user.plan}
                  </span>
                </td>

                <td className="text-[#111827] font-medium">
                  {user.sessions}
                </td>

                <td className="text-[#059669] font-medium">
                  {user.spent}
                </td>

                <td className="text-[#7C3AED] font-medium">
                  {user.wallet}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                      user.status === "active"
                        ? "bg-[#DCFCE7] text-[#059669]"
                        : "bg-[#E5E7EB] text-[#6B7280]"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td>
                  <div className="flex items-center gap-3">
                    <Eye className="w-4 h-4 text-[#3B82F6] cursor-pointer" />
                    <Ban className="w-4 h-4 text-[#EF4444] cursor-pointer" />
                    <MoreVertical className="w-4 h-4 text-[#9CA3AF] cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="flex justify-between items-center mt-5">
          <p className="text-[14px] text-[#6B7280]">
            Showing 1 to 4 of 12,458 results
          </p>

          <div className="flex items-center gap-2">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`w-8 h-8 rounded-md text-[14px] ${
                  n === 1
                    ? "bg-[#EEF2FF] text-[#4F46E5]"
                    : "border border-[#E5E7EB] text-[#374151]"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
