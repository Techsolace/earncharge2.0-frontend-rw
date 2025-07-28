import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Shield, FileText, Users, CreditCard, Lock, AlertTriangle, Phone, Mail } from "lucide-react"

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Privacy Policy</h1>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Please read our Privacy Policy carefully to understand how we collect, use, and protect your personal information.
          </p>
          <p className="text-white/50 text-sm font-light mt-4">
            Effective Date: March 14, 2024
          </p>
        </div>

        {/* Privacy Policy Content */}
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
                EarnCharge (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and disclose information when you use our services.
              </p>
              <p>
                By accessing or using our Service, you agree to the terms of this Privacy Policy. If you disagree with any part of this policy, then you may not access the Service.
              </p>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">2. Information We Collect</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>When you use EarnCharge&apos;s services, we may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Personal Information:</strong> This includes information that can be used to identify you, such as your name, address, email address, phone number, and payment information.</li>
                <li><strong>Account Information:</strong> We collect information related to your EarnCharge account, such as account credentials, transaction history, and preferences.</li>
                <li><strong>Usage Information:</strong> We may collect information about how you interact with our services, including your device information, IP address, browser type, and usage patterns.</li>
                <li><strong>Third-Party Information:</strong> We may receive information from third-party service providers, such as financial institutions, telecommunications companies, and government agencies, in order to provide our services to you.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">3. How We Use Your Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>We may use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and improve our services, including processing transactions, managing accounts, and personalizing your experience.</li>
                <li>To communicate with you, including responding to your inquiries, providing customer support, and sending you important updates and promotional materials.</li>
                <li>To analyze usage trends and preferences, and to conduct research and analytics to improve our services.</li>
                <li>To comply with legal and regulatory requirements, including fulfilling our obligations under applicable laws and regulations.</li>
              </ul>
            </div>
          </section>

          {/* Section 4: Your Choices */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">4. Your Choices</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>You may choose not to provide certain information to us, but this may limit your ability to use certain features of our services.</p>
              <p>You may also update or correct your information by accessing your EarnCharge account settings.</p>
            </div>
          </section>

          {/* Section 5: Data Protection */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">5. Data Protection</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              <p>Your privacy is important to us. We collect, use, and protect your personal information in accordance with this Privacy Policy.</p>
            </div>
          </section>

          {/* Section 6: Changes to this Privacy Policy */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">6. Changes to this Privacy Policy</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.</p>
              <p>We will notify you of any material changes by posting the updated Privacy Policy on our website or by other means.</p>
              <p>Your continued use of our services after any such changes constitutes your acceptance of the new Privacy Policy.</p>
            </div>
          </section>

          {/* Section 7: Contact Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">7. Contact Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="space-y-3 mt-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/50" />
                  <a href="tel:+917058111852" className="text-white/70 hover:text-white transition-colors duration-300">
                    +91-7058111852
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/50" />
                  <a
                    href="mailto:recharge@earncharge.co.in"
                    className="text-white/70 hover:text-white transition-colors duration-300"
                  >
                    recharge@earncharge.co.in
                  </a>
                </div>
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

          {/* Section 8: Subsidiary Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">8. Subsidiary Information</h2>
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
              By using EarnCharge services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicyPage