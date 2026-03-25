// "use client";

// const AboutUs = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>

//       <p className="mb-4">
//         ✈️ <strong>Welcome to SafeMarg – Your Trusted Travel Partner</strong>
//       </p>
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
//         and a seamless booking experience &mdash; backed by industry compliance and global standards.
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
//         <li>✔️ <strong>IATA Accredited</strong> &mdash; Trusted & recognized globally</li>
//         <li>💸 <strong>Best Price Guarantee</strong> &mdash; Affordable travel, always</li>
//         <li>🔐 <strong>Secure Payments</strong> &mdash; Powered by trusted payment gateways</li>
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

// export default AboutUs;


"use client";
import React from 'react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { 
  Plane, 
  Hotel, 
  Car, 
  Headset, 
  ShieldCheck, 
  BadgeDollarSign, 
  Lock, 
  Smartphone, 
  Handshake, 
  Target, 
  Mail, 
  Phone, 
  Globe
} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-[family-name:var(--font-poppins)]">
      {/* Hero Section - Compact Height */}
      <section className="relative h-[35vh] lg:h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about_us_hero.png" 
            alt="About Us Hero" 
            fill 
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-top-10 duration-1000">
            Our Journey, <span className="text-blue-400">Your Destination</span>
          </h1>
          <p className="text-sm md:text-lg font-medium max-w-2xl mx-auto opacity-90 drop-shadow-lg animate-in fade-in slide-in-from-bottom-10 duration-1000">
            SafeMarg is redefining the travel experience with seamless, secure, and smart solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <div className="relative z-20 -mt-12 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/90 backdrop-blur-2xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/40">
          {[
            { label: 'Happy Travelers', value: '50K+', icon: Plane },
            { label: 'Airlines', value: '100+', icon: Globe },
            { label: 'Booking Success', value: '99.9%', icon: ShieldCheck },
            { label: 'Quality Support', value: '24/7', icon: Headset }
          ].map((stat, idx) => (
            <div key={idx} className="text-center group border-r border-gray-100 last:border-0">
              <div className="flex justify-center mb-2">
                 <stat.icon className="w-8 h-8 text-blue-600 transition-transform group-hover:scale-125 duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</h3>
              <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Container - Reduced Spacing */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16 lg:space-y-24">
        
        {/* Section: Who We Are */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">Your Trusted IATA-Accredited Travel Partner</h2>
            <p className="text-lg text-gray-600 leading-relaxed italic border-l-4 border-blue-500 pl-6 py-2">
              SafeMarg is a modern, customer-focused travel agency built to make travel easy and accessible.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              Whether you're flying for business, vacationing with family, or booking a last-minute trip, 
              our platform offers the best deals on flights, hotels, and cab services, all in one place.
            </p>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] group">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 z-10 group-hover:opacity-0 transition-opacity"></div>
             <Image 
                src="/main-sectionBG.svg" 
                alt="Travel Background" 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-700" 
             />
             <div className="absolute inset-0 flex items-center justify-center p-12 z-20">
               <div className="text-center space-y-4 bg-white/20 backdrop-blur-md p-8 rounded-2xl border border-white/30">
                  <Plane className="w-16 h-16 text-blue-600 mx-auto animate-pulse" />
                  <p className="text-xl font-medium text-gray-900">"Fly Smart. Travel Safe."</p>
               </div>
             </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Our Core Services</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">Everything you need for a perfect trip, managed with expert care.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Flight Bookings', desc: 'Real-time comparisons for cheap domestic/international tickets.', icon: Plane, color: 'text-blue-500', bg: 'bg-blue-50' },
              { title: 'Hotel Reservations', desc: 'Handpicked budget to luxury stays in top destinations.', icon: Hotel, color: 'text-emerald-500', bg: 'bg-emerald-50' },
              { title: 'Cab Services', desc: 'Reliable airport transfers/local cabs for your schedule.', icon: Car, color: 'text-orange-500', bg: 'bg-orange-50' },
              { title: 'Customer Support', desc: 'Dedicated experts available 24/7 to assist you.', icon: Headset, color: 'text-purple-500', bg: 'bg-purple-50' }
            ].map((service, idx) => (
              <Tilt key={idx} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={2000}>
                <div className="h-full p-6 lg:p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all group flex flex-col items-center text-center">
                  <div className={`p-4 rounded-2xl ${service.bg} mb-6 group-hover:rotate-6 transition-transform duration-500 ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-xs lg:text-sm">{service.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </div>

        {/* Section: Why Choose Us (Dark Theme) - Compact Padding */}
        <div className="bg-gray-950 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-3xl">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-blue-400 font-bold uppercase tracking-widest">Advantages</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">Why Travelers Trust Us</h2>
              </div>
              <div className="grid gap-8">
                {[
                  { title: 'IATA Accredited', icon: ShieldCheck, desc: 'Globally recognized security standard.' },
                  { title: 'Best Price Guarantee', icon: BadgeDollarSign, desc: 'Premium travel at affordable rates.' },
                  { title: 'Secure Infrastructure', icon: Lock, desc: 'Advanced encryption for every transaction.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-400/50 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-gray-400 text-xs leading-relaxed italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative group perspective">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 shadow-2xl text-center space-y-6 transform hover:scale-[1.02] transition-transform duration-500">
                    <div className="inline-block p-4 rounded-3xl bg-blue-600/20 mb-2">
                      <Target className="w-12 h-12 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-base opacity-80 leading-relaxed italic font-light">
                      "Empowering every traveler with smarter choices and seamless experiences."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Contact CTA - Compact */}
        <div className="relative max-w-5xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-14 text-center space-y-8 border border-white shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-100 rounded-full -translate-x-12 -translate-y-12 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
          
          <div className="relative z-10 space-y-4">
            <div className="inline-block p-3 rounded-full bg-blue-600 text-white mb-1 shadow-lg shadow-blue-200">
              <Headset className="w-8 h-8 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Let’s Plan Your Next Adventure</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
              Our travel specialists are waiting to help you navigate your journey with expert advice and support.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:support@safemarg.com" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-xl shadow-sm hover:shadow-xl transition-all text-blue-600 font-bold border border-blue-100 hover:border-blue-400 text-sm">
              <Mail className="w-4 h-4" /> support@safemarg.com
            </a>
            <a href="tel:+919650070205" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 px-8 py-4 rounded-xl shadow-xl hover:shadow-blue-600/40 hover:-translate-y-1 transition-all text-white font-bold text-sm">
              <Phone className="w-4 h-4 flex-shrink-0" /> +91 9650070205
            </a>
          </div>
          
          <div className="pt-8">
            <p className="text-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent inline-flex items-center gap-3">
               Fly Smart. Travel Safe. With SafeMarg. <Plane className="text-blue-600/80 w-6 h-6 border-b-2 border-blue-400" />
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
