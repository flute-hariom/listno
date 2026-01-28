"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  User,
  Award,
  Briefcase,
  Clock,
  DollarSign,
  Upload,
  ChevronRight,
  ChevronLeft,
  Check,
  Brain,
  Heart,
  BookOpen,
  Sparkles,
  Star,
  Calendar,
  CreditCard,
  FileText,
  Languages,
  Video,
  Phone,
  MessageSquare,
  X,
  Plus,
  GraduationCap,
  Shield,
  Eye,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

function CoachOnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const totalSteps = 8;
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);

  // Check if we're in edit mode and load existing data
  const editMode = searchParams?.get("editMode") === "true" || false;
  const [existingData, setExistingData] = useState<any>(null);

  // Load existing data on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataParam = searchParams?.get("data");
      if (dataParam) {
        try {
          setExistingData(JSON.parse(decodeURIComponent(dataParam)));
        } catch (error) {
          console.error("Error parsing data param:", error);
        }
      }
    }
  }, [searchParams]);

  // Form state - populate with existing data if in edit mode
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    fullName: existingData?.fullName || "",
    email: existingData?.email || "",
    phone: existingData?.phone || "",
    bio: existingData?.bio || "",
    profilePhoto: null as File | null,
    profilePhotoPreview: existingData?.profilePhotoPreview || "",

    // Step 2: Categories & Subcategories
    selectedCategories: existingData?.selectedCategories || ([] as string[]),
    selectedSubcategories:
      existingData?.selectedSubcategories || ({} as Record<string, string[]>),

    // Step 3: Experience & Credentials
    yearsOfExperience: existingData?.yearsOfExperience || "",
    education: existingData?.education || "",
    certifications: existingData?.certifications || ([] as string[]),
    newCertification: "",

    // Step 4: Languages
    languages: existingData?.languages || ([] as string[]),

    // Step 5: Session Types & Pricing
    sessionTypes: existingData?.sessionTypes || ([] as string[]),
    chatPrice: existingData?.chatPrice || "",
    audioPrice: existingData?.audioPrice || "",
    videoPrice: existingData?.videoPrice || "",

    // Step 6: Availability
    availability: existingData?.availability || {
      monday: { enabled: false, slots: [] as string[] },
      tuesday: { enabled: false, slots: [] as string[] },
      wednesday: { enabled: false, slots: [] as string[] },
      thursday: { enabled: false, slots: [] as string[] },
      friday: { enabled: false, slots: [] as string[] },
      saturday: { enabled: false, slots: [] as string[] },
      sunday: { enabled: false, slots: [] as string[] },
    },

    // Step 7: Bank Details
    accountHolderName: existingData?.accountHolderName || "",
    accountNumber: existingData?.accountNumber || "",
    ifscCode: existingData?.ifscCode || "",
    bankName: existingData?.bankName || "",
    upiId: existingData?.upiId || "",

    // Step 8: Terms
    agreeToTerms: editMode ? true : false,
    agreeToCode: editMode ? true : false,
  });

  // Load from localStorage if not in edit mode
  useEffect(() => {
    if (!editMode && typeof window !== "undefined") {
      const savedProfile = localStorage.getItem("coachProfile");
      if (savedProfile) {
        try {
          const parsedData = JSON.parse(savedProfile);
          console.log("Loading existing profile data for editing:", parsedData);
          setFormData((prev) => ({
            ...prev,
            ...parsedData,
            agreeToTerms: true,
            agreeToCode: true,
          }));
        } catch (error) {
          console.error("Error loading saved profile:", error);
        }
      }
    }
  }, [editMode]);

  const categories = [
    {
      id: "mind-emotions",
      name: "Mind & Emotions",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      subcategories: [
        { id: "stress", name: "Stress Management" },
        { id: "worry", name: "Worry & Anxiety" },
        { id: "confidence", name: "Confidence Building" },
        { id: "self-respect", name: "Self-Respect" },
        { id: "hurt", name: "Emotional Hurt" },
        { id: "tired", name: "Mental Fatigue" },
        { id: "calm", name: "Finding Calm" },
        { id: "fear", name: "Overcoming Fear" },
      ],
    },
    {
      id: "relationships",
      name: "Relationships",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      subcategories: [
        { id: "love", name: "Love & Romance" },
        { id: "breakup", name: "Breakup Support" },
        { id: "marriage", name: "Marriage Counseling" },
        { id: "parenting", name: "Parenting" },
        { id: "trust", name: "Trust Issues" },
        { id: "communication", name: "Communication" },
        { id: "friendship", name: "Friendship" },
        { id: "loneliness", name: "Loneliness" },
      ],
    },
    {
      id: "career",
      name: "Career",
      icon: Briefcase,
      color: "from-purple-500 to-indigo-500",
      subcategories: [
        { id: "pressure", name: "Work Pressure" },
        { id: "boss", name: "Boss Relationship" },
        { id: "growth", name: "Career Growth" },
        { id: "work-life", name: "Work-Life Balance" },
        { id: "interview", name: "Interview Prep" },
        { id: "colleagues", name: "Colleague Relations" },
        { id: "salary", name: "Salary Negotiation" },
        { id: "change", name: "Career Change" },
      ],
    },
    {
      id: "education",
      name: "Education",
      icon: BookOpen,
      color: "from-amber-500 to-orange-500",
      subcategories: [
        { id: "exams", name: "Exam Stress" },
        { id: "motivation", name: "Study Motivation" },
        { id: "focus", name: "Focus & Concentration" },
        { id: "study-habits", name: "Study Habits" },
        { id: "discipline", name: "Academic Discipline" },
        { id: "exam-pressure", name: "Exam Pressure" },
        { id: "learning", name: "Learning Strategies" },
        { id: "performance", name: "Academic Performance" },
      ],
    },
    {
      id: "wellness",
      name: "Wellness",
      icon: Sparkles,
      color: "from-green-500 to-emerald-500",
      subcategories: [
        { id: "sleep", name: "Sleep Issues" },
        { id: "fitness", name: "Fitness Goals" },
        { id: "nutrition", name: "Nutrition" },
        { id: "energy", name: "Energy Levels" },
        { id: "self-care", name: "Self-Care" },
        { id: "recovery", name: "Recovery" },
        { id: "health", name: "General Health" },
        { id: "routine", name: "Daily Routine" },
      ],
    },
    {
      id: "astro-spiritual",
      name: "Astro & Spiritual",
      icon: Star,
      color: "from-violet-500 to-purple-500",
      subcategories: [
        { id: "astrology", name: "Astrology Reading" },
        { id: "compatibility", name: "Compatibility Match" },
        { id: "career-astro", name: "Career Astrology" },
        { id: "tarot", name: "Tarot Reading" },
        { id: "birth-chart", name: "Birth Chart" },
        { id: "planetary", name: "Planetary Influence" },
        { id: "spirituality", name: "Spiritual Guidance" },
        { id: "future", name: "Future Predictions" },
      ],
    },
  ];

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

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Submit form
      console.log("Form submitted:", formData);
      console.log("Selected Categories:", formData.selectedCategories);
      console.log("Selected Subcategories:", formData.selectedSubcategories);

      // Save to localStorage
      if (typeof window !== "undefined") {
        const profileData = {
          ...formData,
          joinedDate: existingData?.joinedDate || "January 2024",
          totalSessions: existingData?.totalSessions || 0,
          rating: existingData?.rating || 0,
          totalReviews: existingData?.totalReviews || 0,
          totalEarnings: existingData?.totalEarnings || 0,
          status: "active",
          lastUpdated: new Date().toISOString(),
        };

        localStorage.setItem("coachProfile", JSON.stringify(profileData));
        console.log("Profile saved to localStorage:", profileData);
      }

      // If in edit mode, go back to profile
      if (editMode) {
        router.push("/coach/profile");
      } else {
        // First time submission - go to pending review
        router.push("/coach/pending-review");
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleCategory = (categoryId: string, categoryName: string) => {
    if (formData.selectedCategories.includes(categoryName)) {
      setFormData({
        ...formData,
        selectedCategories: formData.selectedCategories.filter(
          (name :any) => name !== categoryName,
        ),
        selectedSubcategories: {
          ...formData.selectedSubcategories,
          [categoryName]: [],
        },
      });
    } else {
      setFormData({
        ...formData,
        selectedCategories: [...formData.selectedCategories, categoryName],
      });
    }
  };

  const toggleSubcategory = (categoryName: string, subcategoryName: string) => {
    const current = formData.selectedSubcategories[categoryName] || [];
    if (current.includes(subcategoryName)) {
      setFormData({
        ...formData,
        selectedSubcategories: {
          ...formData.selectedSubcategories,
          [categoryName]: current.filter((name :any) => name !== subcategoryName),
        },
      });
    } else {
      setFormData({
        ...formData,
        selectedSubcategories: {
          ...formData.selectedSubcategories,
          [categoryName]: [...current, subcategoryName],
        },
      });
    }
  };

  const addCertification = () => {
    if (formData.newCertification.trim()) {
      setFormData({
        ...formData,
        certifications: [
          ...formData.certifications,
          formData.newCertification.trim(),
        ],
        newCertification: "",
      });
    }
  };

  const removeCertification = (index: number) => {
    setFormData({
      ...formData,
      certifications: formData.certifications.filter((_ :any, i :any) => i !== index),
    });
  };

  const toggleLanguage = (language: string) => {
    if (formData.languages.includes(language)) {
      setFormData({
        ...formData,
        languages: formData.languages.filter((lang :any) => lang !== language),
      });
    } else {
      setFormData({
        ...formData,
        languages: [...formData.languages, language],
      });
    }
  };

  const toggleSessionType = (type: string) => {
    if (formData.sessionTypes.includes(type)) {
      setFormData({
        ...formData,
        sessionTypes: formData.sessionTypes.filter((t :any) => t !== type),
      });
    } else {
      setFormData({
        ...formData,
        sessionTypes: [...formData.sessionTypes, type],
      });
    }
  };

  const toggleAvailabilityDay = (day: keyof typeof formData.availability) => {
    setFormData({
      ...formData,
      availability: {
        ...formData.availability,
        [day]: {
          ...formData.availability[day],
          enabled: !formData.availability[day].enabled,
        },
      },
    });
  };

  const toggleTimeSlot = (
    day: keyof typeof formData.availability,
    slot: string,
  ) => {
    const currentSlots = formData.availability[day].slots;
    if (currentSlots.includes(slot)) {
      setFormData({
        ...formData,
        availability: {
          ...formData.availability,
          [day]: {
            ...formData.availability[day],
            slots: currentSlots.filter((s :any) => s !== slot),
          },
        },
      });
    } else {
      setFormData({
        ...formData,
        availability: {
          ...formData.availability,
          [day]: {
            ...formData.availability[day],
            slots: [...currentSlots, slot],
          },
        },
      });
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        profilePhoto: file,
        profilePhotoPreview: URL.createObjectURL(file),
      });
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return (
          formData.fullName && formData.email && formData.phone && formData.bio
        );
      case 2:
        return (
          formData.selectedCategories.length > 0 &&
          Object.values(formData.selectedSubcategories).some(
            (subs :any) => subs.length > 0,
          )
        );
      case 3:
        return formData.yearsOfExperience && formData.education;
      case 4:
        return formData.languages.length > 0;
      case 5:
        return (
          formData.sessionTypes.length > 0 &&
          ((formData.sessionTypes.includes("chat") && formData.chatPrice) ||
            (formData.sessionTypes.includes("audio") && formData.audioPrice) ||
            (formData.sessionTypes.includes("video") && formData.videoPrice))
        );
      case 6:
        return Object.values(formData.availability).some(
          (day :any) => day.enabled && day.slots.length > 0,
        );
      case 7:
        return (
          formData.accountHolderName &&
          formData.accountNumber &&
          formData.ifscCode &&
          formData.bankName
        );
      case 8:
        return formData.agreeToTerms && formData.agreeToCode;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {editMode ? "Edit Profile" : "Coach Onboarding"}
              </h1>
              <p className="text-gray-600 mt-1">
                {editMode
                  ? "Update your professional information"
                  : "Complete your profile to start coaching"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">Step</span>
              <span className="text-2xl font-bold text-purple-600">{step}</span>
              <span className="text-sm font-medium text-gray-400">
                / {totalSteps}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="absolute h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
              <div
                key={s}
                className={`flex flex-col items-center ${
                  s <= step ? "text-purple-600" : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-1 ${
                    s < step
                      ? "bg-purple-600 text-white"
                      : s === step
                        ? "bg-purple-600 text-white ring-4 ring-purple-200"
                        : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s < step ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className="text-xs hidden md:block">
                  {s === 1 && "Info"}
                  {s === 2 && "Categories"}
                  {s === 3 && "Experience"}
                  {s === 4 && "Languages"}
                  {s === 5 && "Pricing"}
                  {s === 6 && "Schedule"}
                  {s === 7 && "Payment"}
                  {s === 8 && "Review"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Personal Information
                    </h2>
                    <p className="text-gray-600">Tell us about yourself</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Professional Bio * (Max 500 characters)
                    </label>
                    <textarea
                      value={formData.bio}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bio: e.target.value.slice(0, 500),
                        })
                      }
                      placeholder="Tell users about your coaching philosophy, approach, and what makes you unique..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-colors"
                      rows={5}
                    />
                    <p className="text-sm text-gray-500 mt-1 text-right">
                      {formData.bio.length}/500
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Photo
                    </label>
                    <div className="flex items-center gap-4">
                      {formData.profilePhotoPreview && (
                        <img
                          src={formData.profilePhotoPreview}
                          alt="Profile preview"
                          className="w-24 h-24 rounded-full object-cover border-4 border-purple-100"
                        />
                      )}
                      <label className="flex-1 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:border-purple-500 transition-all group">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-purple-500 transition-colors" />
                        <p className="text-sm text-gray-600 group-hover:text-purple-600 transition-colors">
                          {formData.profilePhoto
                            ? "Change Photo"
                            : "Upload Profile Photo"}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          PNG, JPG up to 5MB
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Categories & Subcategories */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Expertise Areas
                    </h2>
                    <p className="text-gray-600">
                      Select your categories and specializations
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`border-2 rounded-2xl p-6 transition-all ${
                        formData.selectedCategories.includes(category.name)
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <button
                        onClick={() =>
                          toggleCategory(category.id, category.name)
                        }
                        className="w-full flex items-center gap-4 text-left"
                      >
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <category.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-800">
                            {category.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {category.subcategories.length} specializations
                            available
                          </p>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.selectedCategories.includes(category.name)
                              ? "bg-purple-600 border-purple-600"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.selectedCategories.includes(
                            category.name,
                          ) && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </button>

                      {formData.selectedCategories.includes(category.name) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 pt-4 border-t border-purple-200"
                        >
                          <p className="text-sm font-medium text-gray-700 mb-3">
                            Select your specializations:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {category.subcategories.map((sub) => (
                              <button
                                key={sub.id}
                                onClick={() =>
                                  toggleSubcategory(category.name, sub.name)
                                }
                                className={`px-4 py-2 rounded-lg text-sm font-medium text-left transition-all ${
                                  formData.selectedSubcategories[
                                    category.name
                                  ]?.includes(sub.name)
                                    ? "bg-purple-600 text-white"
                                    : "bg-white border border-gray-300 text-gray-700 hover:border-purple-400"
                                }`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Experience & Credentials */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Experience & Credentials
                    </h2>
                    <p className="text-gray-600">Share your qualifications</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      value={formData.yearsOfExperience}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          yearsOfExperience: e.target.value,
                        })
                      }
                      placeholder="e.g., 5"
                      min="0"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Education Background *
                    </label>
                    <textarea
                      value={formData.education}
                      onChange={(e) =>
                        setFormData({ ...formData, education: e.target.value })
                      }
                      placeholder="e.g., Master's in Psychology, Harvard University"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none resize-none transition-colors"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Certifications & Licenses
                    </label>
                    <div className="space-y-2">
                      {formData.certifications.map((cert: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200"
                        >
                          <Shield className="w-4 h-4 text-purple-600 flex-shrink-0" />
                          <span className="flex-1 text-sm text-gray-700">
                            {cert}
                          </span>
                          <button
                            onClick={() => removeCertification(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-2">
                      <input
                        type="text"
                        value={formData.newCertification}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            newCertification: e.target.value,
                          })
                        }
                        onKeyPress={(e) =>
                          e.key === "Enter" && addCertification()
                        }
                        placeholder="Add certification (e.g., Licensed Therapist, CBT Certified)"
                        className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      />
                      <Button
                        onClick={addCertification}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Languages */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Languages className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Languages You Speak
                    </h2>
                    <p className="text-gray-600">
                      Select all languages you&apos;re fluent in
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableLanguages.map((language) => (
                    <button
                      key={language}
                      onClick={() => toggleLanguage(language)}
                      className={`px-4 py-3 rounded-xl font-medium transition-all ${
                        formData.languages.includes(language)
                          ? "bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg"
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-purple-400"
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Session Types & Pricing */}
            {step === 5 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <DollarSign className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Session Types & Pricing
                    </h2>
                    <p className="text-gray-600">
                      Set your rates and communication methods
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Session Types Offered *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        onClick={() => toggleSessionType("chat")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.sessionTypes.includes("chat")
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <MessageSquare
                          className={`w-8 h-8 mx-auto mb-2 ${
                            formData.sessionTypes.includes("chat")
                              ? "text-purple-600"
                              : "text-gray-400"
                          }`}
                        />
                        <p className="font-medium text-gray-800">Chat</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Text-based sessions
                        </p>
                      </button>

                      <button
                        onClick={() => toggleSessionType("audio")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.sessionTypes.includes("audio")
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Phone
                          className={`w-8 h-8 mx-auto mb-2 ${
                            formData.sessionTypes.includes("audio")
                              ? "text-purple-600"
                              : "text-gray-400"
                          }`}
                        />
                        <p className="font-medium text-gray-800">Audio Call</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Voice-only sessions
                        </p>
                      </button>

                      <button
                        onClick={() => toggleSessionType("video")}
                        className={`p-4 rounded-xl border-2 transition-all ${
                          formData.sessionTypes.includes("video")
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Video
                          className={`w-8 h-8 mx-auto mb-2 ${
                            formData.sessionTypes.includes("video")
                              ? "text-purple-600"
                              : "text-gray-400"
                          }`}
                        />
                        <p className="font-medium text-gray-800">Video Call</p>
                        <p className="text-xs text-gray-600 mt-1">
                          Face-to-face sessions
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {formData.sessionTypes.includes("chat") && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Chat Price (₹/session) *
                        </label>
                        <input
                          type="number"
                          value={formData.chatPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              chatPrice: e.target.value,
                            })
                          }
                          placeholder="e.g., 500"
                          min="0"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                    )}

                    {formData.sessionTypes.includes("audio") && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Audio Price (₹/session) *
                        </label>
                        <input
                          type="number"
                          value={formData.audioPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              audioPrice: e.target.value,
                            })
                          }
                          placeholder="e.g., 800"
                          min="0"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                    )}

                    {formData.sessionTypes.includes("video") && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Video Price (₹/session) *
                        </label>
                        <input
                          type="number"
                          value={formData.videoPrice}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              videoPrice: e.target.value,
                            })
                          }
                          placeholder="e.g., 1200"
                          min="0"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                        />
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900">
                      <strong>Pricing Tips:</strong> Consider your experience
                      level and market rates. Most coaches charge ₹500-₹2000 per
                      session depending on expertise.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Availability Schedule */}
            {step === 6 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Set Your Availability
                    </h2>
                    <p className="text-gray-600">
                      Choose your working days and time slots
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {Object.entries(formData.availability).map(
                    ([day, dayData]) => (
                      <div
                        key={day}
                        className={`border-2 rounded-xl p-4 transition-all ${
                          (dayData as any)  .enabled
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={(dayData as any).enabled}
                              onChange={() =>
                                toggleAvailabilityDay(
                                  day as keyof typeof formData.availability,
                                )
                              }
                              className="w-5 h-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="font-semibold text-gray-800 capitalize">
                              {day}
                            </span>
                          </label>
                          {(dayData as any).enabled && (dayData as any).slots.length > 0 && (
                            <span className="text-sm text-purple-600 font-medium">
                              {(dayData as any).slots.length} slot
                              {(dayData as any).slots.length > 1 ? "s" : ""} selected
                            </span>
                          )}
                        </div>

                        {(dayData as any).enabled && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-2"
                          >
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                onClick={() =>
                                  toggleTimeSlot(
                                    day as keyof typeof formData.availability,
                                    slot,
                                  )
                                }
                                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                                  (dayData as any).slots.includes(slot)
                                    ? "bg-purple-600 text-white"
                                    : "bg-white border border-gray-300 text-gray-700 hover:border-purple-400"
                                }`}
                              >
                                {slot}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}

            {/* Step 7: Bank Details */}
            {step === 7 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Payment Details
                    </h2>
                    <p className="text-gray-600">
                      Add your bank account for receiving payments
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Holder Name *
                    </label>
                    <input
                      type="text"
                      value={formData.accountHolderName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          accountHolderName: e.target.value,
                        })
                      }
                      placeholder="As per bank account"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Number *
                      </label>
                      <input
                        type="text"
                        value={formData.accountNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            accountNumber: e.target.value,
                          })
                        }
                        placeholder="XXXXXXXXXXXX"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        IFSC Code *
                      </label>
                      <input
                        type="text"
                        value={formData.ifscCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            ifscCode: e.target.value.toUpperCase(),
                          })
                        }
                        placeholder="ABCD0123456"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      value={formData.bankName}
                      onChange={(e) =>
                        setFormData({ ...formData, bankName: e.target.value })
                      }
                      placeholder="e.g., State Bank of India"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      UPI ID (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.upiId}
                      onChange={(e) =>
                        setFormData({ ...formData, upiId: e.target.value })
                      }
                      placeholder="yourname@upi"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                    <p className="text-sm text-yellow-900">
                      <strong>Security:</strong> Your banking information is
                      encrypted and stored securely. It will only be used for
                      transferring your coaching earnings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 8: Review & Submit */}
            {step === 8 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      Review & Submit
                    </h2>
                    <p className="text-gray-600">
                      Almost there! Review and accept our terms
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                    <h3 className="font-bold text-gray-800 mb-4">
                      Your Profile Summary
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Name</p>
                        <p className="font-medium text-gray-800">
                          {formData.fullName || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Email</p>
                        <p className="font-medium text-gray-800">
                          {formData.email || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Experience</p>
                        <p className="font-medium text-gray-800">
                          {formData.yearsOfExperience
                            ? `${formData.yearsOfExperience} years`
                            : "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Languages</p>
                        <p className="font-medium text-gray-800">
                          {formData.languages.join(", ") || "-"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Categories</p>
                        <p className="font-medium text-gray-800">
                          {formData.selectedCategories.length} selected
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Session Types</p>
                        <p className="font-medium text-gray-800">
                          {formData.sessionTypes.join(", ") || "-"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="space-y-3">
                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <label className="flex items-start gap-3 cursor-pointer flex-1">
                          <input
                            type="checkbox"
                            checked={formData.agreeToTerms}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                agreeToTerms: e.target.checked,
                              })
                            }
                            className="w-5 h-5 mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">
                              I agree to the Terms & Conditions *
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              I have read and accept all terms and conditions of
                              Listno&apos;s coach agreement
                            </p>
                          </div>
                        </label>
                        <button
                          onClick={() => setShowTermsModal(true)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium whitespace-nowrap"
                        >
                          <Eye className="w-4 h-4" />
                          Read
                        </button>
                      </div>
                    </div>

                    <div className="p-4 border-2 border-gray-200 rounded-xl hover:border-purple-400 transition-colors">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <label className="flex items-start gap-3 cursor-pointer flex-1">
                          <input
                            type="checkbox"
                            checked={formData.agreeToCode}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                agreeToCode: e.target.checked,
                              })
                            }
                            className="w-5 h-5 mt-0.5 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">
                              I agree to the Code of Conduct *
                            </p>
                            <p className="text-sm text-gray-600 mt-1">
                              I will maintain professional standards and ethical
                              practices in all coaching sessions
                            </p>
                          </div>
                        </label>
                        <button
                          onClick={() => setShowCodeModal(true)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm font-medium whitespace-nowrap"
                        >
                          <Eye className="w-4 h-4" />
                          Read
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-sm text-green-900">
                      <strong>What&apos;s next?</strong> After submission, our
                      team will review your profile within 24-48 hours.
                      You&apos;ll receive an email once approved, and you can
                      start accepting coaching sessions!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-6">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={step === 1}
            className="px-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back
          </Button>

          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {step < totalSteps ? (
              <>
                Continue
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            ) : (
              <>
                {editMode ? "Save Changes" : "Submit for Review"}
                <Check className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Save Progress */}
        <div className="text-center mt-4">
          <button className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
            Save and Continue Later
          </button>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-800">
                Terms & Conditions
              </h2>
              <button
                onClick={() => setShowTermsModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  LISTENO Coach Agreement
                </h3>
                <p className="mb-4">
                  <strong>Effective Date:</strong> January 11, 2026
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  1. Introduction
                </h4>
                <p className="mb-4">
                  Welcome to LISTENO. By registering as a Coach on the LISTENO
                  platform, you (&quot;Coach&quot;) agree to be bound by these
                  Terms & Conditions. LISTENO provides a platform connecting
                  users seeking mental wellness support with qualified coaches.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  2. Coach Obligations
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Provide accurate credentials, qualifications, and
                    professional information
                  </li>
                  <li>
                    Maintain valid certifications and licenses as applicable
                  </li>
                  <li>Respond to user inquiries within 24 hours</li>
                  <li>Conduct sessions professionally and ethically</li>
                  <li>Maintain confidentiality of all user information</li>
                  <li>Update availability schedule regularly</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  3. Payment Terms
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    LISTENO charges a platform fee of 20% on all session
                    earnings
                  </li>
                  <li>
                    Payments are processed within 7 business days after session
                    completion
                  </li>
                  <li>
                    Coaches are responsible for applicable taxes on earnings
                  </li>
                  <li>Minimum withdrawal amount is ₹500</li>
                  <li>Bank details must be accurate and verified</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  4. Session Policies
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Session duration should match the agreed time</li>
                  <li>
                    Cancellations must be made at least 2 hours in advance
                  </li>
                  <li>
                    No-shows without notice may result in account penalties
                  </li>
                  <li>
                    All sessions must be conducted through the LISTENO platform
                  </li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  5. Prohibited Conduct
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Requesting personal contact information from users</li>
                  <li>
                    Conducting sessions outside the platform to avoid fees
                  </li>
                  <li>Inappropriate, unprofessional, or unethical behavior</li>
                  <li>Sharing confidential user information</li>
                  <li>Misrepresenting credentials or qualifications</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  6. Account Suspension & Termination
                </h4>
                <p className="mb-4">
                  LISTENO reserves the right to suspend or terminate coach
                  accounts for violations of these terms, user complaints, or
                  any conduct deemed harmful to the platform or users.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  7. Liability Limitation
                </h4>
                <p className="mb-4">
                  LISTENO is a platform provider and is not responsible for the
                  quality, outcomes, or consequences of coaching sessions.
                  Coaches are independent contractors and assume full liability
                  for their services.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  8. Intellectual Property
                </h4>
                <p className="mb-4">
                  Coaches retain ownership of their content and methods. By
                  using LISTENO, coaches grant the platform a license to display
                  their profile, credentials, and reviews.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  9. Modifications
                </h4>
                <p className="mb-4">
                  LISTENO may update these terms at any time. Coaches will be
                  notified of significant changes via email and continued use
                  constitutes acceptance.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  10. Contact
                </h4>
                <p className="mb-4">
                  For questions about these terms, contact us at
                  support@listeno.com
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
              <button
                onClick={() => setShowTermsModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Code of Conduct Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
              <h2 className="text-2xl font-bold text-gray-800">
                Coach Code of Conduct
              </h2>
              <button
                onClick={() => setShowCodeModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  LISTENO Professional Standards
                </h3>
                <p className="mb-4">
                  As a LISTENO Coach, you commit to upholding the highest
                  standards of professional conduct, ethics, and client care.
                  This Code of Conduct outlines expected behaviors and
                  responsibilities.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  1. Professional Integrity
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Provide honest, accurate representation of credentials and
                    experience
                  </li>
                  <li>
                    Only practice within your areas of competence and expertise
                  </li>
                  <li>
                    Maintain current knowledge through continuing education
                  </li>
                  <li>
                    Acknowledge limitations and refer clients when appropriate
                  </li>
                  <li>Never make false promises or guarantee outcomes</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  2. Client Welfare & Safety
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Prioritize client well-being above all else</li>
                  <li>
                    Recognize signs of crisis and refer to emergency services
                    when needed
                  </li>
                  <li>
                    Never exploit clients emotionally, financially, or otherwise
                  </li>
                  <li>
                    Respect client autonomy and right to make their own
                    decisions
                  </li>
                  <li>
                    Avoid dual relationships that could impair professional
                    judgment
                  </li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  3. Confidentiality
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Maintain strict confidentiality of all client information
                  </li>
                  <li>
                    Only share information with explicit client consent or legal
                    requirement
                  </li>
                  <li>Store client data securely and protect privacy</li>
                  <li>
                    Discuss confidentiality limits at the start of coaching
                    relationship
                  </li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  4. Boundaries & Ethics
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    Maintain appropriate professional boundaries at all times
                  </li>
                  <li>
                    Never engage in romantic, sexual, or inappropriate
                    relationships with clients
                  </li>
                  <li>Avoid conflicts of interest</li>
                  <li>
                    Do not accept gifts or favors that could compromise
                    objectivity
                  </li>
                  <li>
                    Respect cultural, religious, and personal values of clients
                  </li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  5. Communication Standards
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Communicate clearly, respectfully, and professionally</li>
                  <li>Respond to client messages within 24 hours</li>
                  <li>Use appropriate language and avoid jargon</li>
                  <li>Listen actively and empathetically</li>
                  <li>Provide constructive, supportive feedback</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  6. Session Quality
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Be punctual and present for all scheduled sessions</li>
                  <li>Create a safe, non-judgmental space for clients</li>
                  <li>Prepare adequately for sessions</li>
                  <li>Stay focused and engaged during sessions</li>
                  <li>Provide value and actionable guidance</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  7. Non-Discrimination
                </h4>
                <p className="mb-4">
                  Coaches must not discriminate based on race, ethnicity,
                  religion, gender, sexual orientation, age, disability,
                  socioeconomic status, or any other protected characteristic.
                  All clients deserve equal respect and quality of service.
                </p>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  8. Platform Compliance
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Conduct all sessions through the LISTENO platform</li>
                  <li>Follow platform policies and guidelines</li>
                  <li>Respect user privacy and data protection</li>
                  <li>Report technical issues or concerns promptly</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  9. Continuous Improvement
                </h4>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Seek feedback and work on professional development</li>
                  <li>Participate in supervision or peer consultation</li>
                  <li>
                    Stay updated on best practices in coaching and wellness
                  </li>
                  <li>Reflect on your practice and learn from experiences</li>
                </ul>

                <h4 className="font-bold text-gray-800 mt-6 mb-2">
                  10. Reporting Violations
                </h4>
                <p className="mb-4">
                  If you witness or become aware of conduct violations by
                  yourself or other coaches, you must report it to LISTENO
                  immediately at ethics@listeno.com
                </p>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mt-6">
                  <p className="text-sm text-purple-900">
                    <strong>Acknowledgment:</strong> By checking &quot;I agree
                    to the Code of Conduct,&quot; you affirm that you have read,
                    understood, and commit to upholding these professional
                    standards in all coaching interactions on the LISTENO
                    platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50 sticky bottom-0">
              <button
                onClick={() => setShowCodeModal(false)}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CoachOnboarding() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4 flex items-center justify-center"><div className="text-purple-600">Loading...</div></div>}>
      <CoachOnboardingContent />
    </Suspense>
  );
}
