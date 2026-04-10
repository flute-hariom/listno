// this is the page of after completing all the details of becoming the coach
"use client";

import { Calendar, DollarSign, Users, Star, Briefcase, icons } from "lucide-react";
import { useRouter } from "next/navigation";
import RoleSwitcher from "@/src/components/shared/RoleSwitcher";

import BackButton from "@/src/components/shared/BackButton";
import { useState } from "react";



export default function CoachDashboard() {
  const router = useRouter();
  const [isCoachApproved, setIsCoachApproved] = useState(false);
const [isProfileCompleted, setIsProfileCompleted] = useState(false);
  

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-[100vw]">
      {/* Header with Role Switcher */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            <BackButton />
            <RoleSwitcher currentRole="coach" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pb-28 pt-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Application Banner */}
         {/* {!isCoachApproved && (
            <div className="mb-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">
                      Start Your Coaching Journey
                    </h2>
                  </div>
                  <p className="text-green-100 mb-4">
                    Complete your profile to start accepting clients and
                    earning. It only takes 5 minutes!
                  </p>
                  <button
                    onClick={() => router.push("/coach/onboarding")}
                    className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Complete Your Application →
                  </button>
                </div>
              </div>
            </div>
          )} */}


{/* Balance Card */}
<div className="mb-8">
  <div className="w-full bg-gradient-to-r bg-green-600 rounded-2xl p-8 text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
    
    {/* Content Wrapper */}
    <div className="flex flex-col gap-2">
      
      {/* Title */}
      <p className="text-sm font-medium text-green-100">
        Available Balance
      </p>

      {/* Amount */}
      <h1 className="text-5xl font-bold tracking-tight">
        ₹0
      </h1>

      {/* Description */}
      <p className="text-sm text-green-100 mt-2 leading-relaxed max-w-md">
        No earnings yet — Let’s begin. <br />
        Your earnings will appear here once you start.
      </p>

    </div>
  </div>
</div>

         {/* <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {isCoachApproved
                ? "Welcome back, Dr. Sarah! 👋"
                : "Welcome to LISTENO Coach Dashboard! 👋"}
            </h1>
            <p className="text-gray-600">
              {isCoachApproved
                ? "Here's your coaching overview"
                : "Explore the dashboard and get started when ready"}
            </p>
          </div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

  {/* Today */}
  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
    <p className="text-sm text-gray-500">Today</p>
    <h2 className="text-2xl font-bold mt-2 text-gray-800">₹0</h2>
    <p className="text-sm text-green-500 mt-2">No activity yet</p>
  </div>

  {/* This Week */}
  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
    <p className="text-sm text-gray-500">This Week</p>
    <h2 className="text-2xl font-bold mt-2 text-gray-800">₹0</h2>
    <p className="text-sm text-green-500 mt-2">No activity yet</p>
  </div>

  {/* This Month */}
  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
    <p className="text-sm text-gray-500">This Month</p>
    <h2 className="text-2xl font-bold mt-2 text-gray-800">₹0</h2>
    <p className="text-sm text-green-500 mt-2">No activity yet</p>
  </div>

  {/* Pending */}
  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
    <p className="text-sm text-gray-500">Pending</p>
    <h2 className="text-2xl font-bold mt-2 text-yellow-500">₹0</h2>
    <p className="text-sm text-gray-400 mt-2">No pending transactions</p>
  </div>

</div>


      {/*    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Users,
                label: "Incoming Requests",
                value: "5",
                color: "bg-blue-500",
                path: "/coach/requests",
              },
              {
                icon: Calendar,
                label: "Today's Sessions",
                value: "3",
                color: "bg-purple-500",
                path: "/coach/schedule",
              },
              {
                icon: DollarSign,
                label: "This Month",
                value: "₹45,000",
                color: "bg-green-500",
                path: "/coach/earnings",
              },
              {
                icon: Star,
                label: "Avg Rating",
                value: "4.9",
                color: "bg-yellow-500",
                path: "/coach/ratings",
              },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <button
                  key={index}
                  onClick={() => router.push(stat.path)}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-left"
                >
                  <div
                    className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                  </p>
                </button>
              );
            })}
          </div> 

          {/* Quick Action Cards */}
        {/*  <div className="grid md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => router.push("/coach/clients")}
              className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all text-left"
            >
              <Users className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-1">My Clients</h3>
              <p className="text-purple-100 text-sm">
                View and manage all clients
              </p>
            </button>

            <button
              onClick={() => router.push("/coach/schedule")}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all text-left"
            >
              <Calendar className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-1">Set Availability</h3>
              <p className="text-blue-100 text-sm">Manage your schedule</p>
            </button>

            <button
              onClick={() => router.push("/coach/earnings")}
              className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all text-left"
            >
              <DollarSign className="w-8 h-8 mb-3" />
              <h3 className="text-xl font-bold mb-1">Withdraw Funds</h3>
              <p className="text-green-100 text-sm">Access your earnings</p>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Upcoming Sessions
              </h2>
              <div className="space-y-3">
                {[
                  { time: "10:00 AM", client: "Alex M.", type: "Video Call" },
                  { time: "02:00 PM", client: "Priya S.", type: "Audio Call" },
                  { time: "04:30 PM", client: "John D.", type: "Chat" },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-purple-50 rounded-xl"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {session.client}
                      </p>
                      <p className="text-sm text-gray-600">{session.type}</p>
                    </div>
                    <p className="text-purple-600 font-semibold">
                      {session.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Reviews
              </h2>
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah J.",
                    rating: 5,
                    comment: "Amazing session! Very helpful.",
                  },
                  {
                    name: "Mike P.",
                    rating: 5,
                    comment: "Great listener and advisor.",
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-800">
                        {review.name}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}


      <div className="w-full mt-6">
      <div className="w-full rounded-2xl p-6 text-white shadow-md 
                     bg-gradient-to-br bg-green-600
                     border border-green-400/30"
      >
        <h2 className="text-lg font-semibold mb-2">
          Welcome aboard!
        </h2>

        <p className="text-sm text-green-100 mb-4">
          You haven’t started earning yet.
          Complete your first step to unlock your dashboard.
        </p>

        <button
          onClick={() => window.location.href = "/coach/onboarding"}
          className="bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Complete profile to unlock more
        </button>
      </div>
    </div>
  


        </div> 
      </main> 

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 sm:px-6 py-3 sm:py-4 shadow-lg z-40">
        <div className="max-w-6xl mx-auto flex justify-around items-center">
          {[
            {
              icon: "🏠",
              label: "Home",
              path: "/coach/dashboard",
              active: true,
            },
            { icon: "📩", label: "Message", path: "/coach/messages" },
            //{ icon: "📥", label: "Requests", path: "/coach/requests" },
           // { icon: "📅", label: "Schedule", path: "/coach/schedule" },
            { icon: "💰", label: "Earnings", path: "/coach/earnings" },
            { icon: "👤", label: "Profile", path: "/coach/setup" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center gap-0.5 sm:gap-1 min-w-0 ${item.active ? "text-purple-600" : "text-gray-600"}`}
            >
              <span className="text-xl sm:text-2xl">{item.icon}</span>
              <span className="text-[10px] sm:text-xs font-medium truncate w-full text-center">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

