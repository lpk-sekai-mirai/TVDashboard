import { useState } from "react";

interface Channel {
  name: string;
  videoId: string;
}

const channels: Channel[] = [
  { name: "Kompas TV", videoId: "DOOrIxw5xOw" },
  { name: "CNN Indonesia", videoId: "PDDOkUq33Sw" },
  { name: "NHK Japan", videoId: "IimtbuqYIE8" },
];

function Channel() {
  const [activeChannel, setActiveChannel] = useState(0);
  const active = channels[activeChannel];

  return (
    <section
      className="
        group relative lg:h-full min-h-0 lg:w-full
        overflow-hidden rounded-lg bg-black shadow-md

        md:rounded-sm
        md:h-full
        md:w-full
      "
    >
      <div className="relative h-full w- overflow-hidden">
        <iframe
          key={active.videoId}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={`LIVE STREAMING ${active.name}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* LIVE INDICATOR */}
        <div
          className="
            absolute left-2 lg:top-2 z-20
            flex items-center gap-1.5
            rounded-md bg-red-600
            lg:px-2 lg:py-1 lg:text-sm font-bold text-white shadow-lg

            md:left-3 md:top-1
            md:gap-2 md:rounded-sm
            md:px-2 md:py-1 md:text-[10px]
          "
        >
          <span
            className="
              lg:h-2 
              lg:w-2 
              animate-pulse rounded-full bg-white

              md:h-[4px]
              md:w-[4px]
            "
          />
          LIVE
        </div>

        {/* CHANNEL SELECTOR */}
        <div
          className="
            pointer-events-none absolute bottom-2 left-2 right-2
            z-30 flex justify-center
            opacity-0 transition-opacity duration-300

            group-hover:pointer-events-auto
            group-hover:opacity-100

            md:bottom-4 md:left-3 md:right-3
          "
        >
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {channels.map((item, index) => (
              <button
                key={item.videoId}
                onClick={() => setActiveChannel(index)}
                className={`
                  rounded-md px-2.5 py-1.5
                  text-xs font-bold shadow-lg transition

                  md:rounded-md
                  md:px-4 md:py-2 md:text-sm

                  2xl:px-5 2xl:py-2.5 2xl:text-base

                  ${
                    activeChannel === index
                      ? "bg-primary-500 text-white"
                      : "bg-white/90 text-gray-800 hover:bg-white"
                  }
                `}
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
