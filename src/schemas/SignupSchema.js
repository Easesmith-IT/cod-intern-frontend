import { z } from "zod";

export const SignupSchema = z.object({
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
