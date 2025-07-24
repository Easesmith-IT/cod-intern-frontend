import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
