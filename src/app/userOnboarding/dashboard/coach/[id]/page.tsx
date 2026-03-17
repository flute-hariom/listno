"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  Phone,
  Video,
  MessageCircle,
  MapPin,
  Globe,
  Clock,
  Star,
  ShieldCheck,
  Heart,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

/* ================= TYPES ================= */

type Review = {
  id: number;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
};

type Coach = {
  id: string;
  name: string;
  image: string;
  rating: number;
  totalReviews: number;
  sessions: number;
  specializations: string[];
  experience: string;
  languages: string[];
  location: string;
  about: string;
  achievements: string[];
  education: string[];
  pricing: {
    chat: number;
    voice: number;
    video: number;
  };
  reviews: Review[];
};

/* ================= DUMMY DATA ================= */

const DUMMY_COACH: Coach = {
  id: "1",
  name: "Dr. Sarah Johnson",
  image:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  rating: 4.9,
  totalReviews: 234,
  sessions: 1234,
  specializations: [
    "Anxiety",
    "Depression",
    "Stress Management",
  ],
  experience: "8 years",
  languages: ["English", "Hindi"],
  location: "Mumbai, India",
  about:
    "I am a certified mental health counselor with over 8 years of experience helping individuals navigate emotional challenges. My approach is empathetic, non-judgmental and solution-focused.",
  achievements: [
    "1000+ successful sessions",
    "Featured in Mental Health Today",
    "Speaker at Wellness Summit 2025",
    "Average session rating: 4.9/5",
  ],
  education: [
    "Ph.D. in Clinical Psychology - Mumbai University",
    "M.A. in Counseling Psychology - Delhi University",
    "Certified Mental Health Coach - ICF",
  ],
  pricing: {
    chat: 12,
    voice: 18,
    video: 25,
  },
  reviews: [
    {
      id: 1,
      rating: 5,
      date: "Jan 5, 2026",
      comment:
        "Dr. Sarah helped me understand my emotions better. Highly recommended!",
      helpful: 45,
    },
    {
      id: 2,
      rating: 5,
      date: "Jan 3, 2026",
      comment:
        "Very patient and understanding. Created a safe space.",
      helpful: 38,
    },
  ],
};

/* ================= COMPONENT ================= */

export default function CoachProfilePage() {
  const { id } = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "about" | "reviews" | "credentials"
  >("about");

  // Later replace with API call using id
  const coach = DUMMY_COACH;

  return (
    <div className="min-h-screen w-full bg-[#f3f4f6]">

      {/* ================= HEADER ================= */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 pb-10 px-6 lg:px-16 pt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">
          Coach Profile
        </h1>
      </div>

      {/* ================= MAIN ================= */}
      <div className="w-full px-6 lg:px-16 mt-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ================= LEFT ================= */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-24 h-24">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    fill
                    className="rounded-xl object-cover"
                  />
                  <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-bold">
                      {coach.name}
                    </h2>
                    <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                      Online Now
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star
                        size={16}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      <span className="font-semibold">
                        {coach.rating}
                      </span>
                      <span>({coach.totalReviews})</span>
                    </div>
                    <span>• {coach.sessions} sessions</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {coach.specializations.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="border-t my-6" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <InfoItem icon={<Clock size={18} />} label="Experience" value={coach.experience} />
                <InfoItem icon={<Globe size={18} />} label="Languages" value={coach.languages.join(", ")} />
                <InfoItem icon={<MapPin size={18} />} label="Location" value={coach.location} />
              </div>
            </div>

            {/* Tabs Section */}
            <div className="bg-white rounded-2xl shadow p-6">

              {/* Tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                {["about", "reviews", "credentials"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as any)}
                    className={`flex-1 py-2 text-sm rounded-xl capitalize transition ${
                      activeTab === tab
                        ? "bg-white shadow font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT */}
              {activeTab === "about" && (
                <>
                  <h3 className="text-lg font-semibold mb-3">
                    About Me
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {coach.about}
                  </p>

                  <h3 className="font-semibold mb-3">
                    Achievements
                  </h3>
                  <ul className="space-y-2">
                    {coach.achievements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle size={16} className="text-purple-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {coach.reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span>{review.rating}</span>
                        <span className="text-gray-500">
                          • {review.date}
                        </span>
                      </div>
                      <p className="mt-2 text-gray-600">
                        {review.comment}
                      </p>
                      <p className="text-xs text-purple-600 mt-1">
                        {review.helpful} found this helpful
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "credentials" && (
                <ul className="space-y-3">
                  {coach.education.map((edu) => (
                    <li key={edu} className="flex gap-2">
                      <CheckCircle size={16} className="text-purple-600" />
                      {edu}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
  <div className="bg-white rounded-3xl shadow-xl p-6 sticky top-6 w-full max-w-sm">
    <h3 className="text-xl font-semibold mb-6">
      Start a Session
    </h3>

    {/* Chat */}
    <div className="flex items-center justify-between bg-blue-50 rounded-2xl px-4 py-3 mb-4">
      <div className="flex items-center gap-3 text-blue-600 font-medium">
        <MessageCircle size={18} />
        Chat
      </div>
      <span className="text-blue-600 font-semibold">
        ₹12/min
      </span>
    </div>

    {/* Voice Call */}
    <div className="flex items-center justify-between bg-green-50 rounded-2xl px-4 py-3 mb-4">
      <div className="flex items-center gap-3 text-green-600 font-medium">
        <Phone size={18} />
        Voice Call
      </div>
      <span className="text-green-600 font-semibold">
        ₹18/min
      </span>
    </div>

    {/* Video Call */}
    <div className="flex items-center justify-between bg-purple-50 rounded-2xl px-4 py-3 mb-6">
      <div className="flex items-center gap-3 text-purple-600 font-medium">
        <Video size={18} />
        Video Call
      </div>
      <span className="text-purple-600 font-semibold">
        ₹25/min
      </span>
    </div>

    {/* Start Voice Call Button */}
    <button className="w-full py-3 rounded-2xl text-white font-medium mb-4 
      bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center gap-2">
      <Phone size={18} />
      Start Voice Call
    </button>

    {/* Start Video Call Button */}
    <button className="w-full py-3 rounded-2xl text-white font-medium mb-4 
      bg-gradient-to-r from-fuchsia-600 to-pink-600 flex items-center justify-center gap-2">
      <Video size={18} />
      Start Video Call
    </button>

    {/* Start Chat Button (Outlined) */}
    <button className="w-full py-3 rounded-2xl font-medium mb-6 
      border-2 border-purple-300 text-gray-700 
      flex items-center justify-center gap-2 hover:bg-purple-50 transition">
      <MessageCircle size={18} />
      Start Chat
    </button>

    {/* Divider */}
    <div className="border-t pt-6 space-y-3 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <ShieldCheck size={16} className="text-green-600" />
        Safe & Confidential
      </div>
      <div className="flex items-center gap-2">
        <Heart size={16} className="text-red-500" />
        100% Anonymous
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-purple-600">{icon}</div>
      <div>
        <p className="text-gray-500 text-xs">{label}</p>
        <p className="font-semibold text-sm">{value}</p>
      </div>
    </div>
  );
}

function PricingRow({
  icon,
  label,
  price,
}: {
  icon: React.ReactNode;
  label: string;
  price: number;
}) {
  return (
    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl mb-3">
      <span className="flex items-center gap-2">
        {icon} {label}
      </span>
      <span className="font-medium">₹{price}/min</span>
    </div>
  );
}