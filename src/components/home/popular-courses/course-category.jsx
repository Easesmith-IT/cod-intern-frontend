import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";

export const CourseCategory = ({ index }) => {
  return (
    <CarouselItem className="basis-auto">
      <div className="pl-1">
        <Button
          disabled={index !== 0}
          variant={index === 0 ? "codIntern" : "outline"}
          className="rounded"
        >
          Web Development
        </Button>
      </div>
    </CarouselItem>
  );
};
