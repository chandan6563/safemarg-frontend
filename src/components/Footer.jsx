// import React from "react";
// import safemargIcon from "@/assets/home/safemarg-logo.png";
// import {
//   SocialIcons,
//   aboutTheSite,
//   popularDomesticFlightRoutes,
//   popularInternationalFlightRoutes,
//   popularAirlines,
// } from "@/constants/footer";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="">
//       <div className="flex flex-col text-center gap-y-5 lg:flex-row justify-evenly text-sm p-8   ">
//         <div className="flex-col mx-auto lg:mx-0 order-2 -mb-5 lg:order-0 ">
//           <Link href={"/"}>
//             <Image
//               src={safemargIcon}
//               width={200}
//               alt="logo"
//               className="mx-auto mt-3"
//             />
//           </Link>
//           <div className="flex gap-x-10 lg:justify-between my-4">
//             {SocialIcons.map(({ icon, href }, i) => {
//                 return (
//                   <a
//                     key={i}
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mx-2"
//                   >
//                     <Image width={25} src={icon} alt={href} />
//                   </a>
//                 );
//               })}

//           </div>
//         </div>
//         <div className="flex  flex-col ">
//           <h2 className="font-semibold text-base ">About the Site</h2>
//           {aboutTheSite.map(({ text, href }, i) => {
//             return (
//               <Link
//                 href={href}
//                 className="my-0.5 hover:text-[#00BBF2B0]"
//                 key={text}
//               >
//                 {text}
//               </Link>
//             );
//           })}
//         </div>
//         {/* <div className="flex  flex-col">
//           <h2 className="font-semibold text-base">
//             Popular Domestic Flight Routes
//           </h2>
//           {popularDomesticFlightRoutes.map(({ text, href }) => {
//             return (
//               <Link
//                 href={href}
//                 key={text}
//                 className="my-0.5 hover:text-[#00BBF2B0]"
//               >
//                 {text}
//               </Link>
//             );
//           })}
//         </div> */}
//         {/* <div className="flex  flex-col">
//           <h2 className="font-semibold text-base">
//             Popular International Flight Routes
//           </h2>
//           {popularInternationalFlightRoutes.map(({ text, href }) => {
//             return (
//               <Link
//                 href={href}
//                 key={text}
//                 className="my-0.5 hover:text-[#00BBF2B0]"
//               >
//                 {text}
//               </Link>
//             );
//           })}
//         </div>
//         <div className="flex  flex-col">
//           <h2 className="font-semibold text-base">Popular Airlines</h2>
//           {popularAirlines.map(({ text, href }) => {
//             return (
//               <Link
//                 href={href}
//                 key={text}
//                 className="my-0.5 hover:text-[#00BBF2B0]"
//               >
//                 {text}
//               </Link>
//             );
//           })}
//         </div> */}
//       </div>
//       <hr />
//       <div className="text-sm text-center py-4">
//         Copyright &copy; 2025 Safemarg, India. All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  SocialIcons, 
  aboutTheSite, 
  popularDomesticFlightRoutes, 
  popularInternationalFlightRoutes, 
  popularAirlines,
  companyDescription,
  contactInfo
} from "@/constants/footer";
import safemargIcon from "@/assets/home/safemarg-logo.png";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 font-[family-name:var(--font-poppins)]">
      {/* Top Section: "Newsletter" / Brand Banner */}
      <div className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Stay ahead of the curve</h3>
            <p className="text-gray-400 max-w-md">Subscribe to get exclusive travel deals and global updates directly in your inbox.</p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md bg-white/5 p-2 rounded-2xl border border-white/10">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-none outline-none px-4 py-3 text-white flex-1 min-w-0" 
            />
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center gap-2">
              Join <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand & Social Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="inline-block">
              <Image src={safemargIcon} width={180} height={50} alt="SafeMarg Logo" className="brightness-110" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm italic">
              {companyDescription}
            </p>
            <div className="flex items-center gap-3">
              {SocialIcons.map(({ id, icon, href, label }) => (
                <a 
                  key={id} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-transparent hover:border-blue-200 hover:bg-blue-50 transition-all text-gray-400 hover:text-blue-600 group"
                  aria-label={label}
                >
                  <Image src={icon} width={20} height={20} alt={label} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-l-4 border-blue-600 pl-3">Explore</h4>
            <nav className="flex flex-col space-y-3">
              {aboutTheSite.map((link) => (
                <Link 
                  key={link.text} 
                  href={link.href} 
                  className="text-gray-500 hover:text-blue-600 text-[13px] font-medium flex items-center gap-1 group"
                >
                  {link.text}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Travel Links Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-l-4 border-emerald-500 pl-3">Popular Routes</h4>
            <div className="space-y-3">
               <div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-2">Domestic</p>
                 <nav className="flex flex-col space-y-2">
                   {popularDomesticFlightRoutes.slice(0, 4).map((link, i) => (
                     <Link key={i} href={link.href} className="text-gray-500 hover:text-emerald-600 text-[13px] font-medium truncate">
                       {link.text}
                     </Link>
                   ))}
                 </nav>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mb-2 mt-4">International</p>
                 <nav className="flex flex-col space-y-2">
                   {popularInternationalFlightRoutes.slice(0, 4).map((link, i) => (
                     <Link key={i} href={link.href} className="text-gray-500 hover:text-blue-600 text-[13px] font-medium truncate">
                       {link.text}
                     </Link>
                   ))}
                 </nav>
               </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest border-l-4 border-amber-500 pl-3">Get in Touch</h4>
            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Support</p>
                   <p className="text-sm font-bold text-gray-700">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Email Us</p>
                   <p className="text-sm font-bold text-gray-700">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Headquarters</p>
                   <p className="text-sm font-bold text-gray-700">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400 font-medium">
            Copyright &copy; {currentYear} <span className="text-blue-600 font-bold">SafeMarg</span>, India. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy</Link>
            <Link href="/term-conditions" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="/cookies-policy" className="hover:text-gray-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
