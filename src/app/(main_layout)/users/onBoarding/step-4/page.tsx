"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Check, ArrowLeft, Smile } from "lucide-react";

export default function StepFour() {
  const router = useRouter();

  const interests = [
    "Meditation", "Yoga", "Self-help books",
    "Journaling", "Mindfulness", "Exercise",
    "Reading", "Music", "Art",
    "Travel", "Cooking", "Photography"
  ];

  const goals = [
    "Better work-life balance", "Improved relationships",
    "Career advancement", "Mental wellness",
    "Physical fitness", "Personal growth",
    "Stress reduction", "Better sleep",
    "Increased confidence", "Emotional healing"
  ];

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: any
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#eef2ff] flex items-center justify-center p-4">
      
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to LISTENO
          </h1>
          <p className="text-gray-500 mt-2">
            Let's set up your profile in just a few steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm mb-2">
            <span>Step 4 of 4</span>
            <span className="text-purple-600 font-semibold">100%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full">
            <div className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 w-full"></div>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white p-10 rounded-3xl shadow-xl">

          {/* Icon + Title */}
          <div className="flex items-start gap-4 mb-8">
            <div className="w-14 h-14 flex items-center justify-center rounded-2xl 
                            bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-md">
              <Smile size={28} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Personal Interests & Goals
              </h2>
              <p className="text-gray-500">
                Help us personalize your experience (optional)
              </p>
            </div>
          </div>

          {/* Interests */}
          <h3 className="font-medium mb-4">Your Interests:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-8">
            {interests.map((item) => (
              <button
                key={item}
                onClick={() =>
                  toggleSelection(item, selectedInterests, setSelectedInterests)
                }
                className={`py-2 rounded-xl transition ${
                  selectedInterests.includes(item)
                    ? "bg-gradient-to-r from-[#00A63E] to-[#00A63E] text-white"
                    : "bg-gray-100 hover:bg-[#daf1e2] text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Goals */}
          <h3 className="font-semibold mb-4">Your Goals:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {goals.map((item) => (
              <button
                key={item}
                onClick={() =>
                  toggleSelection(item, selectedGoals, setSelectedGoals)
                }
                className={`py-2 rounded-xl transition ${
                  selectedGoals.includes(item)
                    ? "bg-gradient-to-r from-[#00A63E] to-[#00A63E] text-white"
                    : "bg-gray-100 hover:bg-[#daf1e2] text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-10">

          {/* Back */}
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#FFFFFF] hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          {/* Complete Setup */}
          <button
            onClick={() => router.push("/users/dashboard")}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium"
          >
            <Check size={18} />
            Complete Setup
          </button>
        </div>

        {/* Skip */}
        <div className="text-center mt-6">
          <button
            onClick={() => router.push("/users/dashboard")}
            className="text-[#4A5565] hover:text-black"
          >
            Skip for now
          </button>
        </div>

      </div>
    </div>
  );
}