import { z } from "zod";

export const SendUsMessageSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name must be under 50 characters" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(50, { message: "Message must be at least 50 characters long" }),
  signupForDeals: z.boolean().optional(),
});
