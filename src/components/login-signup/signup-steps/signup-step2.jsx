"use client";

import { Label } from "@/components/ui/label";
import {
  academicOptions,
  businessOptions,
  creativeOptions,
  techOptions,
} from "@/schemas/SignupStepsSchema";
import { MultiSelectCardGroup } from "./multi-select-card-group";
import { Search } from "./search";
import { useState } from "react";
import { Heading } from "./heading";

function SignupStep2({ form }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 mt-5 md:mt-10">
      <Heading
        heading="Pick your areas of interest"
        para="Select up to 5 options"
      />

      <Search
        className="mt-5"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex flex-col gap-4 mt-10 max-w-[1200px] mx-auto">
        <div>
          <Label>Tech</Label>
          <MultiSelectCardGroup
            name="tech"
            options={techOptions}
            max={5}
            className="mt-4"
            containerClassName="grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
            itemClassName="px-4 py-3"
          />
        </div>
        <div>
          <Label>Business</Label>
          <MultiSelectCardGroup
            name="business"
            options={businessOptions}
            max={5}
            className="mt-4"
            containerClassName="grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
            itemClassName="px-4 py-3"
          />
        </div>
        <div>
          <Label>Creative</Label>
          <MultiSelectCardGroup
            name="creative"
            options={creativeOptions}
            max={5}
            className="mt-4"
            containerClassName="grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
            itemClassName="px-4 py-3"
          />
        </div>
        <div>
          <Label>Academic</Label>
          <MultiSelectCardGroup
            name="academic"
            options={academicOptions}
            max={5}
            className="mt-4"
            containerClassName="grid-cols-1 md:grid-cols-3 lg:grid-cols-6"
            itemClassName="px-4 py-3"
          />
        </div>
      </div>
    </div>
  );
}

export default SignupStep2;
