"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArticleGrid } from "./ArticlesGrid";
import { SearchInput } from "./SearchInput";
import { Article } from "../lib/types";

type NewsTabsProps = {
  articles: Article[];
};

const ArticlesTabs: React.FC<NewsTabsProps> = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentlyViewed, setRecentlyViewed] = useState<Article[]>([]);

  useEffect(() => {
    const storedRecentlyViewed = localStorage.getItem("recentlyViewedNews");
    if (storedRecentlyViewed) {
      setRecentlyViewed(JSON.parse(storedRecentlyViewed));
    }
  }, []);

  const handleReadMore = (article: Article) => {
    const updatedRecentlyViewed = [
      article,
      ...recentlyViewed.filter((a) => a.url !== article.url),
    ].slice(0, 10);
    setRecentlyViewed(updatedRecentlyViewed);
    localStorage.setItem(
      "recentlyViewedNews",
      JSON.stringify(updatedRecentlyViewed)
    );
    window.open(article.url, "_blank");
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title !== "[Removed]" &&
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getGridClass = (index: number, isRecentlyViewed: boolean): string => {
    if (isRecentlyViewed || searchTerm) return "col-span-1 row-span-1"; // Apply the grid class for recently-viewed or if there's a search term
    if (index === 0 || index === 7 || index === 10 || index === 17)
      return "col-span-2 row-span-2";
    return "col-span-1 row-span-1";
  };

  return (
    <div className="w-full p-4 bg-gray-900 text-gray-100">
      <SearchInput searchTerm={searchTerm} onSearch={setSearchTerm} />
      <Tabs defaultValue="all-news" className="w-full my-4 ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="all-news">All News</TabsTrigger>
          <TabsTrigger value="recently-viewed">Recently Viewed</TabsTrigger>
        </TabsList>
        <TabsContent value="all-news">
          <ArticleGrid
            articles={filteredArticles}
            onReadMore={handleReadMore}
            getGridClass={(index) => getGridClass(index, false)}
            isAllNewsTab={true}
            searchTerm={searchTerm}
          />
        </TabsContent>
        <TabsContent value="recently-viewed">
          <ArticleGrid
            articles={recentlyViewed}
            onReadMore={handleReadMore}
            getGridClass={(index) => getGridClass(index, true)}
            isAllNewsTab={false}
            searchTerm={searchTerm}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArticlesTabs;
