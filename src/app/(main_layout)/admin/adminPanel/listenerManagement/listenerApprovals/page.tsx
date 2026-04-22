"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  User,
  Search,
  Download,
  Star,
  ChevronRight,
} from "lucide-react";

const approvals = [
  {
    id: 1,
    name: "Priya Sharma",
    code: "L-9021",
    type: "EXTERNAL",
    experience: "4 Years",
    categories: ["Career", "Relationships"],
    initial: "P",
  },
  {
    id: 2,
    name: "Dr. Anil Rao",
    code: "L-9022",
    type: "INTERNAL",
    experience: "12 Years",
    categories: ["Mental Health", "Grief"],
    initial: "D",
  },
];

const listeners = [
  {
    id: "L-104",
    name: "Anjali K.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    type: "EXTERNAL",
    level: "Celebrity",
    status: "Active",
    rating: 4.9,
    calls: 1240,
    earnings: "₹8,450",
    online: true,
  },
  {
    id: "L-299",
    name: "Rahul M.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "EXTERNAL",
    level: "Normal",
    status: "Blocked",
    rating: 4.2,
    calls: 312,
    earnings: "₹0",
    online: false,
  },
  {
    id: "L-305",
    name: "Vikram S.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    type: "INTERNAL",
    level: "Expert",
    status: "Active",
    rating: 4.8,
    calls: 890,
    earnings: "₹3,200",
    online: true,
  },
  {
    id: "L-412",
    name: "Sneha T.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    type: "EXTERNAL",
    level: "Normal",
    status: "Active",
    rating: 4.0,
    calls: 45,
    earnings: "₹600",
    online: false,
  },
];

export default function ListenerApprovalsPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [online, setOnline] = useState("Online & Offline");
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null);
  const [selectedProfile, setSelectedProfile] = useState<any>(null);

  const filteredListeners = listeners.filter((user) => {
    return (
      (search === "" ||
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.id.toLowerCase().includes(search.toLowerCase())) &&
      (level === "All" || user.level === level) &&
      (type === "All" || user.type === type) &&
      (status === "All" || user.status === status)&&
      (online === "Online & Offline" ||
      (online === "Online" && user.online) ||
      (online === "Offline" && !user.online))
    );
  });

  return (
    <div className="max-w-[1150px] mx-auto space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-[28px] font-semibold text-[#1F2937]">
            Listener Management & Approvals
          </h1>
          <p className="text-[14px] text-[#6B7280] mt-1">
            Review new applications and manage your existing listener network from one place.
          </p>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm text-sm font-medium hover:bg-gray-50">
          <Download size={16} />
          Export All
        </button>
      </div>

      {/* APPROVAL SECTION */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
            <User className="text-purple-600" size={18} />
          </div>

          <h2 className="text-[18px] font-semibold text-gray-800">
            Action Required: Pending Approvals
          </h2>

          <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
            2 Pending
          </span>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#f1ece6]">
  
  {/* Header */}
  <div className="grid grid-cols-5 px-6 py-4 text-xs font-semibold text-gray-500 uppercase bg-[#f7f3ee] border-b border-[#eee7df]">
    <span className="text-[#8b6f47]">Applicant</span>
    <span>Type</span>
    <span>Experience</span>
    <span>Categories</span>
    <span className="text-right">Actions</span>
  </div>

  {approvals.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-5 px-6 py-5 items-center border-b border-[#f3ede7] last:border-none hover:bg-[#faf7f4] transition"
    >
      
      {/* Applicant Column (slight tint effect) */}
      <div className="flex items-center gap-3 bg-[#fffdfb] -mx-2 px-2 py-2 rounded-lg">
        <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center font-medium text-sm">
          {item.initial}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {item.name}
          </p>
          <p className="text-xs text-gray-400">
            {item.code}
          </p>
        </div>
      </div>

      {/* Type */}
      <span
        className={`text-xs px-3 py-1 rounded-md w-fit font-semibold ${
          item.type === "EXTERNAL"
            ? "bg-[#f3f0ff] text-gray-600"
            : "bg-[#efe7ff] text-purple-600"
        }`}
      >
        {item.type}
      </span>

      {/* Experience */}
      <span className="text-sm text-gray-600 font-medium">
        {item.experience}
      </span>

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {item.categories.map((cat, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 bg-[#f1f3f5] text-gray-700 rounded-full font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Action */}
     <div className="flex justify-end">
      <button
  onClick={() => setSelectedApplicant(item)}
  className="px-5 py-2 text-sm text-white rounded-xl bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 shadow-md hover:opacity-95 transition"
>
  Review Application
</button>
      </div>
    </div>
  ))}
</div>
      </div>

      {/* ACTIVE LISTENER DIRECTORY */}

<div className="space-y-4">

  {/* HEADER */}
  <div className="flex flex-wrap justify-between items-center">
    <h2 className="text-[20px] font-semibold flex items-center gap-2 text-gray-800">
      <User size={18} className="text-blue-500" />
      Active Listener Directory
    </h2>

    {/* SEARCH */}
    <div className="relative">
      <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
      <input
        type="text"
        placeholder="Search ID or Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-9 pr-4 py-2.5 border border-[#e6e0d9] rounded-xl text-sm outline-none w-[240px] bg-white"
      />
    </div>
  </div>

  {/* CARD */}
  <div className="bg-white rounded-2xl border border-[#efe7df] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

    {/* FILTER BAR */}
    <div className="flex flex-wrap gap-3 px-6 py-4 bg-[#f7f3ee] border-b border-[#eee6dd]">
      
      {[
        { value: level, set: setLevel, options: ["All Levels", "Expert", "Celebrity"] },
        { value: type, set: setType, options: ["All Types", "INTERNAL", "EXTERNAL"] },
        { value: status, set: setStatus, options: ["All Status", "Active", "Blocked"] },
        { value: online, set: setOnline, options: ["Online & Offline", "Online", "Offline"] }
      ].map((filter, i) => (
        <select
          key={i}
          value={filter.value}
          onChange={(e) => filter.set(e.target.value)}
          className="px-4 py-2 text-sm border border-[#e6e0d9] rounded-xl bg-white text-gray-700 outline-none"
        >
          {filter.options.map((opt, idx) => (
            <option key={idx}>{opt}</option>
          ))}
        </select>
      ))}

    </div>

    {/* TABLE HEADER */}
    <div className="grid grid-cols-8 px-6 py-4 text-xs font-semibold text-gray-500 uppercase border-b border-[#eee6dd] bg-white">
      <span>ID & Name</span>
      <span>Type</span>
      <span>Level</span>
      <span>Status</span>
      <span>Rating</span>
      <span>Total Calls</span>
      <span>Today's Earnings</span>
      <span className="text-right">Action</span>
    </div>

    {/* ROWS */}
    {filteredListeners.map((user) => (
      <div
        key={user.id}
        className="grid grid-cols-8 px-6 py-5 items-center border-b border-[#f3ede7] last:border-none hover:bg-[#faf7f4] transition"
      >

        {/* USER */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src={user.avatar}
              alt="avatar"
              width={42}
              height={42}
              className="rounded-full"
            />
            {user.online && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
              {user.name}
            </p>
            <p className="text-xs text-gray-400">{user.id}</p>
          </div>
        </div>

        {/* TYPE */}
        <span className={`text-xs px-3 py-1 rounded-md font-semibold w-fit ${
          user.type === "INTERNAL"
            ? "bg-[#efe7ff] text-purple-600"
            : "bg-[#f1f3f5] text-gray-600"
        }`}>
          {user.type}
        </span>

        {/* LEVEL */}
        <span className="text-sm text-gray-700 flex items-center gap-1">
          {user.level === "Celebrity" && "🌟"}
          {user.level === "Expert" && "🏅"}
          {user.level}
        </span>

        {/* STATUS */}
        <span className={`text-xs px-3 py-1 rounded-full font-semibold w-fit ${
          user.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-600"
        }`}>
          {user.status}
        </span>

        {/* RATING */}
        <span className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          {user.rating}
        </span>

        {/* CALLS */}
        <span className="text-sm text-gray-600">
          {user.calls}
        </span>

        {/* EARNINGS */}
        <span className="text-sm font-semibold text-green-600">
          {user.earnings}
        </span>

        {/* ACTION */}
       <div
onClick={() => router.push(`/admin/adminPanel/listenerManagement/listeners/${user.id}`)}
  className="flex justify-end items-center gap-1 text-gray-600 hover:text-gray-900 cursor-pointer"
>
  <span className="text-sm font-medium">View Profile</span>
  <ChevronRight size={16} />
</div>

      </div>
    ))}

  </div>
</div>

{/* review application page */}
{selectedApplicant && (
  <div className="fixed inset-0 z-50 flex">

    {/* BACKDROP */}
    <div
      className="flex-1 bg-black/30 backdrop-blur-sm"
      onClick={() => setSelectedApplicant(null)}
    />

    {/* DRAWER */}
    <div className="w-full sm:w-[500px] md:w-[600px] h-full bg-white shadow-2xl flex flex-col animate-slideIn">

      {/* HEADER */}
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-800">
            Applicant Review
          </h2>
          <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">
            Low Risk
          </span>
        </div>

        <button
          onClick={() => setSelectedApplicant(null)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* PROFILE */}
        <div className="flex gap-4 items-start">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-lg font-semibold text-gray-700 shadow-sm">
            {selectedApplicant.initial}
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {selectedApplicant.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {selectedApplicant.code} • {selectedApplicant.experience}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-gray-600">
              <span>📧 priya.s@example.com</span>
              <span>📞 +91 98765 43210</span>
              <span>📍 Mumbai, MH</span>
              <span>🌐 English, Hindi</span>
            </div>
          </div>
        </div>

        {/* BIO + EXPERTISE */}
        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Professional Bio
            </h4>
            <p className="text-sm text-gray-600">
              Certified life coach helping millennials navigate career transitions.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
            <h4 className="text-sm font-semibold text-gray-800 mb-2">
              Expertise Categories
            </h4>

            <div className="flex gap-2 flex-wrap">
              {selectedApplicant?.categories?.map((cat: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-gray-50 rounded-full text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* MEDIA */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">
            Onboarding Media
          </h4>

          <video
            controls
            className="w-full h-56 rounded-xl bg-black mb-4"
          >
            <source src="/sample-video.mp4" type="video/mp4" />
          </video>

          <div className="flex gap-3">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?img=${i}`}
                className="w-24 h-24 rounded-xl object-cover hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* DOCUMENTS */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-800 mb-3">
            Uploaded Documents
          </h4>

          <div className="space-y-3">
            {[
              { name: "Aadhar_Card.pdf", type: "Govt ID", size: "2.4 MB" },
              { name: "Life_Coach_Cert_2023.pdf", type: "Certification", size: "1.1 MB" }
            ].map((doc, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.type} • {doc.size}</p>
                </div>

                <div className="flex gap-3 text-sm">
                  <button className="text-gray-500 hover:text-purple-600 transition">
                    View
                  </button>
                  <button className="text-gray-400 hover:text-gray-700 transition">
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VOICE */}
        <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100">
  <h4 className="text-sm font-semibold text-gray-800 mb-3">
    Voice Sample
  </h4>

  <div className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">

    {/* PLAY BUTTON */}
    <button className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition flex items-center justify-center shadow-sm">
      ▶
    </button>

    {/* WAVEFORM */}
    <div className="flex-1 flex items-center gap-[3px] h-12">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="w-[3px] bg-purple-400 rounded-full"
          style={{
            height: `${Math.random() * 70 + 20}%`,
          }}
        />
      ))}
    </div>

    {/* TIME */}
    <div className="text-xs text-gray-500 whitespace-nowrap">
      00:00 / 02:15
    </div>

  </div>
</div>

        {/* ADMIN */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 space-y-4">
          <h4 className="text-sm font-semibold text-gray-800">
            Admin Assessment
          </h4>

          <div className="grid grid-cols-2 gap-4">
            <select className="border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-purple-100 outline-none">
              <option>New</option>
              <option>Intermediate</option>
              <option>Expert</option>
            </select>

            <select className="border border-gray-200 rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-purple-100 outline-none">
              <option>Pending Check</option>
              <option>Clear</option>
              <option>Flagged</option>
            </select>
          </div>

          <textarea
            className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-100 outline-none"
            placeholder="Internal notes..."
          />
        </div>

      </div>

      {/* FOOTER */}
      <div className="border-t border-gray-100 bg-white p-4">
        <div className="flex gap-3">
          <button className="flex-1 py-3 rounded-xl bg-red-500 text-white hover:opacity-90 transition">
            Reject Application
          </button>
          <button className="flex-1 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
            Hold for Review
          </button>
          <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 transition">
            Approve Listener
          </button>
        </div>
      </div>

    </div>

    {/* ANIMATION */}
    <style jsx>{`
      .animate-slideIn {
        animation: slideIn 0.3s ease-out;
      }
      @keyframes slideIn {
        from {
          transform: translateX(100%);
        }
        to {
          transform: translateX(0);
        }
      }
    `}</style>

  </div>
)}

{/* view profile page */}


        </div>
  );
} 