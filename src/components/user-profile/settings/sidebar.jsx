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
      <aside className="w-full md:w-60 lg:w-80 flex flex-row md:flex-col overflow-x-auto">
        {sidebarItems.map(({ href, icon: Icon, label }) => (
          <Link key={label} href={href}>
            <div
              className={cn(
                "flex flex-col sm:flex-row gap-2 sm:gap-5 items-center py-2 sm:py-5 border-b group px-2 sm:px-5 w-full transition-all hover:bg-[#F5EDFC] rounded-t-sm",
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
                  "text-xs sm:text-base md:text-lg text-center sm:text-left group-hover:text-para-3 font-medium",
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
