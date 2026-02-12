"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Heart,
  HeartCrack,
  Users,
  Baby,
  Shield,
  MessageCircle,
  UserPlus,
  Brain,
  Briefcase,
  BookOpen,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function CategoryLanding() {
  const params = useParams();
  const router = useRouter();

  const categoryId = params?.categoryId as string;

  const categoryData: Record<string, any> = {
    "mind-emotions": {
      name: "Mind & Emotions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      hero: "Your mind matters. Let's understand it together.",
      subcategories: [
        { id: "stress", name: "Stress", icon: Brain, count: 234 },
        { id: "worry", name: "Worry", icon: Brain, count: 189 },
        { id: "confidence", name: "Confidence", icon: Sparkles, count: 156 },
        { id: "self-respect", name: "Self-Respect", icon: Shield, count: 142 },
      ],
    },
    relationships: {
      name: "Relationships",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      hero: "Relationships shape everything. Let's talk.",
      subcategories: [
        { id: "love", name: "Love", icon: Heart, count: 1234 },
        { id: "breakup", name: "Breakup", icon: HeartCrack, count: 892 },
        { id: "marriage", name: "Marriage", icon: Users, count: 567 },
        { id: "parenting", name: "Parenting", icon: Baby, count: 445 },
        { id: "trust", name: "Trust", icon: Shield, count: 378 },
        { id: "friendship", name: "Friendship", icon: UserPlus, count: 289 },
      ],
    },
    career: {
      name: "Career",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
      hero: "Your career, your growth. We're here to support.",
      subcategories: [
        { id: "pressure", name: "Work Pressure", icon: Briefcase, count: 456 },
        { id: "growth", name: "Career Growth", icon: ArrowRight, count: 389 },
        { id: "interview", name: "Interview Prep", icon: MessageCircle, count: 267 },
        { id: "change", name: "Career Change", icon: Briefcase, count: 234 },
      ],
    },
    education: {
      name: "Education",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      hero: "Learning is a journey. Let's navigate together.",
      subcategories: [
        { id: "exams", name: "Exam Stress", icon: BookOpen, count: 567 },
        { id: "motivation", name: "Study Motivation", icon: Sparkles, count: 445 },
        { id: "focus", name: "Focus & Concentration", icon: Brain, count: 334 },
        { id: "discipline", name: "Discipline", icon: Shield, count: 289 },
      ],
    },
    wellness: {
      name: "Wellness",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      hero: "Your wellbeing is our priority.",
      subcategories: [
        { id: "sleep", name: "Sleep", icon: Sparkles, count: 445 },
        { id: "fitness", name: "Fitness", icon: Heart, count: 389 },
        { id: "nutrition", name: "Nutrition", icon: Sparkles, count: 267 },
        { id: "energy", name: "Energy", icon: Sparkles, count: 234 },
      ],
    },
    "astro-spiritual": {
      name: "Astro & Spiritual",
      icon: Star,
      color: "from-violet-500 to-purple-500",
      hero: "Explore the cosmic and spiritual dimensions.",
      subcategories: [
        { id: "astrology", name: "Astrology", icon: Star, count: 678 },
        { id: "love-match", name: "Love Match", icon: Heart, count: 556 },
        { id: "tarot", name: "Tarot Reading", icon: Sparkles, count: 445 },
        { id: "birth-chart", name: "Birth Chart", icon: Star, count: 389 },
      ],
    },
  };

  const category = categoryData[categoryId] || categoryData.relationships;
  const CategoryIcon = category.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 py-20 relative text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <CategoryIcon className="w-10 h-10" />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {category.name}
            </h1>

            <p className="text-xl md:text-2xl text-purple-100">
              {category.hero}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {category.subcategories.map((sub: any, index: number) => (
            <motion.div
              key={sub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() =>
                router.push(`/website/category/${categoryId}/${sub.id}`)
              }
              className="bg-white rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <sub.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800">
                    {sub.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {sub.count} active conversations
                  </p>
                </div>
              </div>

              <div className="flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                Explore
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Talk to someone who understands
          </h2>

          <p className="text-lg mb-6 text-purple-100">
            Verified coaches available 24/7 to help
          </p>

          <Button
            size="lg"
            onClick={() => router.push("/website/coaches")}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            View Coaches
          </Button>
        </div>
      </section>
    </div>
  );
}
