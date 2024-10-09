import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

type ArticleCardSkeletonProps = {
  gridClass: string;
  index: number;
  isAllNewsTab: boolean;
  searchTerm: string;
};

export const ArticleCardSkeleton: React.FC<ArticleCardSkeletonProps> = ({
  gridClass,
  index,
  isAllNewsTab,
  searchTerm,
}) => {
  const isLargeCard =
    !searchTerm &&
    isAllNewsTab &&
    (index === 0 || index === 7 || index === 10 || index === 17);

  return (
    <div className={`p-4 bg-black rounded-lg shadow-lg ${gridClass}`}>
      <Skeleton
        className={`w-full ${isLargeCard ? "h-[600px]" : "h-48"} mb-4 rounded`}
      />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-3 w-1/4" />
      </div>
    </div>
  );
};
