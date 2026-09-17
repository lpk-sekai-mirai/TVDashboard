
import { useEffect, useState } from "react";

interface WordPressArticle {
  id: number;
  date: string;
  slug: string;
  status: string;
  link: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    ["wp:featuredmedia"]?: {
      source_url: string;
      alt_text: string;
    }[];
    ["wp:term"]?: {
      name: string;
      taxonomy: string;
    }[][];
  };
}

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  link: string;
}

const WORDPRESS_API =
  "https://sekaimiraicemerlang.com/wp-json/wp/v2/posts";

function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(
    html,
    "text/html",
  );

  return doc.body.textContent?.trim() ?? "";
}

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function mapWordPressArticle(
  post: WordPressArticle,
): Article {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];

  const category =
    terms.find((term) => term.taxonomy === "category")
      ?.name ?? "General";

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    id: post.id,
    category,
    date: formatDate(post.date),
    title: stripHtml(post.title.rendered),
    description: stripHtml(post.excerpt.rendered),
    image,
    link: post.link,
  };
}

function Event() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `${WORDPRESS_API}?per_page=5&_embed`,
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil berita");
        }

        const data: WordPressArticle[] =
          await response.json();

        const mappedArticles = data
          .filter((post) => post.status === "publish")
          .map(mapWordPressArticle);

        setArticles(mappedArticles);
      } catch (err) {
        console.error("Error mengambil berita:", err);
        setError("Berita tidak dapat dimuat");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (
      articles.length > 0 &&
      currentIndex >= articles.length
    ) {
      setCurrentIndex(0);
    }
  }, [articles.length, currentIndex]);

  useEffect(() => {
    if (articles.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === articles.length - 1 ? 0 : prev + 1,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [articles.length]);

  const nextArticle = () => {
    setCurrentIndex((prev) =>
      prev === articles.length - 1 ? 0 : prev + 1,
    );
  };

  const prevArticle = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - 1 : prev - 1,
    );
  };

  if (loading) {
    return (
      <section className="flex h-full items-center justify-center overflow-hidden rounded-xl border-2 border-gray-500 bg-white px-6 py-4">
        <p className="text-gray-600">
          Memuat berita terbaru...
        </p>
      </section>
    );
  }

  if (error || articles.length === 0) {
    return (
      <section className="flex h-full items-center justify-center overflow-hidden rounded-xl border-2 border-gray-500 bg-white px-6 py-4">
        <p className="text-gray-600">
          {error || "Belum ada berita tersedia"}
        </p>
      </section>
    );
  }

  const article = articles[currentIndex];

  return (
    <section className="grid h-full min-h-0 min-w-0 grid-cols-[1fr_3fr] gap-6 overflow-hidden rounded-xl border-2 border-gray-500 bg-white px-6 py-4">
      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="text-2xl font-normal leading-tight text-gray-900 2xl:text-2xl">
          Berita & Artikel | 記事
        </h2>

        <p className="mt-1 text-sm leading-tight text-gray-600 2xl:text-lg">
          Informasi kegiatan terbaru LPK
        </p>
      </div>

      <div className="flex min-h-0 min-w-0 flex-col">
        <div className="flex shrink-0 items-center justify-between gap-4">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-xm font-semibold text-white 2xl:text-md">
            {article.category}
          </span>

          <span className="text-base font-semibold text-gray-900 2xl:text-md">
            {article.date}
          </span>
        </div>

        <article
          key={article.id}
          className="mt-2 min-h-0 flex-1 overflow-hidden"
        >
          <h3 className="line-clamp-1 text-xl font-bold leading-tight text-gray-900 2xl:text-2xl">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-xs leading-tight text-gray-700 2xl:text-lg">
            {article.description}
          </p>
        </article>

        <div className="mt-2 flex shrink-0 items-center justify-between">
          <button
            onClick={prevArticle}
            className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            aria-label="Artikel sebelumnya"
          >
            ←
          </button>

          <div className="flex items-center justify-center gap-2">
            {articles.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-primary-500"
                    : "w-1.5 bg-gray-300"
                }`}
                aria-label={`Artikel ${index + 1}`}
                aria-current={
                  index === currentIndex ? "true" : undefined
                }
              />
            ))}
          </div>

          <button
            onClick={nextArticle}
            className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
            aria-label="Artikel berikutnya"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Event;