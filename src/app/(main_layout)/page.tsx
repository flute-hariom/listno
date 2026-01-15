"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  MessageCircle,
  HeartCrack,
  Briefcase,
  Brain,
  Moon,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Sparkles,
  ArrowRight,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";
// import LoginModal from "@/components/LoginModal";

export default function HomePage() {
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
    },
  ];

  const quickActions = [
    { label: "Talk Now", icon: MessageCircle, path: "/website/coaches" },
    {
      label: "Explore Love",
      icon: Heart,
      path: "/website/category/relationships/love",
    },
    {
      label: "Breakup Support",
      icon: HeartCrack,
      path: "/website/category/relationships/breakup",
    },
    {
      label: "Career Stress",
      icon: Briefcase,
      path: "/website/category/career",
    },
    {
      label: "Calm Your Mind",
      icon: Brain,
      path: "/website/category/mind-emotions",
    },
    {
      label: "Astrology Match",
      icon: Star,
      path: "/website/category/astro-spiritual",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "1000+", label: "Verified Coaches" },
    { value: "100K+", label: "Conversations" },
    { value: "4.8/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-pink-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              Someone to Talk. Anytime. About Anything.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Love, Breakups, Stress, Career, Emotions & More
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/website/category/relationships")}
                className="text-lg h-14 px-8 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Explore Relationships
                <Heart className="w-5 h-5 fill-white" />
              </button>
              <button
                onClick={() => router.push("/website/coaches")}
                className="text-lg h-14 px-8 border-2 border-gray-300 hover:bg-purple-50 text-gray-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
              >
                Talk to a Coach
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full opacity-20 blur-xl" />
          </div>
          <div
            className="absolute bottom-20 right-10 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </section>

      {/* Quick Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => router.push(action.path)}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <action.icon className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">
                  {action.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Category Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
          <p className="text-xl text-gray-600">Find what you need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => router.push(`/website/category/${category.id}`)}
              className={`relative bg-white rounded-2xl p-6 cursor-pointer group hover:shadow-2xl transition-all ${
                category.featured ? "ring-2 ring-pink-500 ring-offset-4" : ""
              }`}
            >
              {category.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.topics.slice(0, 6).map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                  >
                    {topic}
                  </span>
                ))}
                {category.topics.length > 6 && (
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                    +{category.topics.length - 6} more
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center text-purple-600 font-medium group-hover:gap-2 transition-all">
                Explore{" "}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Content & Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Knowledge Center
          </h2>
          <p className="text-lg text-gray-600">
            Expert-written guides and insights for your wellbeing
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[
            {
              id: 1,
              title: "Understanding Anxiety: A Complete Guide",
              category: "Mind & Emotions",
              categoryColor: "bg-blue-100 text-blue-700",
              author: "Dr. Sarah Johnson",
              readTime: "8 min read",
              image:
                "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600",
              excerpt:
                "Learn practical strategies to manage anxiety and understand its root causes.",
              views: "12.5K",
            },
            {
              id: 2,
              title: "Building Stronger Relationships",
              category: "Relationships",
              categoryColor: "bg-pink-100 text-pink-700",
              author: "Priya Sharma",
              readTime: "6 min read",
              image:
                "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
              excerpt:
                "Discover the keys to nurturing healthy and meaningful connections.",
              views: "18.2K",
            },
            {
              id: 3,
              title: "Career Growth & Work-Life Balance",
              category: "Career",
              categoryColor: "bg-purple-100 text-purple-700",
              author: "Amit Patel",
              readTime: "10 min read",
              image:
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
              excerpt:
                "Strategies for advancing your career while maintaining personal wellbeing.",
              views: "9.8K",
            },
            {
              id: 4,
              title: "Coping with Depression: You're Not Alone",
              category: "Mind & Emotions",
              categoryColor: "bg-blue-100 text-blue-700",
              author: "Dr. Rajesh Kumar",
              readTime: "12 min read",
              image:
                "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600",
              excerpt:
                "Professional insights on recognizing and addressing depression effectively.",
              views: "15.3K",
            },
            {
              id: 5,
              title: "5 Daily Habits for Better Mental Health",
              category: "Self-Care",
              categoryColor: "bg-green-100 text-green-700",
              author: "Neha Gupta",
              readTime: "5 min read",
              image:
                "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
              excerpt:
                "Simple yet powerful practices to incorporate into your daily routine.",
              views: "22.1K",
            },
            {
              id: 6,
              title: "Healing After a Breakup",
              category: "Relationships",
              categoryColor: "bg-pink-100 text-pink-700",
              author: "Dr. Sarah Johnson",
              readTime: "7 min read",
              image:
                "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600",
              excerpt:
                "A compassionate guide to navigating heartbreak and finding closure.",
              views: "25.7K",
            },
          ].map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() => router.push(`/website/article/${article.id}`)}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor}`}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  {article.views} views
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {article.author}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">
                    {article.readTime}
                  </span>
                </div>

                <div className="mt-4">
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg font-medium hover:from-purple-100 hover:to-blue-100 transition-all flex items-center justify-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => router.push("/website/resources")}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join thousands finding better emotional wellbeing
            </p>
            <button
              onClick={() => setLoginModalOpen(true)}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg h-14 px-8 rounded-lg font-medium transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
      {/* 
      <LoginModal
        open={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      /> */}
    </div>
  );
}
