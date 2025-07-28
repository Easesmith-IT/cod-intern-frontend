import { SideBar } from "@/components/user-profile/settings/sidebar";
import React from "react";

const SettingsLayout = ({ children }) => {
  return (
    <section className="section-container pt-10 pb-12 md:pb-24 md:pt-20 flex flex-col md:flex-row gap-5 sm:gap-10">
      <SideBar />
      <div className="flex-1 w-full">{children}</div>
    </section>
  );
};

export default SettingsLayout;
