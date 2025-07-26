import { BellIcon, LockKeyholeIcon, SlidersVerticalIcon, UserIcon } from "lucide-react";
export const sidebarItems = [
  {
    label: "Account Settings",
    href: "/user/settings/account-settings",
    icon: UserIcon,
  },
  {
    label: "Notification Settings",
    href: "/user/settings/notification-settings",
    icon: BellIcon,
  },
  {
    label: "Learning Preferences",
    href: "/user/settings/learning-preferences",
    icon: SlidersVerticalIcon,
  },
  {
    label: "Security & Privacy",
    href: "/user/settings/security-privacy",
    icon: LockKeyholeIcon,
  },
];
