"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  Brain,
  Briefcase,
  BookOpen,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
// import LoginModal from "./LoginModal";

const Explore = () => {
  const router = useRouter();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const categories = [
    {
      id: "mind-emotions",
      name: "Mind & Emotions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      topics: [
        "Stress",
        "Worry",
        "Confidence",
        "Self-Respect",
        "Hurt",
        "Tired",
        "Calm",
        "Fear",
      ],
      description: "Navigate your emotional landscape with expert guidance",
      coaches: 234,
      sessions: 12453,
    },
    {
      id: "relationships",
      name: "Relationships",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      topics: [
        "Love",
        "Breakup",
        "Marriage",
        "Parenting",
        "Trust",
        "Talk",
        "Friend",
        "Alone",
      ],
      description: "Build stronger, healthier relationships",
      coaches: 312,
      sessions: 18976,
      featured: true,
    },
    {
      id: "career",
      name: "Career",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
      topics: [
        "Pressure",
        "Boss",
        "Growth",
        "Work",
        "Interview",
        "Friends",
        "Money",
        "Change",
      ],
      description: "Achieve your professional goals with confidence",
      coaches: 189,
      sessions: 9876,
    },
    {
      id: "education",
      name: "Education",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      topics: [
        "Exams",
        "Motivation",
        "Focus",
        "Study",
        "Discipline",
        "Pressure",
        "Learn",
        "Marks",
      ],
      description: "Excel in your academic journey",
      coaches: 156,
      sessions: 7654,
    },
    {
      id: "wellness",
      name: "Wellness",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      topics: [
        "Sleep",
        "Fitness",
        "Food",
        "Energy",
        "Care",
        "Recovery",
        "Health",
        "Routine",
      ],
      description: "Holistic wellbeing for mind and body",
      coaches: 198,
      sessions: 8923,
    },
    {
      id: "astro-spiritual",
      name: "Astro & Spiritual",
      icon: Star,
      color: "from-violet-500 to-purple-500",
      topics: [
        "Stars",
        "Match",
        "Job",
        "Cards",
        "Chart",
        "Planets",
        "Luck",
        "Future",
      ],
      description: "Explore cosmic guidance and spiritual wisdom",
      coaches: 142,
      sessions: 6745,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Explore All Categories
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              Expert guidance for every aspect of your life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/website/category/${category.id}`)}
              className={`relative bg-white rounded-3xl p-8 cursor-pointer group hover:shadow-2xl transition-all ${
                category.featured ? "ring-2 ring-pink-500 ring-offset-4" : ""
              }`}
            >
              {category.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {category.name}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-6">{category.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                <div>
                  <span className="font-semibold text-gray-800">
                    {category.coaches}
                  </span>{" "}
                  coaches
                </div>
                <div>
                  <span className="font-semibold text-gray-800">
                    {category.sessions.toLocaleString()}
                  </span>{" "}
                  sessions
                </div>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {category.topics.slice(0, 8).map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                Explore Category
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Get expert support in any category you need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setLoginModalOpen(true)}
                className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Free
              </button>
              <button
                onClick={() => router.push("/website/coaches")}
                className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Browse Coaches
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <LoginModal open={loginModalOpen} onClose={() => setLoginModalOpen(false)} /> */}
    </div>
  );
};

export default Explore;
