import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";

export const CourseCategory = ({
  index,
  name,
  label,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <CarouselItem className="basis-auto">
      <div className="pl-1">
        <Button
          // disabled={index !== 0}
          variant={selectedCategory === label ? "codIntern" : "outline"}
          className="rounded text-xs sm:text-sm"
          onClick={() => setSelectedCategory(label)}
        >
          {label}
        </Button>
      </div>
    </CarouselItem>
  );
};
