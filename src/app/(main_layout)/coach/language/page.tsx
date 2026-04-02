"use client";

import React, { useEffect, useState } from "react";
import { Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/Button";

type Language = string;

const Page = () => {
  const router = useRouter();

  const [languages, setLanguages] = useState<Language[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);
  const [loading, setLoading] = useState(true);

  // 🔥 API-ready (currently static)
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
    <div className="min-h-screen flex flex-col justify-between bg-white p-4">
      
      {/* Top Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
            <Languages className="w-7 h-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Languages
            </h2>
            <p className="text-gray-600">
              Select all languages you're fluent in
            </p>
          </div>
        </div>

        {/* Language Grid */}
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {languages.map((language) => {
              const isSelected = selectedLanguages.includes(language);

              return (
                <button
                  key={language}
                  onClick={() => toggleLanguage(language)}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${
                    isSelected
                      ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg"
                      : "bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-400"
                  }`}
                >
                  {language}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Bottom Section */}
    <div className="mt-8 flex flex-col gap-4">
  
  {/* Complete Profile */}
  <Button
    size="lg"
    onClick={() => router.push("/coach/onboarding")}
    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg h-14 rounded-xl"
  >
    Complete your profile
  </Button>

  {/* Skip to Dashboard */}
  <Button
    size="lg"
    onClick={() => router.push("/coach/dashboard")}
    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg h-14 rounded-xl"
  >
    Skip to dashboard
  </Button>
</div>
    </div>
  );
};

export default Page;