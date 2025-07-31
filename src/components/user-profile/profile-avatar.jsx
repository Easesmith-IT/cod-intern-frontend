"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { POST } from "@/constants/apiMethods";
import { useApiMutation } from "@/hooks/useApiMutation";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AlertModal from "../modals/AlertModal";
import { readCookie } from "@/lib/readCookie";
import { previewImage } from "@/lib/utils";
import { useSetLogin } from "@/hooks/useAuth";

export const ProfileAvatar = () => {
  const router = useRouter();
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const userInfo = readCookie("userInfo");
  const { logout: localLogout } = useSetLogin();

  const {
    mutateAsync: logout,
    isPending: isLogoutLoading,
    data: result,
  } = useApiMutation({
    url: "/student/auth/logout",
    method: POST,
    invalidateKey: ["logout"],
    // isToast: false,
  });

  const handleLogout = async () => {
    await logout({ email: userInfo.email });
    localLogout();
    router.push("/");
  };

  // useEffect(() => {
  //   if (result) {
  //   }
  // }, [result]);

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center cursor-pointer">
            <Avatar className="size-10">
              <AvatarImage
                src={
                  userInfo
                    ? previewImage(userInfo?.image)
                    : "/profile/user-profile.jpg"
                }
              />
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
          <DropdownMenuItem
            onSelect={() => setIsAlertModalOpen(true)}
            className="font-medium hover:underline px-2"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isAlertModalOpen && (
        <AlertModal
          isAlertModalOpen={isAlertModalOpen}
          setIsAlertModalOpen={setIsAlertModalOpen}
          header="Logout"
          description="Are you sure you want to logout?"
          disabled={isLogoutLoading}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
};
