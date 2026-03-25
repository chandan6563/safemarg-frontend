// "use client";

// const ContactUs = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

//       <p className="mb-4">✈️ <strong>Welcome to SafeMarg – Your Trusted Travel Partner</strong></p>
//       <p className="mb-6">
//         At SafeMarg, we believe that travel should be simple, affordable, and secure. 
//         As a proudly IATA-accredited online travel agency, we provide end-to-end travel solutions 
//         for individuals, families, and businesses across India and around the world.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">🌍 Who We Are</h2>
//       <p className="mb-4">
//         SafeMarg is a modern, customer-focused travel agency built to make travel easy and accessible. 
//         Whether you&apos;re flying for business, vacationing with family, or booking a last-minute trip, 
//         our platform offers the best deals on flights, hotels, and cab services, all in one place.
//       </p>
//       <p className="mb-6">
//         We partner with leading airlines, hotels, and transportation providers to bring you competitive rates 
//         and a seamless booking experience — backed by industry compliance and global standards.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">🧭 What We Offer</h2>
//       <ul className="list-disc list-inside mt-2 mb-6">
//         <li>✅ <strong>Flight Bookings:</strong> Book the cheapest domestic and international air tickets with real-time fare comparisons.</li>
//         <li>✅ <strong>Hotel Reservations:</strong> Choose from a wide range of budget to luxury hotels in top destinations worldwide.</li>
//         <li>✅ <strong>Cab Services:</strong> Pre-book reliable airport transfers and local cab services at your convenience.</li>
//         <li>✅ <strong>Customer Support:</strong> Our travel experts are available to assist you at every step of your journey.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">🛡️ Why Choose SafeMarg?</h2>
//       <ul className="list-disc list-inside mt-2 mb-6">
//         <li>✔️ <strong>IATA Certified</strong> – Trusted & recognized globally</li>
//         <li>💸 <strong>Best Price Guarantee</strong> – Affordable travel, always</li>
//         <li>🔐 <strong>Secure Payments</strong> – Powered by trusted payment gateways</li>
//         <li>📱 <strong>100% Online & Contactless Booking</strong></li>
//         <li>🤝 <strong>Transparent Policies & Dedicated Support</strong></li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">📍 Our Vision</h2>
//       <p className="mb-6">
//         To become India&apos;s most reliable and affordable digital travel partner, 
//         empowering every traveler with smarter choices and seamless experiences.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">📞 Contact Us</h2>
//       <p className="mb-2">
//         Have questions? Ready to book your next trip? We&apos;re here to help.
//       </p>
//       <p className="mb-2">📧 Email: <strong>support@safemarg.com</strong></p>
//       <p className="mb-6">📞 Phone: <strong>+91 9650070205</strong></p>

//       <p className="text-center font-semibold">Fly Smart. Travel Safe. With SafeMarg.</p>
//     </div>
//   );
// };

// export default ContactUs;

"use client";
import React from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Send, 
  Clock, 
  ArrowRight,
  Headset,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 font-[family-name:var(--font-poppins)]">
      {/* Hero Section - Compact */}
      <section className="bg-gray-950 pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-400/20 text-blue-400 text-sm font-bold tracking-widest uppercase">
            <Clock className="w-4 h-4" /> 24/7 Support Available
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Have questions about your booking or need travel advice? Our specialists are just a message away.
          </p>
        </div>
      </section>

      {/* Main Content Area - Fixed Visibility & Sizing */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 pb-16 relative z-20">
        <div className="grid lg:grid-cols-[1fr_400px] gap-6">
          
          {/* Contact Details & Cards */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { 
                  title: 'Email Us', 
                  info: 'support@safemarg.com', 
                  desc: 'Resolution < 4h', 
                  icon: Mail, 
                  color: 'bg-blue-600',
                  href: 'mailto:support@safemarg.com'
                },
                { 
                  title: 'Call Us', 
                  info: '+91 96500 70205', 
                  desc: '24/7 Support', 
                  icon: Phone, 
                  color: 'bg-emerald-600',
                  href: 'tel:+919650070205'
                },
                { 
                  title: 'WhatsApp', 
                  info: 'Quick Chat', 
                  desc: 'Instant text reply', 
                  icon: MessageSquare, 
                  color: 'bg-green-500',
                  href: 'https://wa.me/919650070205'
                },
                { 
                  title: 'Location', 
                  info: 'New Delhi, India', 
                  desc: 'Global Operations', 
                  icon: MapPin, 
                  color: 'bg-amber-600',
                  href: '#'
                }
              ].map((card, i) => (
                <a 
                  key={i} 
                  href={card.href}
                  className="group bg-white p-5 rounded-[1.5rem] shadow-[0_5px_25px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 block"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color} text-white flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform`}>
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 mb-1 break-words">{card.info}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{card.title}</span>
                    <span className="text-[9px] text-gray-500 font-medium italic">{card.desc}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Connect Layer - Compact */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] space-y-8">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight">Follow Our Journey</h3>
                    <p className="text-gray-500">Join our community for travel tips, exclusive offers, and global updates.</p>
                  </div>
                  <div className="flex gap-4">
                     {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                       <button key={i} className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                          <Icon className="w-5 h-5" />
                       </button>
                     ))}
                  </div>
               </div>
               
               <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-gray-100 italic">
                  <div className="flex gap-4 text-sm text-gray-600">
                     <Headset className="w-10 h-10 text-blue-600 opacity-20" />
                     <p>Our dedicated support team undergoes specialized training to provide you with the most efficient travel solutions.</p>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600">
                     <Send className="w-10 h-10 text-emerald-600 opacity-20" />
                     <p>We leverage cutting-edge technology to ensure your messages reach us instantly and are prioritized accordingly.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form Area - Refined */}
          <div className="relative group/form">
             <div className="absolute -inset-4 bg-blue-600 rounded-[3rem] rotate-2 opacity-5 blur-2xl group-hover/form:rotate-1 transition-all"></div>
             <div className="relative bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <MessageSquare className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="text-xl font-black text-gray-900 leading-tight">Send a Message</h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Typical reply: <span className="text-emerald-500">24 mins</span></p>
                   </div>
                </div>
 
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                   <div className="space-y-4">
                      <div className="grid sm:grid-cols-1 gap-4">
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-blue-400 outline-none transition-all font-medium text-sm" />
                         </div>
                         <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">EmailID</label>
                            <input type="email" placeholder="john@example.com" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-blue-400 outline-none transition-all font-medium text-sm" />
                         </div>
                      </div>
                      
                      <div className="space-y-1.5">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                         <input type="text" placeholder="Booking Inquiry" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-blue-400 outline-none transition-all font-medium text-sm" />
                      </div>
 
                      <div className="space-y-1.5">
                         <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                         <textarea rows="3" placeholder="How can we help you?" className="w-full px-5 py-3.5 rounded-xl bg-gray-50/50 border border-gray-100 focus:bg-white focus:border-blue-400 outline-none transition-all font-medium text-sm resize-none"></textarea>
                      </div>
                   </div>
 
                   <button className="w-full bg-gray-950 hover:bg-blue-600 text-white font-black py-4 rounded-xl shadow-xl shadow-gray-200 hover:shadow-blue-200 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 active:scale-95 text-xs uppercase tracking-widest">
                      Send Secure Message <ArrowRight className="w-4 h-4" />
                   </button>
                   
                   <p className="text-center text-[9px] text-gray-400 px-4 mt-4 font-medium uppercase tracking-tighter">
                      Protected by Enterprise-grade encryption
                   </p>
                </form>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
