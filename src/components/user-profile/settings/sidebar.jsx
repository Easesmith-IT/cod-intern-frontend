"use client";

import { sidebarItems } from "@/data/sidebarItems";
import { cn } from "@/lib/utils";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const SideBar = () => {
  const pathname = usePathname();

  return (
      <aside className="w-60 lg:w-80 hidden md:block">
        {sidebarItems.map(({ href, icon: Icon, label }) => (
          <Link key={label} href={href}>
            <div
              className={cn(
                "flex gap-5 items-center py-5 border-b group px-5 w-full transition-all hover:bg-[#F5EDFC] rounded-t-sm",
                pathname === href && "bg-[#F5EDFC]"
              )}
            >
              <Icon
                className={cn(
                  "group-hover:text-main",
                  pathname === href && "text-main"
                )}
              />
              <span
                className={cn(
                  "text-base sm:text-lg group-hover:text-para-3 font-medium",
                  pathname === href && "text-para-3"
                )}
              >
                {label}
              </span>
            </div>
          </Link>
        ))}
      </aside>
  );
};
