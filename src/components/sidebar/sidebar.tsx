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
    {
      id: 1,
      label: "All Notes",
      icon: DocumentTextIcon,
      paths: ["/", "/all-notes"],
    },
    { id: 2, label: "Search", icon: MagnifyingGlassIcon, paths: ["/search"] },
    { id: 3, label: "Reminders", icon: BellAlertIcon, paths: ["/reminders"] },
    { id: 4, label: "Favourites", icon: HeartIcon, paths: ["/favourites"] },
    { id: 5, label: "Settings", icon: Cog6ToothIcon, paths: ["/settings"] },
  ];

  const navigateToPage = (path: string[]) => {
    router.push(path[0]);
  };

  return (
    <div className="w-60 bg-neutral-100 h-screen p-8">
      <div className="text-md font-medium text-zinc-800 ml-4">Snap Notes</div>
      <div className="my-8">
        {navItems.map((item) => (
          <NavButton
            key={item.id}
            label={item.label}
            icon={item.icon}
            selected={item.paths.includes(pathname)}
            onClick={() => navigateToPage(item.paths)}
          />
        ))}
      </div>
    </div>
  );
}
