"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function AboutUs() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Button variant="ghost" onClick={() => router.back()} className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold mb-6">Page Not Found</h1>
          <p className="text-gray-600 text-lg">
            This page is under construction.
          </p>
        </div>
      </div>
    </div>
  );
}
