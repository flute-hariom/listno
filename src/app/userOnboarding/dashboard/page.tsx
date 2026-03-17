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

<div className="w-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 text-white px-6 md:px-12 pt-10 pb-20 rounded-b-3xl shadow-lg">

<div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

<div>
<h1 className="text-2xl md:text-3xl font-semibold">Hello, Alex! 👋</h1>
<p className="opacity-90">How are you feeling today?</p>
</div>

<div className="flex flex-wrap gap-3">

<HeaderButton
icon={<User size={16}/>}
label="Profile"
onClick={()=>router.push("/userOnboarding/dashboard/userProfile")}
/>

<HeaderButton
icon={<Users size={16}/>}
label="Switch"
onClick={()=>router.push("/switch-user")}
/>

<HeaderButton
icon={<LogOut size={16}/>}
label="Logout"
danger
onClick={()=>router.push("/login")}
/>

</div>

</div>

{/* SEARCH */}

<div className="mt-6">

<div className="bg-white flex items-center gap-3 px-5 py-4 rounded-xl shadow-md">

<Search className="text-gray-400"/>

<input
placeholder="Search coaches, specialties..."
className="w-full outline-none"
/>

</div>

</div>

</div>

{/* FEATURE CARDS */}

<div className="px-6 md:px-12 -mt-12">

<div className="grid md:grid-cols-2 gap-6">

<FeatureCard
icon={<Sparkles size={24}/>}
title="Random Connect"
desc="Talk to someone now"
gradient="from-pink-500 to-purple-500"
onClick={()=>router.push("/userOnboarding/dashboard/random")}
/>

<FeatureCard
icon={<MessageCircle size={24}/>}
title="Mood Journal"
desc="Track your feelings"
gradient="from-blue-500 to-cyan-500"
onClick={()=>router.push("/userOnboarding/dashboard/mood-journal")}
/>

</div>

</div>

{/* FILTERS */}

<div className="px-6 md:px-12 mt-8 flex flex-wrap gap-3">

{["Filters","Dating","Breakup","Friendship","Anxiety","Depression","Stress","Career"].map(item=>(
<button
key={item}
onClick={()=>setActiveFilter(item)}
className={`px-5 py-2 rounded-full text-sm font-medium transition
${activeFilter===item
? "bg-purple-600 text-white"
: "bg-white text-gray-700 hover:bg-gray-200"}`}
>
{item}
</button>
))}

</div>

{/* COACH LIST */}

<div className="px-6 md:px-12 mt-8 space-y-6">

{coaches.map(coach=>(
<CoachCard key={coach.id} coach={coach} router={router}/>
))}

</div>

{/* NAVBAR */}

<div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">

<div className="flex justify-around items-center py-3">

<NavItem
icon={<Home size={20}/>}
label="Home"
active
onClick={()=>router.push("/dashboard")}
/>

<NavItem
icon={<PhoneCall size={20}/>}
label="Random"
onClick={()=>router.push("/userOnboarding/dashboard/random")}
/>

<NavItem
icon={<MessageCircle size={20}/>}
label="Talk Log"
onClick={()=>router.push("/userOnboarding/dashboard/talk-log")}
/>

<NavItem
icon={<Trophy size={20}/>}
label="Top"
onClick={()=>router.push("/userOnboarding/dashboard/top-profiles")}
/>

<NavItem
icon={<Wallet size={20}/>}
label="Wallet"
onClick={()=>router.push("/userOnboarding/dashboard/wallet")}
/>

</div>

</div>

</div>

);
}



type HeaderButtonProps = {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
  onClick?: () => void;
};

function HeaderButton({icon,label,danger=false,onClick}: HeaderButtonProps){

return(
<button
onClick={onClick}
className={`flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm shadow hover:shadow-md transition
${danger?"text-red-500":"text-gray-700"}`}
>
{icon}{label}
</button>
)

}

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
className={`bg-gradient-to-r ${gradient} p-8 text-white rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition`}
>
<div className="mb-4">{icon}</div>
<h3 className="font-semibold text-lg">{title}</h3>
<p className="opacity-90 text-sm">{desc}</p>
</div>
)

}

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

function CoachCard({coach,router}: CoachCardProps){

return(

<div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">

<div className="flex justify-between">

<div className="flex gap-4">

<img
src={coach.image}
className="w-16 h-16 rounded-xl object-cover"
/>

<div>

<div className="flex items-center gap-2">

<h3 className="font-semibold text-gray-800">
{coach.name}
</h3>

<span className={`w-2.5 h-2.5 rounded-full ${coach.online?"bg-green-500":"bg-red-500"}`}/>

</div>

<p className="text-sm text-gray-500">Age: {coach.age} yrs</p>
<p className="text-sm text-gray-500">Location: {coach.location}</p>
<p className="text-sm text-gray-500">Languages: {coach.languages}</p>
<p className="text-sm text-gray-500">Experience: {coach.experience}</p>

</div>

</div>

<div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">

<Star size={14}/>
{coach.rating} ({coach.reviews})

</div>

</div>

<p className="text-sm text-gray-500 mt-3">{coach.about}</p>

<div className="flex gap-2 mt-3 flex-wrap">

{coach.tags.map(tag=>(
<span key={tag} className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
{tag}
</span>
))}

</div>

<div className="mt-4 bg-gray-100 rounded-xl px-4 py-3 flex gap-8 text-sm">

<span>💬 {coach.prices.chat}</span>
<span>📞 {coach.prices.call}</span>
<span>🎥 {coach.prices.video}</span>

</div>

<button
onClick={()=>router.push(`/userOboarding/dashboard/coach/${coach.id}`)}
className="w-full mt-4 border border-purple-300 text-purple-600 py-2 rounded-lg hover:bg-purple-50 transition"
>
<Eye size={16} className="inline mr-2"/>View Full Profile
</button>

<div className="flex gap-3 mt-3">

<button
onClick={()=>router.push(`/connect/${coach.id}`)}
className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
>
<Phone size={16}/>Connect
</button>

<button
onClick={()=>router.push(`/video/${coach.id}`)}
className="bg-purple-100 p-3 rounded-lg"
>
<Video size={18}/>
</button>

<button
onClick={()=>router.push(`/chat/${coach.id}`)}
className="bg-blue-100 p-3 rounded-lg"
>
<MessageSquare size={18}/>
</button>

</div>

</div>

)

}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

function NavItem({icon,label,active=false,onClick}: NavItemProps){

return(

<button
onClick={onClick}
className={`flex flex-col items-center text-xs transition ${
active?"text-purple-600":"text-gray-500 hover:text-purple-500"
}`}
>
{icon}
{label}
</button>

)

}