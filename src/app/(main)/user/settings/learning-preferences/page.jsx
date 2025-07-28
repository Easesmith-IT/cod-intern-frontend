"use client";

import { Form } from "@/components/ui/form";
import { AccountSettingItem } from "@/components/user-profile/settings/account-setting-item";
import { FormFieldComp } from "@/components/user-profile/settings/form-field-comp";
import { FormFieldSelect } from "@/components/user-profile/settings/form-field-select";
import { LearningPreferencesSchema } from "@/schemas/LearningPreferencesSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const LearningPreferences = () => {
  const form = useForm({
    resolver: zodResolver(LearningPreferencesSchema),
    defaultValues: {
      interfaceTheme: "light",
      playbackSpeed: "1.0x",
      subtitles: false,
      courseLanguage: "english",
    },
  });

  const { register, watch, handleSubmit, control, setValue } = form;

  const { setTheme } = useTheme();

  // useEffect(() => {
  //   const theme = watch("interfaceTheme");
  //   if (theme === "dark") {
  //     setTheme("dark");
  //   } else if (theme === "light") {
  //     setTheme("light");
  //   } else if (theme === "system") {
  //     setTheme("system");
  //   }
  // }, [watch("interfaceTheme")]);

  const onSubmit = (data) => {
    console.log("data :", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl lg:text-[46px] text-para-3 font-medium capitalize">
          Learning Preferences
        </h2>

        <div className="mt-5">
          <FormFieldSelect
            name="interfaceTheme"
            title="Interface Theme"
            desc="Customize the color theme of the user interface."
            options={[
              { label: "Auto", value: "system" },
              { label: "Dark", value: "dark" },
              { label: "Light", value: "light" },
            ]}
          />

          <FormFieldSelect
            name="playbackSpeed"
            title="Default Playback Speed"
            desc="Select the default speed for video playback."
            options={[
              { label: "0.5x", value: "0.5x" },
              { label: "1.0x", value: "1.0x" },
              { label: "1.5x", value: "1.5x" },
              { label: "2.0x", value: "2.0x" },
            ]}
          />

          <FormFieldComp
            name="subtitles"
            title="Enable Subtitles by Default"
            desc="Automatically show subtitles and captions for video lessons."
          />

          <FormFieldSelect
            name="courseLanguage"
            title="Default Course Language"
            desc="Choose your preferred language for course content when available."
            options={[
              { label: "Hindi", value: "hindi" },
              { label: "English", value: "english" },
              { label: "Hinglish", value: "hinglish" },
            ]}
          />

          <div className="py-3 flex justify-between gap-2 items-center border-b group">
            <div>
              <h4 className="text-base sm:text-lg font-stolzl">
                Weekly Learning Goal
              </h4>
              <p className="font-stolzl text-xs sm:text-sm font-book text-para mt-1">
                5 hours/week
              </p>
            </div>
            <ChevronRight className="group-hover:rotate-90 group-hover:scale-105 transition-all" />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LearningPreferences;
