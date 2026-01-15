"use client";

import Link from "next/link";
import {
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-2xl font-bold">LISTENO</span>
            </div>
            <p className="text-purple-200 text-sm mb-4">
              Someone to talk. Anytime. About anything.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About LISTENO</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/website/about"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/website/how-it-works"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/website/become-coach"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Become a Coach
                </Link>
              </li>
              <li>
                <Link
                  href="/website/safety"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Safety & Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/website/privacy"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/website/terms"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/website/safety-guidelines"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/website/community-guidelines"
                  className="text-purple-200 hover:text-white text-sm transition-colors"
                >
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-purple-200 text-sm">
                <Mail className="w-4 h-4" />
                support@listno.com
              </li>
              <li className="flex items-center gap-2 text-purple-200 text-sm">
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-purple-200 mb-3">Get the App</p>
              <div className="space-y-2">
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm transition-colors">
                  App Store (Coming Soon)
                </button>
                <button className="w-full bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 text-sm transition-colors">
                  Play Store (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-purple-200 text-sm">
            © 2026 LISTENO. All rights reserved. Made with{" "}
            <Heart className="w-4 h-4 inline text-red-400 fill-red-400" /> for
            your emotional wellbeing.
          </p>
        </div>
      </div>
    </footer>
  );
}
