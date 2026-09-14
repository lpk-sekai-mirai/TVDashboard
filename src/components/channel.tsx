import { useState } from "react";

interface Channel {
  name: string;
  videoId: string;
}

const channels: Channel[] = [
  {
    name: "Kompas TV",
    videoId: "DOOrIxw5xOw",
  },
  {
    name: "CNN Indonesia",
    videoId: "PDDOkUq33Sw",
  },
  {
    name: "TVRI Nasional",
    videoId: "QqSJlAU",
  },
  {
    name: "NHK Japan",
    videoId: "IimtbuqYIE8",
  },
];

function Channel() {
  const [activeChannel, setActiveChannel] = useState(0);
  const active = channels[activeChannel];

  return (
    <section className="w-full min-w-0 rounded-xl bg-white shadow-md">
      {/* Video */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-xl bg-black">
        <iframe
          key={active.videoId}
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={`LIVE STREAMING ${active.name}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* LIVE Indicator */}
        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
          LIVE
        </div>
      </div>
      {/* Channel Selector */}
      <div className="border-t border-gray-200 bg-white p-3">
        <div className="flex flex-wrap gap-2">
          {channels.map((item, index) => (
            <button
              key={item.videoId}
              onClick={() => setActiveChannel(index)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeChannel === index
                  ? "bg-primary-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Channel;
