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
              className="inline-flex items-center space-x-3 border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="text-sm font-medium">Google Play</div>
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

            {/* QR Code */}
            <div className="mb-8">
              <div className="inline-block p-3 border border-white/20">
                <Image
                  src="/qr-code.webp"
                  alt="Download EarnCharge App QR Code"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
              <p className="text-xs text-white/50 mt-2 font-light">
                Scan to download
              </p>
            </div>
            {/* Contact Info */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-white/50 text-xs mb-4 font-light">
                24/7 Support
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:support@earncharge.in"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  <Mail className="w-3 h-3" />
                  <span>support@earncharge.in</span>
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm font-light"
                >
                  <Phone className="w-3 h-3" />
                  <span>+91 12345 67890</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm font-light">
              © {new Date().getFullYear()} EarnCharge. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="/disclaimer"
                className="text-white/50 hover:text-white text-xs font-light transition-colors duration-300"
              >
                Disclaimer
              </a>
              <a
                href="/policy"
                className="text-white/50 hover:text-white text-xs font-light transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/50 hover:text-white text-xs font-light transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href="/refund"
                className="text-white/50 hover:text-white text-xs font-light transition-colors duration-300"
              >
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
