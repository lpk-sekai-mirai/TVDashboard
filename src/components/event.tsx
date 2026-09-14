import { useEffect, useState } from "react";

interface Article {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    id: 1,
    category: "General",
    date: "2 July 2026",
    title:
      "Keberangkatan Siswa LPK Sekai Mirai Cemerlang ke Jepang Bulan Juni 2026, Wujud Nyata Mimpi Berkarier di Negeri Sakura",
    description:
      "LPK Sekai Mirai Cemerlang kembali mencatatkan pencapaian dengan memberangkatkan sejumlah siswa menuju Jepang untuk mengikuti program kerja sesuai bidang keahlian yang telah dipersiapkan melalui pelatihan intensif.",
  },
  {
    id: 2,
    category: "General",
    date: "29 May 2026",
    title:
      "Sinergi Disnakertrans Provinsi Sulawesi Tengah dengan LPK Sekai Mirai Cemerlang Indonesia dalam Pelaksanaan Seleksi Calon Peserta Pemagangan Jepang",
    description:
      "Pelaksanaan kegiatan seleksi peserta program pelatihan dan penempatan kerja ke Jepang hasil kolaborasi antara Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Tengah dan LPK Sekai Mirai Cemerlang Indonesia telah dilaksanakan pada tanggal 17 dan 18 April 2026.",
  },
  {
    id: 3,
    category: "Informasi",
    date: "07 April 2026",
    title:
      "Kolaborasi Pelatihan Kerja Bersama Dinas Tenaga Kerja dan Transmigrasi Provinsi Sulawesi Tengah",
    description:
      "Berawal dari kepedulian terhadap tingginya minat masyarakat untuk bekerja di Jepang serta kebutuhan tenaga kerja yang terus berkembang, kami hadir sebagai jembatan yang mempersiapkan peserta agar memiliki kemampuan bahasa, keterampilan, dan mental kerja yang sesuai dengan standar perusahaan di Jepang.",
  },
];

function Event() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextArticle = () => {
    setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
  };

  const prevArticle = () => {
    setCurrentIndex((prev) => (prev === 0 ? articles.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const article = articles[currentIndex];

  return (
    <section className="relative mb-6 w-full min-w-0 rounded-2xl border bg-white px-4 py-3 shadow-md">
      {/* Header */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-gray-800">
          Berita & Artikel | 記事
        </h2>

        <p className="mt-0.5 text-sm text-gray-500">
          Informasi kegiatan terbaru LPK
        </p>
      </div>

      {/* Article */}
      <article
        key={article.id}
        className="min-w-0 rounded-xl transition-all duration-500"
      >
        {/* Category + Date */}
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-gray-900 px-2 py-1 text-sm text-white">
            {article.category}
          </span>

          <span className="text-lg text-gray-500">{article.date}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 line-clamp-1 text-xl font-bold leading-relaxed text-gray-800">
          {article.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {article.description}
        </p>
      </article>

      {/* Navigation */}
      <div className="mt-3 flex items-center justify-between gap-3">
        <button
          onClick={prevArticle}
          className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-200"
          aria-label="Artikel sebelumnya"
        >
          ←
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2">
          {articles.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-5 bg-primary-500"
                  : "w-1.5 bg-gray-300"
              }`}
              aria-label={`Artikel ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            />
          ))}
        </div>

        <button
          onClick={nextArticle}
          className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-200"
          aria-label="Artikel berikutnya"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default Event;
