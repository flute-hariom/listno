"use client";

// app/onboarding/step-3/page.tsx
// Pixel‑perfect Step 3 – Preferred Languages (matches your screenshot)

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Languages, ChevronLeft, ChevronRight } from "lucide-react";

export default function StepThree() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const languages = [
    "English", "Hindi", "Bengali",
    "Telugu", "Marathi", "Tamil",
    "Urdu", "Gujarati", "Kannada",
    "Malayalam", "Punjabi"
  ];

  const toggle = (lang: string) => {
    setSelected(prev =>
      prev.includes(lang)
        ? prev.filter(l => l !== lang)
        : [...prev, lang]
    );
  };

  return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-[#FDF2F8] flex items-center justify-center p-4">

       <div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-black
          ">Welcome to LISTENO</h1>
          <p className="text-gray-500 mt-2">Let's set up your profile in just a few steps</p>
        </div>

        {/* PROGRESS */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Step 3 of 4</span>
            <span className="text-purple-600 font-medium">75%</span>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>
        </div>

        {/* CARD */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-10">

          {/* CARD HEADER */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-xl text-white">
              <Languages size={30} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-black">Preferred Languages</h2>
              <p className="text-gray-500 text-sm">Select languages you're comfortable with</p>
            </div>
          </div>

          {/* LANGUAGE GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map(lang => {
              const active = selected.includes(lang);
              return (
                <button
                  key={lang}
                  onClick={() => toggle(lang)}
                  className={`py-3 rounded-xl border-2 text-sm font-medium transition-all
                    ${active
                      ? "border-blue-500 text-blue-600 bg-[#EFF6FF] shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
                      : "border-gray-200 text-gray-700 hover:border-blue-300"}`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => router.back()}
            className="px-40 py-3 rounded-xl  bg-[#FFFFFF] border border-gray-300 text-black hover:bg-gray-100 flex items-center gap-2"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <button
            onClick={() => selected.length > 0 && router.push("/userOnboarding/step-4")}
            disabled={selected.length === 0}
            className={`px-40 py-3 rounded-xl text-white shadow-md flex items-center gap-2 transition-all
              ${selected.length > 0
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"}`}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
