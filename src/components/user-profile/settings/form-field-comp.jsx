import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { useFormContext } from "react-hook-form";

export const FormFieldComp = ({ name, title, desc }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex gap-7 items-center justify-between py-3 border-b">
          <FormLabel className="flex flex-col items-start gap-1">
            <h2 className="text-base sm:text-lg">{title}</h2>
            {desc && (
              <p className="font-stolzl font-book text-xs sm:text-sm">
                {desc}
              </p>
            )}
          </FormLabel>
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
  );
};
