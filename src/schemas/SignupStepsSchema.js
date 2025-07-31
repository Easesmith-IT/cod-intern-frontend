import { z } from "zod";

// Step 1: Personal Info
export const step1Schema = z.object({
  bringsYouHere: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .max(2, "You can select up to 2 options only")
    .refine(
      (values) => values.every((val) => bringsYouHereOptions.includes(val)),
      {
        message: "Invalid option selected",
      }
    ),
});

// Step 2: Address Info
export const step2Schema = z.object({
  tech: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .max(5, "You can select up to 5 options only")
    .refine((values) => values.every((val) => techOptions.includes(val)), {
      message: "Invalid option selected",
    }),
  business: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .max(5, "You can select up to 5 options only")
    .refine((values) => values.every((val) => businessOptions.includes(val)), {
      message: "Invalid option selected",
    }),
  creative: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .max(5, "You can select up to 5 options only")
    .refine((values) => values.every((val) => creativeOptions.includes(val)), {
      message: "Invalid option selected",
    }),
  academic: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .max(5, "You can select up to 5 options only")
    .refine((values) => values.every((val) => academicOptions.includes(val)), {
      message: "Invalid option selected",
    }),
});

// Step 3: Account Info
export const step3Schema = z.object({
  currentRole: z
    .array(z.string())
    .min(1, "Please select at least 1 option")
    .refine(
      (values) => values.every((val) => currentRoleOptions.includes(val)),
      {
        message: "Invalid option selected",
      }
    ),
});

// Step 4: Confirmation (just agree to terms)
export const step4Schema = z.object({
  education: z.string().min(1, "Please select at least 1 option"),
});

// Combined schema (optional, for final submission)
export const fullSignupFormSchema = z.object({
    ...step1Schema.shape,
    ...step2Schema.shape,
    ...step3Schema.shape,
    ...step4Schema.shape,
})

export const getStepFields = (step) => {
  switch (step) {
    case 1:
      return Object.keys(step1Schema);
    case 2:
      return Object.keys(step2Schema);
    case 3:
      return Object.keys(step3Schema);
    case 4:
      return Object.keys(step4Schema);
    default:
      return [];
  }
};

export const bringsYouHereOptions = [
  "Learn something new",
  "Advance my career",
  "Master a specific skill",
  "Collaborate or network",
  "Support school/university work",
];

export const techOptions = [
  "Web Dev",
  "Mobile Dev",
  "UI/UX",
  "AI",
  "Cybersecurity",
];
export const businessOptions = ["Marketing", "Finance", "Entrepreneurship"];
export const creativeOptions = ["Design", "Animation", "Writing"];
export const academicOptions = ["Math", "Science", "Languages"];
export const currentRoleOptions = [
  "Student",
  "Working Professional",
  "Intern / Trainee",
  "Freelancer / Self-employed",
  "Job Seeker",
  "Other",
];
export const educationOptions = [
  { label: "Less than high school diploma", value: "10th" },
  { label: "High school diploma", value: "12th" },
  { label: "Bachelor's degree", value: "Bachelors" },
  { label: "Master's degree", value: "Masters" },
  { label: "Doctorate degree", value: "Doctorate" },
];
