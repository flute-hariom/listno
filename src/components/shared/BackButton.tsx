"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  label?: string;
  onClick?: () => void;
}

export default function BackButton({
  label = "Back",
  onClick,
}: BackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-purple-300 group"
    >
      <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
      <span className="hidden sm:inline font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">
        {label}
      </span>
    </button>
  );
}
