import { z } from "zod";

export const NotificationSchema = z.object({
  pauseAllNotifications: z.boolean().optional(),
  courseProgressReminders: z.boolean().optional(),
  assignmentDeadlines: z.boolean().optional(),
  liveEventsAndWebinars: z.boolean().optional(),
  weeklyLearningTips: z.boolean().optional(),
  promotionsAndDiscounts: z.boolean().optional(),
});
