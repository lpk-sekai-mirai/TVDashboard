// import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="relative z-0 w-full text-white py-4 bg-primary">
      <div className="flex flex-wrap items-center justify-center gap-x-48">
        {/* WhatsApp */}
        <div className="flex items-center gap-3">
          <FaWhatsapp size={54} className="shrink-0 text-white" />

          <h2 className="text-lg font-bold md:text-3xl">
            0852 8399 0095
          </h2>
        </div>

        {/* Instagram */}
        <div className="flex items-center gap-3">
          <FaInstagram size={54} className="shrink-0 text-white" />

          <h2 className="text-lg font-bold md:text-3xl">
            lpk_sekaimiraicemerlangind
          </h2>
        </div>

        {/* Alamat */}
        <div className="flex items-center gap-3">
          <FaLocationDot size={54} className="shrink-0 text-white" />

          <h2 className="text-lg font-bold md:text-3xl">
            Jl. RA Kartini No.96 B
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Contact;