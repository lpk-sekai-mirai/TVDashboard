import Logo from "../assets/logoFull.webp";
import { useEffect, useState } from "react";

function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

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
    <footer className="relative z-0 w-full text-black">
      <div className="mx-auto lg:max-w-7xl lg:px-6 lg:py-2 md:px-4 md:py-1 md:max-w-2xl">
        <div className="flex items-center justify-between gap-6">
          <div className="shrink-0">
            <img
              src={Logo}
              alt="Logo LPK Sekai Mirai"
              className="lg:h-auto lg:w-56 object-contain md:w-28"
            />
          </div>
          <div className="shrink-0 text-right font-semibold leading-tight lg:text-2xl md:text-xs">
            {tanggal}
            <br />
            {waktu} WITA
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
