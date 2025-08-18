import {
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import Image from "next/image";
import Playstore from '../../public/google-playstore.jpg'

const Footer = () => {
  return (
    <footer className="bg-black/40 text-white ubuntu-regular">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-light mb-4 text-white">
                EarnCharge
              </h2>
              <div className="w-12 h-px bg-white/30 mb-6"></div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-8 font-light">
              Your trusted platform for instant mobile recharges, bill payments,
              and digital services. Fast, secure, and reliable.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61567165222175&mibextid=JRoKGi"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/earncharge?igsh=dWxkYWg0NGl6N2R0"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@EarnChargeIndia"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://www.threads.net/@earncharge?glyph_type=SELF_PROFILE"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.earnchargemobile.earncharge"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black rounded-lg px-4 py-2 shadow hover:bg-neutral-900 transition"
              style={{ width: "fit-content" }}
            >
              <Image
                src={Playstore}
                alt="Google Play logo"
                width={40}
                height={40}
                className="mr-3"
              />
              <div className="flex flex-col text-left leading-tight">
                <span
                  className="text-xs text-white font-medium uppercase tracking-wide"
                  style={{ letterSpacing: "0.5px" }}
                >
                  Get it on
                </span>
                <span
                  className="text-lg text-white font-semibold -mt-1"
                  style={{ fontFamily: "'Product Sans', Arial, sans-serif" }}
                >
                  Google Play
                </span>
              </div>
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-light mb-8 text-white">Services</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Mobile Recharge
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                DTH Recharge
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Bill Payment
              </a>
              <a
                href="#"
                className="block text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
              >
                Data Cards
              </a>
            </nav>
          </div>

          {/* Column 3: Support & QR Code */}
          <div>
            <h3 className="text-lg font-light mb-8 text-white">Support</h3>
            {/* Contact Info */}
            <div>
              <p className="text-white/50 text-xs mb-4 font-light">
                24/7 Support
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@earncharge.in"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  <Mail className="w-3 h-3" />
                  <span>assist@earncharge.in</span>
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91-7058111852</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar -- UPDATED SECTION */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
            <p className="text-white/70 text-sm font-light">
              Made with ❤️ in India
            </p>
            <p className="text-white/70 text-sm font-light md:text-right max-w-xl">
              Earncharge is a fully owned subsidiary of Arahant Economy Services
              Private Limited. It is a digital platform providing Mobile
              Recharge and BBPS services. Earncharge is a part of Acamus Utility
              Recharge Services private limited and a sister company of Arahant
              Economy Services Private Limited.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
