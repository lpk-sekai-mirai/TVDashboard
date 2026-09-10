function Event() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Event & Kegiatan
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Informasi kegiatan terbaru LPK
        </p>
      </div>

      <div className="space-y-4">

        {/* Event 1 */}
        <article className="rounded-xl border p-5 transition hover:shadow-md">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
              EVENT
            </span>

            <span className="text-sm text-gray-500">
              10 September 2026
            </span>
          </div>

          <h3 className="mb-2 text-lg font-bold">
            Pelatihan Bahasa Jepang
          </h3>

          <p className="text-sm leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Event;