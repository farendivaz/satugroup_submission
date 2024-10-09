import { Skeleton } from "@/components/ui/skeleton";
import { Article } from "../lib/types";

type ArticleCardProps = {
  article: Article;
  onReadMore: (article: Article) => void;
  gridClass: string;
  index: number;
  isAllNewsTab: boolean;
  searchTerm: string;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onReadMore,
  gridClass,
  index,
  isAllNewsTab,
  searchTerm,
}) => {
  const isLargeCard =
    !searchTerm &&
    isAllNewsTab &&
    (index === 0 || index === 7 || index === 10 || index === 17);

  if (!article) {
    return (
      <div
        className={`p-4 cursor-pointer bg-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${gridClass}`}
      >
        <Skeleton
          className={`w-full ${
            isLargeCard ? "h-[600px]" : "h-48"
          } mb-4 rounded`}
        />
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-4" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    );
  }

  return (
    <div
      onClick={() => onReadMore(article)}
      className={`p-4 cursor-pointer  bg-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${gridClass}`}
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className={`w-full  ${
            isLargeCard ? "h-[600px]" : "h-48"
          } object-cover mb-4 rounded`}
        />
      )}
      <h2 className="font-bold text-xl mb-2 text-blue-400">{article.title}</h2>
      <p className="text-sm mb-4 text-gray-300">{article.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
        <span>{article.source.name}</span>
      </div>
    </div>
  );
};
