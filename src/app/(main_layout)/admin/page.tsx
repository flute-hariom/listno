"use client";

import { ArrowLeft, Shield, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();

  // ✅ Added state (only login-related change)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Handle login click
  const handleLogin = () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    router.push("/admin/adminPanel");
  };

  return (
    <div className="min-h-screen flex justify-center py-10 bg-gradient-to-r from-[#2b1a4b] to-[#4b1d73] relative">

      {/* Back Button */}
      <button className="absolute top-6 left-6 flex items-center gap-2 bg-[#3a2a5c] text-white px-4 py-2 rounded-full hover:bg-[#4a3a6c] transition">
        <ArrowLeft size={18} />
        Back to Website
      </button>

      {/* Card */}
      <div className="bg-[#f5f5f7] w-[450px] rounded-3xl shadow-xl p-8 text-center">

        {/* Icon */}
        <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-200 mb-4">
          <Shield className="text-purple-600" size={28} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Admin Portal</h1>
        <p className="text-gray-500 mt-1 mb-6">Secure access only</p>

        {/* Email */}
        <div className="text-left mb-4">
          <label className="text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="admin@listno.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 outline-none focus:border-purple-500"
          />
        </div>

        {/* Password */}
        <div className="text-left mb-4">
          <label className="text-gray-700 font-medium">Password</label>
          <div className="relative mt-2">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-100 outline-none focus:border-purple-500"
            />
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 text-blue-700 text-sm p-4 rounded-xl border border-blue-200 mb-6">
          <span className="font-semibold">Demo Mode:</span> Enter any email and password to access the admin dashboard
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 transition"
        >
          Sign In
        </button>

        {/* 2FA */}
        <p className="text-purple-600 mt-4 cursor-pointer hover:underline">
          Enable 2FA
        </p>

      </div>
    </div>
  );
}