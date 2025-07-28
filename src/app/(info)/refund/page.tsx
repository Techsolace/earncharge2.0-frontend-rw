import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Shield, FileText, Users, CreditCard, Lock, AlertTriangle, Phone, Mail } from "lucide-react"

const CancellationRefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Cancellation and Refund Policy</h1>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Please read our Cancellation and Refund Policy carefully to understand our policies regarding cancellations and refunds for transactions made through EarnCharge.
          </p>
          <p className="text-white/50 text-sm font-light mt-4">
            Effective Date: March 14, 2024
          </p>
        </div>

        {/* Cancellation and Refund Policy Content */}
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
                At EarnCharge, we strive to provide a seamless and efficient platform for accessing a variety of essential services. However, as an intermediary service provider, we facilitate transactions between you and the service providers, but we do not own or control the services themselves. Therefore, our ability to cancel or refund services is limited.
              </p>
              <p>
                By using EarnCharge&apos;s services, you acknowledge and accept that cancellation and refund requests may not always be possible, and you agree to abide by the refund policies of the respective service providers.
              </p>
            </div>
          </section>

          {/* Section 2: Cancellation */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">2. Cancellation</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                Once a transaction is initiated through EarnCharge and processed with the respective service provider, it may not be possible to cancel or reverse the transaction. This is because the transaction is directly linked to the service provider&apos;s systems and processes. We recommend reviewing your transaction details carefully before proceeding to ensure accuracy.
              </p>
              <p>
                We don&apos;t have any cancellation policy as it is a prepaid service, and we don&apos;t provide any kind of postpaid billing or subscriptions.
              </p>
            </div>
          </section>

          {/* Section 3: Refunds for Technical Errors and Payment Failures */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">3. Refunds for Technical Errors and Payment Failures</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                In case of any technical error or payment failure from our server or website, resulting in the deduction of an amount from your account, we will return the amount within 7 working days. The payment mode will be UPI or direct bank account transfer, as per your preference.
              </p>
            </div>
          </section>

          {/* Section 4: Refunds from Third Parties */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">4. Refunds from Third Parties</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                Refunds for transactions processed through EarnCharge may not be feasible in many cases. As we are not the direct provider of the services, any requests for refunds would need to be directed to the relevant service provider according to their refund policies. We encourage you to familiarize yourself with the refund policies of the specific service providers you are transacting with.
              </p>
            </div>
          </section>

          {/* Section 5: Be Extra Alert */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">5. Be Extra Alert</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                Given the nature of our services as an intermediary, we advise all users to exercise caution and diligence when making payments or transactions through EarnCharge. Be sure to double-check the details of your transactions, including service selections, payment amounts, and recipient information, to avoid any potential errors or discrepancies.
              </p>
            </div>
          </section>

          {/* Section 6: Refund Process */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">6. Refund Process</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                Refunds will be processed within 7 working days from the date of approval. The refund amount will be credited using the original payment method, either through UPI or direct bank account transfer, as per your preference.
              </p>
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
              <p>
                If you have any questions or concerns about a transaction or this Cancellation and Refund Policy, please contact our customer support team:
              </p>
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
              By using EarnCharge&apos;s services, you acknowledge that you have read and understood this Cancellation and Refund Policy and agree to be bound by its terms. Thank you for choosing EarnCharge. We appreciate your understanding and cooperation.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CancellationRefundPolicyPage