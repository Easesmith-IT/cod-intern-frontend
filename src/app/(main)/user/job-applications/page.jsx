"use client";

import { Application } from "@/components/applications/application";
import { PaginationComp } from "@/components/PaginationComp";
import DataNotFound from "@/components/shared/DataNotFound";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useApiQuery } from "@/hooks/useApiQuery";
import { readCookie } from "@/lib/readCookie";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const JobApplications = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const userInfo = readCookie("userInfo");
  const router = useRouter();

  const { data, isLoading, error } = useApiQuery({
    url: `/student/jobs/job-applications/get?email=${
      userInfo?.email
      // "agrawalsweksha@gmail.com"
    }&page=${page}&limit=${10}&search=${searchTerm}`,
    queryKeys: ["job-application", page, searchTerm, userInfo?.email],
  });

  console.log("data", data);

  useEffect(() => {
    if (data?.pagination) {
      setPageCount(() => data?.pagination?.totalPages);
    }
  }, [data]);

  return (
    <div className="section-container space-y-6 pt-10 pb-12 md:pb-24 md:pt-20">
      <div>
        <button
          onClick={() => router.push(`/admin/jobs/${params.jobId}`)}
          className="flex gap-1 items-center"
        >
          <ArrowLeft className="text-3xl cursor-pointer" />
          <h2 className="text-2xl font-stolzl relative z-10 leading-9 lg:leading-14 md:text-4xl  text-para-3 font-medium capitalize">
            Job Applications
          </h2>
        </button>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search jobs applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="table-container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Application ID</TableHead>
              <TableHead className="w-60">Job</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Phone</TableHead>
              {/* <TableHead>Applications</TableHead> */}
              {/* <TableHead className="w-20">Status</TableHead> */}
              {/* <TableHead className="text-right">Actions</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.applications?.map((application) => (
              <Application key={application._id} application={application} />
            ))}

            {isLoading &&
              Array.from({ length: 5 }).map((_, index) => (
                <Application.Skeleton key={index} />
              ))}
          </TableBody>
        </Table>

        {data?.applications?.length === 0 && !isLoading && (
          <DataNotFound name="Job Applications" />
        )}

        <PaginationComp
          page={page}
          pageCount={pageCount}
          setPage={setPage}
          className="mt-8 mb-5"
        />
      </div>
    </div>
  );
};

export default JobApplications;
