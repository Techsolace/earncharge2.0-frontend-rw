import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Shield, FileText, Users, AlertTriangle, Phone, Mail } from "lucide-react"

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 pt-40">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-white">Terms and Conditions</h1>
          <div className="w-24 h-px bg-white/30 mx-auto mb-8"></div>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Please read our Terms and Conditions carefully to understand the rules and responsibilities for using EarnCharge&apos;s services.
          </p>
          <p className="text-white/50 text-sm font-light mt-4">
            Effective Date: March 14, 2024
          </p>
        </div>

        {/* Terms and Conditions Content */}
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
                EarnCharge.com offers prepaid mobile recharge and provides related information herein known as &apos;services&apos;. The persons/parties visiting the site EarnCharge.com or registering with the site for the use of any of the services will be herein known as the &apos;user/s&apos;. EarnCharge.com will herein also be known as the &apos;site&apos;.
              </p>
              <p>
                By using EarnCharge&apos;s services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them.
              </p>
            </div>
          </section>

          {/* Section 2: Eligibility */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">2. Eligibility</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The User must be 18 years or older to use the services of the &apos;site&apos;. If any user below 18 years registers, their registration will be void. The &apos;User&apos; represents and warrants that they have the right, authority, and are of legal age to accept and abide by these Terms and Conditions.
              </p>
              <p>
                While using the site, the &apos;User&apos; shall not impersonate any person or entity, or falsely state or misrepresent identity, age, or affiliation with any person or entity. The &apos;Site&apos; may terminate the account of such a user, delete their content, or prohibit access to the site or its services without stating reasons.
              </p>
            </div>
          </section>

          {/* Section 3: Registration */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">3. Registration</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The registration form must be filled out accurately by the &apos;user&apos; to the best of their knowledge. The user is responsible for maintaining the security of their password and ID and is liable for any actions taken through their account. Users must immediately notify the site if their account is used without authorization.
              </p>
            </div>
          </section>

          {/* Section 4: Use of the Recharge Facility */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">4. Use of the Recharge Facility</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>EarnCharge provides recharge services for prepaid phones (India) for personal, non-commercial use. By using this facility, the user agrees to the following:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The user is solely responsible for entering correct information (e.g., phone number, recharge value).</li>
                <li>EarnCharge is not responsible for faulty connections on the user&apos;s side during payment.</li>
                <li>If a user pays but does not receive the recharge, they must submit transaction and contact details to customer support. Resolution may take 10 days or longer, depending on the service provider, and EarnCharge is not liable for delays.</li>
                <li>EarnCharge will not refund money once a sale has occurred.</li>
                <li>By using the online recharge facility, the user agrees to pay any extra charges for online services or sales.</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Standard of User Conduct */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">5. Standard of User Conduct</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                All content (information, data, text, photographs, videos, music, graphics, etc.) hosted or viewed on the &apos;site&apos; is the sole responsibility of the &apos;user&apos; from whom it originated. The &apos;site&apos; does not guarantee the accuracy, integrity, or quality of such content, and users may encounter offensive, objectionable, or indecent content. The &apos;site&apos; is not liable for any errors or negative effects from such content.
              </p>
              <p>
                Users agree that no materials submitted through their account will violate third-party rights, including copyright, trademark, privacy, or other personal or proprietary rights, or contain libelous, defamatory, or unlawful material. Users shall not use the service in any way that could damage, disable, overburden, impair, or disrupt the service, servers, or networks.
              </p>
              <p>
                Users are responsible for evaluating and bearing risks associated with the content&apos;s reliability, accuracy, usefulness, and comprehensiveness, and cannot entirely depend on data displayed on the &apos;site&apos;.
              </p>
              <p>Users agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Upload or share unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable content.</li>
                <li>Upload content that violates religious sentiments, secular credentials, communal harmony, or national integrity.</li>
                <li>Impersonate any person or entity.</li>
                <li>Forge headers or manipulate identifiers to disguise content origin.</li>
                <li>Share content the user does not have the right to share under law or contract.</li>
                <li>Share content encouraging criminal offenses or unsolicited advertising.</li>
                <li>Disrupt dialogue flow or negatively affect other users&apos; ability to engage.</li>
                <li>Share content that could damage systems or networks.</li>
                <li>Violate any applicable laws or regulations.</li>
              </ul>
            </div>
          </section>

          {/* Section 6: Limited User */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">6. Limited User</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>The &apos;site&apos; is specifically meant for personal use only and not for commercial use.</p>
            </div>
          </section>

          {/* Section 7: Information Technology Act & Indian Laws */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">7. Information Technology Act & Indian Laws</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;user&apos; agrees to abide by the provisions of the Information Technology Act and other laws/rules/regulations of India. The user undertakes to submit to the jurisdiction of enforcing/statutory authorities for any violations.
              </p>
              <p>
                All content on the &apos;site&apos;, including text, graphics, pictures, and videos, is the proprietary property of the site, its users, or licensors with all rights reserved. Unauthorized use is strictly prohibited and may terminate registration.
              </p>
            </div>
          </section>

          {/* Section 8: Exclusions in Online Payment Facility */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">8. Exclusions in Online Payment Facility</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                EarnCharge shall not be liable for any loss or damage arising from the decline of authorization for any transaction due to the cardholder exceeding preset limits with our acquiring bank. Users assume all risks involved in using the online payment facility, and EarnCharge is not liable for any damage, loss, or expense caused by defects in the payment facility.
              </p>
            </div>
          </section>

          {/* Section 9: Termination */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">9. Termination</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;site&apos; may terminate a user&apos;s account, password, or use of the service at its discretion if the user violates or acts inconsistently with these Terms and Conditions. The site may also discontinue providing the service at any time without notice. Upon termination, the user&apos;s right to use the site ceases, and the site shall not be liable for any termination.
              </p>
            </div>
          </section>

          {/* Section 10: Indemnity */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">10. Indemnity</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The user agrees to indemnify and hold the &apos;site&apos;, its subsidiaries, directors, affiliates, officers, agents, and employees harmless from any loss, liability, claim, or demand, including reasonable attorney&apos;s fees, arising from content submitted, use of the service, violation of these Terms, or violation of third-party rights or applicable laws.
              </p>
            </div>
          </section>

          {/* Section 11: Limitation of Liability */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">11. Limitation of Liability</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;site&apos; is not liable for special, consequential, incidental, indirect, or punitive loss, damage, or expenses, including data loss or costs of recreating lost data, regardless of whether arising from breach of contract, warranty, tort, or strict liability. The user agrees that the site is not liable for any damage or monetary loss resulting from transactions or reputational damage from bogus entries.
              </p>
            </div>
          </section>

          {/* Section 12: Links to Third-Party Sites */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">12. Links to Third-Party Sites</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;site&apos; contains links to third-party sites not under its control. The site is not responsible for the contents of linked sites, and their inclusion does not imply endorsement. Links are provided for convenience only.
              </p>
            </div>
          </section>

          {/* Section 13: Use of Forums and Communication Facilities */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">13. Use of Forums and Communication Facilities</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                If the &apos;site&apos; contains bulletin boards, chat rooms, mailing lists, or other communication facilities (&apos;Forums&apos;), users agree to use them only for proper, related messages and materials. Users shall not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Defame, abuse, harass, stalk, threaten, or violate others&apos; legal rights.</li>
                <li>Publish or distribute defamatory, infringing, obscene, or unlawful material.</li>
                <li>Upload files protected by intellectual property laws without necessary consents.</li>
                <li>Upload files containing viruses or harmful software.</li>
                <li>Delete author attributions or proprietary designations.</li>
                <li>Advertise, sell, or conduct surveys, contests, or chain letters.</li>
                <li>Download files that cannot be legally distributed.</li>
              </ul>
              <p>
                Forums are public, and communications are not endorsed, reviewed, or approved by the &apos;site&apos;. The site reserves the right to remove forum content without notice.
              </p>
            </div>
          </section>

          {/* Section 14: Copyrights and Trademark Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">14. Copyrights and Trademark Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;site&apos;s name, logos, banners, and other content are proprietary property of the site or its licensors. Unauthorized use is prohibited without prior written permission. Users must respect the intellectual property of others and immediately inform the site if they believe their rights have been violated, providing details such as a description of the infringed copyright, its location, and owner contact information.
              </p>
            </div>
          </section>

          {/* Section 15: Changes to the Terms and Conditions */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">15. Changes to the Terms and Conditions</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                The &apos;site&apos; may amend these Terms and Conditions at any time. Changes will be notified by posting an announcement on the site. Users are responsible for regularly reviewing these terms to stay informed of updates. Continued use of the site after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </section>

          {/* Section 16: Contact Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">16. Contact Information</h2>
                <div className="w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="text-white/70 font-light leading-relaxed space-y-4">
              <p>
                If you have any questions or concerns about these Terms and Conditions or our services, please contact us:
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

          {/* Section 17: Subsidiary Information */}
          <section className="border border-white/20 p-8 hover:bg-white/5 transition-all duration-300">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-light text-white mb-2">17. Subsidiary Information</h2>
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
              By using EarnCharge&apos;s services, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by their terms.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TermsAndConditionsPage