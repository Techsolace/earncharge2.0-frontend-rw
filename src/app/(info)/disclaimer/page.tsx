import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Shield, FileText, AlertTriangle, Phone, Mail } from "lucide-react"

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Disclaimer</h1>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Please read our Disclaimer carefully to understand the scope of our services and responsibilities at EarnCharge.
          </p>
          <p className="text-white/50 text-sm font-light mt-4">
            Effective Date: March 14, 2024
          </p>
        </div>

        {/* Disclaimer Content */}
        <div className="space-y-12">
          {/* Section 1: Introduction */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">1. Introduction</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                EarnCharge, its affiliates, and each of their respective officers, directors, members, employees, and agents (&quot;EarnCharge&quot;) is committed to transparency and protecting users from fraudulent activities. This Disclaimer outlines important information regarding unauthorized activities and our responsibilities.
              </p>
              <p>
                By using EarnCharge&apos;s services, you acknowledge that you have read and understood this Disclaimer and agree to be bound by its terms.
              </p>
            </div>
          </section>

          {/* Section 2: Unauthorized Activities */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">2. Unauthorized Activities</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                To the fullest extent permitted by law, EarnCharge NEVER asks you or any individual to share personal or financial details for the purpose of investments, trading, employment, or any other related or incidental activity.
              </p>
              <p>
                It has come to our attention that unknown individuals are contacting people through platforms such as WhatsApp, Telegram, and others, falsely representing themselves as authorized personnel of EarnCharge. These individuals deceitfully offer unauthorized investment or employment opportunities. Please note that these individuals are imposters and are not authorized by EarnCharge to perform any such acts.
              </p>
              <p>
                We strongly advise you not to share your login credentials, debit/credit card number, CVV number, OTP, UPI, ATM pin, bank account details, or transfer any monies to these individuals.
              </p>
            </div>
          </section>

          {/* Section 3: Exercise Caution */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">3. Exercise Caution</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                We advise you to exercise caution when sharing any information online. If you encounter any suspicious activity or individuals claiming to represent EarnCharge, we recommend filing a complaint with the appropriate authorities immediately.
              </p>
              <p>
                EarnCharge is pursuing legal recourse against these unauthorized individuals. However, we disclaim responsibility for any losses resulting from unauthorized information sharing or disclosure on platforms like WhatsApp or Telegram. EarnCharge is not liable for any decisions or actions taken based on such content.
              </p>
            </div>
          </section>

          {/* Section 4: Contact Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">4. Contact Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                For assistance or to report any suspicious activity, please visit our contact us page and write to us at:
              </p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <a
                    href="mailto:assist@earncharge.in"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    assist@earncharge.in
                  </a>
                </div>
                <p className="text-white/70">
                  Kindly note that there is no other help channel available.
                </p>
                <div className="flex items-start space-x-3">
                  <div className="w-4 h-4 mt-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                  </div>
                  <p className="text-white/70">
                    Plot No: 326, behind LAD Collage
                    <br />
                    Shankar Nagar, Nagpur
                    <br />
                    Maharashtra, India 440010
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Subsidiary Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">5. Subsidiary Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>EarnCharge is a fully owned subsidiary of Arahant Economy Services Private Limited.</p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="border-t border-white/10 pt-8">
            <p className="text-white/50 text-sm font-light">
              By using EarnCharge&apos;s services, you acknowledge that you have read and understood this Disclaimer and agree to be bound by its terms. Thank you for your vigilance and cooperation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DisclaimerPage