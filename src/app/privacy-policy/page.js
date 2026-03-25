// "use client";

// const PrivacyPolicy = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

//       <p className="mb-4"><strong>Effective Date:</strong> 07 Aug 2025</p>
//       <p className="mb-4"><strong>Jurisdiction:</strong> India (Compliant with International Privacy Standards including GDPR)</p>

//       <p className="mb-4">
//         SafeMarg is committed to protecting the privacy and security of our customers’ personal data. 
//         This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
//         when you use our website <strong>www.safemarg.com</strong>, mobile services, or contact us for travel-related services.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Legal Compliance</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Information Technology Act, 2000 (India) and its amendments</li>
//         <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
//         <li>General Data Protection Regulation (GDPR) for EU/International users</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
//       <h3 className="font-semibold mt-4">a) Personal Information</h3>
//       <ul className="list-disc list-inside mt-2">
//         <li>Full Name</li>
//         <li>Phone Number</li>
//         <li>Email Address</li>
//         <li>Billing Address</li>
//         <li>Travel Documents (passport/ID details)</li>
//         <li>Payment details (via third-party gateways)</li>
//       </ul>
//       <h3 className="font-semibold mt-4">b) Non-Personal Information</h3>
//       <ul className="list-disc list-inside mt-2">
//         <li>IP address</li>
//         <li>Browser type and version</li>
//         <li>Device type</li>
//         <li>Location data</li>
//         <li>Cookies and tracking pixels</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Purpose of Collection</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>To process flight, hotel, and cab bookings</li>
//         <li>To verify identity and prevent fraud</li>
//         <li>To send booking confirmations, updates, and service notifications</li>
//         <li>To provide customer support and resolve queries</li>
//         <li>To improve our website, services, and user experience</li>
//         <li>To send marketing and promotional emails (with your consent)</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Lawful Basis for Processing (for GDPR Compliance)</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>You have given explicit consent</li>
//         <li>It is necessary for the performance of a contract</li>
//         <li>To comply with legal obligations</li>
//         <li>To serve our legitimate interests (such as fraud prevention, improving services)</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Sharing of Personal Data</h2>
//       <p>We do not sell or rent your personal data. We may share it with:</p>
//       <ul className="list-disc list-inside mt-2">
//         <li>Airlines, hotels, and cab service providers (to fulfill bookings)</li>
//         <li>Payment processors (PCI-DSS compliant)</li>
//         <li>Customer support tools and cloud service providers</li>
//         <li>Government or regulatory authorities (if legally required)</li>
//       </ul>
//       <p>All third-party partners are contractually obligated to keep your data secure and confidential.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Data Retention</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>As long as necessary to fulfill the purpose it was collected for</li>
//         <li>As required by law (e.g., tax or accounting regulations)</li>
//         <li>Typically, no longer than 7 years, unless a longer period is legally required</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">7. Your Rights</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Right to Access – View the data we hold about you</li>
//         <li>Right to Rectification – Correct inaccurate or incomplete data</li>
//         <li>Right to Erasure – Request deletion of your data (unless retention is legally necessary)</li>
//         <li>Right to Withdraw Consent – Opt out of marketing or revoke previously given permissions</li>
//         <li>Right to Data Portability – Request your data in a portable format</li>
//         <li>Right to Lodge a Complaint – With relevant data protection authority</li>
//       </ul>
//       <p>To exercise your rights, contact us at <strong>support@safemarg.com</strong>.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">8. Cookies & Tracking</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Track website usage and improve performance</li>
//         <li>Personalize your experience</li>
//         <li>Analyze traffic via tools like Google Analytics</li>
//       </ul>
//       <p>You can disable cookies in your browser settings, but some features may not function correctly.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">9. Data Security</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>SSL encryption</li>
//         <li>Firewalls and secure servers</li>
//         <li>Restricted access and regular audits</li>
//       </ul>
//       <p>Payment information is handled exclusively by PCI-DSS compliant third-party payment gateways. We do not store sensitive card data.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">10. International Data Transfers</h2>
//       <p>
//         For users outside India, your data may be processed in India or other countries where our service providers are located. 
//         By using our platform, you consent to such transfers, provided they meet equivalent data protection standards (as per GDPR Art. 45–47).
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">11. Children’s Privacy</h2>
//       <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal data from children. 
//       If we discover such collection, we will delete the data immediately.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">12. Changes to This Policy</h2>
//       <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the revised effective date. 
//       Please review it periodically to stay informed.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">13. Contact Us</h2>
//       <p>If you have any questions about this Privacy Policy, or wish to exercise your rights, please contact us at <strong>support@safemarg.com</strong>.</p>
        
//       <h2 className="text-xl font-semibold mt-6 mb-2">14. Shipping Policy</h2>
//       <p>
//         SafeMarg does not ship or deliver any physical products. 
//         Our services are strictly limited to <strong>flight ticket bookings</strong>. 
//         Any personal or billing information collected is solely for processing these bookings. 
//         Users should not expect the delivery of any tangible goods through our platform.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">15. Shopping Policy</h2>
//       <p>
//         SafeMarg is not an e-commerce platform and does not sell any products. 
//         All transactions on our platform are service-based, digital, and related exclusively to <strong>flight tickets</strong>. 
//         We do not handle retail sales, merchandise, or any other shopping-related activities. 
//         Your information will never be used for fulfilling purchases of physical goods.
//       </p>

//     </div>
    
//   );
// };

// export default PrivacyPolicy;


"use client";
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

const sections = [
  { id: 'legal', title: '1. Legal Compliance' },
  { id: 'collect', title: '2. Information We Collect' },
  { id: 'purpose', title: '3. Purpose of Collection' },
  { id: 'basis', title: '4. Lawful Basis' },
  { id: 'sharing', title: '5. Sharing of Personal Data' },
  { id: 'retention', title: '6. Data Retention' },
  { id: 'rights', title: '7. Your Rights' },
  { id: 'cookies', title: '8. Cookies & Tracking' },
  { id: 'security', title: '9. Data Security' },
  { id: 'transfers', title: '10. International Transfers' },
  { id: 'children', title: '11. Children’s Privacy' },
  { id: 'changes', title: '12. Changes to This Policy' },
  { id: 'contact', title: '13. Contact Us' },
  { id: 'shipping', title: '14. Shipping Policy' },
  { id: 'shopping', title: '15. Shopping Policy' },
];

const PrivacyPolicy = () => {
  return (
    <PolicyLayout 
      title="Privacy Policy" 
      effectiveDate="07 Aug 2025" 
      jurisdiction="India (Compliant with International Privacy Standards including GDPR)"
      sections={sections}
    >
      <section id="introduction" className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          SafeMarg is committed to protecting the privacy and security of our customers’ personal data. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
          when you use our website <strong className="text-blue-600">www.safemarg.com</strong>, mobile services, or contact us for travel-related services.
        </p>
      </section>

      <div className="space-y-20">
        <section id="legal" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             1. Legal Compliance
          </h2>
          <ul className="grid gap-4 list-none p-0">
             {[
               "Information Technology Act, 2000 (India) and its amendments",
               "Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011",
               "General Data Protection Regulation (GDPR) for EU/International users"
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-center p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white transition-colors">
                  <div className="w-2 h-2 rounded-full bg-blue-500 shadow-sm shadow-blue-200" />
                  <span className="font-medium text-gray-700">{item}</span>
               </li>
             ))}
          </ul>
        </section>

        <section id="collect" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             2. Information We Collect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-100/50 space-y-6">
              <h3 className="text-lg font-bold text-blue-900 uppercase tracking-wider">a) Personal Information</h3>
              <ul className="space-y-3 list-none p-0">
                {["Full Name", "Phone Number", "Email Address", "Billing Address", "Travel Documents (Passport/ID Details)", "Payment Details (via SSL encrypted gateways)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-3xl bg-indigo-50/50 border border-indigo-100/50 space-y-6">
              <h3 className="text-lg font-bold text-indigo-900 uppercase tracking-wider">b) Non-Personal Information</h3>
              <ul className="space-y-3 list-none p-0">
                {["IP Address", "Browser Type & Version", "Device Type", "Location Data", "Cookies & Tracking Pixels"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="purpose" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             3. Purpose of Collection
          </h2>
          <p className="mb-6">We use the collected information for specific, lawful purposes:</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Process flight, hotel, and cab bookings",
              "Verify identity and prevent fraud",
              "Send booking confirmations and service updates",
              "Provide world-class customer support",
              "Optimize website performance and UX",
              "Marketing communications (only with your consent)"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 transition-all">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 font-bold">{i+1}</div>
                <p className="font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="basis" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             4. Lawful Basis for Processing
          </h2>
          <p className="mb-6">Under GDPR, we process data based on several legal pillars:</p>
          <div className="flex flex-wrap gap-4">
            {["Explicit Consent", "Contract Performance", "Legal Obligations", "Legitimate Interests"].map((basis, i) => (
              <span key={i} className="px-6 py-2.5 rounded-full bg-white border-2 border-dashed border-gray-200 text-gray-800 font-bold shadow-sm">{basis}</span>
            ))}
          </div>
        </section>

        <section id="sharing" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             5. Sharing of Personal Data
          </h2>
          <p className="mb-6 leading-relaxed">
            We <strong className="text-red-500 font-bold">never sell or rent</strong> your personal data. We share only necessary information with:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Service Providers", desc: "Airlines, hotels, and cab operators to execute bookings." },
              { title: "Payment Gateways", desc: "Secure processors strictly following PCI-DSS standards." },
              { title: "Cloud Services", desc: "Enterprise infrastructure providers for secure data storage." },
              { title: "Regulatory Authorities", desc: "Only when required to comply with Indian or International law." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-2">
                <h4 className="font-bold text-gray-900">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="retention" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             6. Data Retention
          </h2>
          <p className="leading-relaxed">
            Personal data is retained only as long as necessary to fulfill collection purposes or as mandates by law (e.g., tax/accounting). 
            Typically, data is retained for 7 years unless a longer period is legally required.
          </p>
        </section>

        <section id="rights" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             7. Your Rights
          </h2>
          <p className="mb-8">Users have comprehensive rights regarding their personal data, which we respect fully:</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
             {[
               { t: "Right to Access", d: "View the data we hold about you anytime." },
               { t: "Right to Rectification", d: "Correct inaccurate or incomplete data." },
               { t: "Right to Erasure", d: "Request deletion if legally permissible." },
               { t: "Withdraw Consent", d: "Opt-out from marketing communications." },
               { t: "Data Portability", d: "Request your data in a portable format." },
               { t: "Lodge Complaint", d: "With relevant data protection authorities." },
             ].map((r, i) => (
               <div key={i} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
                 <h4 className="font-bold text-blue-600 mb-2">{r.t}</h4>
                 <p className="text-sm text-gray-500">{r.d}</p>
               </div>
             ))}
          </div>
        </section>

        <section id="cookies" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             8. Cookies & Tracking
          </h2>
          <p className="mb-6">We use tracking technologies to:</p>
          <ul className="grid gap-3 list-none p-0">
             {["Track website usage and optimize flow", "Personalize user experiences", "Analyze traffic via Google Analytics"].map((item, i) => (
               <li key={i} className="flex gap-4 items-center font-medium text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" /> {item}
               </li>
             ))}
          </ul>
        </section>

        <section id="security" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             9. Data Security
          </h2>
          <div className="p-8 rounded-[2rem] bg-gray-900 text-white space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
             <p className="text-lg opacity-80 leading-relaxed italic border-l-2 border-blue-400 pl-6">
                Your security is our top priority. We employ enterprise-grade protections including SSL encryption, 
                advanced firewalls, and restricted server access.
             </p>
             <div className="flex flex-wrap gap-4 pt-4 text-sm font-bold opacity-70">
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">SSL Encrypted</span>
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">PCI-DSS Compliant</span>
                <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">AES-256 Storage</span>
             </div>
          </div>
        </section>

        <section id="transfers" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             10. International Transfers
          </h2>
          <p className="leading-relaxed">
            For users outside India, your data may be processed in India or countries where our service providers reside. 
            By using our platform, you consent to such transfers, ensuring they meet equivalent data protection standards (per GDPR Art. 45–47).
          </p>
        </section>

        <section id="children" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             11. Children’s Privacy
          </h2>
          <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 text-orange-900 font-medium">
             SafeMarg does not knowingly collect personal data from individuals under 13. If discovered, such data is deleted immediately.
          </div>
        </section>

        <section id="changes" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             12. Changes to Policy
          </h2>
          <p>
            We reserve the right to update this policy anytime. Changes will be posted here with the revised effective date.
          </p>
        </section>

        <section id="shipping" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             14. Shipping Policy
          </h2>
          <div className="bg-gray-100/50 p-8 rounded-3xl border border-gray-200 shadow-inner">
             <p className="italic text-gray-600 m-0 leading-relaxed font-medium">
                SafeMarg does not ship or deliver physical products. Our services are strictly digital booking solutions. 
                 tangibility goods should not be expected.
             </p>
          </div>
        </section>

        <section id="shopping" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             15. Shopping Policy
          </h2>
          <p className="m-0 leading-relaxed">
             SafeMarg is not an e-commerce platform. All transactions are service-based and digital. 
             Information will never be used for fulfilling physical retail purchases.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
