'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Users, Briefcase, X, Check, UserCircle, LogOut } from 'lucide-react';

interface RoleSwitcherProps {
  currentRole: 'user' | 'coach';
  onRoleChange?: (role: 'user' | 'coach') => void;
}

export default function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleRoleSwitch = (newRole: 'user' | 'coach') => {
    if (newRole === currentRole) {
      setShowModal(false);
      return;
    }

    if (onRoleChange) {
      onRoleChange(newRole);
    }

    // Navigate to the appropriate dashboard
    if (newRole === 'user') {
      router.push('/user/home');
    } else {
      router.push('/coach/dashboard');
    }

    setShowModal(false);
  };

  const handleViewProfile = () => {
    if (currentRole === 'user') {
      router.push('/user/profile');
    } else {
      router.push('/coach/profile');
    }
  };

  const handleLogout = () => {
    // Clear any auth tokens/state here
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userToken');
      localStorage.removeItem('userRole');
      localStorage.removeItem('isAuthenticated');
    }
    
    // Redirect to website home
    router.push('/website');
  };

  return (
    <>
      {/* Role Switcher & Profile Buttons */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={handleViewProfile}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-purple-300"
          title="View Profile"
        >
          <UserCircle className="w-5 h-5 text-purple-600" />
          <span className="hidden md:inline font-semibold text-gray-800 text-sm">Profile</span>
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border-2 border-purple-200 hover:border-purple-400"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            {currentRole === 'user' ? (
              <>
                <Users className="w-5 h-5 text-purple-600" />
                <span className="hidden md:inline font-semibold text-gray-800">User</span>
              </>
            ) : (
              <>
                <Briefcase className="w-5 h-5 text-purple-600" />
                <span className="hidden md:inline font-semibold text-gray-800">Coach</span>
              </>
            )}
          </div>
          <div className="hidden lg:block text-xs text-gray-500">Switch</div>
        </button>

        <button
          onClick={handleLogout}
          className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-red-200 hover:border-red-400"
          title="Logout"
        >
          <LogOut className="w-5 h-5 text-red-600" />
          <span className="hidden md:inline font-semibold text-red-600 text-sm">Logout</span>
        </button>
      </div>

      {/* Role Switch Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">Switch Role</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Choose which mode you want to use. You can switch between roles anytime.
              </p>

              <div className="space-y-3">
                {/* User Mode Option */}
                <button
                  onClick={() => handleRoleSwitch('user')}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                    currentRole === 'user'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        currentRole === 'user'
                          ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                          : 'bg-gray-100'
                      }`}>
                        <Users className={`w-7 h-7 ${
                          currentRole === 'user' ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">User Mode</h3>
                        <p className="text-sm text-gray-600">Find coaches and get support</p>
                      </div>
                    </div>
                    {currentRole === 'user' && (
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      Browse Coaches
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Book Sessions
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      Community Access
                    </span>
                  </div>
                </button>

                {/* Coach Mode Option */}
                <button
                  onClick={() => handleRoleSwitch('coach')}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                    currentRole === 'coach'
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                        currentRole === 'coach'
                          ? 'bg-gradient-to-br from-purple-600 to-blue-600'
                          : 'bg-gray-100'
                      }`}>
                        <Briefcase className={`w-7 h-7 ${
                          currentRole === 'coach' ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Coach Mode</h3>
                        <p className="text-sm text-gray-600">Help others and earn income</p>
                      </div>
                    </div>
                    {currentRole === 'coach' && (
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                      Manage Clients
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      Earn Money
                    </span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                      Set Schedule
                    </span>
                  </div>
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> You can switch between modes anytime from the top of your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}