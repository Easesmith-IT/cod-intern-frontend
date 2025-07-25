"use client";

import { Check, Plus } from "lucide-react";
import { useFormContext, useWatch } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const MultiSelectCardGroup = ({
  name,
  options,
  max = 2,
  className,
  containerClassName,
  itemClassName,
}) => {
  const { control, setValue, getValues, clearErrors } = useFormContext();
  const selectedValues = useWatch({ name }) || [];

  const handleOptionToggle = (option) => {
    const currentValues = getValues(name);
    let newValues = [];

    if (currentValues.includes(option)) {
      // Remove option if already selected
      newValues = currentValues.filter((val) => val !== option);
    } else {
      // Add option if not selected and under limit
      if (currentValues.length < max) {
        newValues = [...currentValues, option];
      } else {
        // Replace first option if at limit
        newValues = [currentValues[1], option];
      }
    }

    setValue(name, newValues);

    // Clear any existing errors when user makes a selection
    if (newValues.length > 0) {
      clearErrors(name);
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className={className}>
          <FormControl>
            <div
              className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                containerClassName
              )}
            >
              {options.map((option) => {
                const isSelected = selectedValues.includes(option);
                const isDisabled = !isSelected && selectedValues.length >= max;

                return (
                  <Card
                    key={option}
                    className={`relative p-0 cursor-pointer transition-all rounded-md duration-200 hover:shadow-md
                      ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border hover:border-primary/50"
                      }
                      ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                    `}
                    onClick={() => !isDisabled && handleOptionToggle(option)}
                  >
                    <div
                      className={cn(
                        "px-6 py-7 flex items-center gap-3",
                        itemClassName
                      )}
                    >
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors
                          ${
                            isSelected
                              ? "border-main bg-main text-primary-foreground"
                              : "border-muted-foreground"
                          }
                        `}
                      >
                        {isSelected ? (
                          <Check className="w-3 h-3" />
                        ) : (
                          <Plus className="w-3 h-3" />
                        )}
                      </div>
                      <span
                        className={`font-medium text-sm md:text-base transition-colors ${
                          isSelected ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {option}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </FormControl>
          <FormMessage className="text-left mt-2" />
        </FormItem>
      )}
    />
  );
};
