"use client";

import { useApiMutation } from "@/hooks/useApiMutation";
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
import { Textarea } from "@/components/ui/textarea";
import { FeedbackFormSchema } from "@/schemas/FeedbackFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { POST } from "@/constants/apiMethods";
import { useState } from "react";
import { SuccessModal } from "@/components/success-modal";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
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

  const { mutateAsync: submitForm, isPending: isSubmitFormLoading } =
    useApiMutation({
      url: "/feedBack/submit",
      method: POST,
      invalidateKey: ["feedBack-submit"],
      isToast: false,
    });

  console.log("isSubmitFormLoading :", isSubmitFormLoading);

  const onSubmit = async (data) => {
    console.log("data :", data);
    const apiData = {
      firstName: data.firstName,
      lastName: data.lastName,
      collegeName: data.collegeName,
      enrolmentNumber: data.enrolmentNumber,
      contactNumber: data.contactNumber,
      emailId: data.emailId,
      overallSatisfaction: data.overallSatisfaction,
      topicRelevance: data.topicRelevance,
      trainerEffectiveness: data.trainerEffectiveness,
      overallExperience: data.overallExperience,
      additionalComments: data.additionalComments,
      // workshopId: "64f1269e7c8d1e55a13a4e99",
      workshopDate: "2025-07-23",
    };

    await submitForm(apiData);
    form.reset();
    setOpen(true)
  };

  return (
    <section className="px-5 py-20">
      {open && <SuccessModal open={open} setOpen={setOpen} />}
      <div className="max-w-5xl mx-auto shadow-[0px_0px_15px_0px_#0000001F] p-5 rounded-md border">
        <h1 className="text-2xl font-medium font-stolzl text-center">
          Feedback Form
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 mt-8"
          >
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      First Name <span className="text-destructive">*</span>
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Last Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
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
                name="collegeName"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>
                      College Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="College Name"
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
                name="enrolmentNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Enrolment Number{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enrolment Number"
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
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Contact Number <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Contact Number"
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
                name="emailId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email ID <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email ID"
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
                name="overallSatisfaction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How Satisfied were you with the overall content of the
                      workshop? <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Very Satisfied">
                            Very Satisfied
                          </SelectItem>
                          <SelectItem value="Satisfied">Satisfied</SelectItem>
                          <SelectItem value="Neutral">Neutral</SelectItem>
                          <SelectItem value="Dissatisfied">
                            Dissatisfied
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="topicRelevance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      On a scale of 1 to 5, how relevant were the topics covered
                      in the workshop?{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="trainerEffectiveness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How effective was the trainer in delivering the content?{" "}
                      <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Very Effective">
                            Very Effective
                          </SelectItem>
                          <SelectItem value="Effective">Effective</SelectItem>
                          <SelectItem value="Neutral">Neutral</SelectItem>
                          <SelectItem value="Ineffective">
                            Ineffective
                          </SelectItem>
                          <SelectItem value="Very Ineffective">
                            Very Ineffective
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="overallExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      How would you rate your overall experience of the
                      workshop? <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full py-5 border-[#9237E347] font-stolzl rounded">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Excellent">Excellent</SelectItem>
                          <SelectItem value="Good">Good</SelectItem>
                          <SelectItem value="Average">Average</SelectItem>
                          <SelectItem value="Poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additionalComments"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>
                      Any additional comments or suggestions?
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Message Here..."
                        className={`placeholder:text-[#00000066] resize-none h-24 border-[#9237E347] font-stolzl rounded py-3`}
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
                disabled={isSubmitFormLoading}
              >
                {isSubmitFormLoading ? "Submitting..." : "Submit Now"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Feedback;
