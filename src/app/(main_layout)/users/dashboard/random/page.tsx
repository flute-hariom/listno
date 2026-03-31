"use client";

import { useEffect, useState } from "react";
import { Phone, PhoneOff } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Screen = "searching" | "connected" | "ended";

type Coach = {
  name: string;
  role: string;
  image: string;
};

export default function ConnectCoach() {
  const router = useRouter();

  const [screen, setScreen] = useState<Screen>("searching");
  const [seconds, setSeconds] = useState(0);

  // Later this will come from API
  const [coaches] = useState<Coach[]>([
    {
      name: "Sarah",
      role: "Mental Wellness Coach",
      image: "/coaches/coach1.jpg",
    },
    {
      name: "Emma",
      role: "Mindfulness Coach",
      image: "/coaches/coach2.jpg",
    },
    {
      name: "Olivia",
      role: "Life Coach",
      image: "/coaches/coach3.jpg",
    },
  ]);

  const [coach, setCoach] = useState<Coach | null>(null);

  // Simulate finding a coach
  useEffect(() => {
    if (screen === "searching") {
      const timer = setTimeout(() => {
        const randomCoach =
          coaches[Math.floor(Math.random() * coaches.length)];

        setCoach(randomCoach);
        setScreen("connected");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [screen, coaches]);

  // Call duration timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (screen === "connected") {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [screen]);

  // Redirect to dashboard after session ends
  useEffect(() => {
    if (screen === "ended") {
      const timer = setTimeout(() => {
        router.push("/users/dashboard");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [screen, router]);

  const format = () => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <div
      className="h-screen w-full pt-20 flex items-center justify-center text-white
      bg-gradient-to-br from-[#7B2FF7] via-[#5C4DFF] to-[#2C6BFF]"
    >
      {/* SEARCHING */}
      {screen === "searching" && (
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Loader */}
          <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center">
            <svg className="w-20 h-20 animate-spin" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeDasharray="180"
                strokeDashoffset="70"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-semibold">Finding a coach...</h2>

          <p className="text-white/80">This may take a few moments</p>

          {/* Dots */}
          <div className="flex gap-2 mt-2">
            <span className="w-3 h-3 bg-white/70 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-white/70 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-3 h-3 bg-white/70 rounded-full animate-bounce [animation-delay:0.4s]"></span>
          </div>

          <button className="mt-6 px-8 py-3 rounded-xl bg-white/20 backdrop-blur hover:bg-white/30 transition">
            Cancel
          </button>
        </div>
      )}

      {/* CONNECTED */}
      {screen === "connected" && coach && (
        <div className="flex flex-col items-center text-center space-y-6">

          {/* Coach Image */}
          <div className="p-2 rounded-full bg-white/10 backdrop-blur-lg">
            <Image
              src={coach.image}
              alt="coach"
              width={140}
              height={140}
              className="rounded-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-semibold">
            Connected with {coach.name}
          </h2>

          <p className="text-white/80 text-lg">{coach.role}</p>

          <p className="text-2xl font-medium">{format()}</p>

          {/* Call Buttons */}
          <div className="flex gap-8 mt-4">

            <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition">
              <Phone size={24} />
            </button>

            <button
              onClick={() => setScreen("ended")}
              className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600 transition"
            >
              <PhoneOff size={26} />
            </button>

          </div>
        </div>
      )}

      {/* SESSION ENDED */}
      {screen === "ended" && (
        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-10 w-[450px] text-center">

          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <Phone size={28} className="text-purple-600" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-2">Session Ended</h2>

          <p className="text-gray-500 mb-4">
            Thank you for connecting. Take care of yourself! 💜
          </p>

          <p className="text-gray-400 text-sm">
            Duration: {format()}
          </p>

        </div>
      )}
    </div>
  );
}