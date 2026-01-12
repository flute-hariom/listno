"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

function onNavigate(path: string) {
  const router = useRouter();
  router.push(`/${path}`);
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-gradient-theme rounded-lg flex items-center justify-center">
                <span className="text-sm text-white font-bold">J</span>
              </div>
              <span className="text-lg font-bold text-white">JOBTANTRA</span>
            </div>
            <p className="text-xs text-gray-500">
              Fair, transparent, and inclusive job discovery for everyone.
            </p>
          </div>
          <div>
            <h4 className="text-sm text-white mb-3 font-semibold">
              For Job Seekers
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("how-it-works")}
                  className="hover:text-theme-primary transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("explore-jobs")}
                  className="hover:text-theme-primary transition-colors"
                >
                  Browse Jobs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("auth")}
                  className="hover:text-theme-primary transition-colors"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-white mb-3 font-semibold">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  className="hover:text-theme-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme-primary transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm text-white mb-3 font-semibold">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#"
                  className="hover:text-theme-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs">
          <p className="text-gray-500">
            &copy; 2026 JOBTANTRA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
