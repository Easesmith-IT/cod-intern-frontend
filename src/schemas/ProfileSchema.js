import { z } from "zod";

export const ProfileSchema = z.object({
  profileImg: z.any(),
  profileImgPreview: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^[0-9]{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),
  contactMethod: z.string().optional(),
  bio: z.string().optional(),
  profileVisibility: z.boolean().optional(),
});
