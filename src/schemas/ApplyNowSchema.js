import { z } from "zod";

export const ApplyNowSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be under 50 characters" }),

  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be under 50 characters" }),

  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be no more than 15 digits" })
    .regex(/^\+?[0-9]{10,15}$/, { message: "Invalid phone number format" }),

  email: z.string().email({ message: "Invalid email address" }),

  education: z.string().min(1, { message: "Education field is required" }),

  graduationYear: z
    .string()
    .regex(/^\d{4}$/, { message: "Graduation year must be a 4-digit number" }),
});
