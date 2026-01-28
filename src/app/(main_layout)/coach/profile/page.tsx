"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  Award,
  Star,
  Clock,
  Edit,
  Camera,
  DollarSign,
  Brain,
  Heart,
  Briefcase,
  BookOpen,
  Sparkles,
  Languages,
  Calendar,
  Check,
  AlertCircle,
  Video,
  MessageSquare,
  GraduationCap,
  Shield,
  ChevronRight,
  TrendingUp,
  MapPin,
  Smile,
  Save,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import BackButton from "@/src/components/shared/BackButton";
import RoleSwitcher from "@/src/components/shared/RoleSwitcher";
import { Button } from "@/src/components/ui/Button";

export default function CoachProfile() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [showCategorySelector, setShowCategorySelector] = useState(false);
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);
  const [showAvailabilityEditor, setShowAvailabilityEditor] = useState(false);

  // Default/sample data
  const defaultData = {
    fullName: "Dr. Sarah Johnson",
    email: "sarah.johnson@listeno.com",
    phone: "+91 98765 43210",
    bio: "Passionate mental health professional with 8+ years of experience helping individuals overcome anxiety, depression, and stress. I believe in a holistic approach combining evidence-based therapy with mindfulness practices.",
    profilePhotoPreview:
      "https://images.unsplash.com/photo-1679014844834-e86723f36c74?w=400&h=400&fit=crop",
    selectedCategories: ["Mind & Emotions", "Relationships", "Career & Work"],
    selectedSubcategories: {
      "Mind & Emotions": [
        "Stress Management",
        "Anxiety Relief",
        "Confidence Building",
        "Depression Support",
      ],
      Relationships: [
        "Breakup Support",
        "Marriage Counseling",
        "Communication Skills",
      ],
      "Career & Work": [
        "Work Stress",
        "Career Transition",
        "Work-Life Balance",
      ],
    },
    yearsOfExperience: "8",
    education:
      "Ph.D. in Clinical Psychology, Mumbai University | M.A. in Counseling Psychology, Delhi University",
    certifications: [
      "ICF Certified Professional Coach (PCC)",
      "Licensed Clinical Therapist",
      "Cognitive Behavioral Therapy (CBT) Specialist",
      "Mindfulness-Based Stress Reduction (MBSR) Certified",
      "Trauma-Informed Care Practitioner",
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"],
    sessionTypes: ["Chat", "Voice Call", "Video Call"],
    chatPrice: "12",
    audioPrice: "18",
    videoPrice: "25",
    availability: {
      monday: {
        enabled: true,
        slots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM", "7:00 PM - 9:00 PM"],
      },
      tuesday: {
        enabled: true,
        slots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM", "7:00 PM - 9:00 PM"],
      },
      wednesday: {
        enabled: true,
        slots: ["9:00 AM - 12:00 PM", "2:00 PM - 5:00 PM"],
      },
      thursday: {
        enabled: true,
        slots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM", "7:00 PM - 9:00 PM"],
      },
      friday: {
        enabled: true,
        slots: ["9:00 AM - 12:00 PM", "2:00 PM - 6:00 PM", "7:00 PM - 9:00 PM"],
      },
      saturday: {
        enabled: true,
        slots: ["10:00 AM - 2:00 PM", "4:00 PM - 8:00 PM"],
      },
      sunday: { enabled: false, slots: [] },
    },
    accountHolderName: "Dr. Sarah Johnson",
    bankName: "HDFC Bank",
    accountNumber: "****6789",
    ifscCode: "HDFC0001234",
    upiId: "sarah.johnson@okhdfc",
    joinedDate: "January 2024",
    totalSessions: 567,
    rating: 4.9,
    totalReviews: 234,
    totalEarnings: 125000,
    status: "active",
  };

  const [profileData, setProfileData] = useState(defaultData);
  const [originalData, setOriginalData] = useState(defaultData);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProfile = localStorage.getItem("coachProfile");
      if (savedProfile) {
        try {
          const parsedData = JSON.parse(savedProfile);
          console.log("Loaded profile from localStorage:", parsedData);
          setProfileData(parsedData);
          setOriginalData(parsedData);
        } catch (error) {
          console.error("Error parsing saved profile:", error);
        }
      }
    }
  }, []);

  const categories = [
    {
      id: "mind-emotions",
      name: "Mind & Emotions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "relationships",
      name: "Relationships",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "career",
      name: "Career & Work",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "education",
      name: "Education & Study",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "wellness",
      name: "Health & Wellness",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const subcategories = {
    "Mind & Emotions": [
      "Stress Management",
      "Anxiety Relief",
      "Confidence Building",
      "Depression Support",
      "Self-Respect",
      "Worry & Anxiety",
    ],
    Relationships: [
      "Love & Romance",
      "Breakup Support",
      "Marriage Counseling",
      "Communication Skills",
      "Parenting",
      "Family Issues",
    ],
    "Career & Work": [
      "Work Stress",
      "Career Transition",
      "Work-Life Balance",
      "Boss Relationship",
      "Career Growth",
    ],
    "Education & Study": [
      "Exam Stress",
      "Study Motivation",
      "Focus & Concentration",
      "Learning Skills",
    ],
    "Health & Wellness": [
      "Sleep Issues",
      "Fitness Goals",
      "Nutrition",
      "Self-Care",
      "Mindfulness",
    ],
  };

  const availableLanguages = [
    "English",
    "Hindi",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Malayalam",
    "Punjabi",
  ];

  const timeSlots = [
    "6:00 AM - 8:00 AM",
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
    "8:00 PM - 10:00 PM",
    "10:00 PM - 12:00 AM",
  ];

  const stats = [
    {
      label: "Total Sessions",
      value: profileData.totalSessions,
      icon: Clock,
      color: "bg-purple-100 text-purple-600",
    },
    {
      label: "Average Rating",
      value: profileData.rating,
      icon: Star,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      label: "Total Earnings",
      value: `₹${(profileData.totalEarnings / 1000).toFixed(0)}K`,
      icon: DollarSign,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Total Reviews",
      value: profileData.totalReviews,
      icon: Award,
      color: "bg-blue-100 text-blue-600",
    },
  ];

  const handleSave = () => {
    console.log("Saving profile:", profileData);
    if (typeof window !== "undefined") {
      localStorage.setItem("coachProfile", JSON.stringify(profileData));
    }
    setOriginalData(profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData(originalData);
    setIsEditing(false);
    setShowCategorySelector(false);
    setShowLanguageSelector(false);
    setShowAvailabilityEditor(false);
  };

  const toggleCategory = (categoryName: string) => {
    if (profileData.selectedCategories.includes(categoryName)) {
      setProfileData({
        ...profileData,
        selectedCategories: profileData.selectedCategories.filter(
          (c) => c !== categoryName,
        ),
        selectedSubcategories: {
          ...profileData.selectedSubcategories,
          [categoryName]: [],
        },
      });
    } else {
      setProfileData({
        ...profileData,
        selectedCategories: [...profileData.selectedCategories, categoryName],
      });
    }
  };

  const toggleSubcategory = (categoryName: string, subcategoryName: string) => {
    const current = (profileData as any).selectedSubcategories[categoryName as any] || [];
    if (current.includes(subcategoryName)) {
      setProfileData({
        ...profileData,
        selectedSubcategories: {
          ...profileData.selectedSubcategories,
          [categoryName]: current.filter((s: any) => s !== subcategoryName),
        },
      });
    } else {
      setProfileData({
        ...profileData,
        selectedSubcategories: {
          ...profileData.selectedSubcategories,
          [categoryName]: [...current, subcategoryName],
        },
      });
    }
  };

  const toggleLanguage = (language: string) => {
    if (profileData.languages.includes(language)) {
      setProfileData({
        ...profileData,
        languages: profileData.languages.filter((l) => l !== language),
      });
    } else {
      setProfileData({
        ...profileData,
        languages: [...profileData.languages, language],
      });
    }
  };

  const toggleDay = (day: string) => {
    setProfileData({
      ...profileData,
      availability: {
        ...profileData.availability,
        [day]: {
          ...profileData.availability[
            day as keyof typeof profileData.availability
          ],
          enabled:
            !profileData.availability[
              day as keyof typeof profileData.availability
            ].enabled,
        },
      },
    });
  };

  const toggleTimeSlot = (day: string, slot: any) => {
    const dayData =
      profileData.availability[day as keyof typeof profileData.availability];
    const currentSlots = dayData.slots;

    if ((currentSlots as any).includes(slot)) {
      setProfileData({
        ...profileData,
        availability: {
          ...profileData.availability,
          [day]: {
            ...dayData,
            slots: currentSlots.filter((s) => s !== slot),
          },
        },
      });
    } else {
      setProfileData({
        ...profileData,
        availability: {
          ...profileData.availability,
          [day]: {
            ...dayData,
            slots: [...currentSlots, slot],
          },
        },
      });
    }
  };

  const addCertification = () => {
    const newCert = prompt("Enter new certification:");
    if (newCert && newCert.trim()) {
      setProfileData({
        ...profileData,
        certifications: [...profileData.certifications, newCert.trim()],
      });
    }
  };

  const removeCertification = (index: number) => {
    setProfileData({
      ...profileData,
      certifications: profileData.certifications.filter((_, i) => i !== index),
    });
  };

  const availableDays = Object.entries(profileData.availability)
    .filter(([_, data]) => data.enabled)
    .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1));

  // Calculate profile completion percentage
  const calculateCompletion = () => {
    let completed = 0;
    let total = 0;

    // Basic Info (20%)
    if (profileData.fullName) completed += 5;
    total += 5;
    if (profileData.email) completed += 5;
    total += 5;
    if (profileData.phone) completed += 5;
    total += 5;
    if (profileData.bio && profileData.bio.length > 50) completed += 5;
    total += 5;

    // Categories & Specializations (20%)
    if (profileData.selectedCategories.length > 0) completed += 10;
    total += 10;
    if (
      Object.values(profileData.selectedSubcategories).some(
        (subs: any) => subs.length > 0,
      )
    )
      completed += 10;
    total += 10;

    // Experience & Credentials (15%)
    if (profileData.yearsOfExperience) completed += 5;
    total += 5;
    if (profileData.education) completed += 5;
    total += 5;
    if (profileData.certifications.length > 0) completed += 5;
    total += 5;

    // Languages (10%)
    if (profileData.languages.length > 0) completed += 10;
    total += 10;

    // Pricing (15%)
    if (
      profileData.chatPrice ||
      profileData.audioPrice ||
      profileData.videoPrice
    )
      completed += 15;
    total += 15;

    // Availability (10%)
    const hasAvailability = Object.values(profileData.availability).some(
      (day: any) => day.enabled && day.slots.length > 0,
    );
    if (hasAvailability) completed += 10;
    total += 10;

    // Bank Details (10%)
    if (
      profileData.accountHolderName &&
      profileData.bankName &&
      profileData.accountNumber &&
      profileData.ifscCode
    )
      completed += 10;
    total += 10;

    return Math.round((completed / total) * 100);
  };

  const completionPercentage = calculateCompletion();

  return (
    <div className="min-h-screen pb-24 bg-gray-50 overflow-x-hidden max-w-[100vw]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-3">
          <div className="flex items-center justify-between gap-2">
            <BackButton />
            <RoleSwitcher currentRole="coach" />
          </div>
        </div>
      </header>

      {/* Title Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">Coach Profile</h1>
          <p className="text-purple-100 mt-1">
            Manage your professional information and preferences
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative">
              <img
                src={profileData.profilePhotoPreview}
                alt={profileData.fullName}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-purple-100"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg">
                  <Camera className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex-1 w-full text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="mb-4 sm:mb-0">
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.fullName}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          fullName: e.target.value,
                        })
                      }
                      className="text-2xl font-bold text-gray-800 mb-1 border-2 border-purple-300 rounded-lg px-3 py-1 w-full sm:w-auto"
                    />
                  ) : (
                    <div className="flex items-center gap-2 justify-center sm:justify-start">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {profileData.fullName}
                      </h2>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                        VERIFIED
                      </span>
                    </div>
                  )}
                  <p className="text-gray-500">
                    Coach since {profileData.joinedDate}
                  </p>
                </div>

                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-purple-100 text-purple-600 rounded-xl font-semibold hover:bg-purple-200 transition-colors flex items-center gap-2 mx-auto sm:mx-0"
                  >
                    <Edit className="w-4 h-4" />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-2 mx-auto sm:mx-0">
                    <Button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      onClick={handleCancel}
                      variant="outline"
                      className="px-4 py-2"
                    >
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>

              {/* Bio Section */}
              {isEditing ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        bio: e.target.value.slice(0, 500),
                      })
                    }
                    placeholder="Tell clients about yourself..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
                    rows={4}
                  />
                  <p className="text-sm text-gray-500 mt-1 text-right">
                    {profileData.bio.length}/500
                  </p>
                </div>
              ) : (
                profileData.bio && (
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                    {profileData.bio}
                  </p>
                )
              )}

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-600">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          email: e.target.value,
                        })
                      }
                      className="flex-1 border-2 border-gray-200 rounded-lg px-3 py-1 text-sm sm:text-base"
                    />
                  ) : (
                    <span className="text-sm sm:text-base break-all">
                      {profileData.email}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 justify-center sm:justify-start text-gray-600">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        setProfileData({
                          ...profileData,
                          phone: e.target.value,
                        })
                      }
                      className="flex-1 border-2 border-gray-200 rounded-lg px-3 py-1 text-sm sm:text-base"
                    />
                  ) : (
                    <span className="text-sm sm:text-base">
                      {profileData.phone}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8 shadow-lg mb-6 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800">
              Profile Completion
            </h3>
            <span
              className={`text-2xl font-bold ${
                completionPercentage === 100
                  ? "text-green-600"
                  : completionPercentage >= 70
                    ? "text-blue-600"
                    : "text-orange-600"
              }`}
            >
              {completionPercentage}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                completionPercentage === 100
                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                  : completionPercentage >= 70
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gradient-to-r from-orange-500 to-yellow-500"
              }`}
              style={{ width: `${completionPercentage}%` }}
            />
          </div>

          {completionPercentage === 100 ? (
            <div className="flex items-center gap-2 text-green-700">
              <Check className="w-5 h-5" />
              <p className="text-sm font-semibold">
                Your profile is complete! You&apos;re ready to start coaching.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <p className="text-sm font-semibold">
                  Complete your profile to attract more clients
                </p>
              </div>
              <div className="text-xs text-gray-600 space-y-1 pl-7">
                {!profileData.bio || profileData.bio.length < 50 ? (
                  <p>• Add a detailed bio (at least 50 characters)</p>
                ) : null}
                {profileData.selectedCategories.length === 0 ? (
                  <p>• Select your coaching categories</p>
                ) : null}
                {!Object.values(profileData.selectedSubcategories).some(
                  (subs: any) => subs.length > 0,
                ) ? (
                  <p>• Add your specializations</p>
                ) : null}
                {!profileData.yearsOfExperience ? (
                  <p>• Add your years of experience</p>
                ) : null}
                {!profileData.education ? (
                  <p>• Add your education details</p>
                ) : null}
                {profileData.certifications.length === 0 ? (
                  <p>• Add certifications</p>
                ) : null}
                {profileData.languages.length === 0 ? (
                  <p>• Add languages you speak</p>
                ) : null}
                {!profileData.chatPrice &&
                !profileData.audioPrice &&
                !profileData.videoPrice ? (
                  <p>• Set your pricing</p>
                ) : null}
                {!Object.values(profileData.availability).some(
                  (day: any) => day.enabled && day.slots.length > 0,
                ) ? (
                  <p>• Set your availability</p>
                ) : null}
                {!profileData.accountHolderName ||
                !profileData.bankName ||
                !profileData.accountNumber ||
                !profileData.ifscCode ? (
                  <p>• Add complete bank details</p>
                ) : null}
              </div>
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-md"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${stat.color} flex items-center justify-center mb-3`}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Experience & Credentials */}
        {isEditing && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Experience & Credentials
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="text"
                  value={profileData.yearsOfExperience}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      yearsOfExperience: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Education
                </label>
                <textarea
                  value={profileData.education}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      education: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none"
                  rows={3}
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Certifications
                  </label>
                  <button
                    onClick={addCertification}
                    className="text-purple-600 text-sm font-semibold hover:text-purple-700"
                  >
                    + Add
                  </button>
                </div>
                <div className="space-y-2">
                  {profileData.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-green-50 p-3 rounded-lg border border-green-200"
                    >
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="flex-1 text-gray-800">{cert}</span>
                      <button
                        onClick={() => removeCertification(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Specializations */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Award className="w-6 h-6 text-purple-600" />
              Specializations & Expertise
            </h3>
            {isEditing && (
              <button
                onClick={() => setShowCategorySelector(!showCategorySelector)}
                className="text-purple-600 font-semibold text-sm flex items-center gap-1"
              >
                {showCategorySelector ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {showCategorySelector ? "Hide" : "Edit"}
              </button>
            )}
          </div>

          {isEditing && showCategorySelector && (
            <div className="mb-4 p-4 border-2 border-purple-200 rounded-xl bg-purple-50">
              <p className="text-sm text-gray-700 mb-3">
                Select your main categories:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => toggleCategory(category.name)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      profileData.selectedCategories.includes(category.name)
                        ? "border-purple-500 bg-purple-100 text-purple-700"
                        : "border-gray-200 hover:border-purple-300 bg-white"
                    }`}
                  >
                    <category.icon className="w-6 h-6 mx-auto mb-1" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </button>
                ))}
              </div>

              {(profileData as any).selectedCategories.map((category: any) => (
                <div key={category} className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {category} - Select specializations:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {subcategories[category as keyof typeof subcategories]?.map(
                      (sub) => (
                        <button
                          key={sub}
                          onClick={() => toggleSubcategory(category, sub)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            // profileData.selectedSubcategories[category as any]?.includes(sub)

                            (profileData as any).selectedSubcategories[
                              category as any
                            ]?.includes(sub)
                              ? "bg-purple-600 text-white"
                              : "bg-white border border-gray-300 text-gray-700 hover:bg-purple-100"
                          }`}
                        >
                          {sub}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4">
            {Object.entries(profileData.selectedSubcategories).map(
              ([category, subcats]) =>
                subcats.length > 0 && (
                  <div
                    key={category}
                    className="border-l-4 border-purple-300 pl-4"
                  >
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
                      {category === "Mind & Emotions" && (
                        <Brain className="w-5 h-5 text-blue-600" />
                      )}
                      {category === "Relationships" && (
                        <Heart className="w-5 h-5 text-pink-600" />
                      )}
                      {category === "Career & Work" && (
                        <Briefcase className="w-5 h-5 text-purple-600" />
                      )}
                      {category === "Education & Study" && (
                        <BookOpen className="w-5 h-5 text-amber-600" />
                      )}
                      {category === "Health & Wellness" && (
                        <Sparkles className="w-5 h-5 text-green-600" />
                      )}
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(subcats as string[]).map((subcat) => (
                        <span
                          key={subcat}
                          className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200"
                        >
                          {subcat}
                        </span>
                      ))}
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Languages className="w-6 h-6 text-purple-600" />
              Languages Spoken
            </h3>
            {isEditing && (
              <button
                onClick={() => setShowLanguageSelector(!showLanguageSelector)}
                className="text-purple-600 font-semibold text-sm flex items-center gap-1"
              >
                {showLanguageSelector ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {showLanguageSelector ? "Hide" : "Edit"}
              </button>
            )}
          </div>

          {isEditing && showLanguageSelector && (
            <div className="mb-4 p-4 border-2 border-blue-200 rounded-xl bg-blue-50">
              <p className="text-sm text-gray-700 mb-3">
                Select languages you speak:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableLanguages.map((language) => (
                  <button
                    key={language}
                    onClick={() => toggleLanguage(language)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      profileData.languages.includes(language)
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-blue-100"
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {profileData.languages.map((language) => (
              <span
                key={language}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-semibold border-2 border-blue-200 flex items-center gap-2"
              >
                {language}
                {isEditing && (
                  <button
                    onClick={() => toggleLanguage(language)}
                    className="hover:bg-blue-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Session Types & Pricing */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-green-600" />
            Session Types & Pricing
          </h3>

          {isEditing ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border-2 border-blue-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-gray-800">Chat</span>
                </div>
                <input
                  type="number"
                  value={profileData.chatPrice}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      chatPrice: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="₹/min"
                />
              </div>

              <div className="p-4 border-2 border-green-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-gray-800">Voice Call</span>
                </div>
                <input
                  type="number"
                  value={profileData.audioPrice}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      audioPrice: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="₹/min"
                />
              </div>

              <div className="p-4 border-2 border-purple-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Video className="w-5 h-5 text-purple-600" />
                  <span className="font-bold text-gray-800">Video Call</span>
                </div>
                <input
                  type="number"
                  value={profileData.videoPrice}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      videoPrice: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                  placeholder="₹/min"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {profileData.chatPrice && (
                <div className="p-5 border-2 border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                  <div className="flex items-center gap-2 mb-3">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                    <span className="font-bold text-gray-800 text-lg">
                      Chat
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    ₹{profileData.chatPrice}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    per minute
                  </p>
                </div>
              )}

              {profileData.audioPrice && (
                <div className="p-5 border-2 border-green-200 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-6 h-6 text-green-600" />
                    <span className="font-bold text-gray-800 text-lg">
                      Voice Call
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    ₹{profileData.audioPrice}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    per minute
                  </p>
                </div>
              )}

              {profileData.videoPrice && (
                <div className="p-5 border-2 border-purple-200 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="flex items-center gap-2 mb-3">
                    <Video className="w-6 h-6 text-purple-600" />
                    <span className="font-bold text-gray-800 text-lg">
                      Video Call
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">
                    ₹{profileData.videoPrice}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    per minute
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Availability */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              Weekly Availability
            </h3>
            {isEditing && (
              <button
                onClick={() =>
                  setShowAvailabilityEditor(!showAvailabilityEditor)
                }
                className="text-purple-600 font-semibold text-sm flex items-center gap-1"
              >
                {showAvailabilityEditor ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                {showAvailabilityEditor ? "Hide" : "Edit"}
              </button>
            )}
          </div>

          {isEditing && showAvailabilityEditor && (
            <div className="mb-4 p-4 border-2 border-purple-200 rounded-xl bg-purple-50 space-y-4">
              {Object.entries(profileData.availability).map(([day, data]) => (
                <div key={day} className="bg-white p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <input
                      type="checkbox"
                      checked={data.enabled}
                      onChange={() => toggleDay(day)}
                      className="w-5 h-5 text-purple-600"
                    />
                    <label className="font-bold text-gray-800 capitalize">
                      {day}
                    </label>
                  </div>
                  {data.enabled && (
                    <div className="pl-8 grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => toggleTimeSlot(day, slot)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                            (data.slots as any).includes(slot)
                              ? "bg-purple-600 text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-3">Available Days:</p>
            <div className="flex flex-wrap gap-2">
              {availableDays.map((day) => (
                <span
                  key={day}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300"
                >
                  ✓ {day}
                </span>
              ))}
            </div>
          </div>

          {!isEditing && (
            <div className="mt-6 space-y-3 bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3">
                Detailed Schedule:
              </h4>
              {Object.entries(profileData.availability)
                .filter(([_, data]) => data.enabled && data.slots.length > 0)
                .map(([day, data]) => (
                  <div
                    key={day}
                    className="flex items-start gap-3 text-sm bg-white p-3 rounded-lg"
                  >
                    <span className="font-bold text-purple-600 capitalize min-w-[100px]">
                      {day}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {data.slots.map((slot, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Bank Details */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-green-600" />
            Payment Information
          </h3>

          {isEditing ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Holder Name *
                  </label>
                  <input
                    type="text"
                    value={profileData.accountHolderName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        accountHolderName: e.target.value,
                      })
                    }
                    placeholder="Full name as per bank"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bank Name *
                  </label>
                  <input
                    type="text"
                    value={profileData.bankName}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        bankName: e.target.value,
                      })
                    }
                    placeholder="e.g., HDFC Bank"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account Number *
                  </label>
                  <input
                    type="text"
                    value={profileData.accountNumber}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        accountNumber: e.target.value,
                      })
                    }
                    placeholder="Enter account number"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    IFSC Code *
                  </label>
                  <input
                    type="text"
                    value={profileData.ifscCode}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        ifscCode: e.target.value.toUpperCase(),
                      })
                    }
                    placeholder="e.g., HDFC0001234"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none uppercase"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID (Optional)
                  </label>
                  <input
                    type="text"
                    value={profileData.upiId}
                    onChange={(e) =>
                      setProfileData({ ...profileData, upiId: e.target.value })
                    }
                    placeholder="yourname@bankname"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
                <p className="text-xs text-green-800 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-semibold">
                    Your banking details are encrypted and secure. They will
                    only be used for payment processing.
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-200">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Account Holder</p>
                    <p className="font-bold text-gray-800">
                      {profileData.accountHolderName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Bank</p>
                    <p className="font-bold text-gray-800">
                      {profileData.bankName}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Account Number</p>
                    <p className="font-bold text-gray-800">
                      {profileData.accountNumber}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">IFSC Code</p>
                    <p className="font-bold text-gray-800">
                      {profileData.ifscCode}
                    </p>
                  </div>
                </div>
                {profileData.upiId && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">UPI ID</p>
                      <p className="font-bold text-gray-800">
                        {profileData.upiId}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-xs text-green-800 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-semibold">
                    Your banking details are encrypted and secure
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Actions - Only show when not editing */}
        {!isEditing && (
          <div className="space-y-3">
            <button
              onClick={() => router.push("/coach/dashboard")}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors shadow-md px-6 flex items-center justify-between"
            >
              <span>Go to Dashboard</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
