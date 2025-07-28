import { z } from "zod";

export const LearningPreferencesSchema = z.object({
  interfaceTheme: z.string().optional(),
  playbackSpeed: z.string().optional(),
  pauseAllNotifications: z.boolean().optional(),
  courseLanguage: z.string().optional(),
});
