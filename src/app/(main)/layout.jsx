import { HeaderSkeleton } from "@/components/header-skeleton";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import React, { Suspense } from "react";

function MainLayout({ children }) {
  return (
    <div>
      <Suspense fallback={<HeaderSkeleton />}>
        <Header />
      </Suspense>
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
