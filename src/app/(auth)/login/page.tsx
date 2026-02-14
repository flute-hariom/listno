"use client";

import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

const LoginPage = () => {
  const router = useRouter();

  const responseGoogle = async (authResult: any) => {
    try {
      console.log("authResult:", authResult);

      // Example redirect
      // router.push("/dashboard");
    } catch (error) {
      console.log("error while requesting google code:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });
  return (
    <div>
      <button
        onClick={() => googleLogin()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
