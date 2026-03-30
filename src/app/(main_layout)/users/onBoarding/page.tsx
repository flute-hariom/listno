'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  User, Mail, Phone, MapPin, Brain,
  Languages as LanguagesIcon, ArrowRight,
  ArrowLeft, Check, Smile, Camera
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  MAIN_CATEGORIES,
  ALL_SUBCATEGORIES,
  AVAILABLE_LANGUAGES,
  COMMON_INTERESTS,
  COMMON_GOALS
} from '@/constants/categories';

export default function UserOnboarding() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: 'Male',
    location: '',
    bio: '',
    profilePhoto: null as File | null,
    profilePhotoPreview: '',
    selectedCategories: [] as string[],
    selectedLanguages: ['English'], // ✅ single language default
    interests: [] as string[],
    goals: [] as string[],
  });

  // ---------------------------
  // Navigation
  // ---------------------------
  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const profileData = {
        ...formData,
        joinedDate: 'January 2025',
        avatar:
          formData.profilePhotoPreview ||
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400'
      };

      localStorage.setItem('userProfile', JSON.stringify(profileData));
      localStorage.setItem('userOnboardingCompleted', 'true');

      router.push('/user/home');
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // ---------------------------
  // Toggles
  // ---------------------------
  const toggleCategory = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedCategories: prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter((c) => c !== category)
        : [...prev.selectedCategories, category],
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  // ---------------------------
  // Upload
  // ---------------------------
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
        profilePhotoPreview: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
  };

  // ---------------------------
  // Validation
  // ---------------------------
  const isStepValid = () => {
    if (step === 1) return formData.name && formData.email && formData.phone;
    if (step === 2) return formData.selectedCategories.length > 0;
    return true;
  };

  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to LISTENO</h1>
          <p className="text-gray-600">Let's set up your profile</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round((step / totalSteps) * 100)}%</span>
          </div>

          <div className="bg-gray-200 h-3 rounded-full mt-2">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              animate={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-xl"
        >

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Personal Info</h2>

              {/* Photo */}
              <div className="flex justify-center">
                <label className="cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    {formData.profilePhotoPreview ? (
                      <img src={formData.profilePhotoPreview} className="w-full h-full object-cover" />
                    ) : (
                      <Camera />
                    )}
                  </div>
                  <input type="file" hidden onChange={handlePhotoUpload} />
                </label>
              </div>

              <input
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input"
              />

              <input
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input"
              />

              <input
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input"
              />
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Select Categories</h2>

              <div className="grid grid-cols-2 gap-3">
                {MAIN_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.name)}
                    className={`p-3 rounded-xl border ${
                      formData.selectedCategories.includes(cat.name)
                        ? 'bg-purple-100 border-purple-500'
                        : 'border-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 (Removed multi-language UI) */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold">Language</h2>
              <p className="text-gray-600">English (default)</p>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold">Interests</h2>

              <div className="grid grid-cols-2 gap-2">
                {COMMON_INTERESTS.map((i) => (
                  <button
                    key={i}
                    onClick={() => toggleInterest(i)}
                    className={`p-2 rounded ${
                      formData.interests.includes(i)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>
            </div>
          )}

        </motion.div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {step > 1 && (
            <Button onClick={handleBack}>
              <ArrowLeft className="mr-2" /> Back
            </Button>
          )}

          <Button onClick={handleNext} disabled={!isStepValid()}>
            {step === totalSteps ? (
              <>
                <Check className="mr-2" /> Finish
              </>
            ) : (
              <>
                Next <ArrowRight className="ml-2" />
              </>
            )}
          </Button>
        </div>

      </div>
    </div>
  );
}