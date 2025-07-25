"use client";

import React, { useState } from "react";
import { Search } from "./search";
import { Heading } from "./heading";
import { currentRoleOptions } from "@/schemas/SignupStepsSchema";
import { MultiSelectCardGroup } from "./multi-select-card-group";

function SignupStep3() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 mt-5 md:mt-10">
      <Heading heading="Your Current Role" para="Select 1 options" />

      <Search
        className="mt-5"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        placeholder="Find a role"
      />

      <div className="flex flex-col gap-4 mt-10">
        <MultiSelectCardGroup
          name="currentRole"
          options={currentRoleOptions}
          max={1}
          className="mt-4"
          containerClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          itemClassName="px-6 py-5"
        />
      </div>
    </div>
  );
}

export default SignupStep3;
