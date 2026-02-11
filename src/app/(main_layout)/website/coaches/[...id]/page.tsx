"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  Clock,
  Globe,
  MessageCircle,
  Award,
  TrendingUp,
  Heart,
  Shield,
  Lock,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { motion } from "framer-motion";

interface CoachProfileProps {
  params: {
    coachId: string;
  };
}

export default function CoachProfile({ params }: CoachProfileProps) {
  const router = useRouter();
  const { coachId } = params;
  const [language, setLanguage] = useState("en");
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const coach = {
    id: 1,
    name: "Dr. Priya Sharma",
    expertise: ["Relationships", "Marriage", "Breakup", "Communication"],
    rating: 4.9,
    reviews: 234,
    languages: ["English", "Hindi"],
    status: "online",
    experience: "8 years",
    sessions: 1234,
    responseTime: "< 5 min",
    bio: "I am a certified relationship counselor with over 8 years of experience helping individuals and couples navigate through emotional challenges. My approach is empathetic, non-judgmental, and solution-focused.",
    education: [
      "Ph.D. in Clinical Psychology - Delhi University",
      "M.A. in Counseling Psychology - Mumbai University",
      "Certified Relationship Coach - International Coaching Federation",
    ],
    specializations: [
      "Relationship Counseling",
      "Marriage & Couples Therapy",
      "Breakup Recovery",
      "Communication Skills",
      "Trust Building",
      "Emotional Healing",
    ],
    achievements: [
      "1000+ successful sessions",
      "Featured in Psychology Today",
      "Speaker at Mental Health Summit 2025",
    ],
  };

  const reviews = [
    {
      id: 1,
      rating: 5,
      reviewer: "Anonymous User",
      date: "Jan 5, 2026",
      comment:
        "Dr. Priya helped me understand my emotions better. Her guidance was invaluable during my difficult breakup.",
      helpful: 45,
    },
    {
      id: 2,
      rating: 5,
      reviewer: "Anonymous User",
      date: "Jan 3, 2026",
      comment:
        "Very patient and understanding. She created a safe space for me to open up about my relationship issues.",
      helpful: 38,
    },
    {
      id: 3,
      rating: 4,
      reviewer: "Anonymous User",
      date: "Dec 28, 2025",
      comment:
        "Great coach with practical advice. Helped me improve communication with my partner.",
      helpful: 29,
    },
  ];

  const sessionTypes = [
    {
      name: "Quick Chat",
      duration: "15 min",
      price: "Login to see",
      description: "Quick guidance for immediate concerns",
    },
    {
      name: "Standard Session",
      duration: "30 min",
      price: "Login to see",
      description: "Deep dive into your situation",
    },
    {
      name: "Extended Session",
      duration: "60 min",
      price: "Login to see",
      description: "Comprehensive counseling session",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-4 flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-purple-300 group"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
          <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors text-sm sm:text-base">
            Back
          </span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white text-3xl sm:text-4xl font-bold flex-shrink-0 mx-auto sm:mx-0">
                  {coach.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 mb-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
                      {coach.name}
                    </h1>
                    {coach.status === "online" && (
                      <Badge className="bg-green-500">Online</Badge>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 mb-4 text-center sm:text-left">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm sm:text-base">
                        {coach.rating}
                      </span>
                      <span className="text-gray-500 text-sm sm:text-base">
                        ({coach.reviews} reviews)
                      </span>
                    </div>
                    <span className="text-gray-300 hidden sm:inline">•</span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {coach.sessions} sessions
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {coach.expertise.map((exp) => (
                      <Badge
                        key={exp}
                        variant="secondary"
                        className="text-xs sm:text-sm"
                      >
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t">
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Experience
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                      {coach.experience}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Globe className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Languages
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                      {coach.languages.join(", ")}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <MessageCircle className="w-5 h-5 text-purple-600" />
                  <div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      Response Time
                    </div>
                    <div className="font-semibold text-sm sm:text-base">
                      {coach.responseTime}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tabs */}
            <Tabs
              defaultValue="about"
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger
                  value="about"
                  className="text-xs sm:text-sm py-2 sm:py-2.5"
                >
                  About
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="text-xs sm:text-sm py-2 sm:py-2.5"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="credentials"
                  className="text-xs sm:text-sm py-2 sm:py-2.5"
                >
                  Credentials
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3">
                      About Me
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {coach.bio}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3">
                      Specializations
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {coach.specializations.map((spec) => (
                        <div key={spec} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3">
                      Achievements
                    </h3>
                    <div className="space-y-2">
                      {coach.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-start gap-3"
                        >
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b pb-4 last:border-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-500 fill-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 hidden sm:inline">
                          •
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">
                        {review.comment}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <span>by {review.reviewer}</span>
                        <button className="hover:text-purple-600 text-left">
                          {review.helpful} found this helpful
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="text-center pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setLoginModalOpen(true)}
                      className="gap-2 text-sm sm:text-base"
                    >
                      <Lock className="w-4 h-4" />
                      Login to see all reviews
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="credentials" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold mb-3">
                      Education
                    </h3>
                    <div className="space-y-3">
                      {coach.education.map((edu, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-gray-600">
                            {edu}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base text-purple-900 mb-1">
                        Verified Coach
                      </div>
                      <div className="text-xs sm:text-sm text-purple-700">
                        All credentials verified by Listno
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Session Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg"
            >
              <h3 className="text-base sm:text-lg font-bold mb-4">
                Book a Session
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {sessionTypes.map((session) => (
                  <div
                    key={session.name}
                    className="border border-purple-100 rounded-xl p-3 sm:p-4 hover:border-purple-300 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold text-sm sm:text-base">
                          {session.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500">
                          {session.duration}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Lock className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">
                      {session.description}
                    </p>
                    <div className="text-xs sm:text-sm text-gray-500 mb-3">
                      {session.price}
                    </div>
                  </div>
                ))}

                <Button
                  onClick={() => setLoginModalOpen(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-11 sm:h-12 text-sm sm:text-base"
                >
                  Login to Continue
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                    Safe & Confidential
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <Heart className="w-4 h-4 text-red-500 flex-shrink-0" />
                    100% Anonymous
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    Instant Support
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
