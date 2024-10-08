import ArticlesTabs from "./components/ArticlesTab";
import { getNews } from "./lib/news";

export default async function Home() {
  const data = await getNews();
  return (
    <div className="w-11/12 mx-auto  font-[family-name:var(--font-geist-sans)]">
      <ArticlesTabs articles={data.articles.slice(0, 17)} />
    </div>
  );
}
