import { ProfileClient } from "@/components/user-profile/profile-client";

export const metadata = {
  title: "My Profile - Codintern",
  description:
    "Manage your Codintern account, view your activity, courses, and settings.",
  keywords: [
    "Codintern profile",
    "user account",
    "dashboard",
    "account settings",
    "learning progress",
  ],
};


const Profile = () => {
  return <ProfileClient />;
};

export default Profile;
