// "use client";

// const RefundPolicy = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Cancellation & Refund Policy</h1>

//       <p className="mb-4"><strong>Effective Date:</strong> 07 Aug 2025</p>
//       <p className="mb-4"><strong>Jurisdiction:</strong> India (with International Compliance)</p>

//       <p className="mb-4">
//         At SafeMarg, we aim to provide flexible and transparent booking services to our customers. 
//         This Cancellation & Refund Policy explains how cancellations and refunds are handled for 
//         flight tickets, hotel reservations, and cab bookings made through our platform <strong>www.safemarg.com</strong>.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. General Guidelines</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>All bookings made through SafeMarg are subject to the cancellation and refund policies of the respective airlines, hotels, and cab providers.</li>
//         <li>SafeMarg acts as an intermediary between you and the service providers and has no control over their policies.</li>
//         <li>Any applicable refunds will be processed only after receiving confirmation from the service provider.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Flight Ticket Cancellation & Refunds</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Refundable tickets: You may cancel these as per the airline’s policy. Airline cancellation fees will apply.</li>
//         <li>Non-refundable tickets: No refund will be provided unless explicitly stated by the airline.</li>
//         <li>Partial cancellations (in multi-city or round trips) may result in partial refunds, depending on fare rules.</li>
//         <li>No-show bookings are generally non-refundable.</li>
//       </ul>
//       <p className="mt-2">🕐 <strong>Cancellation Window:</strong> Most airlines allow cancellations up to 2–24 hours before departure.</p>
//       <p>✈️ <strong>Zero Cancellation Fee (where applicable):</strong> Only valid for tickets with such offers, subject to terms.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Hotel Booking Cancellation & Refunds</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Free Cancellation Hotels: Eligible for a full refund if cancelled within the provider’s specified time (e.g., 24–48 hours before check-in).</li>
//         <li>Partially Refundable or Non-Refundable Hotels: Refunds are processed according to hotel policy.</li>
//         <li>No-show or early check-out: No refund is applicable unless stated by the hotel.</li>
//       </ul>
//       <p className="mt-2">🛏️ Hotel cancellation terms are shown at the time of booking.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Cab Booking Cancellation & Refunds</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Free cancellation is allowed up to 2 hours before the scheduled pickup time.</li>
//         <li>Last-minute cancellations (less than 2 hours) or no-shows may incur a 100% cancellation fee.</li>
//         <li>Refunds for prepaid cab bookings will be processed after verifying with the cab operator.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Refund Process</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Refunds will be processed within 7 to 15 working days once approved by the airline, hotel, or cab operator.</li>
//         <li>Refunds will be issued to the original mode of payment.</li>
//         <li>A confirmation email will be sent once the refund is processed.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Service Fees & Deductions</h2>
//       <p>SafeMarg may charge a service fee or processing fee on cancellations, separate from charges imposed by service providers. 
//       This will be transparently communicated at the time of booking or cancellation.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">7. How to Cancel a Booking</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li>Visit <strong>www.safemarg.com</strong> and log into your account</li>
//         <li>Or contact us</li>
//         <li>Provide your Booking ID, contact number, and email ID for quick processing.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">8. Special Circumstances (Force Majeure)</h2>
//       <p>No refund will be provided for cancellations due to events beyond our control, such as:</p>
//       <ul className="list-disc list-inside mt-2">
//         <li>Natural disasters</li>
//         <li>Acts of war or terrorism</li>
//         <li>Government travel restrictions</li>
//         <li>Epidemics or pandemics</li>
//       </ul>
//       <p>However, we will make every effort to coordinate with partners for waiver requests or credit notes wherever possible.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">9. Dispute Resolution</h2>
//       <p>If you are not satisfied with the outcome of a refund or cancellation request, you may:</p>
//       <ul className="list-disc list-inside mt-2">
//         <li>Write to our support team at <strong>support@safemarg.com</strong></li>
//         <li>Lodge a complaint under the Consumer Protection (E-Commerce) Rules, 2020 or with your local consumer forum</li>
//       </ul>
//       <p>We are committed to resolving all disputes fairly and efficiently.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">10. Policy Updates</h2>
//       <p>SafeMarg reserves the right to revise this Cancellation & Refund Policy at any time without prior notice. 
//       Please check this page periodically for the latest updates.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">Need Help?</h2>
//       <p>For any questions or refund queries, reach out to our support team at <strong>support@safemarg.com</strong>.</p>
//     </div>
//   );
// };

// export default RefundPolicy;

"use client";
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

const sections = [
  { id: 'general', title: '1. General Guidelines' },
  { id: 'flight', title: '2. Flight Cancellation' },
  { id: 'hotel', title: '3. Hotel Cancellation' },
  { id: 'cab', title: '4. Cab Cancellation' },
  { id: 'process', title: '5. Refund Process' },
  { id: 'fees', title: '6. Service Fees' },
  { id: 'how', title: '7. How to Cancel' },
  { id: 'force', title: '8. Special Circumstances' },
  { id: 'dispute', title: '9. Dispute Resolution' },
  { id: 'updates', title: '10. Policy Updates' },
];

const RefundPolicy = () => {
  return (
    <PolicyLayout 
      title="Booking & Refund Policy" 
      effectiveDate="07 Aug 2025" 
      jurisdiction="India (with International Compliance)"
      sections={sections}
    >
      <section className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          At <strong className="text-blue-600">SafeMarg</strong>, we aim to provide flexible and transparent booking services. 
          This policy explains handled for flight tickets, hotel reservations, and cab bookings made through <strong>www.safemarg.com</strong>.
        </p>
      </section>

      <div className="space-y-20">
        <section id="general" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             1. General Guidelines
          </h2>
          <ul className="space-y-4 list-none p-0">
             {[
               "All bookings are subject to the specific cancellation/refund policies of the airlines, hotels, or cab providers.",
               "SafeMarg acts as an intermediary and does not control third-party service provider policies.",
               "Refunds are processed only after receiving confirmation/approval from the service provider."
             ].map((item, i) => (
               <li key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <span className="font-medium text-gray-700">{item}</span>
               </li>
             ))}
          </ul>
        </section>

        <section id="flight" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             2. Flight Ticket Cancellation & Refunds
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 space-y-3">
               <h4 className="font-bold text-blue-600">Refundable Tickets</h4>
               <p className="text-sm text-gray-500">Cancellations allowed as per airline policy. Standard cancellation fees apply.</p>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 space-y-3">
               <h4 className="font-bold text-red-600">Non-Refundable Tickets</h4>
               <p className="text-sm text-gray-500">Generally no refund provided unless explicitly stated by the airline for specific cases.</p>
            </div>
          </div>
          <p className="mt-6 text-sm italic text-gray-500">
             🕐 Cancellation Window: Most airlines allow cancellations up to 2–24 hours before departure. No-shows are typically non-refundable.
          </p>
        </section>

        <section id="hotel" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             3. Hotel Booking Cancellation & Refunds
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4 list-none p-0">
             {[
               "Free Cancellation: Full refund if within the provider's specified window.",
               "Partially/Non-refundable: Processed strictly per specific hotel policy.",
               "No-show/Early Check-out: No refund is applicable unless stated by the hotel."
             ].map((h, i) => (
               <li key={i} className="p-4 rounded-xl bg-indigo-50/30 border border-indigo-100 text-sm font-medium">
                  {h}
               </li>
             ))}
          </ul>
        </section>

        <section id="process" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             5. Refund Process
          </h2>
          <div className="p-8 rounded-3xl bg-gray-900 text-white space-y-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
             <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="space-y-2">
                   <h3 className="text-3xl font-bold">7 to 15 Working Days</h3>
                   <p className="opacity-70">Average processing time once approved by the provider.</p>
                </div>
                <div className="flex-shrink-0 text-right">
                   <span className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest">Original Payment Method</span>
                </div>
             </div>
          </div>
        </section>

        <section id="fees" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             6. Service Fees & Deductions
          </h2>
          <p className="leading-relaxed">
            SafeMarg may charge a separate service or processing fee on cancellations. 
            This is independent of charges from providers and will be transparently communicated.
          </p>
        </section>

        <section id="how" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             7. How to Cancel a Booking
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
             <div className="flex-1 p-6 rounded-2xl bg-white border-2 border-dashed border-gray-200 text-center space-y-2">
                <h4 className="font-bold">Online Portal</h4>
                <p className="text-sm text-gray-500">Log in at www.safemarg.com and visit your dashboard.</p>
             </div>
             <div className="flex-1 p-6 rounded-2xl bg-white border-2 border-dashed border-gray-200 text-center space-y-2">
                <h4 className="font-bold">Customer Support</h4>
                <p className="text-sm text-gray-500">Contact us with your Booking ID, Email, and Phone for quick action.</p>
             </div>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default RefundPolicy;

