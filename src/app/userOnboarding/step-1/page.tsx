"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, MapPin, Camera, ChevronDown } from "lucide-react";

export default function StepOne() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    location: "",
    bio: "",
    profilePhoto: null as File | null,
    profilePhotoPreview: "",
  });
  
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const mockLocations = [
    "Mumbai, Maharashtra", "Delhi, Delhi", "Bangalore, Karnataka",
    "Chennai, Tamil Nadu", "Kolkata, West Bengal", "Pune, Maharashtra",
    "Hyderabad, Telangana", "Ahmedabad, Gujarat",
  ];

  const genderOptions = ["Female", "Male", "Non-binary", "Prefer not to say", "Other"];

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(formData.phone) &&
      formData.dateOfBirth !== "" &&
      formData.gender !== ""
    );
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handleChange("location", value);
    
    if (value.length > 1) {
      setLocationSuggestions(mockLocations.filter(loc => 
        loc.toLowerCase().includes(value.toLowerCase())
      ));
      setShowSuggestions(true);
    } else {
      setLocationSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const selectLocation = (location: string) => {
    handleChange("location", location);
    setLocationSuggestions([]);
    setShowSuggestions(false);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024) {
      setFormData({
        ...formData,
        profilePhoto: file,
        profilePhotoPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleNext = () => {
    if (isFormValid()) {
      localStorage.setItem("userOnboardingStep1", JSON.stringify(formData));
      router.push("/userOnboarding/step-2");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-[#eef2ff] flex items-center justify-center p-10">
      <div className="w-full max-w-[768px]">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-semibold text-gray-1000">Welcome to LISTENO</h1>
          <p className="text-gray-500 text-sm mt-2">Let's set up your profile in just a few steps</p>
        </div>

        {/* Progress */}
        <div className="w-full mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step 1 of 4</span>
            <span className="text-purple-600 font-medium">25%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div className="w-1/4 h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Card */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-8 md:p-10">

          {/* Card Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white">
              <User size={22} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
              <p className="text-sm text-gray-500">Tell us about yourself</p>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32 rounded-full bg-purple-100 border-4 border-purple-200 flex items-center justify-center overflow-hidden group cursor-pointer"
                 onClick={() => document.getElementById("photo-upload")?.click()}>
              {formData.profilePhotoPreview ? (
                <img src={formData.profilePhotoPreview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <User size={42} className="text-purple-400" />
              )}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <Camera size={24} className="text-white" />
              </div>
            </div>
            <input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            <p className="text-sm text-gray-500 mt-3">Upload your profile photo (optional)</p>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <Input label="Full Name *" placeholder="Enter your full name" value={formData.fullName} 
                   onChange={(e) => handleChange("fullName", e.target.value)} />
            
            <Input label="Email *" placeholder="your.email@example.com" icon={<Mail size={18} />} type="email"
                   value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
            
            <Input label="Phone Number *" placeholder="+91 98765 43210" icon={<Phone size={18} />} type="tel"
                   value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input label="Date of Birth *" type="date" value={formData.dateOfBirth} 
                     onChange={(e) => handleChange("dateOfBirth", e.target.value)} />
              
              <div>
                <label className="text-sm font-medium text-gray-700">Gender *</label>
                <div className="relative mt-1.5">
                  <select value={formData.gender} onChange={(e) => handleChange("gender", e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 appearance-none cursor-pointer">
                    <option value="" disabled>Select gender</option>
                    {genderOptions.map(option => <option key={option}>{option}</option>)}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="relative">
              <Input label="Location" placeholder="City, State" icon={<MapPin size={18} />}
                     value={formData.location} onChange={handleLocationChange} />
              
              {showSuggestions && locationSuggestions.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-xl shadow-lg">
                  {locationSuggestions.map(location => (
                    <button key={location} onClick={() => selectLocation(location)}
                            className="w-full text-left px-4 py-2 hover:bg-purple-50 text-sm">
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="text-sm font-medium text-gray-700">Bio (Optional)</label>
              <textarea maxLength={30} value={formData.bio} onChange={(e) => handleChange("bio", e.target.value)}
                        placeholder="Tell us a little about yourself..."
                        className="w-full mt-2 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 h-24 resize-none" />
              <p className="text-xs text-gray-400 text-right mt-1">{formData.bio.length}/30</p>
            </div>

            {/* Next Button */}
            <button onClick={handleNext} disabled={!isFormValid()}
                    className={`w-full mt-4 py-3.5 rounded-xl font-medium transition-all ${
                      isFormValid()
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input Component
function Input({ label, placeholder, type = "text", icon, value, onChange }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mt-1.5">
        {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
        <input type={type} placeholder={placeholder} value={value} onChange={onChange}
               className={`w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400 transition-all ${icon ? "pl-10" : ""}`} />
      </div>
    </div>
  );
}