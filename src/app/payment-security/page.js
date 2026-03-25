// "use client";

// const PaymentSecurity = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Payment Security</h1>

//       <p>
//         At <strong>SafeMarg</strong>, we take the security of your payment information very seriously. We are committed to providing a safe and secure platform for all your flight bookings and travel transactions.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Secure Payment Gateway</h2>
//       <p>
//         All payments made through SafeMarg are processed via secure and trusted payment gateways. We do not store your credit/debit card information on our servers. Payment details are encrypted during transmission to prevent unauthorized access.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Encryption</h2>
//       <p>
//         SafeMarg uses industry-standard SSL (Secure Socket Layer) encryption technology to protect your personal and financial information. This ensures that all data sent between your browser and our servers remains private and secure.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Compliance with Payment Standards</h2>
//       <p>
//         We comply with international security standards such as PCI DSS (Payment Card Industry Data Security Standard) to ensure the safe handling of payment information. This means all transactions are protected against fraud and unauthorized access.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Fraud Detection</h2>
//       <p>
//         Our systems include advanced monitoring and fraud detection mechanisms to identify and prevent suspicious activity. In case of any unusual transactions, our team may contact you to verify the payment.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Responsibilities</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Keep your login credentials and payment details secure.</li>
//         <li>Do not share your account information with others.</li>
//         <li>Report any suspicious activity or unauthorized transactions to SafeMarg immediately.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
//       <p>
//         If you have any questions regarding payment security or need assistance, please contact us at <strong>support@safemarg.com</strong>. Your trust is our priority, and we are here to ensure a secure booking experience.
//       </p>
//     </div>
//   );
// };

// export default PaymentSecurity;

"use client";
import React from "react";
import PolicyLayout from "@/components/PolicyLayout";

const sections = [
  { id: "gateway", title: "1. Secure Payment Gateway" },
  { id: "encryption", title: "2. Encryption" },
  { id: "compliance", title: "3. Compliance" },
  { id: "fraud", title: "4. Fraud Detection" },
  { id: "responsibility", title: "5. Your Responsibilities" },
  { id: "contact", title: "6. Contact Us" },
];

const PaymentSecurity = () => {
  return (
    <PolicyLayout
      title="Payment Security"
      effectiveDate="07 Aug 2025"
      jurisdiction="Global (PCI-DSS Standards)"
      sections={sections}
    >
      <section className="mb-12 text-center md:text-left">
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          At <strong className="text-blue-600">SafeMarg</strong>, the security
          of your payment information is our absolute priority. We use
          enterprise-grade protocols to ensure every transaction is shielded
          from unauthorized access.
        </p>
      </section>

      <div className="space-y-20">
        <section id="gateway" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
            1. Secure Payment Gateway
          </h2>
          <p className="leading-relaxed mb-6">
            All payments are processed via trusted third-party gateways. We{" "}
            <strong className="text-red-500">never store</strong> your full
            credit/debit card information on our servers. Data is tokenized and
            encrypted during the entire transmission process.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                01
              </div>
              <span className="text-sm font-medium">No Card Data Stored</span>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                02
              </div>
              <span className="text-sm font-medium">End-to-End Encryption</span>
            </div>
          </div>
        </section>

        <section id="encryption" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
            2. SSL Encryption
          </h2>
          <div className="p-8 rounded-3xl bg-gray-950 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[80px]"></div>
            <p className="text-lg opacity-80 leading-relaxed italic border-l-2 border-blue-400 pl-6">
              SafeMarg uses industry-standard 256-bit SSL (Secure Socket Layer)
              technology. This ensures all data between your browser and our
              servers remains private, providing a &quot;bulletproof&quot; layer
              for your financial interactions.
            </p>
          </div>
        </section>

        <section id="compliance" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
            3. PCI-DSS Compliance
          </h2>
          <p className="leading-relaxed">
            We adhere to{" "}
            <strong>
              PCI-DSS (Payment Card Industry Data Security Standard)
            </strong>
            . This global standard dictates how cardholder data is managed to
            prevent fraud and unauthorized breaches. Our partners undergo
            regular security audits to maintain this rigid certification.
          </p>
        </section>

        <section id="fraud" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
            4. Real-time Fraud Detection
          </h2>
          <p className="leading-relaxed">
            Our infrastructure includes automated monitoring systems that detect
            anomalous and suspicious behaviors 24/7. If a risk is flagged, our
            security team may contact you to verify identity before a
            transaction completes.
          </p>
        </section>

        <section id="responsibility" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
            5. Your Responsibilities
          </h2>
          <div className="space-y-4">
            {[
              "Keep your login credentials and payment methods strictly private.",
              "Avoid sharing account information via email or unsecured channels.",
              "Report any suspicious activity to our support team immediately.",
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl border border-amber-100 bg-amber-50/30 text-amber-900 font-medium italic"
              >
                <div className="w-2 h-2 rounded-full bg-amber-500" /> {r}
              </div>
            ))}
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default PaymentSecurity;
