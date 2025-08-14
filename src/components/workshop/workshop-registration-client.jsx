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
import { WorkshopRegistrationFormSchema } from "@/schemas/FeedbackFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const WorkShopRegistrationClient = () => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(WorkshopRegistrationFormSchema),
    defaultValues: {
      fullName: "",
      collegeName: "",
      enrolmentNumber: "",
      contactNumber: "",
      emailId: "",
      overallSatisfaction: "",
      topicRelevance: "",
      trainerEffectiveness: "",
      overallExperience: "",
      additionalComments: "",
    },
  });

  // const { mutateAsync: submitForm, isPending: isSubmitFormLoading } =
  //   useApiMutation({
  //     url: "/feedBack/submit",
  //     method: POST,
  //     invalidateKey: ["feedBack-submit"],
  //     isToast: false,
  //   });

  // console.log("isSubmitFormLoading :", isSubmitFormLoading);

  const onSubmit = async (data) => {
    console.log("data :", data);
    // const apiData = {
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   collegeName: data.collegeName,
    //   enrolmentNumber: data.enrolmentNumber,
    //   contactNumber: data.contactNumber,
    //   emailId: data.emailId,
    //   overallSatisfaction: data.overallSatisfaction,
    //   topicRelevance: data.topicRelevance,
    //   trainerEffectiveness: data.trainerEffectiveness,
    //   overallExperience: data.overallExperience,
    //   additionalComments: data.additionalComments,
    //   // workshopId: "64f1269e7c8d1e55a13a4e99",
    //   workshopDate: "2025-07-23",
    // };

    // await submitForm(apiData);
    // form.reset();
    // setOpen(true);
  };

  return (
    <section className="px-5 py-20">
      {open && <SuccessModal open={open} setOpen={setOpen} />}
      <div className="max-w-5xl mx-auto  p-5 rounded-md border">
        <h1 className="text-2xl font-medium font-stolzl text-center">
          WorkShop Registration Form
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mt-8"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
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
              />

              <FormField
                control={form.control}
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
              />

              <FormField
                control={form.control}
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
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Mobile Number <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Mobile Number  "
                        className={`placeholder:text-[#00000066] border-[#9237E347] font-stolzl rounded py-5`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
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
              />

              <FormField
                control={form.control}
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
              />

              <FormField
                control={form.control}
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
              />

              <FormField
                control={form.control}
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
              />
            </div>

            <div className="flex justify-end mt-10">
              <Button
                className="rounded w-full sm:w-60 ml-auto text-xs sm:text-sm"
                size="lg"
                type="submit"
                variant="linearGradient"
                // disabled={isSubmitFormLoading}
              >
                {false ? "Submitting..." : "Submit Now"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
