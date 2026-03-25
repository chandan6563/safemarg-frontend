// "use client";

// const TermsAndConditions = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Terms & Conditions</h1>

//       <p className="mb-4"><strong>Effective Date:</strong> 07 Aug 2025</p>
//       <p className="mb-4"><strong>Jurisdiction:</strong> India (Compliant with International Consumer Standards)</p>
//       <p className="mb-4">
//         Welcome to <strong>SafeMarg</strong>, an IATA-accredited online travel agency offering flight, hotel, and cab booking services. 
//         By accessing our website (<strong>www.safemarg.com</strong>) or using our services, you agree to these Terms & Conditions, 
//         which are legally binding under Indian and international law.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Legal Entity</h2>
//       <p>SafeMarg is a registered entity in India, complying with the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Scope of Services</h2>
//       <p>We provide online booking and customer support for:</p>
//       <ul className="list-disc list-inside mt-2">
//         <li>Domestic & International Flight Tickets</li>
//         <li>Hotel Reservations across global destinations</li>
//         <li>Cab and Airport Transfer Services</li>
//       </ul>
//       <p>SafeMarg acts as a facilitator between customers and third-party service providers (airlines, hotels, transportation services).</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Eligibility</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>You are at least 18 years of age.</li>
//         <li>You are legally competent to enter into a binding contract under the Indian Contract Act, 1872.</li>
//         <li>You agree to provide accurate, complete, and updated information.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Booking & Payments</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Bookings are confirmed only after full or partial payment, depending on the service.</li>
//         <li>We use secure, PCI-DSS compliant payment gateways.</li>
//         <li>Booking confirmation is subject to availability and approval from the service provider.</li>
//         <li>Any false, incomplete, or suspicious bookings may be cancelled without notice.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Pricing, Taxes & Currency</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>All prices are displayed in Indian Rupees (INR) or may include other currencies as applicable.</li>
//         <li>Prices include applicable taxes, fees, and convenience charges unless otherwise mentioned.</li>
//         <li>Final pricing may vary due to currency fluctuations or dynamic pricing models used by airlines and hotels.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Cancellations, Modifications & Refunds</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Airline, hotel, and cab cancellations are governed by the respective provider’s policies.</li>
//         <li>Refund will be processed within 7-15 days to the original source of payment method.</li>
//         <li>Refunds are subject to approval from airlines, hotels, or partners.</li>
//       </ul>
//       <p>📄 Read our full <strong>Booking & Refund Policy</strong>.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">7. Data Protection & Privacy</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>We comply with India’s IT (Reasonable Security Practices) Rules, 2011.</li>
//         <li>We comply with GDPR for international users.</li>
//         <li>Your data is collected only for booking, communication, and support purposes.</li>
//       </ul>
//       <p>For full details, see our <strong>Privacy Policy</strong>.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">8. Travel Documents & User Responsibility</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>You are responsible for obtaining valid passports, visas, travel insurance, and meeting entry/exit requirements of destination countries.</li>
//         <li>We are not responsible for travel disruptions due to documentation errors or non-compliance with immigration laws.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">9. User Conduct</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>You agree not to use our site for fraudulent purposes or illegal activity.</li>
//         <li>You agree not to violate the rights of others, including intellectual property or privacy rights.</li>
//         <li>You agree not to upload malicious software or attempt to hack or overload the system.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">10. Third-Party Relationships</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>SafeMarg is not liable for delays, errors, overbooking, or cancellations caused by third-party service providers.</li>
//         <li>Changes in service terms or pricing from airlines, hotels, or cab operators are outside our control.</li>
//       </ul>
//       <p>Use of third-party services is governed by their own Terms & Conditions.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">11. Limitation of Liability</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>SafeMarg shall not be liable for indirect, incidental, or consequential damages.</li>
//         <li>Our liability in any case shall be limited to the amount paid for the specific service in question.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">12. Intellectual Property</h2>
//       <p>All website content — logos, text, images, and design — is the property of SafeMarg or licensed partners. Unauthorized use, reproduction, or distribution is prohibited.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">13. Force Majeure</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Natural disasters</li>
//         <li>Government actions</li>
//         <li>Strikes</li>
//         <li>Travel bans or epidemics</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">14. Dispute Resolution & Jurisdiction</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>These Terms shall be governed by the laws of India.</li>
//         <li>Any disputes will be subject to the exclusive jurisdiction of courts in India.</li>
//         <li>For international users, we strive to comply with applicable consumer protection laws and offer cross-border dispute resolutions wherever possible.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">15. Changes to Terms</h2>
//       <p>SafeMarg reserves the right to update these Terms & Conditions without prior notice. Continued use of our platform indicates your acceptance of any revised terms.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">16. Contact Information</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Email: support@safemarg.com</li>
//         <li>Phone: +91 96500 70205</li>
//       </ul>
//     </div>
//   );
// };

// export default TermsAndConditions;


"use client";
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';
import Link from 'next/link';

const sections = [
  { id: 'entity', title: '1. Legal Entity' },
  { id: 'scope', title: '2. Scope of Services' },
  { id: 'eligibility', title: '3. Eligibility' },
  { id: 'booking', title: '4. Booking & Payments' },
  { id: 'pricing', title: '5. Pricing & Taxes' },
  { id: 'cancellations', title: '6. Cancellations' },
  { id: 'data', title: '7. Data Protection' },
  { id: 'docs', title: '8. Travel Documents' },
  { id: 'conduct', title: '9. User Conduct' },
  { id: 'thirdparty', title: '10. Third-Party' },
  { id: 'liability', title: '11. Liability' },
  { id: 'ip', title: '12. Intellectual Property' },
  { id: 'force', title: '13. Force Majeure' },
  { id: 'dispute', title: '14. Dispute Resolution' },
  { id: 'changes', title: '15. Changes to Terms' },
  { id: 'contact', title: '16. Contact Info' },
];

const TermsAndConditions = () => {
  return (
    <PolicyLayout 
      title="Terms & Conditions" 
      effectiveDate="07 Aug 2025" 
      jurisdiction="India (Compliant with International Consumer Standards)"
      sections={sections}
    >
      <section className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          Welcome to <strong className="text-blue-600">SafeMarg</strong>, an IATA-accredited online travel agency. 
          By accessing our website (<strong>www.safemarg.com</strong>) or using our services, you agree to these Terms & Conditions, 
          which are legally binding under Indian and international law.
        </p>
      </section>

      <div className="space-y-20">
        <section id="entity" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             1. Legal Entity
          </h2>
          <p className="leading-relaxed">
            SafeMarg is a registered entity in India, complying with the Information Technology Act, 2000, and the Consumer Protection (E-Commerce) Rules, 2020.
          </p>
        </section>

        <section id="scope" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             2. Scope of Services
          </h2>
          <p>We provide online booking and customer support for:</p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              "Domestic & International Flight Tickets",
              "Hotel Reservations across global destinations",
              "Cab and Airport Transfer Services"
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700 hover:bg-white transition-all hover:shadow-md">
                 {s}
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-500 italic">
            SafeMarg acts as a facilitator between customers and third-party service providers (airlines, hotels, transportation services).
          </p>
        </section>

        <section id="eligibility" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             3. Eligibility
          </h2>
          <ul className="space-y-4 list-none p-0">
             {[
               "You are at least 18 years of age.",
               "You are legally competent to enter into a binding contract under the Indian Contract Act, 1872.",
               "You agree to provide accurate, complete, and updated information."
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-center p-4 rounded-xl bg-blue-50/30 border border-blue-100/30 font-medium">
                  <div className="w-2 h-2 rounded-full bg-blue-600" /> {item}
               </li>
             ))}
          </ul>
        </section>

        <section id="booking" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             4. Booking & Payments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Bookings confirmed ONLY after full or partial payment.",
              "Usage of secure, PCI-DSS compliant payment gateways.",
              "Confirmation subject to vendor availability and approval.",
              "Suspicious bookings may be cancelled without notice."
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs font-bold">✓</div>
                <p className="text-sm font-medium text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             5. Pricing, Taxes & Currency
          </h2>
          <p className="leading-relaxed">
            All prices are typically displayed in Indian Rupees (INR). Prices include applicable taxes and convenience charges. 
            Final pricing may vary due to currency fluctuations or dynamic airline/hotel models.
          </p>
        </section>

        <section id="cancellations" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             6. Cancellations, Modifications & Refunds
          </h2>
          <div className="p-8 rounded-3xl bg-gray-900 text-white space-y-6">
            <p className="opacity-80">
              Cancellations are governed by the respective provider’s policies. Refunds are processed within <strong>7-15 days</strong> to the original payment method, subject to provider approval.
            </p>
            <Link href="/booking-refund-policy" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:underline">
              Read Full Booking & Refund Policy →
            </Link>
          </div>
        </section>

        <section id="data" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             7. Data Protection & Privacy
          </h2>
          <p className="leading-relaxed mb-6">
            We comply with India’s IT Rules, 2011 and GDPR for international users. Your data is strictly for booking and support.
          </p>
          <Link href="/privacy-policy" className="px-6 py-3 rounded-xl bg-gray-100 text-gray-900 font-bold hover:bg-gray-200 transition-colors">
            See Privacy Policy
          </Link>
        </section>

        <section id="docs" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             8. Travel Documents & User Responsibility
          </h2>
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100 text-amber-900 space-y-3">
             <p className="font-bold">Important Notice:</p>
             <p className="text-sm leading-relaxed">
               You are solely responsible for valid passports, visas, insurance, and exit/entry requirements. 
               SafeMarg is NOT responsible for disruptions due to documentation errors.
             </p>
          </div>
        </section>

        <section id="conduct" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             9. User Conduct
          </h2>
          <p>By using our site, you agree NOT to:</p>
          <ul className="grid sm:grid-cols-2 gap-4 mt-4 list-none p-0">
             {[
               "Use the site for fraudulent activity",
               "Violate any intellectual property rights",
               "Upload malware or malicious software",
               "Attempt to hack or overload our systems"
             ].map((rule, i) => (
               <li key={i} className="flex gap-3 text-sm font-medium text-gray-600">
                 <span className="text-red-500 font-black">×</span> {rule}
               </li>
             ))}
          </ul>
        </section>

        <section id="thirdparty" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             10. Third-Party Relationships
          </h2>
          <p className="leading-relaxed italic">
            SafeMarg is not liable for delays, errors, or cancellations caused by third-party providers. 
            Vendor terms & conditions apply independently.
          </p>
        </section>

        <section id="liability" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             11. Limitation of Liability
          </h2>
          <p className="p-6 bg-red-50/30 rounded-2xl border border-red-100 text-gray-800">
            SafeMarg is not liable for incidental damages. Our liability is limited to the amount paid for the specific service in question.
          </p>
        </section>

        <section id="dispute" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             14. Dispute Resolution
          </h2>
          <p className="leading-relaxed font-medium">
             Governed by Indian Law. Disputes are subject to exclusive jurisdiction of courts in India.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default TermsAndConditions;
