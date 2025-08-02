import { AccountSettingItem } from "@/components/user-profile/settings/account-setting-item";
import React from "react";

const SecurityAndPrivacy = () => {
  return (
    <div>
      <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
        Security & Privacy
      </h2>
      <div className="mt-5">
        <AccountSettingItem
          title="Password Change"
          desc="Update your password to keep your account secure."
        />
        <AccountSettingItem
          title="2-Factor Authentication"
          desc="Add extra login protection with an authenticator app."
        />
        <AccountSettingItem
          title="Active Sessions"
          desc="See where you're logged in and sign out remotely."
        />
        <AccountSettingItem
          title="Download My Data"
          desc="Export your personal data and learning history."
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

export default SecurityAndPrivacy;
