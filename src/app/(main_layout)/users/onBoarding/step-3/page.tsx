"use client";



import { useState } from "react";
import { useRouter } from "next/navigation";
import { Brain, Heart, Briefcase, BookOpen, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function StepTwo() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // MAIN CATEGORIES (same order as UI)
  const categories = [
    { name: "Mind & Emotions", icon: Brain },
    { name: "Relationships", icon: Heart },
    { name: "Career", icon: Briefcase },
    { name: "Education", icon: BookOpen },
    { name: "Wellness", icon: Sparkles },
    { name: "Astro & Spiritual", icon: Star },
  ];

  // TOPICS (same as screenshot layout)
  const topics = [
    "Stress Management", "Worry & Anxiety", "Confidence Building",
    "Self‑Respect", "Emotional Hurt", "Mental Fatigue",
    "Finding Calm", "Overcoming Fear", "Love & Romance",
    "Breakup Support", "Marriage Counseling", "Parenting",
    "Trust Issues", "Communication", "Friendship",
    "Loneliness", "Work Pressure", "Boss Relationship",
    "Career Growth", "Work‑Life Balance", "Interview Prep",
    "Colleague Relations", "Salary Negotiation", "Career Change",
    "Exam Stress", "Study Motivation", "Focus & Concentration",
    "Study Habits", "Academic Discipline", "Exam Pressure",
    "Learning Strategies", "Academic Performance", "Sleep Issues",
    "Fitness Goals", "Nutrition", "Energy Levels",
    "Self‑Care", "Recovery", "General Health",
    "Daily Routine", "Astrology Reading", "Compatibility Match",
    "Career Astrology", "Tarot Reading", "Birth Chart",
    "Planetary Influence", "Spiritual Guidance", "Future Predictions",
  ];

  const toggleCategory = (name: string) => {
    setSelectedCategories(prev =>
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const toggleTopic = (name: string) => {
    setSelectedTopics(prev =>
      prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]
    );
  };

  const isFormValid = () => selectedCategories.length || selectedTopics.length;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-[#FDF2F8] flex items-center justify-center p-4">

<div className="w-full max-w-3xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-800">Welcome to LISTENO</h1>
          <p className="text-gray-500 mt-2">Let's set up your profile in just a few steps</p>
        </div>

        {/* PROGRESS */}
       {/* <div className="mb-10">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Step 2 of 4</span>
            <span className="text-purple-600 font-medium">50%</span>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>
        </div> */}
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
              <Brain size={28} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Areas of Interest</h2>
              <p className="text-gray-500 text-sm">What would you like help with?</p>
            </div>
          </div>

          {/* CATEGORIES */}
          <p className="text-sm text-gray-600 mb-3">Select main categories:</p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {categories.map(cat => {
              const Icon = cat.icon;
              const active = selectedCategories.includes(cat.name);
              return (
                <button
                  key={cat.name}
                  onClick={() => toggleCategory(cat.name)}
                  className={`rounded-2xl p-4 flex flex-col items-center justify-center gap-3 border-2 transition-all duration-200
                    ${active
                      ? "border-purple-500 bg-purple-100 shadow-[0_8px_20px_rgba(124,58,237,0.25)]"
                      : "border-gray-200 bg-white hover:border-purple-300"}`}
                >
                  <Icon
                    size={30}
                    className={`${active ? "text-purple-600" : "text-[#99A1AF]"}`}
                  />
                  <span
                    className={`font-medium text-base ${
                      active ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* TOPICS */}
          <p className="text-sm text-[#364153] mb-3">Or select specific topics:</p>
          <div className="grid md:grid-cols-3 gap-2">
            {topics.map(topic => {
              const active = selectedTopics.includes(topic);
              return (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`rounded-xl px-4 py-2 text-sm border transition
                    ${active
                      ? "bg-[#9810FA] text-white border-[#9810FA]"
                      : "bg-[#F3F4F6] text-[#364153] border-[#F3F4F6] hover:bg-[#e8e8f2]"}`}
                      >
                  {topic}
                </button>
              );
            })}
          </div>

          
        </div>
        {/* FOOTER BUTTONS */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => router.back()}
              className="px-40 py-3 rounded-xl border bg-[#FFFFFF] border-[#FFFFFF] text-black hover:bg-gray-100 border-gray-300 flex items-center gap-2"
            >
              <ChevronLeft size={18} /> Back
            </button>

            <button
              disabled={!isFormValid()}
              onClick={() => router.push("/users/onBoarding/step-4")}
              className={`px-40 py-3 rounded-xl flex items-center gap-2 text-white shadow-md
                ${isFormValid()
                  ? "bg-gradient-to-r from-[#9810FA] to-[#155DFC] hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"}`}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
      </div>
      
    </div>
  );
}

/* ---------- TEST CASES ----------
1. Page renders header
2. Clicking category toggles active style
3. Next button disabled until selection
*/