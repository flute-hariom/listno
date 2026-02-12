"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  BookOpen,
  Heart,
  Brain,
  Briefcase,
  Star,
  Clock,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResourcesPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Articles", icon: BookOpen, color: "purple" },
    { id: "relationships", label: "Relationships", icon: Heart, color: "pink" },
    { id: "mental-health", label: "Mental Health", icon: Brain, color: "blue" },
    { id: "career", label: "Career", icon: Briefcase, color: "indigo" },
    { id: "self-care", label: "Self-Care", icon: Star, color: "green" },
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Anxiety: A Complete Guide",
      category: "mental-health",
      categoryLabel: "Mental Health",
      categoryColor: "bg-blue-100 text-blue-700",
      author: "Dr. Sarah Johnson",
      authorRole: "Clinical Psychologist",
      readTime: "8 min read",
      publishedDate: "April 15, 2024",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600",
      excerpt:
        "Learn practical strategies to manage anxiety and understand its root causes. This comprehensive guide covers symptoms, triggers, and evidence-based coping techniques.",
      views: "12.5K",
      featured: true,
    },
    {
      id: 2,
      title: "Building Stronger Relationships",
      category: "relationships",
      categoryLabel: "Relationships",
      categoryColor: "bg-pink-100 text-pink-700",
      author: "Priya Sharma",
      authorRole: "Relationship Coach",
      readTime: "6 min read",
      publishedDate: "April 18, 2024",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
      excerpt:
        "Discover the keys to nurturing healthy and meaningful connections. Learn communication strategies that strengthen bonds.",
      views: "18.2K",
      featured: true,
    },
    {
      id: 3,
      title: "Career Growth & Work-Life Balance",
      category: "career",
      categoryLabel: "Career",
      categoryColor: "bg-purple-100 text-purple-700",
      author: "Amit Patel",
      authorRole: "Career Counselor",
      readTime: "10 min read",
      publishedDate: "April 12, 2024",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      excerpt:
        "Strategies for advancing your career while maintaining personal wellbeing and healthy boundaries.",
      views: "9.8K",
    },
    {
      id: 4,
      title: "Coping with Depression: You're Not Alone",
      category: "mental-health",
      categoryLabel: "Mental Health",
      categoryColor: "bg-blue-100 text-blue-700",
      author: "Dr. Rajesh Kumar",
      authorRole: "Psychiatrist",
      readTime: "12 min read",
      publishedDate: "April 10, 2024",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600",
      excerpt:
        "Professional insights on recognizing and addressing depression effectively with compassion and understanding.",
      views: "15.3K",
    },
    {
      id: 5,
      title: "5 Daily Habits for Better Mental Health",
      category: "self-care",
      categoryLabel: "Self-Care",
      categoryColor: "bg-green-100 text-green-700",
      author: "Neha Gupta",
      authorRole: "Life Coach",
      readTime: "5 min read",
      publishedDate: "April 20, 2024",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      excerpt:
        "Simple yet powerful practices to incorporate into your daily routine for improved mental wellbeing.",
      views: "22.1K",
    },
    {
      id: 6,
      title: "Healing After a Breakup",
      category: "relationships",
      categoryLabel: "Relationships",
      categoryColor: "bg-pink-100 text-pink-700",
      author: "Dr. Sarah Johnson",
      authorRole: "Clinical Psychologist",
      readTime: "7 min read",
      publishedDate: "April 8, 2024",
      image:
        "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=600",
      excerpt:
        "A compassionate guide to navigating heartbreak and finding closure. Steps to heal and move forward.",
      views: "25.7K",
    },
    {
      id: 7,
      title: "Managing Workplace Stress Effectively",
      category: "career",
      categoryLabel: "Career",
      categoryColor: "bg-purple-100 text-purple-700",
      author: "Amit Patel",
      authorRole: "Career Counselor",
      readTime: "9 min read",
      publishedDate: "April 5, 2024",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600",
      excerpt:
        "Proven techniques to handle work pressure and prevent burnout while maintaining productivity.",
      views: "14.2K",
    },
    {
      id: 8,
      title: "The Power of Self-Compassion",
      category: "self-care",
      categoryLabel: "Self-Care",
      categoryColor: "bg-green-100 text-green-700",
      author: "Neha Gupta",
      authorRole: "Life Coach",
      readTime: "6 min read",
      publishedDate: "April 3, 2024",
      image:
        "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600",
      excerpt:
        "Learn to treat yourself with kindness and understanding, especially during difficult times.",
      views: "11.9K",
    },
    {
      id: 9,
      title: "Communication Skills for Better Relationships",
      category: "relationships",
      categoryLabel: "Relationships",
      categoryColor: "bg-pink-100 text-pink-700",
      author: "Priya Sharma",
      authorRole: "Relationship Coach",
      readTime: "8 min read",
      publishedDate: "April 1, 2024",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
      excerpt:
        "Master the art of effective communication to strengthen your personal and professional relationships.",
      views: "19.4K",
    },
    {
      id: 10,
      title: "Understanding and Managing Panic Attacks",
      category: "mental-health",
      categoryLabel: "Mental Health",
      categoryColor: "bg-blue-100 text-blue-700",
      author: "Dr. Rajesh Kumar",
      authorRole: "Psychiatrist",
      readTime: "10 min read",
      publishedDate: "March 28, 2024",
      image:
        "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600",
      excerpt:
        "A comprehensive guide to recognizing, understanding, and managing panic attacks with professional strategies.",
      views: "16.8K",
    },
    {
      id: 11,
      title: "Finding Your Career Purpose",
      category: "career",
      categoryLabel: "Career",
      categoryColor: "bg-purple-100 text-purple-700",
      author: "Amit Patel",
      authorRole: "Career Counselor",
      readTime: "11 min read",
      publishedDate: "March 25, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
      excerpt:
        "Discover how to align your career with your values and passions for lasting fulfillment.",
      views: "13.5K",
    },
    {
      id: 12,
      title: "Mindfulness Meditation for Beginners",
      category: "self-care",
      categoryLabel: "Self-Care",
      categoryColor: "bg-green-100 text-green-700",
      author: "Neha Gupta",
      authorRole: "Life Coach",
      readTime: "7 min read",
      publishedDate: "March 22, 2024",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
      excerpt:
        "Start your mindfulness journey with this beginner-friendly guide to meditation and its benefits.",
      views: "20.3K",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter((a) => a.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Knowledge Center
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Expert guidance, tips, and insights for your emotional wellbeing
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? `bg-gradient-to-r from-${cat.color}-600 to-${cat.color}-700 text-white shadow-lg`
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "all" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
                onClick={() => router.push(`article/${article.id}`)}
              >
                <div className="md:flex">
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${article.categoryColor}`}
                      >
                        {article.categoryLabel}
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {article.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {article.authorRole}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          {selectedCategory === "all"
            ? "All Articles"
            : categories.find((c) => c.id === selectedCategory)?.label}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() => router.push(`article/${article.id}`)}
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
                    {article.categoryLabel}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {article.views}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
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
                      <p className="text-xs text-gray-500">
                        {article.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </p>
                    <p className="text-xs text-gray-400">
                      {article.publishedDate}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl text-gray-500">No articles found</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want to Learn More?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Talk to an expert coach and get personalized guidance
            </p>
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 text-lg rounded-xl font-medium transition-all"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
