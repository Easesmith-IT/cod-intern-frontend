"use client";

import { Card } from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { educationOptions } from "@/schemas/SignupStepsSchema";
import { useFormContext, useWatch } from "react-hook-form";
import { Heading } from "./heading";

function SignupStep4() {
  const { control, setValue, clearErrors } = useFormContext();
  const selectedValue = useWatch({ name: "education" });

  return (
    <div className="mt-5 md:mt-10">
      <Heading heading="What's your highest level of education?" />

      <FormField
        control={control}
        name="education"
        render={({ field }) => (
          <FormItem className="max-w-4xl mx-auto w-full mt-10">
            <FormControl>
              <div className="flex flex-col space-y-2">
                {educationOptions.map((option) => {
                  const isSelected = selectedValue === option.value;

                  return (
                    <Card
                      key={option.value}
                      className={`relative p-0 cursor-pointer transition-all rounded-md duration-200 hover:shadow-md ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <label htmlFor={option.value} className="w-full">
                        <div className="px-6 py-5 flex items-center justify-between w-full gap-3">
                          <span
                            className={`font-medium text-sm md:text-base transition-colors ${
                              isSelected ? "text-primary" : "text-foreground"
                            }`}
                          >
                            {option.label}
                          </span>

                          <input
                            type="radio"
                            id={option.value}
                            value={option.value}
                            checked={field.value === option.value}
                            onChange={(e) => {
                              field.onChange(e.target.value);
                              clearErrors("education");
                            }}
                            className="size-5 accent-main"
                            name="education"
                          />
                        </div>
                      </label>
                    </Card>
                  );
                })}
              </div>
            </FormControl>
            <FormMessage className="text-left mt-2" />
          </FormItem>
        )}
      />
    </div>
  );
}

export default SignupStep4;
