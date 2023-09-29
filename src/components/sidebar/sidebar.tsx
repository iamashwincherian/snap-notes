"use client";

import {
  BellAlertIcon,
  Cog6ToothIcon,
  DocumentTextIcon,
  HeartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import NavButton from "@/components/buttons/nav-button";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { id: 1, label: "All Notes", icon: DocumentTextIcon, path: "/all-notes" },
    { id: 2, label: "Search", icon: MagnifyingGlassIcon, path: "/search" },
    { id: 3, label: "Reminders", icon: BellAlertIcon, path: "/reminders" },
    { id: 4, label: "Favourites", icon: HeartIcon, path: "/favourites" },
    { id: 5, label: "Settings", icon: Cog6ToothIcon, path: "/settings" },
  ];

  const navigateToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-60 bg-neutral-100 h-screen p-8">
      <div className="text-xl font-semibold text-zinc-800 ml-4">Snap Notes</div>
      <div className="my-8">
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={pathname === item.path}
            onClick={() => navigateToPage(item.path)}
          />
        ))}
      </div>
    </div>
  );
}
