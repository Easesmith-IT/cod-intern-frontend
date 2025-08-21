import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { Clock } from "lucide-react";

export const Application = ({ application }) => {
  const {
    customId,
    job,
    fullName,
    email,
    gender,
    dateOfBirth,
    phoneNumber,
    _id,
  } = application || {};

  return (
    <TableRow>
      <TableCell className="font-medium">{customId}</TableCell>
      <TableCell className="font-medium">
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-medium whitespace-pre-wrap w-60">
              {job.title}
            </div>
            <div className="text-sm text-muted-foreground flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Posted{" "}
              {job.postingDate &&
                format(new Date(job.postingDate), "dd-MM-yyyy")}
            </div>
          </div>
        </div>
      </TableCell>
      <TableCell className="capitalize">{job.company}</TableCell>
      <TableCell className="capitalize">{job.category}</TableCell>
      <TableCell className="capitalize">{fullName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell className="capitalize">{gender}</TableCell>
      <TableCell>
        {dateOfBirth && format(new Date(dateOfBirth), "dd/MM/yyyy")}
      </TableCell>
      <TableCell>{phoneNumber}</TableCell>
      {/* <TableCell>
        <div className="flex flex-col gap-2 items-start justify-center">
          <Badge
            className={cn("capitalize h-6", getStatusColorCode(status))}
          >
            {status}
          </Badge>
        </div>
      </TableCell> */}
      {/* <TableCell className="text-right">
        <Actions onDelete={onDelete} onEdit={onEdit} onView={onView} />
      </TableCell> */}
    </TableRow>
  );
};

Application.Skeleton = function ApplicationSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className="h-4 w-24" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-32" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-28" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-20" />
      </TableCell>
    </TableRow>
  );
};
