"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ApplyNowSchema } from "@/schemas/ApplyNowSchema";

export const ApplyNowForm = () => {
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

  const onSubmit = (data) => {
    console.log("data :", data);
  };

  return (
    <div className="max-w-[550px] rounded-md w-full bg-white relative z-10 p-5">
      <h2 className="font-stolzl text-2xl font-medium">
        Interested? Apply Now
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-4">
          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
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
              control={form.control}
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
            control={form.control}
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
            control={form.control}
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

          <div className="grid grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="education"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full py-5 bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded">
                        <SelectValue placeholder="Education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="b-tech">B-Tech</SelectItem>
                        <SelectItem value="b-ca">B-CA</SelectItem>
                        <SelectItem value="b-cs">B-CS</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="graduationYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full py-5 bg-[#FDFBFF] border-[#9237E347] font-stolzl rounded">
                        <SelectValue placeholder="Graduation Year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
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
          >
            Apply Now
          </Button>
        </form>
      </Form>
    </div>
  );
};
