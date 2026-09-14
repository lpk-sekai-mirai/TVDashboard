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
    setCurrentIndex((prev) =>
      prev === articles.length - 1 ? 0 : prev + 1,
    );
  };

  const prevArticle = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? articles.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === articles.length - 1 ? 0 : prev + 1,
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const article = articles[currentIndex];

  return (
    <section className="grid h-full min-h-0 min-w-0 grid-cols-[1fr_3fr] gap-6 overflow-hidden rounded-xl border-2 border-gray-500 bg-white px-6 py-4">
      {/* KOLOM KIRI */}
      <div className="flex min-w-0 flex-col justify-center">
        <h2 className="text-2xl font-normal leading-tight text-gray-900 2xl:text-2xl">
          Berita & Artikel | 記事
        </h2>

        <p className="mt-1 text-sm leading-tight text-gray-600 2xl:text-lg">
          Informasi kegiatan terbaru LPK
        </p>
      </div>

      {/* KOLOM KANAN */}
      <div className="flex min-h-0 min-w-0 flex-col">
        {/* CATEGORY + DATE */}
        <div className="flex shrink-0 items-center justify-between gap-4">
          <span className="rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-white 2xl:text-md">
            {article.category}
          </span>

          <span className="text-base font-semibold text-gray-900 2xl:text-lg">
            {article.date}
          </span>
        </div>

        {/* ARTICLE */}
        <article
          key={article.id}
          className="mt-2 min-h-0 flex-1 overflow-hidden"
        >
          <h3 className="line-clamp-2 text-xl font-bold leading-tight text-gray-900 2xl:text-xl">
            {article.title}
          </h3>

          <p className="mt-3 line-clamp-2 text-sm leading-snug text-gray-700 2xl:text-md">
            {article.description}
          </p>
        </article>

        {/* NAVIGATION */}
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