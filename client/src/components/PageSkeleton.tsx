import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

type TableSkeletonProps = {
  rows?: number;
  className?: string;
};

export function TableSkeleton({ rows = 6, className }: TableSkeletonProps) {
  return (
    <div className={cn("space-y-2", className)} aria-label="Loading table">
      {Array.from({ length: rows }, (_, index) => (
        <Skeleton key={index} className="h-14 w-full rounded-xl" />
      ))}
    </div>
  );
}
