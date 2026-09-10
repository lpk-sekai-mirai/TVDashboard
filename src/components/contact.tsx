// import { Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <footer className="bg-gray-900 px-6 py-6 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <FaWhatsapp size={24} />
            <h2 className="text-xl font-bold">
              085283990095
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <FaInstagram size={24} />
            <h2 className="text-xl font-bold">
              lpk_sekaimiraicemerlangind
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationDot size={24} />
            <h2 className="text-xl font-bold">
              Jl. RA Kartini No.96 B
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;