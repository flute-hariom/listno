"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Trophy, Star, User, Users, LogOut } from "lucide-react";

export default function TopProfiles() {
  const router = useRouter();

  const profiles = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      category: "Anxiety & Stress",
      rating: 5.0,
      sessions: 500,
      image: "/profiles/coach1.jpg",
    },
    {
      id: 2,
      name: "Amit Patel",
      category: "Career Counseling",
      rating: 4.9,
      sessions: 450,
      image: "/profiles/coach2.jpg",
    },
    {
      id: 3,
      name: "Priya Sharma",
      category: "Relationship Issues",
      rating: 4.9,
      sessions: 420,
      image: "/profiles/coach3.jpg",
    },
  ];

  return (

    /* Gradient background */
    <div className="min-h-screen px-40 py-12 bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#eef2ff]">

      {/* WHITE MAIN CONTAINER */}
      <div className="bg-white rounded-3x1 shadow-lg p-5 max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-14">

          {/* Back */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm hover:shadow"
          >
            <ArrowLeft size={18}/>
            Back
          </button>

          {/* Right buttons */}
          <div className="flex items-center gap-5">

            <button className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm">
              <User size={18} className="text-purple-600"/>
              Profile
            </button>

            <button className="flex items-center gap-1 bg-white px-6 py-2 rounded-full shadow-sm border border-purple-300">
              <Users size={18} className="text-purple-600"/>
              User
              <span className="text-gray-500 text-sm">Switch</span>
            </button>

            <button className="flex items-center gap-2 bg-white px-6 py-2 rounded-full border border-red-300 text-red-500 shadow-sm">
              <LogOut size={18}/>
              Logout
            </button>

          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-[42px] font-bold text-gray-800 mb-12">
          Top Profiles
        </h1>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white rounded-[22px] p-6 shadow-md hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={420}
                  height={220}
                  className="rounded-[16px] object-cover w-full h-[180px]"
                />

                <div className="absolute top-3 right-3 bg-purple-100 p-2 rounded-full">
                  <Trophy size={16} className="text-purple-600"/>
                </div>
              </div>

              {/* NAME */}
              <h3 className="text-[20px] font-semibold text-gray-800 mt-5">
                {profile.name}
              </h3>

              {/* CATEGORY */}
              <p className="text-purple-600 text-sm mt-1">
                {profile.category}
              </p>

              {/* RATING */}
              <div className="flex items-center mt-3">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400"/>
                  <span className="text-[15px] font-medium">
                    {profile.rating}
                  </span>
                </div>

                <span className="ml-auto text-gray-500 text-[14px]">
                  {profile.sessions} sessions
                </span>
              </div>

              {/* BUTTON */}
              <button
                onClick={() =>
                  router.push(`/userOnboarding/dashboard/coach/${profile.id}`)
                }
                className="w-full mt-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-600 to-purple-800 hover:opacity-95"
              >
                Connect
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}