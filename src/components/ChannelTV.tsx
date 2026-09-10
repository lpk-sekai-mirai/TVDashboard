import { useEffect, useState } from "react";
import testingVideo from "../assets/testing.mp4";

function ChannelTV() {
  const [dateTime, setDateTime] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(false);
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
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white shadow-md ${
        isExpanded ? "z-50" : ""
      }`}
    >
      {/* Header */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/DOOrIxw5xOw"
          title="LIVE STREAMING 24 JAM KOMPASTV"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        {/* Tanggal & Waktu */}
        <div className="absolute right-4 top-4 z-10 rounded-lg bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
          {tanggal} | {waktu} WITA
        </div>
      </div>
    </div>
  );
}
export default ChannelTV;
