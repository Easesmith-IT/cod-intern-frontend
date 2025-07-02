const { z } = require("zod");

export const ApplyNowSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string(),
  email: z.string(),
  education: z.string(),
  graduationYear: z.string(),
});