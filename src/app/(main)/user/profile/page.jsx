"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { updatePreview } from "@/lib/updatePreview";
import { ProfileSchema } from "@/schemas/ProfileSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const Profile = () => {
  const form = useForm({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      profileImg: "",
      profileImgPreview: "",
      email: "",
      phone: "",
      contactMethod: "",
      bio: "",
      profileVisibility: "",
    },
  });

  const { register, watch, handleSubmit, control, setValue } = form;

  const profileImgRef = register("profileImg");

  const profileImgWatch = watch("profileImg");

  useEffect(() => {
    updatePreview(profileImgWatch, "profileImgPreview", setValue);
  }, [profileImgWatch, setValue]);

  const onSubmit = (data) => {
    console.log("data :", data);
  };

  return (
    <section className="section-container pt-10 pb-12 md:pb-24 md:pt-20">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-80 flex flex-col items-center gap-2">
            <FormField
              control={control}
              name="profileImg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="cursor-pointer relative size-32">
                    <div className="absolute bottom-0 right-0 size-7 rounded-full z-10 p-1 flex justify-center bg-[#FFD900] text-white items-center">
                      <Pencil className="size-4" />
                    </div>
                    <Avatar className="size-32">
                      <AvatarImage
                        src={
                          watch("profileImgPreview")
                            ? watch("profileImgPreview")
                            : "/our-mentors/user-placeholder.png"
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </FormLabel>
                  <FormControl>
                    <Input type="file" className="hidden" {...profileImgRef} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <h2 className="text-xl sm:text-3xl font-stolzl mt-5 font-medium text-para-3">
              John Cena
            </h2>
            <p className="font-stolzl text-xs sm:text-sm font-book text-para-3">
              johncena@gmail.com
            </p>
            <p className="font-stolzl text-xs sm:text-sm font-book text-para-3">
              Bio
            </p>
          </div>
          <div className="w-full md:flex-1">
            <h2 className="text-2xl relative z-10 leading-9 lg:leading-14 md:text-4xl lg:text-[46px] text-para-3 font-medium capitalize">
              Profile Settings
            </h2>
            <h5 className="font-stolzl font-medium mt-5 text-heading text-base sm:text-lg">
              Contact Information
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Email"
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
            </div>
            <FormField
              control={control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="w-full py-5 bg-[#FDFBFF] data-[placeholder]:text-[#00000066] font-medium border-[#9237E347] rounded">
                        <SelectValue placeholder="Preferred Contact Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="method1">Method 1</SelectItem>
                        <SelectItem value="method2">Method 2</SelectItem>
                        <SelectItem value="method3">Method 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Bio"
                      className={`placeholder:text-[#00000066] resize-none h-24 border-[#9237E347] font-stolzl rounded py-3`}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              size="xl"
              variant="linearGradient"
              className="mt-5 rounded-sm text-xs sm:text-sm"
            >
              Save changes
            </Button>

            <Card className="mt-5 p-4 rounded-sm">
              <FormField
                control={control}
                name="profileVisibility"
                render={({ field }) => (
                  <FormItem className="flex gap-7 items-center">
                    <div>
                      <h5 className="font-stolzl text-base sm:text-lg font-medium text-heading">
                        Profile Visibility
                      </h5>
                      <p className="font-stolzl text-xs sm:text-sm font-book text-para-3">
                        Control who can see your profile
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="w-14 h-7 data-[state=checked]:bg-main"
                        className1="size-6 data-[state=checked]:translate-x-[30px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Card>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default Profile;
