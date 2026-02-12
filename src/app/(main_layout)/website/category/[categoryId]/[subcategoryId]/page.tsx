"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Heart,
  Star,
  MessageCircle,
  Clock,
  ThumbsUp,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { motion } from "framer-motion";

export default function SubcategoryPage() {
  const params = useParams();
  const router = useRouter();

  const categoryId = params?.categoryId as string;
  const subcategoryId = params?.subcategoryId as string;

  // Mock coaches data
  const coaches = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      expertise: "Relationship Expert",
      rating: 4.9,
      reviews: 234,
      languages: ["English", "Hindi"],
      status: "online",
      experience: "8 years",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      expertise: "Life Coach",
      rating: 4.8,
      reviews: 189,
      languages: ["English", "Hindi", "Bengali"],
      status: "offline",
      experience: "6 years",
    },
    {
      id: 3,
      name: "Ananya Desai",
      expertise: "Emotional Wellness",
      rating: 4.9,
      reviews: 312,
      languages: ["English", "Hindi"],
      status: "online",
      experience: "10 years",
    },
  ];

  const topics = [
    "Moving On",
    "Trust Issues",
    "Loneliness",
    "Communication",
    "Self-Love",
    "Healing",
    "New Beginnings",
    "Letting Go",
  ];

  const stories = [
    {
      id: 1,
      title: "How I found myself after a difficult breakup",
      preview:
        "It took me 6 months to realize that losing someone can actually mean finding yourself...",
      reactions: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Learning to trust again",
      preview:
        "Trust was broken, but I learned that healing is possible with the right support...",
      reactions: 189,
      comments: 32,
    },
    {
      id: 3,
      title: "The journey from heartbreak to happiness",
      preview:
        "Every ending is a new beginning. Here's my story of transformation...",
      reactions: 312,
      comments: 67,
    },
  ];

  const content = [
    {
      id: 1,
      type: "Article",
      title: "7 Steps to Heal After a Breakup",
      readTime: "8 min read",
      category: "Self-Help",
    },
    {
      id: 2,
      type: "Exercise",
      title: "Journaling for Emotional Release",
      readTime: "15 min",
      category: "Activity",
    },
    {
      id: 3,
      type: "Guide",
      title: "Understanding the Stages of Grief",
      readTime: "12 min read",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Emotional Context Card */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 text-center"
        >
          <h1 className="text-4xl font-bold mb-4 capitalize">
            {subcategoryId?.replace("-", " ")}
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            You're not alone. Thousands have walked this path and found peace.
            We're here to support you every step of the way.
          </p>
        </motion.div>
      </section>

      {/* Popular Topics */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
        <div className="flex flex-wrap gap-3">
          {topics.map((topic) => (
            <button
              key={topic}
              className="px-6 py-3 bg-white rounded-full hover:bg-purple-50 hover:shadow-md transition-all border border-purple-100"
            >
              {topic}
            </button>
          ))}
        </div>
      </section>

      {/* Available Coaches */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Available Coaches</h2>
          <Button
            variant="ghost"
            onClick={() => router.push("/website/coaches")}
          >
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {coach.name.charAt(0)}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{coach.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {coach.expertise}
                  </p>

                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{coach.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({coach.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {coach.languages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Clock className="w-4 h-4" />
                {coach.experience} experience
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
                Talk Now
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community Stories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Community Stories</h2>
          <Button
            variant="ghost"
            onClick={() => router.push("/website/community")}
          >
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
            >
              <h3 className="font-bold text-gray-800 mb-3">{story.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {story.preview}
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <ThumbsUp className="w-4 h-4" />
                  {story.reactions}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {story.comments}
                </div>
              </div>

              <div className="mt-4 text-purple-600 font-medium text-sm">
                Read more →
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Helpful Content */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Helpful Content</h2>
          <Button
            variant="ghost"
            onClick={() => router.push("/website/self-help")}
          >
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{item.type}</Badge>
                <Badge variant="secondary">{item.category}</Badge>
              </div>

              <h3 className="font-bold text-gray-800 mb-3">{item.title}</h3>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {item.readTime}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <Heart className="w-16 h-16 mx-auto mb-4 fill-white" />
          <h2 className="text-3xl font-bold mb-4">
            Talk to someone who understands
          </h2>

          <p className="text-lg mb-6 text-purple-100">
            Verified coaches available 24/7 to help you through this journey
          </p>

          <Button
            size="lg"
            onClick={() => router.push("/website/coaches")}
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Start Talking Now
          </Button>
        </div>
      </section>
    </div>
  );
}
