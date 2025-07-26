import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

export const ProfileAvatar = () => {
  const router = useRouter();

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center cursor-pointer">
            <Avatar className="size-10">
              <AvatarImage src="/profile/user-profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          align="start"
          className="space-y-2 px-2 w-40"
        >
          <DropdownMenuItem
            onSelect={() => router.push("/user/profile")}
            className="font-medium hover:underline px-2"
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => router.push("/user/settings/account-settings")}
            className="font-medium hover:underline px-2"
          >
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className="font-medium hover:underline px-2">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
