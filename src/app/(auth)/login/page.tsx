"use client";

import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();

  const responseGoogle = async (authResult: any) => {
    try {
      console.log("authResult:", authResult);

      // ✅ Store token (you can later send this to backend)
      localStorage.setItem("accessToken", authResult?.code || "");

      // ✅ Redirect to onboarding step-1
      router.push("/users/onBoarding/step-1");

    } catch (error) {
      console.log("error while requesting google code:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  // ✅ Auto trigger Google login when page loads
  useEffect(() => {
    const provider = localStorage.getItem("authProvider");

    if (provider === "google") {
      googleLogin();
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-600 text-lg">Redirecting to Google...</p>

      {/* Fallback button (in case auto login fails) */}
      <button
        onClick={() => googleLogin()}
        className="hidden"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;