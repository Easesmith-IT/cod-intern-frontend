"use client";

import { CustomBreadCrumb } from "@/components/custom-bread-crumb";
import { CourseCard } from "@/components/home/popular-courses/course-card";
import { Search } from "@/components/login-signup/signup-steps/search";
import { PaginationComp } from "@/components/PaginationComp";
import DataNotFound from "@/components/shared/DataNotFound";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { useApiQuery } from "@/hooks/useApiQuery";
import { useEffect, useState } from "react";

export const CoursesClient = () => {
  const [searchQyery, setSearchQyery] = useState("");
  const [sort, setSort] = useState("desc");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [limit, setLimit] = useState(12);

  const { data, isLoading, error } = useApiQuery({
    url: `/student/courses?page=${page}&limit=${limit}&search=${searchQyery}&sortOrder=${sort}`,
    queryKeys: ["courses", page, limit, searchQyery, sort],
  });

  useEffect(() => {
    if (data?.pagination) {
      setPageCount(() => data?.pagination?.totalPages);
    }
  }, [data]);

  useScrollToTop(page);

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
          <Select
            key={sort}
            value={sort}
            onValueChange={(value) => setSort(value)}
          >
            <SelectTrigger
              iconClassName="text-white"
              className="py-5 bg-para-3 text-white font-stolzl rounded"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newly published</SelectItem>
              <SelectItem value="asc">Previously published</SelectItem>
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
          <Select
            key={sort}
            value={sort}
            onValueChange={(value) => setSort(value)}
          >
            <SelectTrigger
              iconClassName="text-white"
              className="py-5 bg-para-3 text-white font-stolzl rounded"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newly published</SelectItem>
              <SelectItem value="asc">Previously published</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {data?.courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            src={course.thumbnail}
            name={course.title}
            rating={course.averageRating}
            duration={course.courseDuration}
          />
        ))}

        {isLoading &&
          Array.from({ length: 4 }).map((_, index) => (
            <CourseCard.Skeleton key={index} />
          ))}
      </div>
      {data?.courses?.length === 0 && !isLoading && (
        <DataNotFound name="Courses" />
      )}

      <PaginationComp
        page={page}
        pageCount={pageCount}
        setPage={setPage}
        className="mt-10"
      />
    </section>
  );
};
