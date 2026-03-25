// "use client";

// const CookiesPolicy = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Cookies Policy</h1>

//       <p>
//         At <strong>SafeMarg</strong>, we use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and provide personalized content and offers. This Cookies Policy explains what cookies are, how we use them, and your choices regarding cookies.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
//       <p>
//         Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, login details, and other information to improve your experience.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
//       <ul className="list-disc list-inside mt-2">
//         <li><strong>Essential Cookies:</strong> Necessary for the website to function properly, including secure login and booking processes.</li>
//         <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website and improve performance.</li>
//         <li><strong>Functional Cookies:</strong> Remember your preferences and settings to provide a more personalized experience.</li>
//         <li><strong>Marketing Cookies:</strong> Used to show relevant promotions and advertisements based on your interests.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Cookies</h2>
//       <p>
//         SafeMarg may use third-party services such as Google Analytics, advertising networks, and social media platforms that set cookies on your device. These cookies are governed by the respective third-party privacy policies.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Cookie Choices</h2>
//       <p>
//         You can manage or disable cookies through your browser settings. Please note that blocking certain cookies may affect the functionality of our website and booking services.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates to This Policy</h2>
//       <p>
//         We may update this Cookies Policy from time to time. Significant changes will be notified on our website or via email. We encourage you to review this page periodically.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
//       <p>
//         If you have any questions about our use of cookies, please contact us at <strong>support@safemarg.com</strong>.
//       </p>
//     </div>
//   );
// };

// export default CookiesPolicy;


"use client";
import React from 'react';
import PolicyLayout from '@/components/PolicyLayout';

const sections = [
  { id: 'definition', title: '1. What Are Cookies?' },
  { id: 'usage', title: '2. How We Use Cookies' },
  { id: 'thirdparty', title: '3. Third-Party Cookies' },
  { id: 'choices', title: '4. Your Cookie Choices' },
  { id: 'updates', title: '5. Updates to This Policy' },
  { id: 'contact', title: '6. Contact Us' },
];

const CookiesPolicy = () => {
  return (
    <PolicyLayout 
      title="Cookies Policy" 
      effectiveDate="07 Aug 2025" 
      jurisdiction="Global Compliance"
      sections={sections}
    >
      <section className="mb-12">
        <p className="text-xl text-gray-700 leading-relaxed font-medium">
          At <strong className="text-blue-600">SafeMarg</strong>, we use cookies and similar tracking technologies to enhance your browsing experience, 
          analyze website traffic, and provide personalized content and offers.
        </p>
      </section>

      <div className="space-y-20">
        <section id="definition" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             1. What Are Cookies?
          </h2>
          <p className="leading-relaxed">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences, 
            login details, and other information to improve your experience.
          </p>
        </section>

        <section id="usage" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             2. How We Use Cookies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Essential Cookies", d: "Necessary for the website to function properly, including secure login and booking processes.", icon: "🔐" },
              { t: "Performance Cookies", d: "Help us understand how visitors interact with our website and improve performance.", icon: "📈" },
              { t: "Functional Cookies", d: "Remember your preferences and settings to provide a more personalized experience.", icon: "⚙️" },
              { t: "Marketing Cookies", d: "Used to show relevant promotions and advertisements based on your interests.", icon: "🎯" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white transition-all hover:shadow-lg">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h4 className="font-bold text-gray-900 mb-2">{item.t}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="thirdparty" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             3. Third-Party Cookies
          </h2>
          <p className="leading-relaxed">
            SafeMarg may use third-party services such as <strong>Google Analytics</strong>, advertising networks, and social media platforms 
            that set cookies on your device. These cookies are governed by the respective third-party privacy policies.
          </p>
        </section>

        <section id="choices" className="scroll-mt-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             4. Your Cookie Choices
          </h2>
          <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 text-blue-900 leading-relaxed font-medium">
            You can manage or disable cookies through your browser settings. Please note that blocking certain cookies 
            may affect the functionality of our website and booking services.
          </div>
        </section>

        <section id="updates" className="scroll-mt-24 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-4 border-b pb-4 border-gray-100">
             5. Updates to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Cookies Policy from time to time. Significant changes will be notified on our website 
            or via email. We encourage you to review this page periodically.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default CookiesPolicy;
