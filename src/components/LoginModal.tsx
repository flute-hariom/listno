"use client";

import { useRouter } from "next/navigation";
import { Chrome, Facebook } from "lucide-react";
import { Button } from "./ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/Dialog";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  loginContext?: "user" | "coach";
}

export default function LoginModal({
  open,
  onClose,
  loginContext = "user",
}: LoginModalProps) {
  const router = useRouter();

  const handleLogin = (provider: "google" | "facebook") => {
    localStorage.setItem("loginContext", loginContext);
    localStorage.setItem("authProvider", provider);
    router.push("/auth");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Welcome to LISTENO
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Log in to your account or create a new one
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Google */}
          <Button
            onClick={() => handleLogin("google")}
            variant="outline"
            className="w-full h-12 border-2 hover:border-purple-600 hover:bg-purple-50"
          >
            <Chrome className="w-5 h-5 mr-2" />
            Continue with Google
          </Button>

          {/* Facebook */}
          <Button
            onClick={() => handleLogin("facebook")}
            variant="outline"
            className="w-full h-12 border-2 hover:border-purple-600 hover:bg-purple-50"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Continue with Facebook
          </Button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
