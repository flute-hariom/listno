"use client";

import Image from "next/image";
import { Phone, Video, MessageCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const logs = [
  {
    id: 1,
    name: "Monalisa",
    image: "/profile.jpg",
    lastConnected: "20:08 PM",
    date: "20 Aug 2025",
    voice: "50m 59s",
    video: "1m 2s",
    chat: "1m 2s",
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    image: "/profile.jpg",
    lastConnected: "15:30 PM",
    date: "18 Aug 2025",
    voice: "30m 15s",
    video: "0m 0s",
    chat: "5m 20s",
  },
  {
    id: 3,
    name: "Priya Sharma",
    image: "/profile2.jpg",
    lastConnected: "10:45 AM",
    date: "15 Aug 2025",
    voice: "0m 0s",
    video: "45m 30s",
    chat: "2m 10s",
  },
];

export default function TalkLogPage() {

  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-gray-100">

      {/* HEADER */}
      <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 pb-24">

        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 pt-6">

            {/* TOP BAR */}
            <div className="flex flex-wrap justify-between items-center gap-3">

              <button
                onClick={() => router.back()}
                className="bg-white px-4 py-2 rounded-xl shadow-md font-medium text-sm sm:text-base"
              >
                ← Back
              </button>

              <div className="flex flex-wrap gap-2 sm:gap-3">

                <button
                  onClick={() => router.push("/profile")}
                  className="bg-white px-4 py-2 rounded-xl shadow-md text-sm sm:text-base"
                >
                  Profile
                </button>

                <button
                  onClick={() => router.push("/switch-user")}
                  className="bg-white px-4 py-2 rounded-xl shadow-md text-sm sm:text-base"
                >
                  User Switch
                </button>

                <button
                  onClick={() => router.push("/logout")}
                  className="bg-white text-red-500 px-4 py-2 rounded-xl shadow-md text-sm sm:text-base"
                >
                  Logout
                </button>

              </div>

            </div>

            {/* TITLE */}
            <div className="flex flex-wrap justify-between items-center mt-8 gap-4">

              <div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                  📞 Talk Log
                </h1>

                <p className="text-white/80 mt-1 text-sm sm:text-base">
                  Hi, Abhishesh
                </p>

              </div>

              <div className="bg-white/20 backdrop-blur px-5 py-2 sm:px-6 sm:py-3 rounded-xl text-white font-semibold text-sm sm:text-base">
                ₹100 +
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* TALK LOG CARDS */}
      <div className="w-full flex justify-center -mt-16 sm:-mt-20 px-4">

        <div className="w-full max-w-5xl space-y-6 sm:space-y-8">

          {logs.map((log) => (
            <div
              key={log.id}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100"
            >

              {/* PROFILE */}
              <div className="flex items-center gap-4">

                <Image
                  src={log.image}
                  alt={log.name}
                  width={60}
                  height={60}
                  className="rounded-xl object-cover"
                />

                <div>

                  <h2 className="text-base sm:text-lg font-semibold">
                    {log.name}
                  </h2>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    Last Connected: {log.lastConnected}
                  </p>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    Date: {log.date}
                  </p>

                </div>

              </div>

              {/* SUMMARY */}
              <div className="bg-gray-100 rounded-xl p-4 sm:p-5 mt-4 sm:mt-5">

                <p className="font-semibold text-gray-600 mb-3 text-sm sm:text-base">
                  Call & Interaction Summary:
                </p>

                <div className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">

                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-green-500" />
                    Voice Call Duration
                    <span className="font-semibold ml-1">{log.voice}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Video size={16} className="text-purple-500" />
                    Video Call Duration
                    <span className="font-semibold ml-1">{log.video}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-blue-500" />
                    Chat Duration
                    <span className="font-semibold ml-1">{log.chat}</span>
                  </div>

                </div>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 sm:mt-6">

                <button
                  onClick={() => router.push(`/connect/${log.id}`)}
                  className="w-full sm:flex-1 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                  Connect Again
                </button>

                <button
                  onClick={() => router.push(`/profile/${log.id}`)}
                  className="w-full sm:w-auto px-6 py-3 border border-purple-400 text-purple-600 rounded-xl hover:bg-purple-50 transition"
                >
                  View Profile
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}