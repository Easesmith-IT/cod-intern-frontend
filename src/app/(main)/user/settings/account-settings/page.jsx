import { AccountSettingItem } from "@/components/user-profile/settings/account-setting-item";
import React from "react";

const AccountSettings = () => {
  return (
    <div>
      <h2 className="text-2xl relative z-10 leading-9 lg:leading-14 md:text-4xl lg:text-[46px] text-para-3 font-medium capitalize">
        Account Settings
      </h2>
      <div className="mt-5">
        <AccountSettingItem
          title="Change Email"
          desc="Update your email to keep your account secure."
        />
        <AccountSettingItem
          title="Change Password"
          desc="Update your password to keep your account secure."
        />
        <AccountSettingItem
          title="Connected Accounts"
          desc="See where you're logged in and sign out remotely."
        />
        <AccountSettingItem
          title="Delete My Account"
          desc="Permanently remove your account and all data."
          child={false}
        />
      </div>
    </div>
  );
};

export default AccountSettings;
