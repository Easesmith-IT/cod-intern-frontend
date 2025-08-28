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

  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),

  email: z.string().email({ message: "Invalid email address" }),

  education: z.string().min(1, { message: "Education field is required" }),

  graduationYear: z
    .string()
    .min(4, { message: "Graduation year must be a 4-digit number" }),
});
