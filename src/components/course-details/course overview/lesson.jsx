import { contentTypes } from "@/constants/constants";
import { formatMinutes } from "@/lib/utils";
import { Clock4 } from "lucide-react";

export const Lesson = ({ lesson }) => {
  const lessonType = contentTypes.find(
    (type) => type.value === lesson.contentType
  );

  console.log("lessonType", lessonType);

  return (
    <li className="flex justify-between items-center gap-4">
      <h3 className="text-xs sm:text-sm font-stolzl font-book">
        {lesson.title}
      </h3>
      <div className="flex gap-4 items-center">
        {/* <div className="flex gap-2 items-center">
          <Clock4 className="size-4" />
          <p className="text-xs sm:text-sm text-muted-foreground">
            {lesson.duration ? formatMinutes(lesson.duration) : "0 min"}
          </p>
        </div> */}
        {lessonType && (
          <div className="flex items-center gap-1">
            {lessonType.icon && <lessonType.icon className="size-4" />}
            <span className="text-xs sm:text-sm text-muted-foreground">
              {lessonType.label}
            </span>
          </div>
        )}
      </div>
    </li>
  );
};
