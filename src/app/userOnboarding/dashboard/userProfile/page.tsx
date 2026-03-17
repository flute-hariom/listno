"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  Calendar,
  Award,
  ChevronDown,
  User,
  LogOut,
  ArrowLeft,
  Camera,
  Star,
  Brain,
  Briefcase,
  BookOpen,
  Sparkles
} from "lucide-react";

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    fullName: "Sakshi meena",
    email: "abhi@moolmantra.co",
    phone: "4544664",
    location: "noida",
    bio: "",
  });

  const [areas, setAreas] = useState([
    "Relationships",
    "Worry & Anxiety",
    "Emotional Hurt",
    "Mental Fatigue"
  ]);

  const [languages, setLanguages] = useState(["Hindi"]);
  const [interests, setInterests] = useState(["Yoga", "Mindfulness"]);
  const [goals, setGoals] = useState(["Mental wellness", "Career advancement"]);

  const categories = [
    { name: "Mind & Emotions", icon: Brain },
    { name: "Relationships", icon: Heart },
    { name: "Career", icon: Briefcase },
    { name: "Education", icon: BookOpen },
    { name: "Wellness", icon: Sparkles },
    { name: "Astro & Spiritual", icon: Star },
  ];

  const topics = [
    "Stress Management",
    "Worry & Anxiety",
    "Confidence Building",
    "Self-Respect",
    "Emotional Hurt",
    "Mental Fatigue",
    "Finding Calm",
    "Overcoming Fear",
    "Love & Romance",
    "Breakup Support",
    "Marriage Counseling",
    "Parenting",
    "Trust Issues",
    "Communication",
    "Friendship",
  ];

  const languageOptions = [
    "English","Hindi","Bengali","Telugu","Marathi",
    "Tamil","Urdu","Gujarati","Kannada","Malayalam","Punjabi"
  ];

  const interestOptions = [
    "Meditation","Yoga","Self-help books","Journaling","Mindfulness",
    "Exercise","Reading","Music","Art","Travel","Cooking","Photography"
  ];

  const goalOptions = [
    "Better work-life balance","Improved relationships","Career advancement",
    "Mental wellness","Physical fitness","Personal growth",
    "Stress reduction","Better sleep","Increased confidence","Emotional healing"
  ];

  const toggleItem = (list:any,setList:any,item:string)=>{
    if(list.includes(item)){
      setList(list.filter((i:string)=>i!==item))
    }else{
      setList([...list,item])
    }
  }

  const toggleArea = (item: string) => toggleItem(areas,setAreas,item)

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full bg-[#f3f4f9]">

      {/* Top Navigation */}

    <div className="w-full px-40 py-4 flex items-center justify-between">

  {/* Back Button */}

  <button
    onClick={() => router.back()}
    className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition"
  >
    <ArrowLeft size={18} className="text-gray-600"/>
    <span className="text-sm font-medium text-gray-700">Back</span>
  </button>


  {/* Right Buttons */}

  <div className="flex items-center gap-4">

    {/* Profile */}

   <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition">
      <User size={18} className="text-purple-600"/>
      <span className="text-sm font-medium text-gray-800">Profile</span>
    </button>



    {/* Switch User */}

    <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full shadow-sm hover:bg-gray-50 transition">
      <User size={18} className="text-purple-600"/>
      <span className="text-sm font-medium text-gray-800">User</span>
      <span className="text-xs text-gray-400 ml-1">Switch</span>
    </button>


    {/* Logout */}

    <button
      onClick={() => router.push("/login")}
      className="flex items-center gap-2 bg-red-10 border border-red-200 px-4 py-2 rounded-full shadow-sm hover:bg-red-100 transition"
    >
      <LogOut size={18} className="text-red-500"/>
      <span className="text-sm font-medium text-red-500">Logout</span>
    </button>

  </div>

</div>
      {/* Header */}

      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-8">
        <div className="px-55 text-white">
          <h1 className="text-3xl font-bold">My Profile</h1>
          <p className="text-sm opacity-90">
            Manage your personal information and preferences
          </p>
        </div>
      </div>

      {/* Content */}

      <div className="w-full px-55 mt-6 space-y-6">

        {/* Profile Card */}

        <div className="bg-white rounded-2xl shadow p-8 flex justify-between">

          <div className="flex gap-6">

            <div className="relative w-24 h-24">

              <img
                src="/profile.jpg"
                className="w-24 h-24 rounded-full object-cover border"
              />

              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full shadow">
                  <Camera size={14}/>
                </button>
              )}

            </div>

            <div className="space-y-2">

              {isEditing ? (
                <input
                  value={profile.fullName}
                  onChange={(e)=>handleChange("fullName",e.target.value)}
                  className="border rounded-lg px-3 py-1 text-lg font-semibold"
                />
              ) : (
                <h2 className="text-2xl font-semibold">
                  {profile.fullName}
                </h2>
              )}

              <p className="text-sm text-gray-500">
                Member since January 2025
              </p>

              {isEditing && (
                <textarea
                  placeholder="Tell us about yourself..."
                  className="border rounded-lg p-2 w-[350px]"
                  value={profile.bio}
                  onChange={(e)=>handleChange("bio",e.target.value)}
                />
              )}

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16}/>
                {profile.email}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16}/>
                {profile.phone}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16}/>
                {profile.location}
              </div>

            </div>

          </div>

          <div>

            {isEditing ? (

              <div className="flex gap-3">

                <button
                  onClick={()=>setIsEditing(false)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Save
                </button>

                <button
                  onClick={()=>setIsEditing(false)}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>

              </div>

            ) : (

              <button
                onClick={()=>setIsEditing(true)}
                className="bg-purple-100 hover:bg-purple-200 text-purple-600 px-5 py-2 rounded-xl font-medium"
              >
                Edit Profile
              </button>

            )}

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <Stat icon={<Award size={18}/>} label="Sessions Completed" color="purple"/>
          <Stat icon={<Heart size={18}/>} label="Favorite Coaches" color="pink"/>
          <Stat icon={<Calendar size={18}/>} label="Journal Entries" color="blue"/>

        </div>

        {/* AREAS OF INTEREST (unchanged) */}

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Star size={16}/> Areas of Interest
          </h3>

          {!isEditing && (
            <div className="flex flex-wrap gap-3">
              {areas.map((item,i)=>(<Tag key={i} text={item} color="purple"/>))}
            </div>
          )}

          {isEditing && (
            <div className="border border-purple-200 rounded-xl p-6 space-y-6">

              <div className="grid grid-cols-3 gap-4">
                {categories.map((cat,i)=>{
                  const Icon = cat.icon
                  const active = areas.includes(cat.name)

                  return(
                    <button
                      key={i}
                      onClick={()=>toggleArea(cat.name)}
                      className={`flex items-center justify-center gap-2 border rounded-xl py-3
                      ${active ? "border-purple-500 text-purple-600" : "bg-gray-100"}`}
                    >
                      <Icon size={16}/>
                      {cat.name}
                    </button>
                  )
                })}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {topics.map((topic,i)=>{
                  const active = areas.includes(topic)
                  return(
                    <button
                      key={i}
                      onClick={()=>toggleArea(topic)}
                      className={`rounded-lg py-2 text-sm
                      ${active
                        ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white"
                        : "bg-gray-100"}`}
                    >
                      {topic}
                    </button>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {areas.map((item,i)=>(
                  <span key={i} className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                    {item} ✕
                  </span>
                ))}
              </div>

            </div>
          )}
        </div>

        {/* LANGUAGES */}

        <Section title="Languages" icon={<User size={16}/>}>
          {!isEditing && languages.map((item,i)=>(<Tag key={i} text={item} color="blue"/>))}

          {isEditing && (
            <div className="grid grid-cols-3 gap-3 w-full">
              {languageOptions.map((lang,i)=>{
                const active = languages.includes(lang)
                return(
                  <button
                    key={i}
                    onClick={()=>toggleItem(languages,setLanguages,lang)}
                    className={`py-2 rounded-lg text-sm
                    ${active ? "bg-blue-600 text-white":"bg-gray-100"}`}
                  >
                    {lang}
                  </button>
                )
              })}
            </div>
          )}
        </Section>

        {/* INTERESTS */}

        <Section title="Interests" icon={<Heart size={16}/>}>
          {!isEditing && interests.map((item,i)=>(<Tag key={i} text={item} color="pink"/>))}

          {isEditing && (
            <div className="grid grid-cols-3 gap-3 w-full">
              {interestOptions.map((int,i)=>{
                const active = interests.includes(int)
                return(
                  <button
                    key={i}
                    onClick={()=>toggleItem(interests,setInterests,int)}
                    className={`py-2 rounded-lg text-sm
                    ${active ? "bg-pink-600 text-white":"bg-gray-100"}`}
                  >
                    {int}
                  </button>
                )
              })}
            </div>
          )}
        </Section>

        {/* GOALS */}

        <Section title="My Goals" icon={<Star size={16}/>}>
          {!isEditing && goals.map((item,i)=>(<Tag key={i} text={item} color="orange"/>))}

          {isEditing && (
            <div className="grid grid-cols-3 gap-3 w-full">
              {goalOptions.map((goal,i)=>{
                const active = goals.includes(goal)
                return(
                  <button
                    key={i}
                    onClick={()=>toggleItem(goals,setGoals,goal)}
                    className={`py-2 rounded-lg text-sm
                    ${active ? "bg-orange-500 text-white":"bg-gray-100"}`}
                  >
                    {goal}
                  </button>
                )
              })}
            </div>
          )}
        </Section>

        <Accordion title="Account Settings"/>
        <Accordion title="Privacy & Security"/>
        <Accordion title="Notifications"/>

      </div>
    </div>
  );
}

function Section({title,children,icon}:any){
  return(
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-4 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {children}
      </div>
    </div>
  )
}

function Tag({text,color}:any){
  const colors:any={
    purple:"bg-purple-100 text-purple-600",
    blue:"bg-blue-100 text-blue-600",
    pink:"bg-pink-100 text-pink-600",
    orange:"bg-orange-100 text-orange-600"
  }

  return(
    <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${colors[color]}`}>
      {text}
    </span>
  )
}

function Stat({icon,label,color}:any){

  const colors:any={
    purple:"bg-purple-100 text-purple-600",
    pink:"bg-pink-100 text-pink-600",
    blue:"bg-blue-100 text-blue-600"
  }

  return(
    <div className="bg-white p-6 rounded-2xl shadow flex flex-col items-center gap-2">

      <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${colors[color]}`}>
        {icon}
      </div>

      <h2 className="text-2xl font-semibold">0</h2>

      <p className="text-sm text-gray-500">
        {label}
      </p>

    </div>
  )
}

function Accordion({title}:any){
  return(
    <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition">
      <span>{title}</span>
      <ChevronDown size={18}/>
    </div>
  )
}