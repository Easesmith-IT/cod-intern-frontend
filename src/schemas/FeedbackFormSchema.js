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
