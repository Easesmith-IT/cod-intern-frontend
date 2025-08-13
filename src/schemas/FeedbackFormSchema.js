import { z } from "zod";

export const FeedbackFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be under 50 characters" }),

  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be under 50 characters" }),

  collegeName: z
    .string()
    .min(1, { message: "College name is required" })
    .max(100, { message: "College name must be under 100 characters" }),

  enrolmentNumber: z
    .string()
    .min(1, { message: "Enrolment number is required" })
    .max(20, { message: "Enrolment number must be under 20 characters" }),

  contactNumber: z.string().regex(/^[0-9]{10}$/, {
    message: "Contact number must be exactly 10 digits",
  }),

  emailId: z.string().email({ message: "Invalid email address" }),

  overallSatisfaction: z.string().min(1, { message: "Field  is required" }),

  topicRelevance: z.string().min(1, { message: "Field  is required" }),

  trainerEffectiveness: z.string().min(1, { message: "Field  is required" }),

  overallExperience: z.string().min(1, { message: "Field  is required" }),

  additionalComments: z.string().optional(),
});

const today = new Date();
const MIN_AGE_YEARS = 16;
const MAX_AGE_YEARS = 100;
const yearsAgo = (n) =>
  new Date(today.getFullYear() - n, today.getMonth(), today.getDate());

export const WorkshopRegistrationFormSchema = z.object({
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

  mobileNumber: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),

  collegeInstitutionName: z
    .string()
    .trim()
    .min(2, "College/Institution Name is required"),

  // Since the prompt had "Branch & Year" as one field, keep a single string.
  // If you prefer separate fields, split into { branch: z.string(), year: z.number().int().min(1).max(6) }.
  branch: z
    .string()
    .trim()
    .min(2, "Branch is required")
    .max(100, "Branch is too long"),

  year: z.number().int().min(1).max(6),

  universityRollNo: z
    .string()
    .trim()
    .min(4, "Roll No. is too short")
    .max(30, "Roll No. is too long")
    .regex(/^[A-Za-z0-9\-\/]+$/, "Only letters, numbers, - and / allowed"),
});
