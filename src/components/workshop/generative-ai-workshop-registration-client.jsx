"use client";

import DatePicker from "@/components/shared/DatePicker";
import { SuccessModal } from "@/components/success-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { POST } from "@/constants/apiMethods";
import { useApiMutation } from "@/hooks/useApiMutation";
import {
  WorkshopRegistrationFormSchema,
  WorkshopRegistrationFormSchema1,
} from "@/schemas/FeedbackFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "../Spinner";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { OtpModal } from "./otp-modal";
import { toast } from "sonner";
import { Loading } from "../loading";

export const GenerativeAIWorkShopRegistrationClient = () => {
  const [open, setOpen] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const form = useForm({
    resolver: zodResolver(WorkshopRegistrationFormSchema1),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      emailAddress: "",
      mobileNumber: "",
      collegeInstitutionName: "",
      branch: "",
      year: "",
      universityRollNo: "",
      grade:""
    },
  });

  const { reset, handleSubmit, control, getValues, watch } = form;
  const router = useRouter();

  useEffect(() => {
    if (watch("mobileNumber")) {
      setIsVerified(false);
    }
  }, [watch("mobileNumber")]);

  const {
    mutateAsync: submitForm,
    isPending: isSubmitFormLoading,
    data: result,
  } = useApiMutation({
    url: "/student/workshop/register",
    method: POST,
    invalidateKey: ["workshop-register"],
    isToast: false,
  });

  // console.log("result :", result);

  // React Query mutation to create order
  const {
    mutateAsync: createOrder,
    data: orderData,
    isPending: createOrderLoading,
  } = useApiMutation({
    url: "/student/payments/make-payment",
    method: POST,
  });

  // React Query mutation to verify payment
  const {
    mutateAsync: verifyPayment,
    data: verifyPaymentData,
    isPending: verifyPaymentLoading,
  } = useApiMutation({
    url: "/student/payments/verify-payment",
    method: POST,
  });

  const handlePayment = async () => {
    try {
      // 2️⃣ Open Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData?.order?.amount,
        currency: orderData?.order?.currency,
        name: "Prompt Engineering Workshop",
        description: "Prompt Engineering Workshop Payment",
        order_id: orderData?.order?.id,
        handler: async (response) => {
          try {
            // 3️⃣ Verify payment
            await verifyPayment({
              ...response,
              registrationId: result?.registration?._id,
            });
          } catch (err) {
            router.push("/payment/failure");
          }
        },
        theme: { color: "#9237E3" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      // router.push("/payment/failure");
    }
  };

  const { mutateAsync, isPending, data } = useApiMutation({
    url: "/student/workshop/send-otp",
    method: POST,
    invalidateKey: ["workshop-send-otp"],
  });

  useEffect(() => {
    if (data) {
      setIsOtpModalOpen(true);
    }
  }, [data]);

  const {
    mutateAsync: verifyOtp,
    isPending: isLoading,
    data: verifyOtpData,
  } = useApiMutation({
    url: "/student/workshop/verify-otp",
    method: POST,
    invalidateKey: ["workshop-verify-otp"],
    // isToast: false,
  });

  // console.log("verifyOtpData", verifyOtpData);

  useEffect(() => {
    if (verifyOtpData) {
      setIsOtpModalOpen(false);
      setIsVerified(true);
    }
  }, [verifyOtpData]);

  const onSubmit = async (data) => {
    // console.log("data :", data);

    if (!verifyOtpData) {
      toast.error(
        "Please verify your mobile number before submitting the form."
      );
      return;
    }

    const apiData = {
      fullName: data.fullName,
      // dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      email: data.emailAddress,
      mobileNumber: data.mobileNumber,
      collegeName: data.collegeInstitutionName,
      branch: data.branch,
      year: data.year,
      grade: data.grade,
      universityRollNo: data.universityRollNo,
      type: "generative-ai",
    };

    await submitForm(apiData);
  };

  // console.log("result", result);
  useEffect(() => {
    if (result) {
      reset();
      setIsVerified(false);

      // 1️⃣ Create order
      (async () => {
        await createOrder({
          amount: 189,
          currency: "INR",
          id: result?.registration?._id,
        });
      })();
    }
  }, [result]);

  useEffect(() => {
    if (orderData) {
      console.log("orderData", orderData);

      handlePayment();
    }
  }, [orderData]);

  useEffect(() => {
    if (verifyPaymentData) {
      console.log("verifyPaymentData", verifyPaymentData);

      if (verifyPaymentData.success) {
        router.push("/payment/success");
      } else {
        router.push("/payment/failure");
      }
    }
  }, [verifyPaymentData]);

  return (
    <section className="px-5 py-10 md:py-20">
      {(createOrderLoading || verifyPaymentLoading) && <Loading />}

      {open && (
        <SuccessModal
          open={open}
          setOpen={setOpen}
          desc={`Thank you, ${
            result?.registration?.fullName || "User"
          }! Your workshop registration has been completed successfully.`}
        />
      )}

      <div className="max-w-5xl mx-auto p-5">
        <Link
          href="/workshop/prompt-engineering"
          className="size-10 border flex justify-center items-center rounded-full"
        >
          <ArrowLeft className="text-3xl cursor-pointer" />
          {/* <TypographyH2 heading="All Pages" /> */}
        </Link>
      </div>
      <div className="max-w-5xl mx-auto p-5 rounded-md border">
        <h1 className="text-2xl font-medium font-stolzl text-center">
          Prompt Engineering Workshop Registration Form
        </h1>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
              <FormField
                control={control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Date of Birth <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* <FormField
                control={control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Gender <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              <FormField
                control={control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email Address <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Mobile Number <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="grid grid-cols-[1fr_auto]">
                        <Input
                          type="number"
                          placeholder="Mobile Number  "
                          className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                          {...field}
                        />
                        {isVerified ? (
                          <Button
                            variant="success"
                            className="h-10 ml-4 rounded w-24 cursor-default"
                          >
                            Verified
                          </Button>
                        ) : (
                          <Button
                            type="button"
                            disabled={
                              isPending || watch("mobileNumber")?.length !== 10
                            }
                            onClick={() =>
                              mutateAsync({
                                mobileNumber: getValues("mobileNumber"),
                              })
                            }
                            className="h-10 ml-4 rounded w-24"
                          >
                            {isPending ? <Spinner /> : "Send OTP"}
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Grade <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="IT">Work: IT</SelectItem>
                          <SelectItem value="non-IT">Work: Non IT</SelectItem>
                          <SelectItem value="business-owner">
                            Business Owner
                          </SelectItem>
                          <SelectItem value="digital-marketer">
                            Digital Marketer
                          </SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="content-creator">
                            Content Creator
                          </SelectItem>
                          <SelectItem value="graduate">
                            Graduate - Seeking for Job
                          </SelectItem>
                          <SelectItem value="college-student">
                            College Student
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <FormField
                control={control}
                name="collegeInstitutionName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      College/Institution Name{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="College/Institution Name"
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* <FormField
                control={control}
                name="branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Branch <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Branch"
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* <FormField
                control={control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Year <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="2">2 Year</SelectItem>
                          <SelectItem value="3">3 Year</SelectItem>
                          <SelectItem value="4">4 Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}

              {/* <FormField
                control={control}
                name="universityRollNo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      University Roll No.{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="University Roll No."
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
            </div>

            <div className="flex justify-end mt-10">
              <Button
                className="rounded w-full sm:w-60 ml-auto text-xs sm:text-sm"
                size="lg"
                type="submit"
                variant="linearGradient"
                disabled={isSubmitFormLoading}
              >
                {isSubmitFormLoading ? <Spinner /> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {isOtpModalOpen && (
        <OtpModal
          open={isOtpModalOpen}
          setOpen={setIsOtpModalOpen}
          phoneNumber={getValues("mobileNumber")}
          onResend={mutateAsync}
          loading={isLoading}
          onVerify={verifyOtp}
          isPending={isPending}
        />
      )}
    </section>
  );
};
