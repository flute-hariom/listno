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
        <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#eef2ff] flex items-center justify-center p-4">

       <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Welcome to LISTENO</h1>
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
              <Languages size={22} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Preferred Languages</h2>
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
                      ? "border-blue-500 text-blue-600 bg-blue-50 shadow-[0_4px_12px_rgba(37,99,235,0.15)]"
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
            className="px-10 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 flex items-center gap-2"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <button
            onClick={() => selected.length > 0 && router.push("/userOnboarding/step-4")}
            disabled={selected.length === 0}
            className={`px-12 py-3 rounded-xl text-white shadow-md flex items-center gap-2 transition-all
              ${selected.length > 0
                ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"}`}
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
