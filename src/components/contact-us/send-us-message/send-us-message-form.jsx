"use client";

import Image from "next/image";
import React from "react";
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
import { SendUsMessageSchema } from "@/schemas/SendUsMessageSchema";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export const SendUsMessageForm = () => {
  const form = useForm({
    resolver: zodResolver(SendUsMessageSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data :", data);
  };

  return (
    <div className="max-w-[836px] pr-[50px]">
      <h2 className="text-[46px] font-medium">
        <span className="text-main">Send Us</span> a Message
        <Image
          src="/ellipse-group.svg"
          className="inline-block ml-2"
          width={46}
          height={16}
          alt="Ellipse"
        />
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-4">
          <div className="grid grid-cols-3 gap-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name*"
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
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Phone Number*"
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
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
          </div>

          <div className="grid grid-cols-1 gap-5">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Message Here..."
                      className={`placeholder:text-[#00000066] resize-none h-24 border-[#9237E347] font-stolzl rounded py-3`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="mt-4 text-para font-stolzl font-book text-sm">
            The information you provide shall be processed by IT Service
            Management Limited – a professional training organisation. Your data
            shall be used by a member of staff to contact you regarding your
            enquiry.
          </p>

          <FormField
            control={form.control}
            name="signupForDeals"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center cursor-pointer">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="font-stolzl text-sm text-para font-book">
                    Click here to sign up to our email marketing, offers and
                    discounts
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="mt-5 rounded"
            size="lg"
            type="submit"
            variant="linearGradient"
          >
            Submit Now
          </Button>
        </form>
      </Form>
    </div>
  );
};
