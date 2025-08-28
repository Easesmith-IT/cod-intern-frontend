"use client";

import Spinner from "@/components/Spinner";
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
import { readCookie } from "@/lib/readCookie";
import { getYears } from "@/lib/utils";
import { ApplyNowSchema } from "@/schemas/ApplyNowSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const ApplyNowForm = () => {
  const params = useParams();
  const userInfo = readCookie("userInfo");
  const years = getYears(2000);
  const [open, setOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(ApplyNowSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      education: "",
      graduationYear: "",
    },
  });

  const { reset, handleSubmit, control } = form;

  const {
    mutateAsync: submitForm,
    isPending: isSubmitFormLoading,
    data: result,
  } = useApiMutation({
    url: "/student/course-applications/create",
    method: POST,
    invalidateKey: ["workshop-register"],
    isToast: false,
  });

  // console.log("isSubmitFormLoading :", isSubmitFormLoading);

  const onSubmit = async (data) => {
    console.log("data :", data);
    const apiData = {
      student: userInfo.id,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      education: data.education,
      graduationYear: data.graduationYear,
      course: params.courseId,
    };

    await submitForm(apiData);
  };

  console.log("result", result);
  useEffect(() => {
    if (result) {
      reset();
      setOpen(true);
    }
  }, [result]);

  return (
    <div className="max-w-[550px] mx-auto lg:mx-0 rounded-md w-full bg-white relative z-10 p-5">
      <h2 className="font-stolzl text-xl md:text-2xl font-medium">
        Interested? Apply Now
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      className={`placeholder:text-[#00000066] bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded py-5`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      className={`placeholder:text-[#00000066] bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded py-5`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Phone Number"
                    className={`placeholder:text-[#00000066] bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded py-5`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel></FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email ID"
                    className={`placeholder:text-[#00000066] bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded py-5`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <FormField
              control={control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Education"
                      className={`placeholder:text-[#00000066] bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded py-5`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="graduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Select
                      key={field.value}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full py-5 bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded">
                        <SelectValue placeholder="Graduation Year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            className="mt-5 w-full rounded"
            size="lg"
            type="submit"
            variant="linearGradient"
            disabled={isSubmitFormLoading}
          >
            {isSubmitFormLoading ? <Spinner /> : "Apply Now"}
          </Button>
        </form>
      </Form>

      {open && (
        <SuccessModal
          open={open}
          setOpen={setOpen}
          desc={`Thank you, ${result?.application?.firstName} ${result?.application?.lastName}. Your course application has been submitted successfully.`}
        />
      )}
    </div>
  );
};
