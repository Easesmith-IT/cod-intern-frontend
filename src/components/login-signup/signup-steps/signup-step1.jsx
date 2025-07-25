import { bringsYouHereOptions } from "@/schemas/SignupStepsSchema";
import { MultiSelectCardGroup } from "./multi-select-card-group";
import { Heading } from "./heading";

function SignupStep1() {

  return (
    <div className="flex-1 mt-5 md:mt-10">
      <Heading heading="What brings you here?" para="Select up to 2 options" />

      <MultiSelectCardGroup
        name="bringsYouHere"
        options={bringsYouHereOptions}
        max={2}
        className="mt-10 md:mt-20"
      />
    </div>
  );
}

export default SignupStep1;
