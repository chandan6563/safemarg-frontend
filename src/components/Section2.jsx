// // import Image from "next/image";
// // import React from "react";
// // import section2 from "@/constants/section2";

// // const Section2 = () => {
// //   return (
// //     <div className="grid grid-col-1 lg:grid-cols-3  gap-8 p-10">
// //       {section2.map((item, i) => (
// //         <div key={i} className=" relative ">
// //           <div className="z-0 ">
// //             <Image src={item.icon} alt={item.text} className="w-full  " />
// //           </div>
// //           <div className="text-xs text-center py-2 z-5 shadow-lg -mt-6 rounded-xs mx-auto text-black relative bg-[#F6F9FC] font-medium w-4/5">
// //        {item.text}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Section2;

// // import Image from "next/image";
// // import React from "react";
// // import section2 from "@/constants/section2";

// // const Section2 = () => {
// //   return (
// //     <div className="grid grid-col-1 lg:grid-cols-3 gap-8 p-10">
// //       {section2.map((item, i) => (
// //         <div key={i} className="relative group overflow-hidden rounded-lg cursor-pointer">
// //           {/* Container for the image with transition */}
// //           <div className="transition-all duration-500 ease-in-out">
// //             <Image 
// //               src={item.icon} 
// //               alt={item.text} 
// //               className="w-full h-auto object-cover transition-transform duration-700 ease-in-out group-hover:scale-107" 
// //             />
// //           </div>

// //           {/* Text box with center-to-bottom transition */}
// //           <div className="absolute left-1/2 -translate-x-1/2 w-4/5 py-3 px-2 z-10 shadow-xl rounded-md text-black bg-[#F6F9FC] font-semibold text-sm text-center
// //             top-1/2 -translate-y-1/2 group-hover:top-[85%] group-hover:translate-y-0
// //             transition-all duration-500 ease-in-out pointer-events-none">
// //             {item.text}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Section2;


// // "use client";

// // import Image from "next/image";
// // import React from "react";
// // import section2 from "@/constants/section2";

// // const Section2 = () => {
// //   return (
// //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
// //       {section2.map((item, i) => (
// //         <TiltCard key={i} item={item} />
// //       ))}
// //     </div>
// //   );
// // };

// // const TiltCard = ({ item }) => {

// //   const handleMouseMove = (e) => {
// //     const card = e.currentTarget;
// //     const rect = card.getBoundingClientRect();

// //     const x = e.clientX - rect.left;
// //     const y = e.clientY - rect.top;

// //     const rotateX = ((rect.height / 2 - y) / rect.height) * 15;
// //     const rotateY = ((x - rect.width / 2) / rect.width) * 15;

// //     card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
// //   };

// //   const handleMouseLeave = (e) => {
// //     e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
// //   };

// //   return (
// //     <div
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       className="relative group rounded-xl cursor-pointer transition-transform duration-200 ease-out [perspective:1000px]"
// //     >
// //       {/* Image */}
// //       <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 [transform:translateZ(10px)]">
// //         <Image
// //           src={item.icon}
// //           alt={item.text}
// //           className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
// //         />

// //         {/* Gradient overlay */}
// //         <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
// //       </div>

// //       {/* Floating Text */}
// //       <div className="absolute left-1/2 -translate-x-1/2 w-4/5 py-3 px-2 z-20 shadow-xl rounded-md text-black bg-[#F6F9FC] font-semibold text-sm text-center
// //         top-1/2 -translate-y-1/2 group-hover:top-[85%] group-hover:translate-y-0
// //         transition-all duration-500 ease-out pointer-events-none border border-white/20 [transform:translateZ(60px)]">
// //         {item.text}
// //       </div>

// //       {/* Light reflection */}
// //       <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 [transform:translateZ(30px)]" />
// //     </div>
// //   );
// // };

// // export default Section2;

// import Tilt from "react-parallax-tilt";
// import Image from "next/image";
// import section2 from "@/constants/section2";

// const Section2 = () => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
//       {section2.map((item, i) => (
//         <Tilt
//           key={i}
//           tiltMaxAngleX={15}
//           tiltMaxAngleY={15}
//           perspective={1000}
//           transitionSpeed={1000}
//           scale={1.05}
//           className="rounded-xl"
//         >
//           <div className="relative overflow-hidden rounded-xl shadow-lg">
//             <Image
//               src={item.icon}
//               alt={item.text}
//               className="w-full h-auto object-cover"
//             />

//             {/* overlay */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 opacity-0 hover:opacity-100 transition" />

//             {/* text */}
//             <div className="absolute left-1/2 -translate-x-1/2 w-4/5 py-3 px-2 z-10 shadow-xl rounded-md text-black bg-[#F6F9FC] font-semibold text-sm text-center
//               top-1/2 -translate-y-1/2 hover:top-[85%] hover:translate-y-0 transition-all duration-500">
//               {item.text}
//             </div>
//           </div>
//         </Tilt>
//       ))}
//     </div>
//   );
// };

// export default Section2;

"use client";

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import section2 from "@/constants/section2";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Info, Plane } from "lucide-react";

const Section2 = () => {
  return (
    <div className="relative py-12 lg:py-16 px-6 lg:px-20 bg-white overflow-hidden font-[family-name:var(--font-poppins)]">
      {/* Dynamic Background Ornament */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700 pointer-events-none -z-10"></div>
      
      {/* Section Header - Compact */}
      <div className="max-w-4xl mb-12 space-y-3 animate-in fade-in slide-in-from-left-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm shadow-blue-100/50">
           <Zap className="w-3.5 h-3.5" /> Site-Wide Benefits
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
          Redefining Your <br />
          <span className="text-blue-600 italic">Travel Benefits.</span>
        </h2>
        <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 shadow-xl shadow-blue-200"></div>
        <p className="max-w-xl text-gray-500 font-medium leading-relaxed mt-6">
          Enjoy premium perks designed to make your journey smoother, from instant refunds to exclusive flat-rate discounts and lowest fare guarantees.
        </p>
      </div>

      {/* Benefits Grid - Optimized spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {section2.map((item, i) => (
          <Tilt
            key={i}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1200}
            transitionSpeed={1200}
            scale={1.03}
            className="group"
          >
            <div className="relative h-[400px] bg-gray-50/30 rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_100px_-20px_rgba(0,187,242,0.15)] group-hover:bg-white group-hover:border-blue-100 transition-all duration-700 cursor-pointer">
              
              {/* Premium Image Container - Redesigned Sizing */}
              <div className="relative h-[220px] w-full overflow-hidden bg-white/50 group-hover:bg-transparent transition-colors duration-700">
                <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain p-8 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 filter drop-shadow-2xl"
                />
                
                {/* Decorative Elements on Image */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md shadow-xl flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                   <Plane className="w-4 h-4 text-blue-500 group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              {/* Content Panel - Compact Space Management */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 h-max min-h-[160px] bg-gradient-to-t from-white via-white/95 to-white/70 backdrop-blur-md group-hover:via-white/90 transition-all duration-700">
                
                {/* Badge Overlay */}
                <div className="absolute -top-3.5 left-8 transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="px-3 py-1.5 rounded-xl bg-gray-950 shadow-2xl shadow-gray-400 group-hover:bg-blue-600 transition-colors">
                      <span className="text-[9px] font-black text-white uppercase tracking-widest flex items-center gap-2">
                         <ShieldCheck className="w-3 h-3" /> Priority
                      </span>
                   </div>
                </div>

                {/* Headline - Premium Tighter Typography */}
                <h3 className="text-lg lg:text-xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-tight mt-1">
                  {item.text}
                </h3>
                
                {/* Micro Description / CTA */}
                <div className="relative mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                   <div className="flex items-center gap-2 text-[9px] font-black text-blue-600 uppercase tracking-widest">
                      Learn More <Info className="w-3 h-3" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-500 shadow-xl shadow-blue-200">
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </div>
              </div>
              
              {/* Animation Progress Accent - Fixed positioning to prevent clipping */}
              <div className="absolute bottom-4 left-8 right-8 h-1.5 w-0 bg-gradient-to-r from-blue-600 to-emerald-500 group-hover:w-[calc(100%-4rem)] transition-all duration-1000 ease-in-out rounded-full opacity-60"></div>
            </div>
          </Tilt>
        ))}
      </div>
      
      {/* Decorative Bottom Layer - Optimized for smooth animation and layout */}
      <div className="relative mt-10 pt-10 overflow-hidden">
        {/* Background Branding Text - True Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[10rem] font-black text-gray-400/5 select-none pointer-events-none tracking-tight z-0">
          SAFEMARG
        </div>

        {/* Animated Flight Paths - Hardware Accelerated */}
        <div className="relative w-full h-32 pointer-events-none z-10">
           <Plane className="w-24 h-24 text-blue-600 opacity-20 animate-flight-horizontal will-change-transform" />
           <Plane className="w-14 h-14 text-blue-500 opacity-10 animate-flight-horizontal absolute top-10 will-change-transform" style={{ animationDelay: '8s' }} />
           <Plane className="w-10 h-10 text-blue-400 opacity-10 animate-flight-horizontal absolute top-4 will-change-transform" style={{ animationDelay: '15s' }} />
        </div>
      </div>
    </div>
  );
};

export default Section2;