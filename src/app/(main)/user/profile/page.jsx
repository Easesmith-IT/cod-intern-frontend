import { ProfileClient } from "@/components/user-profile/profile-client";

export const metadata = {
  title: "My Profile - CodIntern",
  description:
    "Manage your CodIntern account, view your activity, courses, and settings.",
  keywords: [
    "CodIntern profile",
    "user account",
    "dashboard",
    "account settings",
    "learning progress",
  ],
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/user/profile`,
  },
};


const Profile = () => {
  return <ProfileClient />;
};

export default Profile;
