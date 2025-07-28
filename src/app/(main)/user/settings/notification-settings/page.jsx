"use client";

import { Form } from "@/components/ui/form";
import { FormFieldComp } from "@/components/user-profile/settings/form-field-comp";
import { NotificationSchema } from "@/schemas/NotificationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const NotificationSettings = () => {
  const form = useForm({
    resolver: zodResolver(NotificationSchema),
    defaultValues: {
      pauseAllNotifications: false,
      courseProgressReminders: false,
      assignmentDeadlines: false,
      liveEventsAndWebinars: false,
      weeklyLearningTips: false,
    },
  });

  const { register, watch, handleSubmit, control, setValue } = form;

  const onSubmit = (data) => {
    console.log("data :", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl lg:text-[46px] text-para-3 font-medium capitalize">
          Notification Settings
        </h2>

        <div className="mt-5">
          <FormFieldComp
            name="pauseAllNotifications"
            title="Pause All Notifications"
          />
          <FormFieldComp
            name="courseProgressReminders"
            title="Course Progress Reminders"
            desc="Stay on track with gentle nudges to continue learning."
          />
          <FormFieldComp
            name="assignmentDeadlines"
            title="Assignment Deadlines"
            desc="Get alerts before tasks, quizzes, or projects are due."
          />
          <FormFieldComp
            name="liveEventsAndWebinars"
            title="Live Events & Webinars"
            desc="Be notified about upcoming sessions and guest events."
          />
          <FormFieldComp
            name="weeklyLearningTips"
            title="Weekly Learning Tips"
            desc="Get helpful tips to boost your learning each week."
          />
          <FormFieldComp
            name="promotionsAndDiscounts"
            title="Promotions & Discounts"
            desc="Receive updates on special offers and free courses."
          />
        </div>
      </form>
    </Form>
  );
};

export default NotificationSettings;
