import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

export const FormFieldSelect = ({ name, title, desc, options }) => {
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
              <p className="font-stolzl font-book text-xs sm:text-sm">{desc}</p>
            )}
          </FormLabel>
          <FormControl>
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger className="w-auto py-5 font-stolzl rounded">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.label} value={option.value}>{option.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
