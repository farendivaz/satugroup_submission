"use client";

import { ArticleCard } from "./ArticleCard";
import { Article } from "../lib/types";

type ArticleGridProps = {
  articles: Article[];
  onReadMore: (article: Article) => void;
  getGridClass: (index: number) => string;
  isAllNewsTab: boolean;
  searchTerm: string;
};
export const ArticleGrid: React.FC<ArticleGridProps> = ({
  articles,
  onReadMore,
  getGridClass,
  isAllNewsTab,
  searchTerm,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {articles.map((article, index) => (
      <ArticleCard
        key={index}
        index={index}
        article={article}
        onReadMore={onReadMore}
        gridClass={getGridClass(index)}
        isAllNewsTab={isAllNewsTab}
        searchTerm={searchTerm}
      />
    ))}
  </div>
);
