
import Logo from "../assets/logoFull.webp";
import { useEffect, useState } from "react";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

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
      {/* ================= LOGO + WAKTU ================= */}
      <div className="mx-auto max-w-7xl px-6 py-2">
        <div className="flex items-center justify-between gap-6">
          {/* Logo mentok kiri */}
          <div className="shrink-0">
            <img
              src={Logo}
              alt="Logo LPK Sekai Mirai"
              className="h-auto w-56 object-contain md:w-96"
            />
          </div>

          {/* Waktu mentok kanan */}
          <div className="shrink-0 text-right text-5xl font-semibold leading-tight 2xl:text-4xl">
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