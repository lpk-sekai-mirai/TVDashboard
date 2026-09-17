import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="relative z-0 w-full py-3 bg-primary text-white ">
      <div className="flex flex-wrap items-center justify-center gap-x-48 gap-y-2 px-6">
        <div className="flex items-center gap-3">
          <FaWhatsapp size={32} className="shrink-0 text-white" />
          <h2 className="text-lg font-bold md:text-lg">0852 8399 0095</h2>
        </div>
        <div className="flex items-center gap-3">
          <FaInstagram size={32} className="shrink-0 text-white" />
          <h2 className="text-lg font-bold md:text-lg">
            lpk_sekaimiraicemerlangind
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <FaLocationDot size={32} className="shrink-0 text-white" />
          <h2 className="text-lg font-bold md:text-lg">
            Jl. RA Kartini No.96 B
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
