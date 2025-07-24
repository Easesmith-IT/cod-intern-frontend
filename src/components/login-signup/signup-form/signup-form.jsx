"use client";

import { useState } from "react";
import { SignupForm1 } from "./signup-form1";
import { SignupForm2 } from "./signup-form2";

export const SignupForm = () => {
  const [isOtp, setIsOtp] = useState(false);

  return (
    <div className="bg-white flex flex-col justify-center py-5 px-7 sm:px-14 gap-4">
      {isOtp ? <SignupForm2 /> : <SignupForm1 setIsOtp={setIsOtp} />}
    </div>
  );
};
