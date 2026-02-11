"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Clock, Globe, MessageCircle, Search } from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Badge } from "@/src/components/ui/Badge";
import { Input } from "@//src/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { motion } from "framer-motion";

export default function CoachesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedAvailability, setSelectedAvailability] = useState("all");

  const coaches = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      expertise: ["Relationships", "Marriage", "Breakup"],
      rating: 4.9,
      reviews: 234,
      languages: ["English", "Hindi"],
      status: "online",
      experience: "8 years",
      sessions: 1234,
      bio: "Helping people find clarity in relationships and build stronger emotional connections.",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      expertise: ["Career", "Life Coaching", "Stress"],
      rating: 4.8,
      reviews: 189,
      languages: ["English", "Hindi", "Bengali"],
      status: "offline",
      experience: "6 years",
      sessions: 892,
      bio: "Supporting professionals in achieving work-life balance and career growth.",
    },
    {
      id: 3,
      name: "Ananya Desai",
      expertise: ["Emotional Wellness", "Anxiety", "Self-Love"],
      rating: 4.9,
      reviews: 312,
      languages: ["English", "Hindi"],
      status: "online",
      experience: "10 years",
      sessions: 1567,
      bio: "Specializing in emotional healing and building resilience through mindful practices.",
    },
    {
      id: 4,
      name: "Vikram Singh",
      expertise: ["Relationships", "Communication", "Trust"],
      rating: 4.7,
      reviews: 156,
      languages: ["English", "Hindi", "Punjabi"],
      status: "online",
      experience: "5 years",
      sessions: 678,
      bio: "Helping couples and individuals improve communication and rebuild trust.",
    },
    {
      id: 5,
      name: "Meera Patel",
      expertise: ["Parenting", "Family", "Child Psychology"],
      rating: 4.9,
      reviews: 267,
      languages: ["English", "Hindi", "Gujarati"],
      status: "offline",
      experience: "12 years",
      sessions: 1890,
      bio: "Expert in parenting strategies and family dynamics with compassionate guidance.",
    },
    {
      id: 6,
      name: "Arjun Verma",
      expertise: ["Career Growth", "Leadership", "Work Pressure"],
      rating: 4.8,
      reviews: 198,
      languages: ["English", "Hindi"],
      status: "online",
      experience: "7 years",
      sessions: 1023,
      bio: "Empowering professionals to excel in their careers and manage workplace stress.",
    },
  ];

  const filteredCoaches = coaches.filter((coach) => {
    const matchesSearch =
      coach.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coach.expertise.some((exp) =>
        exp.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" ||
      coach.expertise.some((exp) =>
        exp.toLowerCase().includes(selectedCategory.toLowerCase()),
      );
    const matchesLanguage =
      selectedLanguage === "all" || coach.languages.includes(selectedLanguage);
    const matchesAvailability =
      selectedAvailability === "all" ||
      (selectedAvailability === "online" && coach.status === "online") ||
      (selectedAvailability === "offline" && coach.status === "offline");

    return (
      matchesSearch && matchesCategory && matchesLanguage && matchesAvailability
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Find Your Perfect Coach
            </h1>
            <p className="text-xl md:text-2xl text-purple-100">
              1000+ verified coaches ready to support you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="relationships">Relationships</SelectItem>
                <SelectItem value="career">Career</SelectItem>
                <SelectItem value="wellness">Wellness</SelectItem>
                <SelectItem value="parenting">Parenting</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Languages</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
                <SelectItem value="Bengali">Bengali</SelectItem>
                <SelectItem value="Gujarati">Gujarati</SelectItem>
                <SelectItem value="Punjabi">Punjabi</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={selectedAvailability}
              onValueChange={setSelectedAvailability}
            >
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="online">Online Now</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-gray-600">
          Showing{" "}
          <span className="font-semibold">{filteredCoaches.length}</span>{" "}
          coaches
        </p>
      </section>

      {/* Coaches Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCoaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all group"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {coach.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-800 truncate">
                      {coach.name}
                    </h3>
                    {coach.status === "online" && (
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{coach.rating}</span>
                    <span className="text-sm text-gray-500">
                      ({coach.reviews})
                    </span>
                  </div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {coach.expertise.map((exp) => (
                  <Badge key={exp} variant="secondary" className="text-xs">
                    {exp}
                  </Badge>
                ))}
              </div>

              {/* Bio */}
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {coach.bio}
              </p>

              {/* Languages */}
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">
                  {coach.languages.join(", ")}
                </span>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {coach.experience}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {coach.sessions} sessions
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button
                  onClick={() => router.push(`coaches/${coach.id}`)}
                  variant="outline"
                  className="w-full"
                >
                  View Profile
                </Button>
                <Button
                  onClick={() => router.push("/login")}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  {coach.status === "online" ? "Talk Now" : "Schedule Session"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCoaches.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">
              No coaches found matching your filters.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLanguage("all");
                setSelectedAvailability("all");
              }}
              variant="outline"
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
