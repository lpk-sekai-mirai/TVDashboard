/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

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
    videoId: "fuLIltF0fhI",
  },
];

function channel() {
  const [dateTime, setDateTime] = useState(new Date());
  const [activeChannel, setActiveChannel] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tanggal = dateTime.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const waktu = dateTime.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const channel = channels[activeChannel];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-md">
      {/* Video */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <iframe
          key={channel.videoId}
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${channel.videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          title={`LIVE STREAMING ${channel.name}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        {/* LIVE Indicator */}
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-bold text-white shadow-lg">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
          LIVE
        </div>

        {/* Tanggal & Waktu */}
        <div className="absolute right-4 top-12 z-10 rounded-lg bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          {tanggal} | {waktu} WITA
        </div>
      </div>

      {/* Channel Selector */}
      <div className="border-t border-gray-200 bg-white p-3">
        <div className="flex gap-2 overflow-x-auto">
          {channels.map((item, index) => (
            <button
              key={item.videoId}
              onClick={() => setActiveChannel(index)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeChannel === index
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default channel;