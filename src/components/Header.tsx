"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function onNavigate(path: string) {
  const router = useRouter();
  router.push(`/${path}`);
}

export default function Header() {
  const [currentScreen, setCurrentScreen] = useState("");
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => onNavigate("public-dashboard")}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 bg-gradient-theme rounded-lg flex items-center justify-center">
              <span className="text-sm text-white font-bold">J</span>
            </div>
            <span className="text-base font-bold text-gray-900">JOBTANTRA</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => onNavigate("how-it-works")}
              className={`text-sm transition-colors ${
                currentScreen === "how-it-works"
                  ? "text-theme-primary font-medium"
                  : "text-slate-600 hover:text-theme-primary"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => onNavigate("explore-jobs")}
              className={`text-sm transition-colors ${
                currentScreen === "explore-jobs"
                  ? "text-theme-primary font-medium"
                  : "text-slate-600 hover:text-theme-primary"
              }`}
            >
              Explore Jobs
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate("employer-landing")}
              className="px-3 py-1.5 text-xs text-purple-700 hover:text-purple-900 transition-colors font-medium"
            >
              For Employers
            </button>
            <button
              onClick={() => onNavigate("auth")}
              className="px-3 py-1.5 text-xs text-slate-700 hover:text-theme-primary transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => onNavigate("onboarding")}
              className="px-4 py-1.5 text-xs bg-theme-primary text-white rounded-lg hover:bg-theme-primary-dark transition-all shadow-sm"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
