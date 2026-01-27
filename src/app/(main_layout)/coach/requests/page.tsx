"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  Clock,
  Video,
  Phone,
  MessageCircle,
  User,
  Calendar,
  DollarSign,
} from "lucide-react";
import BackButton from "@/src/components/shared/BackButton";

interface Request {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  requestType: "video" | "audio" | "chat";
  category: string;
  subcategory: string;
  message: string;
  preferredTime: string;
  urgency: "low" | "medium" | "high";
  amount: number;
  timestamp: string;
  status: "pending" | "accepted" | "declined";
}

export default function IncomingRequests() {
  const router = useRouter();
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [activeTab, setActiveTab] = useState<
    "pending" | "accepted" | "declined"
  >("pending");

  const [requests, setRequests] = useState<Request[]>([
    {
      id: "req-1",
      userId: "user-001",
      userName: "Priya Sharma",
      userAvatar: "PS",
      requestType: "video",
      category: "Relationships",
      subcategory: "Marriage Issues",
      message:
        "Hi, I need help with some relationship challenges I'm facing with my partner. Looking for guidance on communication.",
      preferredTime: "Today, 3:00 PM - 4:00 PM",
      urgency: "high",
      amount: 800,
      timestamp: "5 min ago",
      status: "pending",
    },
    {
      id: "req-2",
      userId: "user-002",
      userName: "Rahul Verma",
      userAvatar: "RV",
      requestType: "audio",
      category: "Career",
      subcategory: "Job Change",
      message:
        "Looking for career counseling regarding a job change opportunity. Need advice on making the right decision.",
      preferredTime: "Tomorrow, 10:00 AM - 11:00 AM",
      urgency: "medium",
      amount: 600,
      timestamp: "15 min ago",
      status: "pending",
    },
    {
      id: "req-3",
      userId: "user-003",
      userName: "Ananya Patel",
      userAvatar: "AP",
      requestType: "chat",
      category: "Mind & Emotions",
      subcategory: "Anxiety",
      message:
        "Experiencing anxiety lately and would appreciate some guidance on coping mechanisms.",
      preferredTime: "Flexible - This Week",
      urgency: "medium",
      amount: 400,
      timestamp: "1 hour ago",
      status: "pending",
    },
    {
      id: "req-4",
      userId: "user-004",
      userName: "Vikram Singh",
      userAvatar: "VS",
      requestType: "video",
      category: "Wellness",
      subcategory: "Work-Life Balance",
      message:
        "Struggling to maintain work-life balance. Need strategies to manage stress better.",
      preferredTime: "This Weekend",
      urgency: "low",
      amount: 800,
      timestamp: "2 hours ago",
      status: "pending",
    },
    {
      id: "req-5",
      userId: "user-005",
      userName: "Meera Iyer",
      userAvatar: "MI",
      requestType: "video",
      category: "Relationships",
      subcategory: "Family Conflicts",
      message: "Dealing with family conflicts and need professional guidance.",
      preferredTime: "Today, 6:00 PM - 7:00 PM",
      urgency: "high",
      amount: 800,
      timestamp: "10 min ago",
      status: "accepted",
    },
    {
      id: "req-6",
      userId: "user-006",
      userName: "Arjun Nair",
      userAvatar: "AN",
      requestType: "audio",
      category: "Career",
      subcategory: "Career Growth",
      message:
        "Want to discuss career growth opportunities and skill development.",
      preferredTime: "Next Week",
      urgency: "low",
      amount: 600,
      timestamp: "3 hours ago",
      status: "declined",
    },
  ]);

  const handleAccept = (requestId: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "accepted" as const } : req,
      ),
    );
    setSelectedRequest(null);
  };

  const handleDecline = (requestId: string) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "declined" as const } : req,
      ),
    );
    setSelectedRequest(null);
  };

  const handleStartSession = (requestId: string) => {
    router.push(`/coach/session/${requestId}`);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-600";
      case "medium":
        return "bg-yellow-100 text-yellow-600";
      case "low":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getRequestTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="w-5 h-5" />;
      case "audio":
        return <Phone className="w-5 h-5" />;
      case "chat":
        return <MessageCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const filteredRequests = requests.filter((req) => req.status === activeTab);

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <BackButton />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Incoming Requests
            </h1>
            <p className="text-gray-600">Manage your client requests</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-md mb-6 flex gap-2">
          {[
            {
              key: "pending",
              label: "Pending",
              count: requests.filter((r) => r.status === "pending").length,
            },
            {
              key: "accepted",
              label: "Accepted",
              count: requests.filter((r) => r.status === "accepted").length,
            },
            {
              key: "declined",
              label: "Declined",
              count: requests.filter((r) => r.status === "declined").length,
            },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 shadow-md text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No {activeTab} requests
              </h3>
              <p className="text-gray-600">
                {activeTab === "pending" && "New requests will appear here"}
                {activeTab === "accepted" &&
                  "Accepted requests will appear here"}
                {activeTab === "declined" &&
                  "Declined requests will appear here"}
              </p>
            </div>
          ) : (
            filteredRequests.map((request) => (
              <div
                key={request.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* User Avatar */}
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {request.userAvatar}
                  </div>

                  {/* Request Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">
                          {request.userName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {request.timestamp}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${getUrgencyColor(request.urgency)}`}
                        >
                          {request.urgency.toUpperCase()}
                        </span>
                        {activeTab === "pending" && (
                          <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-semibold">
                            NEW
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Request Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        {getRequestTypeIcon(request.requestType)}
                        <span className="font-medium capitalize">
                          {request.requestType} Session
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <DollarSign className="w-5 h-5" />
                        <span className="font-semibold text-green-600">
                          ₹{request.amount}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-5 h-5" />
                        <span className="text-sm">{request.preferredTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <span className="text-sm">
                          <span className="font-medium">
                            {request.category}
                          </span>
                          {" • "}
                          <span className="text-gray-600">
                            {request.subcategory}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Message Preview */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {request.message}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {activeTab === "pending" && (
                        <>
                          <button
                            onClick={() => setSelectedRequest(request)}
                            className="flex-1 sm:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleAccept(request.id)}
                            className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                          >
                            Accept Request
                          </button>
                          <button
                            onClick={() => handleDecline(request.id)}
                            className="flex-1 sm:flex-none px-6 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all"
                          >
                            Decline
                          </button>
                        </>
                      )}
                      {activeTab === "accepted" && (
                        <>
                          <button
                            onClick={() => setSelectedRequest(request)}
                            className="flex-1 sm:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => handleStartSession(request.id)}
                            className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                          >
                            Start Session
                          </button>
                        </>
                      )}
                      {activeTab === "declined" && (
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="flex-1 sm:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                        >
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Request Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-800">
                Request Details
              </h2>
              <button
                onClick={() => setSelectedRequest(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {selectedRequest.userAvatar}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">
                    {selectedRequest.userName}
                  </h3>
                  <p className="text-gray-600">
                    User ID: {selectedRequest.userId}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedRequest.timestamp}
                  </p>
                </div>
              </div>

              {/* Request Details */}
              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-sm text-purple-600 font-semibold mb-1">
                    Session Type
                  </p>
                  <div className="flex items-center gap-2">
                    {getRequestTypeIcon(selectedRequest.requestType)}
                    <p className="text-gray-800 font-medium capitalize">
                      {selectedRequest.requestType} Call
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    Category & Subcategory
                  </p>
                  <p className="text-gray-800 font-medium">
                    {selectedRequest.category} • {selectedRequest.subcategory}
                  </p>
                </div>

                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-green-600 font-semibold mb-1">
                    Session Fee
                  </p>
                  <p className="text-gray-800 font-bold text-xl">
                    ₹{selectedRequest.amount}
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm text-orange-600 font-semibold mb-1">
                    Preferred Time
                  </p>
                  <p className="text-gray-800 font-medium">
                    {selectedRequest.preferredTime}
                  </p>
                </div>

                <div
                  className={`rounded-xl p-4 ${
                    selectedRequest.urgency === "high"
                      ? "bg-red-50"
                      : selectedRequest.urgency === "medium"
                        ? "bg-yellow-50"
                        : "bg-green-50"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      selectedRequest.urgency === "high"
                        ? "text-red-600"
                        : selectedRequest.urgency === "medium"
                          ? "text-yellow-600"
                          : "text-green-600"
                    }`}
                  >
                    Urgency Level
                  </p>
                  <p className="text-gray-800 font-medium capitalize">
                    {selectedRequest.urgency}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    User&apos;s Message
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    {selectedRequest.message}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {selectedRequest.status === "pending" && (
                  <>
                    <button
                      onClick={() => handleAccept(selectedRequest.id)}
                      className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                    >
                      Accept Request
                    </button>
                    <button
                      onClick={() => handleDecline(selectedRequest.id)}
                      className="w-full py-4 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all"
                    >
                      Decline Request
                    </button>
                  </>
                )}
                {selectedRequest.status === "accepted" && (
                  <button
                    onClick={() => handleStartSession(selectedRequest.id)}
                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    Start Session Now
                  </button>
                )}
                <button
                  onClick={() => setSelectedRequest(null)}
                  className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg z-40">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/coach/dashboard" },
            {
              icon: "📥",
              label: "Requests",
              path: "/coach/requests",
              active: true,
            },
            { icon: "📅", label: "Schedule", path: "/coach/schedule" },
            { icon: "💰", label: "Earnings", path: "/coach/earnings" },
            { icon: "👤", label: "Profile", path: "/coach/setup" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className={`flex flex-col items-center gap-1 ${item.active ? "text-purple-600" : "text-gray-600"}`}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
