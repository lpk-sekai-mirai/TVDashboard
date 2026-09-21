import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="relative z-0 w-full lg:py-3 bg-primary text-white md:py-1">
      <div className="flex flex-wrap items-center justify-center lg:gap-x-48 lg:gap-y-2 lg:px-6 md:px-2 md:gap-x-12">
        <div className="flex items-center gap-3">
          <FaWhatsapp size={32} className="shrink-0 text-white lg:w-12 md:w-4" />
          <h2 className="lg:text-2xl font-bold md:text-xs">0852 8399 0095</h2>
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram size={32} className="shrink-0 text-white lg:w-12 md:w-4" />
          <h2 className="lg:text-2xl font-bold md:text-xs">
            lpk_sekaimiraicemerlangind
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <FaLocationDot size={32} className="shrink-0 text-white lg:w-12 md:w-4" />
          <h2 className="lg:text-2xl font-bold md:text-xs">
            Jl. RA Kartini No.96 B
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
