// "use client";

// const Disclaimer = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Disclaimer</h1>

//       <p>
//         The information provided on <strong>SafeMarg</strong> is for general informational purposes only. While we strive to ensure the accuracy and reliability of the information on our website, we make no guarantees, express or implied, regarding its completeness, accuracy, or reliability.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Website</h2>
//       <p>
//         By using SafeMarg, you agree that your use of the website is at your own risk. We are not responsible for any losses, damages, or inconveniences arising from your use of our platform, including flight bookings, payments, or travel-related decisions.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
//       <p>
//         SafeMarg acts as a facilitator between travelers and airlines, hotels, car rental companies, and other travel providers. We do not control third-party services and are not responsible for their actions, policies, or content. Users should review the terms, conditions, and privacy policies of any third-party providers before completing bookings.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Booking Accuracy</h2>
//       <p>
//         While we take care to display accurate flight schedules, pricing, and availability, errors may occur. SafeMarg is not liable for discrepancies, booking cancellations, delays, or price changes. It is the responsibility of the user to confirm all booking details with the respective travel providers.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
//       <p>
//         SafeMarg, its affiliates, employees, or partners shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to the use of our website or services. By using our platform, you agree to hold us harmless from any claims or losses.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Disclaimer</h2>
//       <p>
//         We may update this Disclaimer from time to time. Any significant changes will be posted on this page. Users are encouraged to review this page periodically to stay informed about our disclaimer policy.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
//       <p>
//         If you have any questions about this Disclaimer or our website, please contact us at <strong>support@safemarg.com</strong>.
//       </p>
//     </div>
//   );
// };

// export default Disclaimer;

"use client";
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

const sections = [
  { id: 'use', title: '1. Use of Website' },
  { id: 'thirdparty', title: '2. Third-Party Services' },
  { id: 'accuracy', title: '3. Booking Accuracy' },
  { id: 'liability', title: '4. Limitation of Liability' },
  { id: 'changes', title: '5. Changes to This Disclaimer' },
  { id: 'contact', title: '6. Contact Us' },
];

const Disclaimer = () => {
  return (
    <PolicyLayout 
      title="Disclaimer" 
      effectiveDate="07 Aug 2025" 
      jurisdiction="India (Global Standard)"
      sections={sections}
    >
      <section className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed font-medium italic border-l-4 border-blue-500 pl-6 py-2">
          The information provided on <strong className="text-blue-600">SafeMarg</strong> is for general informational purposes only. 
          While we strive for accuracy, we make no guarantees regarding completeness or reliability.
        </p>
      </section>

      <div className="space-y-20">
        <section id="use" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             1. Use of Website
          </h2>
          <p className="leading-relaxed">
            By using SafeMarg, you agree that your use of the website is at your own risk. We are not responsible for any losses, 
            damages, or inconveniences arising from your use of our platform, including bookings or travel-related decisions.
          </p>
        </section>

        <section id="thirdparty" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             2. Third-Party Services
          </h2>
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 space-y-4">
            <p className="leading-relaxed text-gray-700">
              SafeMarg acts as a facilitator between travelers and airlines, hotels, and other providers. 
              We <strong className="text-red-600">do not control</strong> third-party services and are not responsible for their actions or policies.
            </p>
          </div>
        </section>

        <section id="accuracy" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             3. Booking Accuracy
          </h2>
          <p className="leading-relaxed">
            While we take care to display accurate pricing and availability, errors may occur. SafeMarg is not liable for 
            discrepancies, cancellations, or delays. Users must confirm details with travel providers.
          </p>
        </section>

        <section id="liability" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             4. Limitation of Liability
          </h2>
          <div className="p-8 rounded-3xl bg-red-50/50 border border-red-100 text-red-900 font-medium leading-relaxed">
            SafeMarg, its affiliates, or partners shall not be held liable for any direct, indirect, or incidental damages 
            arising out of or related to the use of our services.
          </div>
        </section>

        <section id="changes" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             5. Changes to Disclaimer
          </h2>
          <p className="leading-relaxed">
            We reserve the right to update this Disclaimer anytime. Significant changes will be posted here. 
            Review periodically to stay informed.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default Disclaimer;
