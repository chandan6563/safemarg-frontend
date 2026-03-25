// // import React from "react";
// // import about from "@/constants/section3";
// // import Image from "next/image";

// // const Section3 = () => {
// //   return (
// //     <div>
// //       {about.map((section, i) => {
// //         return (
// //           <div
// //             className={`flex flex-col justify-between p-8 lg:flex-row`}
// //             key={i}
// //           >
// //             <div className={`flex-1 ${i % 2 == 0 ? "" : "lg:order-2"} `}>
// //               <Image src={section.image} alt={section.headline} />
// //             </div>
// //             <div className="flex-1 flex-col px-5 py-2 order-1">
// //               <h2 className="font-semibold text-xl lg:text-3xl">
// //                 {section.headline}
// //               </h2>

// //               <p className="my-5 ">
// //                 <span className="font-bold">Safemarg</span>
// //                 {section.p1}
// //               </p>
// //               <p className="my-5">{section.p2}</p>
// //               <p className="my-5">{section.p3}</p>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default Section3;

// "use client";

// import React from "react";
// import about from "@/constants/section3";
// import Image from "next/image";

// const Section3 = () => {
//   return (
//     <div className="space-y-16 px-6 lg:px-16 py-10">
//       {about.map((section, i) => {
//         return (
//           <div
//             key={i}
//             className="flex flex-col lg:flex-row items-center gap-10"
//           >
//             {/* Image */}
//             <div
//               className={`flex-1 ${
//                 i % 2 !== 0 ? "lg:order-2" : ""
//               }`}
//             >
//               <div className="relative overflow-hidden rounded-2xl group">
//                 <Image
//                   src={section.image}
//                   alt={section.headline}
//                   className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//             {/* Content */}
//             <div className="flex-1">
//               <h2 className="font-semibold text-2xl lg:text-4xl text-gray-800">
//                 {section.headline}
//               </h2>

//               <p className="mt-5 text-gray-600 leading-relaxed">
//                 <span className="font-bold text-black">Safemarg </span>
//                 {section.p1}
//               </p>

//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 {section.p2}
//               </p>

//               <p className="mt-4 text-gray-600 leading-relaxed">
//                 {section.p3}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Section3;

"use client";

import React from "react";
import about from "@/constants/section3";
import Image from "next/image";
import { MoveRight, ShieldCheck, Zap, Globe, HeartHandshake, PhoneCall } from "lucide-react";

/**
 * Section3 Redesign:
 * Large Informational blocks with alternating layout, premium typography, 
 * glassmorphic imagery, and better visual pacing.
 * Compact version based on user feedback.
 */
const Section3 = () => {
  return (
    <div className="relative space-y-12 lg:space-y-20 py-10 lg:py-16 px-6 lg:px-24 bg-gray-50/30 font-[family-name:var(--font-poppins)] overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-100/30 blur-3xl rounded-full mix-blend-multiply opacity-40 pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute top-[60%] left-[-10%] w-[400px] h-[400px] bg-emerald-100/30 blur-3xl rounded-full mix-blend-multiply opacity-40 pointer-events-none -z-10 animate-pulse delay-1000"></div>

      {about.map((section, i) => {
        const isEven = i % 2 === 0;
        
        return (
          <div
            key={i}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative"
          >
            {/* Image Segment with Glass Effect Container */}
            <div
              className={`flex-1 relative group w-full ${
                !isEven ? "lg:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_50px_100px_-20px_rgba(0,187,242,0.2)] transition-all duration-1000">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/0 transition-all duration-700"></div>
                <Image
                  src={section.image}
                  alt={section.headline}
                  className="w-full h-auto object-cover scale-[1.01] transition-transform duration-1000"
                />
                
                {/* Visual Accent Badge */}
                <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl flex flex-col items-center justify-center border border-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200`}>
                   <div className="text-lg font-black text-blue-600">0{i+1}</div>
                   <div className="text-[7px] font-black text-gray-400 uppercase tracking-widest">Stage</div>
                </div>

                {/* Floating Meta Button */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-1000">
                   <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            <ShieldCheck className="w-4 h-4" />
                         </div>
                         <div className="text-white text-[9px] font-black uppercase tracking-tight">IATA Certified Agency</div>
                      </div>
                      <div className="text-white/80 text-[8px] uppercase font-bold tracking-widest flex items-center gap-2">
                         Explore Now <MoveRight className="w-3 h-3" />
                      </div>
                   </div>
                </div>
              </div>
              
              <div className={`absolute -inset-6 border-2 border-dashed border-blue-100 rounded-[3rem] pointer-events-none -z-10 opacity-20 ${isEven ? 'rotate-2 scale-95' : '-rotate-2 scale-95'}`}></div>
            </div>

            {/* Content Segment */}
            <div className={`flex-1 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ${!isEven ? 'lg:pr-5' : 'lg:pl-5'}`}>
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 shadow-lg shadow-blue-100 text-white text-[9px] font-black uppercase tracking-[0.2em]">
                 {i === 0 ? <Globe className="w-3 h-3" /> : i === 1 ? <Zap className="w-3 h-3" /> : <HeartHandshake className="w-3 h-3" />}
                 Our Journey {i+1}
              </div>

              <h2 className="font-black text-3xl lg:text-4xl text-gray-900 leading-tight tracking-tight">
                {section.headline}
              </h2>

              <div className="grid grid-cols-1 gap-4 mt-6">
                <div className="group/item flex gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500">
                   <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all">
                      <ShieldCheck className="w-5 h-5" />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed font-medium">
                     <span className="font-black text-blue-600">Safemarg </span> 
                     {section.p1}
                   </p>
                </div>

                <div className="group/item flex gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500">
                   <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover/item:bg-emerald-600 group-hover/item:text-white transition-all">
                      <Zap className="w-5 h-5" />
                   </div>
                   <p className="text-gray-600 text-sm leading-relaxed font-medium">
                     {section.p2}
                   </p>
                </div>

                {section.p3 && (
                  <div className="group/item flex gap-4 p-3 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-500">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover/item:bg-orange-600 group-hover/item:text-white transition-all">
                        <HeartHandshake className="w-5 h-5" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                        {section.p3}
                    </p>
                  </div>
                )}
              </div>
              
              <button className="relative px-8 h-12 rounded-xl bg-gray-900 overflow-hidden group/btn hover:shadow-xl transition-all duration-500 mt-2 active:scale-95">
                 <div className="absolute inset-0 bg-blue-600 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500"></div>
                 <div className="relative flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest">
                    Consultation <PhoneCall className="w-3.5 h-3.5 ml-1" />
                 </div>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Section3;