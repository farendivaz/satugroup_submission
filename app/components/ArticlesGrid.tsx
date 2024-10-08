"use client";

import React, { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import { Article } from "../lib/types";

export const ArticleGrid: React.FC<{
  articles: Article[];
  onReadMore: (article: Article) => void;
  getGridClass: (index: number) => string;
}> = ({ articles, onReadMore, getGridClass }) => (
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {articles.map((article, index) => (
      <ArticleCard
        key={index}
        article={article}
        onReadMore={onReadMore}
        gridClass={getGridClass(index)}
      />
    ))}
  </div>
);
