"use client";

import { X, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/redux/store";
import { closeAuthModal } from "@/src/redux/slices/authSlice";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";

export default function AuthModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.auth.isAuthModalOpen);
  const responseGoogle = async (authResult: any) => {
    try {
      console.log("authResult:", authResult);

    } catch (error) {
      console.log("error while requesting google code:", error);
    }
  };

 const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-6">
        
        {/* Close Button */}
        <button
          onClick={() => dispatch(closeAuthModal())}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-purple-600">
          Welcome to LISTENO
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-500 text-sm mt-1 mb-6">
          Log in to your account or create a new one
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          
          {/* Google */}
          <button 
          onClick={() => googleLogin()}
          className="flex items-center justify-center gap-3 border rounded-lg py-3 text-sm font-medium hover:bg-gray-50 transition">
      
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              width={18}
              height={18}
            />
            Continue with Google
          </button>

          {/* Phone */}
          <button className="flex items-center justify-center gap-3 border rounded-lg py-3 text-sm font-medium hover:bg-gray-50 transition">
            <Phone size={18} />
            Continue with Phone
          </button>

          {/* Email */}
          <button className="flex items-center justify-center gap-3 border rounded-lg py-3 text-sm font-medium hover:bg-gray-50 transition">
            <Mail size={18} />
            Continue with Email
          </button>
        </div>

        {/* Terms */}
        <p className="text-[11px] text-gray-400 text-center mt-6 leading-relaxed">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer">Terms of Service</span>{" "}
          and{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}