import { z } from "zod";

export const LoginInSchema = z.object({
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
