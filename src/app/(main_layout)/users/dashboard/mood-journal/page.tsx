"use client";

import { ArrowLeft, User, Users, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MoodJournal() {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const moods = ["😊", "😐", "😔", "😰", "😡"];

  const entries = [
    {
      date: "Jan 7, 2026",
      text: "Had a great therapy session today. Feeling hopeful about the future.",
      mood: "😊",
    },
    {
      date: "Jan 6, 2026",
      text: "Struggled with anxiety today. Work stress is building up.",
      mood: "😔",
    },
    {
      date: "Jan 5, 2026",
      text: "Okay day overall. Nothing special but made it through.",
      mood: "😐",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#EEF2FF] via-[#F5F3FF] to-[#EEF2FF] flex justify-center px-6 py-10">

      <div className="w-full max-w-[980px]">

        {/* HEADER */}
                <div className="bg-white rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-10 mb-10">


        <div className="flex justify-between items-center mb-10">

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-md text-gray-700 font-medium"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div className="flex gap-5">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-md text-purple-600 font-semibold">
              <User size={18} />
              Profile
            </button>

            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-md border border-purple-300 text-purple-600 font-semibold">
              <Users size={18} />
              User Switch
            </button>

            <button
              onClick={() => router.push("/login")}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-md text-red-500 font-semibold"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-[44px] font-bold text-gray-800 mb-10">
          Mood Journal
        </h1>

        {/* MOOD CARD */}

          <h2 className="text-[22px] font-semibold text-gray-800 mb-8">
            How are you feeling today?
          </h2>

          {/* MOODS */}
          <div className="flex justify-between max-w-[640px] mx-auto mb-10">
            {moods.map((mood, index) => (
              <button
                key={index}
                onClick={() => setSelectedMood(mood)}
                className={`text-5xl transition ${
                  selectedMood === mood
                    ? "scale-125"
                    : "hover:scale-110"
                }`}
              >
                {mood}
              </button>
            ))}
          </div>

          {/* TEXTAREA */}
          <textarea
            placeholder="Write about your day... What made you feel this way?"
            className="w-full h-[150px] rounded-2xl border border-gray-200 p-6 text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-8"
          />

          {/* SAVE BUTTON */}
          <button className="w-full py-4 rounded-2xl text-white font-semibold text-lg bg-gradient-to-r from-purple-500 to-blue-500 shadow-md">
            Save Entry
          </button>
        </div>

        {/* PAST ENTRIES */}
        <h2 className="text-[22px] font-semibold text-gray-800 mb-6">
          Past Entries
        </h2>

        <div className="space-y-6">
          {entries.map((entry, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] shadow-[0_6px_20px_rgba(0,0,0,0.07)] p-6 flex justify-between items-start"
            >
              <div>
                <p className="font-semibold text-gray-800 mb-2">
                  {entry.date}
                </p>
                <p className="text-gray-600">
                  {entry.text}
                </p>
              </div>

              <span className="text-2xl">{entry.mood}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}