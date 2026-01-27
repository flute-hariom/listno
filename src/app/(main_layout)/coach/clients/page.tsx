"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Search,
  Filter,
  Star,
  Calendar,
  MessageCircle,
  Phone,
  Video,
  ArrowLeft,
  FileText,
} from "lucide-react";

interface Client {
  id: string;
  name: string;
  avatar: string;
  category: string;
  totalSessions: number;
  lastSession: string;
  rating: number;
  status: "active" | "inactive";
  joinedDate: string;
  notes: string;
}

const Clients = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "active" | "inactive"
  >("all");

  const [clients] = useState<Client[]>([
    {
      id: "1",
      name: "Priya Sharma",
      avatar: "PS",
      category: "Relationships",
      totalSessions: 12,
      lastSession: "2 days ago",
      rating: 5,
      status: "active",
      joinedDate: "Sep 2024",
      notes:
        "Making good progress with communication skills. Recommend continuing weekly sessions.",
    },
    {
      id: "2",
      name: "Rahul Verma",
      avatar: "RV",
      category: "Career",
      totalSessions: 8,
      lastSession: "1 week ago",
      rating: 5,
      status: "active",
      joinedDate: "Oct 2024",
      notes:
        "Focused on career transition. Completed action plan for job change.",
    },
    {
      id: "3",
      name: "Ananya Patel",
      avatar: "AP",
      category: "Mind & Emotions",
      totalSessions: 15,
      lastSession: "3 days ago",
      rating: 5,
      status: "active",
      joinedDate: "Aug 2024",
      notes:
        "Anxiety management techniques showing positive results. Continue mindfulness practices.",
    },
    {
      id: "4",
      name: "Vikram Singh",
      avatar: "VS",
      category: "Wellness",
      totalSessions: 6,
      lastSession: "2 weeks ago",
      rating: 4,
      status: "active",
      joinedDate: "Nov 2024",
      notes: "Working on work-life balance. Set up weekly check-ins.",
    },
    {
      id: "5",
      name: "Meera Iyer",
      avatar: "MI",
      category: "Relationships",
      totalSessions: 10,
      lastSession: "1 month ago",
      rating: 5,
      status: "inactive",
      joinedDate: "Jul 2024",
      notes:
        "Completed family conflict resolution program. Follow-up in 3 months.",
    },
    {
      id: "6",
      name: "Arjun Nair",
      avatar: "AN",
      category: "Career",
      totalSessions: 5,
      lastSession: "5 days ago",
      rating: 5,
      status: "active",
      joinedDate: "Nov 2024",
      notes: "New client. Focusing on career growth strategies.",
    },
    {
      id: "7",
      name: "Sneha Reddy",
      avatar: "SR",
      category: "Education",
      totalSessions: 9,
      lastSession: "1 week ago",
      rating: 4,
      status: "active",
      joinedDate: "Sep 2024",
      notes: "Exam preparation and stress management. Good progress.",
    },
    {
      id: "8",
      name: "Karthik Kumar",
      avatar: "KK",
      category: "Mind & Emotions",
      totalSessions: 3,
      lastSession: "2 months ago",
      rating: 3,
      status: "inactive",
      joinedDate: "Aug 2024",
      notes: "Inactive client. Last session focused on stress management.",
    },
  ]);

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || client.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto mb-20">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <button
            onClick={() => router.push("/coach/dashboard")}
            className="p-2 hover:bg-white/50 rounded-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Client Management
            </h1>
            <p className="text-gray-600">View and manage your clients</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <p className="text-gray-600 text-sm mb-1">Total Clients</p>
            <p className="text-2xl font-bold text-gray-800">{clients.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <p className="text-gray-600 text-sm mb-1">Active Clients</p>
            <p className="text-2xl font-bold text-green-600">
              {clients.filter((c) => c.status === "active").length}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <p className="text-gray-600 text-sm mb-1">Total Sessions</p>
            <p className="text-2xl font-bold text-purple-600">
              {clients.reduce((sum, c) => sum + c.totalSessions, 0)}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <p className="text-gray-600 text-sm mb-1">Avg Rating</p>
            <p className="text-2xl font-bold text-yellow-600">
              {(
                clients.reduce((sum, c) => sum + c.rating, 0) / clients.length
              ).toFixed(1)}
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search clients by name or category..."
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div className="flex gap-2">
              {(["all", "active", "inactive"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all capitalize ${
                    filterStatus === status
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.id}
              onClick={() => setSelectedClient(client)}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {client.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-600">{client.category}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    client.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {client.status}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Total Sessions</span>
                  <span className="font-semibold text-gray-800">
                    {client.totalSessions}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Session</span>
                  <span className="font-semibold text-gray-800">
                    {client.lastSession}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Member Since</span>
                  <span className="font-semibold text-gray-800">
                    {client.joinedDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < client.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm font-semibold text-gray-700">
                  {client.rating}.0
                </span>
              </div>

              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <div className="bg-white rounded-2xl p-12 shadow-md text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No clients found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-3xl">
              <h2 className="text-2xl font-bold text-gray-800">
                Client Details
              </h2>
              <button
                onClick={() => setSelectedClient(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              {/* Client Info */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl">
                  {selectedClient.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-gray-800">
                    {selectedClient.name}
                  </h3>
                  <p className="text-gray-600">{selectedClient.category}</p>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < selectedClient.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-semibold text-gray-700">
                      {selectedClient.rating}.0
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-50 rounded-xl p-4">
                  <p className="text-sm text-purple-600 font-semibold mb-1">
                    Total Sessions
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {selectedClient.totalSessions}
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    Member Since
                  </p>
                  <p className="text-2xl font-bold text-gray-800">
                    {selectedClient.joinedDate}
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="text-sm text-green-600 font-semibold mb-1">
                    Last Session
                  </p>
                  <p className="text-lg font-bold text-gray-800">
                    {selectedClient.lastSession}
                  </p>
                </div>
                <div
                  className={`rounded-xl p-4 ${
                    selectedClient.status === "active"
                      ? "bg-green-50"
                      : "bg-gray-50"
                  }`}
                >
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      selectedClient.status === "active"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    Status
                  </p>
                  <p className="text-lg font-bold text-gray-800 capitalize">
                    {selectedClient.status}
                  </p>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <p className="text-sm text-gray-600 font-semibold">
                    Session Notes
                  </p>
                </div>
                <p className="text-gray-800 leading-relaxed">
                  {selectedClient.notes}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all">
                  <Video className="w-6 h-6 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-600">
                    Video Call
                  </span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-all">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600">
                    Audio Call
                  </span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-all">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <span className="text-xs font-semibold text-green-600">
                    Message
                  </span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Schedule New Session
                </button>
                <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all">
                  View Session History
                </button>
                <button
                  onClick={() => setSelectedClient(null)}
                  className="w-full py-4 bg-gray-50 text-gray-600 rounded-xl font-semibold hover:bg-gray-100 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-around">
          {[
            { icon: "🏠", label: "Home", path: "/coach/dashboard" },
            { icon: "📥", label: "Requests", path: "/coach/requests" },
            { icon: "📅", label: "Schedule", path: "/coach/schedule" },
            { icon: "💰", label: "Earnings", path: "/coach/earnings" },
            { icon: "👤", label: "Profile", path: "/coach/setup" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => router.push(item.path)}
              className="flex flex-col items-center gap-1 text-gray-600"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
