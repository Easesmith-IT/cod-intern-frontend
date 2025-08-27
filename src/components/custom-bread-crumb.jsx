import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const CustomBreadCrumb = ({
  options = [{ label: "Home", url: "/", isLink: true }],
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {options.map(({ isLink, label, url }) => (
          <Fragment key={label}>
            {isLink ? (
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-black font-medium text-sm md:text-base"
                  href={url}
                >
                  {label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-main font-medium text-sm md:text-base line-clamp-1 sm:w-[80%]">
                    {label}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
