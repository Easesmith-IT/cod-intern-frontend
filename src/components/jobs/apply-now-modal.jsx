"use client";

import DatePicker from "@/components/shared/DatePicker";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { JobApplySchema } from "@/schemas/JobApplySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Spinner from "../Spinner";
import { useEffect } from "react";
import { readCookie } from "@/lib/readCookie";
import { toast } from "sonner";

export const ApplyNowModal = ({ open, setOpen, externalLink,jobId="" }) => {
  const params = useParams();
  const userInfo = readCookie("userInfo");

  const form = useForm({
    resolver: zodResolver(JobApplySchema),
    defaultValues: {
      fullName: "",
      dateOfBirth: "",
      gender: "",
      emailAddress: "",
      phoneNumber: "",
    },
  });

  const {
    mutateAsync: submitForm,
    isPending: isSubmitFormLoading,
    data: result,
  } = useApiMutation({
    url: "/student/jobs/apply-job",
    method: POST,
    invalidateKey: ["job-application"],
    // isToast: false,
  });

  const onSubmit = async (data) => {
    console.log("data :", data);
    if(!userInfo){
      return toast.error("Please login first to apply job")
    }
    const apiData = {
      fullName: data.fullName,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      email: data.emailAddress,
      phoneNumber: data.phoneNumber,
      jobId: jobId || params.jobId,
      userId: userInfo.id,
    };

    await submitForm(apiData);
    // form.reset();
    // setOpen(true);
  };

  useEffect(() => {
    if (result) {
      if (externalLink) {
        window.open(externalLink, "_blank");
      }
      setOpen(false);
    }
  }, [result]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-lg sm:text-2xl text-center font-semibold text-gray-900">
            Apply Now
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 mt-8"
            >
              <div className="flex flex-col md:grid md:grid-cols-2 gap-5 text-black/80">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
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
                        Date of Birth{" "}
                        <span className="text-destructive">*</span>
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
                        Email Address{" "}
                        <span className="text-destructive">*</span>
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone Number <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Phone Number  "
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
                  disabled={isSubmitFormLoading}
                >
                  {isSubmitFormLoading ? <Spinner /> : "Continue"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
