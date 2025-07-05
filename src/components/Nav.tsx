import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDoc";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { DumbbellIcon, UserIcon } from "lucide-react";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
        >
          <HomeIcon size={16} />
        </Link>
      ),
      href: "/",
    },

    {
      title: "Generate Program",
      icon: (
        <Link
          href="/generate-program"
          className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
        >
          <DumbbellIcon size={16} />
        </Link>
      ),
      href: "/generate-program",
    },
    {
      title: "UserProfile",
      icon: (
        <Link
          href="/profile"
          className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
        >
          <UserIcon size={16} />
        </Link>
      ),
      href: "/profile",
    },
  ];
  return (
    <div className="flex inset-0 items-center justify-center w-full bg-black text-black">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
