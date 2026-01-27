"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Star,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Shield,
  Award,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";

import { motion } from "framer-motion";

export default function BecomeCoachPage() {
  const router = useRouter();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const benefits = [
    {
      icon: DollarSign,
      title: "Flexible Earnings",
      description:
        "Set your own rates and schedule. Earn while making a difference.",
    },
    {
      icon: Clock,
      title: "Work From Anywhere",
      description: "Coach from the comfort of your home. No commute needed.",
    },
    {
      icon: Users,
      title: "Help Thousands",
      description:
        "Impact lives and build meaningful connections with clients.",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Practice",
      description: "Access tools and resources to expand your coaching career.",
    },
  ];

  const requirements = [
    "Certified counselor, therapist, or life coach",
    "Minimum 2 years of professional experience",
    "Valid credentials and certifications",
    "Passion for helping others",
    "Good communication skills",
    "Commitment to confidentiality and ethics",
  ];

  const steps = [
    {
      number: 1,
      title: "Apply",
      description:
        "Fill out the application form with your details and credentials.",
    },
    {
      number: 2,
      title: "Verification",
      description: "Our team will verify your credentials and experience.",
    },
    {
      number: 3,
      title: "Onboarding",
      description: "Complete training on our platform and guidelines.",
    },
    {
      number: 4,
      title: "Start Coaching",
      description: "Begin accepting clients and making an impact!",
    },
  ];

  const stats = [
    { value: "₹50K+", label: "Avg. Monthly Earnings" },
    { value: "1000+", label: "Active Coaches" },
    { value: "4.9/5", label: "Coach Satisfaction" },
    { value: "100K+", label: "Lives Impacted" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Become a Coach on Listno
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Join our community of verified coaches and help thousands find
              emotional wellbeing
            </p>
            <Button
              size="lg"
              onClick={() => router.push("/coach/onboarding")}
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg h-14 px-8"
            >
              Apply to Become a Coach
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 ">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Coach on Listno?</h2>
          <p className="text-xl text-gray-600">
            Join a platform that values your expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((requirement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white/50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Application Process</h2>
          <p className="text-xl text-gray-600">
            4 simple steps to start coaching
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white rounded-2xl p-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-300 to-pink-300" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
          <Heart className="w-16 h-16 mx-auto mb-6 fill-white" />
          <h2 className="text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join our community of coaches and start helping people today
          </p>
          <Button
            size="lg"
            onClick={() => router.push("/coach/onboarding")}
            className="bg-white text-purple-600 hover:bg-gray-100 text-lg h-14 px-8"
          >
            Apply to Become a Coach
          </Button>
        </div>
      </section>
    </div>
  );
}
