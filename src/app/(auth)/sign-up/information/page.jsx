import dynamic from "next/dynamic";
import { Suspense } from "react";

const InformationClient = dynamic(() => import("./InformationClient"), {
  ssr: false,
});

const Information = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InformationClient />
    </Suspense>
  );
};

export default Information;
