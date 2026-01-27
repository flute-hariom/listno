"use client";

import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function UnauthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const shouldHideHeaderFooter =
    pathname?.includes("/coach") || pathname?.includes("/user");
  return (
    <div className="flex flex-col justify-between w-full min-h-screen mx-auto">
      {!shouldHideHeaderFooter && <Header />}
      {children}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}
