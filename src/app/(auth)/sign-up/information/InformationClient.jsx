"use client";

import SignupStep1 from "@/components/login-signup/signup-steps/signup-step1";
import SignupStep2 from "@/components/login-signup/signup-steps/signup-step2";
import SignupStep3 from "@/components/login-signup/signup-steps/signup-step3";
import SignupStep4 from "@/components/login-signup/signup-steps/signup-step4";
import { Stepper } from "@/components/login-signup/signup-steps/stepper";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { PATCH } from "@/constants/apiMethods";
import { useApiMutation } from "@/hooks/useApiMutation";
import { useSetLogin } from "@/hooks/useAuth";
import { readCookie } from "@/lib/readCookie";
import { setAuthCookies } from "@/lib/setCookies";
import {
  fullSignupFormSchema,
  step1Schema,
  step2Schema,
  step3Schema,
  step4Schema,
} from "@/schemas/SignupStepsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useSearchParams } from "next/navigation";
export default function InformationClient() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const { login } = useSetLogin();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(fullSignupFormSchema),
    defaultValues: {
      bringsYouHere: [],
      tech: [],
      business: [],
      creative: [],
      academic: [],
      currentRole: [],
      education: "",
    },
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const userInfo = searchParams.get("userInfo");

    if (accessToken && refreshToken && userInfo) {
      setAuthCookies({
        accessToken,
        refreshToken,
        userInfo,
      });
    }
  }, [searchParams]);

  const { handleSubmit, trigger } = form;

  const handleNext = async () => {
    let schema;
    switch (step) {
      case 1:
        schema = step1Schema;
        break;
      case 2:
        schema = step2Schema;
        break;
      case 3:
        schema = step3Schema;
        break;
      case 4:
        schema = step4Schema;
        break;
      default:
        console.warn("Invalid step:", step);
        return;
    }

    const valid = await trigger(Object.keys(schema.shape));
    if (valid) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    const emailFromStorage = localStorage.getItem("cod-intern-email");
    const studentIdFromStorage = localStorage.getItem("cod-intern-student-id");
    const userInfo = JSON.parse(readCookie("userInfo") || "");
    console.log("userInfo", userInfo);

    emailFromStorage ? setEmail(emailFromStorage) : setEmail(userInfo.email);

    studentIdFromStorage
      ? setStudentId(studentIdFromStorage)
      : setStudentId(userInfo.id);
  }, []);

  const {
    mutateAsync: submitForm,
    isPending: isSubmitFormLoading,
    data: result,
  } = useApiMutation({
    url: "/student/auth/signup-2",
    method: PATCH,
    invalidateKey: ["signup-2"],
    // isToast: false,
  });

  const onSubmit = async (data) => {
    console.log("data", data);

    const apiData = {
      ...data,
      currentRole: data.currentRole[0],
      educationLevel: data.education,
      email,
      studentId,
    };

    await submitForm(apiData);
  };

  useEffect(() => {
    if (result) {
      localStorage.removeItem("cod-intern-email");
      localStorage.removeItem("cod-intern-student-id");
      // router.push("/login");
      login();
      router.push("/");
    }
  }, [result]);

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-screen overflow-y-auto"
      >
        <div className="section-container flex flex-col h-full justify-between ">
          <Stepper
            steps={[
              { id: 1, completed: false },
              { id: 2, completed: false },
              { id: 3, completed: false },
              { id: 4, completed: false },
            ]}
            currentStep={step}
            className="py-4 mt-14"
          />

          {step === 1 && <SignupStep1 setStep={setStep} />}
          {step === 2 && <SignupStep2 setStep={setStep} />}
          {step === 3 && <SignupStep3 setStep={setStep} />}
          {step === 4 && <SignupStep4 setStep={setStep} />}

          <div className="flex w-full justify-between items-center pt-10 pb-14">
            <div>
              {step > 1 && (
                <Button
                  variant="outline"
                  size="xl"
                  className="border-input text-black hover:border-input hover:bg-accent hover:text-black rounded px-8"
                  onClick={() => setStep(step - 1)}
                  type="button"
                >
                  <ArrowLeft />
                  Back
                </Button>
              )}
            </div>
            {step === 4 ? (
              <Button
                variant="linearGradient"
                size="xl"
                className="rounded px-8"
                type="submit"
                disabled={isSubmitFormLoading}
              >
                {isSubmitFormLoading ? (
                  <Spinner spinnerClassName="size-6" />
                ) : (
                  "Finished"
                )}
                <ArrowRight />
              </Button>
            ) : (
              <Button
                variant="linearGradient"
                size="xl"
                className="rounded px-8"
                onClick={handleNext}
                type="button"
              >
                Next
                <ArrowRight />
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
}
