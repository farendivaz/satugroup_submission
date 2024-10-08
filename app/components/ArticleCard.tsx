import { Article } from "../lib/types";

export const ArticleCard: React.FC<{
  article: Article;
  onReadMore: (article: Article) => void;
  gridClass: string;
}> = ({ article, onReadMore, gridClass }) => (
  <div
    className={`p-4 bg-black rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 ${gridClass}`}
  >
    {article.urlToImage && (
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full object-cover mb-4 rounded"
      />
    )}
    <h2 className="font-bold text-xl mb-2 text-blue-400">{article.title}</h2>
    <p className="text-sm mb-4 text-gray-300">{article.description}</p>
    <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
      <span>{article.source.name}</span>
    </div>
    <button
      onClick={() => onReadMore(article)}
      className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-300"
    >
      Read More
    </button>
  </div>
);
