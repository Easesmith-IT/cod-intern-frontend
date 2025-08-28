import { clsx } from "clsx";
import { formatDuration, intervalToDuration } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function previewImage(
  image,
  placeholder = "/our-mentors/user-placeholder.png"
) {
  return image ? `${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}` : placeholder;
}

// function formatDuration(minutes) {
//   if (!minutes || minutes < 0) return "0m";

//   const hrs = Math.floor(minutes / 60);
//   const mins = minutes % 60;

//   if (hrs > 0 && mins > 0) return `${hrs}h ${mins}m`;
//   if (hrs > 0) return `${hrs}h`;
//   return `${mins}m`;
// }

export function formatMinutes(minutes) {
  if (!minutes || minutes < 0) return "0 minutes";

  return formatDuration(
    intervalToDuration({ start: 0, end: minutes * 60 * 1000 }),
    { format: ["months", "weeks", "days", "hours", "minutes"] }
  );
}

export function secondsBetween(date1, date2) {
  return Math.max(Math.floor((new Date(date2) - new Date(date1)) / 1000), 0);
}

export function getYears(start, end = new Date().getFullYear() + 5) {
  const years = [];
  for (let year = start; year <= end; year++) {
    years.push(year.toString());
  }
  return years;
}
