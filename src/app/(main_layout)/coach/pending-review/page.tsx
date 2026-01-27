"use client";

import { useRouter } from "next/navigation";
import {
  Clock,
  CheckCircle,
  Mail,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/src/components/ui/Button";

export default function CoachPendingReview() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with Animation */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-center">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Clock className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Application Submitted Successfully! 🎉
            </h1>
            <p className="text-purple-100">
              Your coach profile is now under review
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="mb-8">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Review In Process
                  </h3>
                  <p className="text-sm text-gray-700">
                    Our team is carefully reviewing your application to ensure
                    you meet our quality standards. This typically takes 24-48
                    hours.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-800 mb-3">
                  What happens next?
                </h3>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Verification</p>
                    <p className="text-sm text-gray-600">
                      We verify your credentials, qualifications, and
                      professional background
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Quality Check</p>
                    <p className="text-sm text-gray-600">
                      Our team reviews your profile completeness and
                      presentation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Approval Notification
                    </p>
                    <p className="text-sm text-gray-600">
                      You&apos;ll receive an email confirmation once approved
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Notification */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-green-900">
                    <strong>Email Sent!</strong> We&apos;ve sent a confirmation
                    email with your application details. Check your inbox for
                    updates.
                  </p>
                </div>
              </div>
            </div>

            {/* What You Can Do */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                While You Wait
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                  Explore the coach dashboard features (preview mode)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                  Familiarize yourself with the platform interface
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                  Prepare your coaching materials and approach
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                  Review our coaching guidelines and best practices
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={() => router.push("/coach/dashboard")}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg rounded-xl"
              >
                Explore Dashboard (Preview Mode)
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <button
                onClick={() => router.push("/")}
                className="w-full px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-400 hover:text-purple-600 transition-all"
              >
                Return to Website
              </button>
            </div>

            {/* Contact Support */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Questions about your application?{" "}
                <a
                  href="mailto:support@listeno.com"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            💡 <strong>Pro Tip:</strong> Most applications are reviewed within
            24 hours during business days
          </p>
        </div>
      </div>
    </div>
  );
}
