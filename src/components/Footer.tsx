import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">EarnCharge</h2>
              <div className="w-12 h-0.5 bg-white mb-6"></div>
            </div>
            <p className="text-white text-sm leading-relaxed mb-8">
              Your trusted platform for instant mobile recharges, bill payments, and digital services. Fast, secure, and reliable.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center cursor-pointer hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
                <span className="text-xs font-bold">in</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-8">Our Services</h3>
            <nav className="space-y-4">
              <a href="/mobile-recharge" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                Mobile Recharge
              </a>
              <a href="/dth-recharge" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                DTH Recharge
              </a>
              <a href="/bill-payment" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                Bill Payment
              </a>
              <a href="/data-cards" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                Data Cards
              </a>
            </nav>
          </div>

          {/* Column 3: Support & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-8">Support</h3>
            <div className="space-y-6">
              <div className="space-y-4">
                <a href="/help" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                  Help Center
                </a>
                <a href="/contact" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                  Contact Us
                </a>
                <a href="/api" className="block text-white hover:text-black hover:bg-white px-3 py-2 transition-all duration-300 text-sm">
                  API Documentation
                </a>
              </div>
              
              <div className="pt-4 border-t border-white">
                <p className="text-white text-xs mb-2">24/7 Support</p>
                <a href="mailto:support@earncharge.in" className="block text-white hover:underline text-sm mb-1">
                  support@earncharge.in
                </a>
                <a href="tel:+911234567890" className="block text-white hover:underline text-sm">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-white"></div>
    </footer>
  );
};

export default Footer;