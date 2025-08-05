import Spinner from "@/components/Spinner";
// import dynamic from "next/dynamic";
import { Suspense } from "react";
import InformationClient from "./InformationClient";

// const InformationClient = dynamic(() => import("./InformationClient"), {
//   ssr: false,
// });

const Information = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full flex justify-center items-center">
          <Spinner />
        </div>
      }
    >
      <InformationClient />
    </Suspense>
  );
};

export default Information;
