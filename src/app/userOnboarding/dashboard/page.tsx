"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Search,
  Sparkles,
  MessageCircle,
  Phone,
  Video,
  Eye,
  Star,
  User,
  Users,
  LogOut,
  Home,
  PhoneCall,
  Trophy,
  Wallet,
  MessageSquare
} from "lucide-react";

export default function Dashboard() {

const router = useRouter();
const [activeFilter,setActiveFilter] = useState("Filters");

const coaches = [
{
id:1,
name:"Monalisa",
age:25,
location:"Varanasi, UP",
languages:"Hindi, English",
experience:"200+ hrs",
rating:"4.9",
reviews:"234",
online:true,
about:"I supported my friend when she was heartbroken. And she felt great again.",
tags:["Dating","Breakup"],
prices:{chat:"₹12/min",call:"₹18/min",video:"₹25/min"},
image:"https://randomuser.me/api/portraits/women/68.jpg"
},
{
id:2,
name:"Dr. Sarah Johnson",
age:35,
location:"Mumbai, India",
languages:"English, Hindi",
experience:"500+ hrs",
rating:"4.9",
reviews:"189",
online:true,
about:"Passionate mental health professional with 8+ years of experience helping individuals overcome anxiety, depression and stress.",
tags:["Anxiety","Depression"],
prices:{chat:"₹12/min",call:"₹18/min",video:"₹25/min"},
image:"https://randomuser.me/api/portraits/women/44.jpg"
},
{
id:3,
name:"Amit Patel",
age:42,
location:"Bangalore, India",
languages:"English, Hindi, Gujarati",
experience:"350+ hrs",
rating:"4.8",
reviews:"189",
online:false,
about:"Helping professionals navigate career challenges and work-life balance.",
tags:["Stress","Career"],
prices:{chat:"₹10/min",call:"₹15/min",video:"₹20/min"},
image:"https://randomuser.me/api/portraits/men/32.jpg"
},
{
id:4,
name:"Priya Sharma",
age:29,
location:"Delhi, India",
languages:"English, Hindi",
experience:"450+ hrs",
rating:"5",
reviews:"312",
online:true,
about:"Specialized in relationship counseling and helping people build stronger connections.",
tags:["Dating","Friendship"],
prices:{chat:"₹15/min",call:"₹22/min",video:"₹30/min"},
image:"https://randomuser.me/api/portraits/women/65.jpg"
}
];

return (

<div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#eef2ff] pb-32">

{/* HEADER */}

<div className="w-full bg-gradient-to-r from-[#9810FA] via-[#5F6AF2] to-[#155DFC] text-white px-6 md:px-12 pt-6 pb-10 ">

  {/* Top Row */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

    {/* Left Text */}
    <div>
      <h1 className="text-[25px] font-bold leading-tight">
        Hello, Alex! <span className="ml-1">👋</span>
      </h1>
      <p className="text-white/80 text-[15px] mt-1">
        How are you feeling today?
      </p>
    </div>

    {/* Buttons */}
    <div className="flex items-center gap-2">

      <HeaderButton
        icon={<User size={18} />}
        label="Profile"   
        onClick={() => router.push("/userOnboarding/dashboard/userProfile")}
      />

      <HeaderButton
        icon={<Users size={20} />}
        label="User"
        subLabel="Switch"
        onClick={() => router.push("/switch-user")}
      />

      <HeaderButton
        icon={<LogOut size={18} />}
        label="Logout"
        danger
        onClick={() => router.push("/login")}
      />

    </div>

  </div>

  {/* Search Bar */}
  <div className="mt-5">
    <div className="flex items-center bg-[#E9EDF3] rounded-[14px] px-5 py-4">

      <Search className="text-gray-400 mr-3" size={18 } />

      <input
        type="text"
        placeholder="Search coaches, specialties..."
        className="w-full bg-transparent outline-none text-gray-600 placeholder:text-gray-400 text-[15px]"
      />

    </div>
  </div>

</div>
{/* FEATURE CARDS */}

<div className="px-6 md:px-18 -mt-6">

<div className="grid md:grid-cols-2 gap-6">

<FeatureCard
icon={<Sparkles size={30}/>}
title="Random Connect"
desc="Talk to someone now"
gradient="from-pink-500 to-purple-500"
onClick={()=>router.push("/userOnboarding/dashboard/random")}
/>

<FeatureCard
icon={<MessageCircle size={30}/>}
title="Mood Journal"
desc="Track your feelings"
gradient="from-blue-500 to-cyan-500"
onClick={()=>router.push("/userOnboarding/dashboard/mood-journal")}
/>

</div>

</div>

{/* FILTERS */}

<div className="px-6 md:px-18 mt-6 flex flex-wrap gap-3 items-center">

  {["Filters","Dating","Breakup","Friendship","Anxiety","Depression","Stress","Career"].map((item) => (
    <button
      key={item}
      onClick={() => setActiveFilter(item)}
      className={`
        px-6 py-3.5
        rounded-full
        text-sm font-semibold
        
        transition-all duration-200
        border
        ${activeFilter === item
          ? "bg-purple-600 text-white border-purple-600 shadow-md"
          : "bg-white text-gray-700 border-white hover: bg-white "}
      `}
    >
      {item}
    </button>
  ))}
</div>

{/* COACH LIST */}

  <div className="px-6 md:px-18 mt-6">
  
  {/* Heading */}
  <h2 className="text-xl font-bold text-black mb-3">
    Available Coaches
  </h2>
  <div className="px-5 md:px-3 mt-1 space-y-6"> 
    {coaches.map(coach=>( 
      <CoachCard key={coach.id}
       coach={coach} router={router}/> )
       )} </div>
       </div>

{/* NAVBAR */}

<div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">

<div className="flex justify-around items-center py-5">

<NavItem icon={<Home size={22}/>} label="Home" active onClick={()=>router.push("/dashboard")} />
<NavItem icon={<PhoneCall size={22}/>} label="Random" onClick={()=>router.push("/userOnboarding/dashboard/random")} />
<NavItem icon={<MessageCircle size={22}/>} label="Talk Log" onClick={()=>router.push("/userOnboarding/dashboard/talk-log")} />
<NavItem icon={<Trophy size={22}/>} label="Top" onClick={()=>router.push("/userOnboarding/dashboard/top-profiles")} />
<NavItem icon={<Wallet size={22}/>} label="Wallet" onClick={()=>router.push("/userOnboarding/dashboard/wallet")} />

</div>

</div>

</div>

);
}

/* ✅ FIXED HeaderButton (ONLY ONE) */
type HeaderButtonProps = {
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  danger?: boolean;
  onClick?: () => void;
};

function HeaderButton({
  icon,
  label,
  subLabel,
  onClick,
  danger = false
}: HeaderButtonProps) {
  return (
    <button
  onClick={onClick}
  className={`
    flex items-center gap-2.5 px-5 py-2.5
    rounded-[16px]
    bg-[#ECEFF3]

    text-[15px] font-semibold
    ${danger 
      ? "text-red-500 border-[#F5A3A3] hover:border-red-500" 
      : "text-black border-[#D6BCFA] hover:border-[#9810FA]"
    }

    border

    /* Soft realistic shadow */
    shadow-[0_4px_10px_rgba(0,0,0,0.12)]

    transition-all duration-150 ease-in-out

    /* Hover (very subtle lift) */
    hover:bg-[#E4E8EE]
    hover:shadow-[0_6px_14px_rgba(0,0,0,0.18)]

    /* Click (pressed feel) */
    active:scale-[0.97]
    active:translate-y-[2px]
    active:shadow-[0_2px_6px_rgba(0,0,0,0.15)]
  `}
>
  {/* ICON */}
  {label === "Profile" ? (
    <div className="flex items-center justify-center w-5 h-5 rounded-full border-[1.5px] border-[#9810FA]">
      <span className="text-[#9810FA]">
        {icon}
      </span>
    </div>
  ) : (
    <span className={`${danger ? "text-red-500" : "text-[#9810FA]"}`}>
      {icon}
    </span>
  )}

  {/* TEXT */}
  <div className="flex items-center gap-1 leading-none">
    <span>{label}</span>
    {subLabel && (
      <span className="text-gray-400 text-[13px] font-medium">
        {subLabel}
      </span>
    )}
  </div>
</button>
  );
}
/* FEATURE CARD */

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gradient: string;
  onClick?: () => void;
};

function FeatureCard({icon,title,desc,gradient,onClick}: FeatureCardProps){
return(
<div
onClick={onClick}
className={`bg-gradient-to-r ${gradient} p-6 text-white rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition  `}
>
<div className="mb-3">{icon}</div>
<h3 className="font-semibold text-lg text-center">{title}</h3>
<p className="opacity-90 text-sm text-center">{desc}</p>
</div>
)
}

{/*  COACHES CARD */}

type Coach = {
  id: number;
  name: string;
  age: number;
  location: string;
  languages: string;
  experience: string;
  rating: string;
  reviews: string;
  online: boolean;
  about: string;
  tags: string[];
  prices: { chat: string; call: string; video: string };
  image: string;
};

type CoachCardProps = {
  coach: Coach;
  router: any;
};

function CoachCard({ coach, router }: CoachCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">

      {/* TOP */}
      <div className="flex justify-between items-start">

        {/* LEFT */}
        <div className="flex gap-4">

          
          <div className="relative">
            <img
              src={coach.image}
              className="w-14 h-14 rounded-xl object-cover"
            />
            <span
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                coach.online ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </div>

          {/* DETAILS */}
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">
                {coach.name}
              </h3>
              <span
                className={`w-2 h-2 rounded-full ${
                  coach.online ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Age: {coach.age} yrs
            </p>
            <p className="text-sm text-gray-500">
              Location: {coach.location}
            </p>
            <p className="text-sm text-gray-500">
              Languages: {coach.languages}
            </p>
            <p className="text-sm text-gray-500">
              Experience: {coach.experience}
            </p>
          </div>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1 bg-yellow-50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
          <Star size={14} className="text-yellow-500 fill-yellow-500" />
          {coach.rating}
          <span className="text-gray-400 text-xs">
            ({coach.reviews})
          </span>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700">
          About Coach:
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {coach.about}
        </p>
      </div>

      {/* TAGS */}
      <div className="flex gap-2 mt-3 flex-wrap">
        {coach.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* PRICING BAR */}
      <div className="mt-4 bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-8 text-sm text-gray-700">
        <span className="flex items-center gap-1">
          💬 ₹{coach.prices.chat}/min
        </span>
        <span className="flex items-center gap-1">
          📞 ₹{coach.prices.call}/min
        </span>
        <span className="flex items-center gap-1">
          🎥 ₹{coach.prices.video}/min
        </span>
      </div>

      {/* VIEW PROFILE */}
      <button
        onClick={() =>
          router.push(`/userOboarding/dashboard/coach/${coach.id}`)
        }
        className="w-full mt-4 border border-purple-300 text-purple-600 py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-50 transition-all"
      >
        <Eye size={16} />
        View Full Profile
      </button>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mt-4">

        {/* CONNECT */}
        <button
          onClick={() => router.push(`/connect/${coach.id}`)}
          className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-medium hover:opacity-90 transition"
        >
          <Phone size={16} />
          Connect
        </button>

        {/* VIDEO */}
        <button
          onClick={() => router.push(`/video/${coach.id}`)}
          className="bg-purple-100 text-purple-600 p-3 rounded-xl hover:bg-purple-200 transition"
        >
          <Video size={18} />
        </button>

        {/* CHAT */}
        <button
          onClick={() => router.push(`/chat/${coach.id}`)}
          className="bg-blue-100 text-blue-600 p-3 rounded-xl hover:bg-blue-200 transition"
        >
          <MessageSquare size={18} />
        </button>
      </div>

    </div>
  );
}

{/*NAVBAR */}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center justify-center
        gap-1
        text-[11px]
        font-medium
        transition-all duration-200
        ${active ? "text-purple-600" : "text-gray-500"}
      `}
    >
      {/* ICON */}
      <span
        className={`
          text-xl
          ${active ? "text-purple-600" : "text-gray-500"}
        `}
      >
        {icon}
      </span>

      {/* LABEL */}
      <span>{label}</span>
    </button>
  );
}