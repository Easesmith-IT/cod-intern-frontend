"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { CourseCard } from "@/components/home/popular-courses/course-card";
import { Search } from "@/components/login-signup/signup-steps/search";
import { PaginationComp } from "@/components/PaginationComp";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const CoursesClient = () => {
  const [searchQyery, setSearchQyery] = useState("");
  const [sort, setSort] = useState("new");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(2);
  return (
    <section className="section-container pt-8 md:pt-12 pb-12 md:pb-24">
      <CustomBreadCrumb
        options={[
          { label: "Home", url: "/", isLink: true },
          { label: "Course Listing Page", url: "", isLink: false },
        ]}
      />

      <div className="flex justify-between gap-3 items-center mt-6 sm:mt-10">
        <h2 className="text-2xl font-stolzl relative leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
          All courses
        </h2>
        <div className="md:hidden">
          <Select value={sort} onValueChange={(value) => setSort(value)}>
            <SelectTrigger
              iconClassName="text-white"
              className="py-5 bg-para-3 text-white font-stolzl rounded"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Newly published</SelectItem>
              <SelectItem value="old">Previously published</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-between items-center gap-5 mt-6">
        <Search
          placeholder="Search"
          searchQuery={searchQyery}
          setSearchQuery={setSearchQyery}
          className="mx-0"
          inputClassName="border-border-1"
          iconClassName="bg-transparent"
        />

        <div className="hidden md:block">
          <Select value={sort} onValueChange={(value) => setSort(value)}>
            <SelectTrigger
              iconClassName="text-white"
              className="py-5 bg-para-3 text-white font-stolzl rounded"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Newly published</SelectItem>
              <SelectItem value="old">Previously published</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        <CourseCard
          src="/course/Data Analysis using Python.png"
          name="Data Analysis using Python"
        />
        <CourseCard
          src="/course/Data Visualization using Power BI.png"
          name="Data Visualization using Power BI"
        />
        <CourseCard
          src="/course/Data Visualization using Tableau.png"
          name="Data Visualization using Tableau"
        />
        <CourseCard
          src="/course/Machine Learning and Artificial Intelligence with Python.png"
          name="Machine Learning and Artificial Intelligence with Python"
        />
        <CourseCard
          src="/course/Data Analysis using Python.png"
          name="Data Analysis using Python"
        />
        <CourseCard
          src="/course/Data Visualization using Power BI.png"
          name="Data Visualization using Power BI"
        />
        <CourseCard
          src="/course/Data Visualization using Tableau.png"
          name="Data Visualization using Tableau"
        />
        <CourseCard
          src="/course/Machine Learning and Artificial Intelligence with Python.png"
          name="Machine Learning and Artificial Intelligence with Python"
        />
        <CourseCard
          src="/course/Data Analysis using Python.png"
          name="Data Analysis using Python"
        />
        <CourseCard
          src="/course/Data Visualization using Power BI.png"
          name="Data Visualization using Power BI"
        />
        <CourseCard
          src="/course/Data Visualization using Tableau.png"
          name="Data Visualization using Tableau"
        />
        <CourseCard
          src="/course/Machine Learning and Artificial Intelligence with Python.png"
          name="Machine Learning and Artificial Intelligence with Python"
        />
      </div>

      <PaginationComp
        page={page}
        pageCount={pageCount}
        setPage={setPage}
        className="mt-10"
      />
    </section>
  );
};
