"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Languages, ChevronLeft, ChevronRight } from "lucide-react";

type Language = string;

const Page = () => {
  const router = useRouter();

  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch Languages (static for now)
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const data: Language[] = [
          "English",
          "Hindi",
          "Bengali",
          "Telugu",
          "Marathi",
          "Tamil",
          "Urdu",
          "Gujarati",
          "Kannada",
          "Malayalam",
          "Punjabi",
        ];
        setLanguages(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLanguages();
  }, []);

  const toggleLanguage = (language: Language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-[#FDF2F8] flex items-center justify-center p-4">
      
      <div className="w-full max-w-4xl">
        
        {/* Card */}
        <div className="bg-white shadow-xl rounded-3xl p-8 md:p-20">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <Languages className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                Languages You Speak
              </h2>
              <p className="text-gray-500 text-sm">
                Select all languages you're fluent in
              </p>
            </div>
          </div>

          {/* Language Grid */}
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {languages.map((language) => {
                const isSelected = selectedLanguages.includes(language);

                return (
                  <button
                    key={language}
                    onClick={() => toggleLanguage(language)}
                    className={`py-3 rounded-xl font-medium transition-all text-sm
                      ${
                        isSelected
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md scale-105"
                          : "bg-white border border-gray-300 text-gray-700 hover:border-purple-400"
                      }`}
                  >
                    {language}
                  </button>
                );
              })}
            </div>
          )}

          {/* Bottom Buttons */}
          <div className="flex justify-between mt-8 gap-4">
            
            {/* Skip Button */}
            <button
              onClick={() => router.push("/coach/dashboard")}
              className="cursor-pointer flex-1 py-3 rounded-xl bg-white border border-gray-300 text-black hover:bg-gray-100 flex items-center justify-center gap-2"
            >
              <ChevronLeft size={18} /> Skip to Dashboard
            </button>

            {/* Continue Button */}
            <button
              onClick={() =>
                selectedLanguages.length > 0 &&
                router.push("/coach/onboarding?step=1")
              }
              disabled={selectedLanguages.length === 0}
              className={`flex-1 py-3 rounded-xl text-white shadow-md flex items-center justify-center gap-2 transition-all
                ${
                  selectedLanguages.length > 0
                    ? "cursor-pointer bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Complete your Profile <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;