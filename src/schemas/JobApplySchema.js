import { z } from "zod";

const today = new Date();
const MIN_AGE_YEARS = 16;
const MAX_AGE_YEARS = 100;
const yearsAgo = (n) =>
  new Date(today.getFullYear() - n, today.getMonth(), today.getDate());

export const JobApplySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full Name is too short")
    .max(100, "Full Name is too long")
    .regex(/^[A-Za-z][A-Za-z\s.'-]*$/, "Use letters, spaces, . ' - only"),

  dateOfBirth: z.coerce
    .date({ required_error: "Date of Birth is required" })
    .max(yearsAgo(MIN_AGE_YEARS), `You must be at least ${MIN_AGE_YEARS}`)
    .min(yearsAgo(MAX_AGE_YEARS), `Age cannot exceed ${MAX_AGE_YEARS}`),

  gender: z.enum(["male", "female", "other", "prefer_not_to_say"], {
    required_error: "Please select a gender",
  }),

  emailAddress: z
    .string()
    .trim()
    .toLowerCase()
    .email("Enter a valid email address"),

  phoneNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian phone number"),
});
