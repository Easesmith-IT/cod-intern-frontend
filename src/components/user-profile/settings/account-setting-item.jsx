import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const AccountSettingItem = ({ title, desc, child = true }) => {
  return (
    <div className="py-3 flex justify-between gap-2 items-center border-b group">
      <div>
        <h4 className="font-stolzl font-medium text-base sm:text-lg">
          {title}
        </h4>
        <p className="font-stolzl text-xs sm:text-sm font-book text-para mt-1">
          {desc}
        </p>
      </div>
      {child ? (
        <ChevronRight className="group-hover:rotate-90 group-hover:scale-105 transition-all" />
      ) : (
        <Button variant="destructive" className="animate-btn">
          Delete
        </Button>
      )}
    </div>
  );
};
