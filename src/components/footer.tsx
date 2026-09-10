// import { Phone, MapPin } from "lucide-react";
import Logo from "../assets/react.svg";

function Footer() {
  return (
    <footer className="py-2 text-white">
      <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-10">
            <img src={Logo} alt="Logo LPK" className="h-18 w-18"/>
            <h1 className="text-4xl font-bold">
              SEKAI MIRAI CEMERLANG INDONESIA
            </h1>
          </div>
      </div>
    </footer>
  );
}

export default Footer;