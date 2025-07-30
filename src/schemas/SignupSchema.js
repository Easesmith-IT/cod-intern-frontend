import { z } from "zod";

export const SignupSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters long." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces.",
    })
    .refine((val) => val.trim().length >= 4, {
      message: "Name must contain at least 4 non-space characters.",
    }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/, {
      message:
        "Password must include uppercase, lowercase, number, and special character.",
    }),
  rememberMe: z.boolean().default(false),
});

export const SignupOtpSchema = z.object({
  code: z
    .string()
    .trim()
    .regex(/^\d{6}$/, {
      message: "Code must be exactly 6 digits.",
    }),
});
