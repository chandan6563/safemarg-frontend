// "use client";
// import Image from "next/image";
// import React from "react";
// import Flight2 from "@/assets/home/flight2.svg";
// import fbIcon from "@/assets/home/footer/fb.svg";
// import linkdinIcon from "@/assets/home/footer/linkdin.svg";
// import twitterIcon from "@/assets/home/footer/twitter.svg";
// import instagramIcon from "@/assets/home/footer/instragram.svg";

// const Section4 = () => {
//   const subscribeHandler = () => {
//     alert("subscribe");
//   };
//   return (
//     <div className="flex flex-col mx-2 lg:flex-row  lg:mx-10  border-3 border-gray-200 rounded-xl ">
//       <div className="w-full p-5 lg:w-1/3">
//         <Image src={Flight2} alt="flight" />
//       </div>

//       <div className="w-full font-semibold text-2xl gap-y-5 my-5 lg:w-2/3 flex flex-col justify-around text-center ">
//         <h2>Signup for Exclusive Email Coupons</h2>
//         <div className="pl-2 py- flex flex-col lg:flex-row  justify-between  rounded-md w-1/2 lg:border mx-auto">
//           <input
//             type="text"
//             placeholder="Email address"
//             className=" outline-0 overflow-hidden border-1 rounded-md m-0.5 px-3 lg:m-0 lg:px-0 lg:w-full lg:border-0"
//           />
//           <button
//             className="text-white bg-[#154880] rounded-md m-0.5 px-3"
//             onClick={subscribeHandler}
//           >
//             Subsribe
//           </button>
//         </div>
//         <div className="flex justify-center gap-x-2 lg:gap-x-10">
//           <Image src={fbIcon} width={30} alt="fb" />
//           <Image src={linkdinIcon} width={30} alt="linkdin" />
//           <Image src={twitterIcon} width={30} alt="twitter" />
//           <Image src={instagramIcon} width={30} alt="instram" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Section4;

"use client";

import Image from "next/image";
import React from "react";
import Flight2 from "@/assets/home/flight2.svg";
import { Mail, ArrowRight, Zap, ShieldCheck, Plane, Globe, Gift } from "lucide-react";
import fbIcon from "@/assets/home/footer/fb.svg";
import linkdinIcon from "@/assets/home/footer/linkdin.svg";
import twitterIcon from "@/assets/home/footer/twitter.svg";
import instagramIcon from "@/assets/home/footer/instragram.svg";

/**
 * Section4 Redesign:
 * High-conversion Newsletter / Community segment.
 * Features: High-end CTA card, glassmorphic social links, and refined micro-copy.
 * Compact version based on user feedback.
 */
const Section4 = () => {
  const subscribeHandler = () => {
    alert("Subscribed! Get ready for exclusive travel deals.");
  };

  return (
    <div className="relative py-16 px-6 lg:px-20 bg-white overflow-hidden font-[family-name:var(--font-poppins)]">
      
      {/* Dynamic Background Ornament */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="relative bg-gray-900 rounded-[3rem] p-8 lg:p-14 overflow-hidden shadow-2xl shadow-blue-200/50 group">
          
          {/* Animated Glow Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-emerald-500/10 opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
          
          {/* Animated Flight Path Across Section */}
          <div className="absolute bottom-[10%] right-[15%] pointer-events-none z-20">
             <div className="relative">
                <Plane 
                  className="w-24 h-24 text-blue-400 opacity-40 animate-flight-premium" 
                />
                {/* Secondary Flight Trace */}
                <Plane 
                  className="w-14 h-14 text-blue-300 opacity-20 animate-flight-premium absolute top-4 left-4" 
                  style={{ animationDelay: '5s' }}
                />
             </div>
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Segment */}
            <div className="lg:col-span-4 relative group/img hidden lg:block">
               <div className="relative p-6 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-inner group-hover/img:scale-105 transition-transform duration-1000">
                  <Image 
                    src={Flight2} 
                    alt="flight" 
                    className="w-full h-auto filter drop-shadow-[0_20px_50px_rgba(0,187,242,0.4)] animate-in zoom-in-75 duration-1000" 
                  />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-emerald-500 flex flex-col items-center justify-center text-white font-black text-center shadow-2xl shadow-emerald-400 rotate-12">
                     <Gift className="w-5 h-5 mb-0.5" />
                     <div className="text-[7px] leading-tight">OFFER</div>
                  </div>
               </div>
            </div>

            {/* Content Segment */}
            <div className="lg:col-span-8 space-y-6 animate-in fade-in slide-in-from-right-8 duration-1000">
               
               <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.2em]">
                     <Zap className="w-3 h-3" /> Join Our Elite Travel Club
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                    Signup for <span className="text-blue-500 italic">Exclusive Email Coupons.</span>
                  </h2>
                  <p className="text-white/60 font-medium text-sm max-w-lg leading-relaxed pt-1">
                    Be the first to know about first-class flight deals and limited-time discount codes directly to your inbox.
                  </p>
               </div>

               {/* Modern Subscription Form */}
               <div className="relative group/form max-w-lg">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[2rem] opacity-30 group-hover/form:opacity-70 blur-xl transition-opacity duration-700"></div>
                  <div className="relative flex flex-col sm:flex-row items-center p-2 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-500 group-hover/form:bg-white/10">
                     <div className="flex-1 flex items-center gap-3 px-4 w-full py-2 sm:py-0">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <input 
                          type="email" 
                          placeholder="VIP Email address" 
                          className="bg-transparent text-white font-bold text-base outline-none w-full placeholder:text-white/30"
                        />
                     </div>
                     <button
                        onClick={subscribeHandler}
                        className="w-full sm:w-auto h-12 bg-blue-600 hover:bg-emerald-500 text-white rounded-[1.5rem] px-8 font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-500/20 active:scale-95 transition-all duration-500 flex items-center justify-center gap-2"
                     >
                        Subscribe <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
                  <div className="flex items-center gap-4 mt-4 px-4">
                     <div className="flex items-center gap-1.5 text-emerald-400 text-[8px] font-black uppercase tracking-widest">
                        <ShieldCheck className="w-2.5 h-2.5" /> No Spam
                     </div>
                     <div className="w-1 h-1 rounded-full bg-white/20"></div>
                     <div className="flex items-center gap-1.5 text-blue-400 text-[8px] font-black uppercase tracking-widest">
                        <Globe className="w-2.5 h-2.5" /> Global Community
                     </div>
                  </div>
               </div>

               {/* Premium Social Links Overlay */}
               <div className="pt-6 flex flex-wrap items-center gap-6">
                  <span className="text-white/30 text-[8px] font-black uppercase tracking-[0.3em]">Connect Global HQ</span>
                  <div className="flex items-center gap-4">
                    {[
                      { icon: fbIcon, alt: "fb" },
                      { icon: linkdinIcon, alt: "linkdin" },
                      { icon: twitterIcon, alt: "twitter" },
                      { icon: instagramIcon, alt: "instagram" }
                    ].map((sns, idx) => (
                      <div key={idx} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:scale-110 hover:border-blue-400 group/sns transition-all duration-500">
                         <Image src={sns.icon} width={20} height={20} alt={sns.alt} className="filter group-hover/sns:brightness-0 group-hover/sns:invert-100 transition-all opacity-60 group-hover:opacity-100" />
                      </div>
                    ))}
                  </div>
               </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Final Section Accent */}
      <div className="mt-12 flex flex-col items-center gap-2 opacity-50 select-none">
         <div className="h-0.5 w-12 bg-gray-100"></div>
         <div className="text-[8px] font-black text-gray-300 uppercase tracking-[0.5em]">Experience Elite Travel</div>
      </div>
    </div>
  );
};

export default Section4;

