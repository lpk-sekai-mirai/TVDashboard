import { useState } from "react";

interface Channel {
  name: string;
  videoId: string;
}

const channels: Channel[] = [
  { name: "Kompas TV", videoId: "DOOrIxw5xOw" },
  { name: "CNN Indonesia", videoId: "PDDOkUq33Sw" },
  // { name: "TVRI Nasional", videoId: "QqSJlAU" },
  { name: "NHK Japan", videoId: "IimtbuqYIE8" },
];

function Channel() {
  const [activeChannel, setActiveChannel] = useState(0);
  const active = channels[activeChannel];

  return (
    <section className="group relative h-full min-h-0 w-full overflow-hidden rounded-xl bg-black shadow-md">
      {/* VIDEO */}
      <div className="relative h-full w-full overflow-hidden">
        <iframe
          key={active.videoId}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={`LIVE STREAMING ${active.name}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* LABEL LIVE */}
        <div className="absolute left-3 top-3 z-20 flex items-center gap-2 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          LIVE
        </div>

        {/* GRADIENT BAWAH */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* TOMBOL CHANNEL */}
        <div className="pointer-events-none absolute bottom-4 left-3 right-3 z-30 flex justify-center opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
          <div className="flex flex-wrap justify-center gap-2">
            {channels.map((item, index) => (
              <button
                key={item.videoId}
                onClick={() => setActiveChannel(index)}
                className={`rounded-lg px-4 py-2 text-sm font-bold shadow-lg transition 2xl:px-5 2xl:py-2.5 2xl:text-base ${
                  activeChannel === index
                    ? "bg-primary-500 text-white"
                    : "bg-white/90 text-gray-800 hover:bg-white"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Channel;