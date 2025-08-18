import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white ">
        {/* Header Section */}
        <br />
        <div className="max-w-6xl mx-auto px-6 py-16 mt-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">
              Need Assistance? We are Here for You 24/7!
            </h1>
            <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
            <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              Feel free to reach out with any inquiries or feedback. We look
              forward to hearing from you!
            </p>
          </div>

          {/* Contact Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light mb-8 text-white">
                  Get in Touch
                </h2>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-white mb-2">
                          Phone Support
                        </h3>
                        <a
                          href="tel:+917058111852"
                          className="text-white/70 hover:text-white transition-colors duration-300 font-light"
                        >
                          +91-7058111852
                        </a>
                        <p className="text-white/50 text-sm mt-1 font-light">
                          Available 24/7
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-white mb-2">
                          Email Support
                        </h3>
                        <a
                          href="mailto:assist@earncharge.in"
                          className="text-white/70 hover:text-white transition-colors duration-300 font-light"
                        >
                          assist@earncharge.in
                        </a>
                        <p className="text-white/50 text-sm mt-1 font-light">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address -- UPDATED SECTION */}
                  <div className="border border-white/20 p-6 hover:bg-white/5 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-light text-white mb-2">
                          Office Address
                        </h3>
                        <p className="text-white/70 font-light leading-relaxed">
                          Plot No: 326, behind LAD Collage Shankar Nagar Nagpur
                          <br />
                          Maharashtra India 440010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light mb-8 text-white">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-white/70 text-sm font-light mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-white/70 text-sm font-light mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/70 text-sm font-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full bg-transparent border border-white/20 px-4 py-3 text-white placeholder-white/50 focus:border-white/50 focus:outline-none transition-colors duration-300 font-light resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full border border-white/20 px-8 py-4 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2 font-light"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-light mb-8 text-white text-center">
              Find Us on Map
            </h2>
            <div className="border border-white/20 overflow-hidden">
              {/* Replace this iframe src with your own Google Maps embed URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.49359336829!2d79.05713931493442!3d21.13264498594248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0e3125c1369%3A0x3c77840845e43c8b!2sLAD%20College%20Square!5e0!3m2!1sen!2sin!4v1663243438962!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
            <p className="text-white/50 text-sm text-center mt-4 font-light">
              Plot No: 326, behind LAD Collage, Shankar Nagar, Nagpur,
              Maharashtra 440010
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
