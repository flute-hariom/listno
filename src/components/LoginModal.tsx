"use client";

import { useRouter } from "next/navigation";
import { Chrome, Facebook } from "lucide-react";
import { Button } from "./ui/Button";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/Dialog";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  loginContext?: "user" | "coach";
}

export default function LoginModal({
  open,
  onClose,
  loginContext = "user",
}: LoginModalProps) {
  const router = useRouter();

  const handleLogin = (provider: "google" | "facebook") => {
    localStorage.setItem("loginContext", loginContext);
    localStorage.setItem("authProvider", provider);
    router.push("/auth/login");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to LISTENO
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Log in to your account or create a new one
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Google */}
          <button
            //   onClick={() => handleLogin("google")}
            onClick={() => { onClose(); router.push("/users/onBoarding/step-1"); }}
            
            className="w-full h-[48px] relative flex items-center justify-center rounded-xl border border-gray-300 bg-[#F5F5F5] shadow-sm hover:shadow-md transition"
          >
            {/* Left Icon */}
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5 absolute left-5"
            />

            {/* Center Text */}
            <span className="text-[16px] font-medium text-gray-700">
              Continue with Google
            </span>
          </button>

          {/* Facebook */}
          <button
            // onClick={() => handleLogin("facebook")}
            onClick={() => router.push("/users/onBoarding/step-1")}
            className="w-full h-[48px] relative flex items-center justify-center rounded-xl bg-[#5B7DBE] shadow-md hover:shadow-lg transition"
          >
            {/* Left Icon */}
            <div className="absolute left-5 w-6 h-6 flex items-center justify-center bg-white rounded-full overflow-hidden">
              <svg
                viewBox="0 0 21 21"
                className="w-[120%] h-[120%] translate-y-[1px]"
                fill="#5B7DBE"
              >
                <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v6h4v-6h3.2l.8-4H11V8a1 1 0 0 1 1-1h3V3z" />
              </svg>
            </div>
            {/* Center Text */}
            <span className="text-[16px] font-semibold text-white">
              Continue with Facebook
            </span>
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
