// // import Image from "next/image";
// // import React from "react";
// // import section1 from "@/constants/section1";

// // const Section1 = () => {
// //   return (
// //     <div className="grid grid-col-1 lg:grid-cols-3 gap-12 p-10">
// //       {section1.map((item, i) => (
// //         <div key={i} className=" w-full ">
// //           <div className="rounded-full ">
// //             <Image
// //               src={item.icon}
// //               alt={item.text}
// //               width={120}
// //               height={120}
// //               className="rounded-full object-cover -mt-6  -ml-1  align-middle  absolute"
// //             />
// //           </div>

// //           <div className="text-lg h-20 flex items-center w-full pl-30 wrap rounded-sm font-semibold  text-white bg-gradient-to-r from-[#00BBF2B0] to-[#15488080]">
// //             {item.text}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Section1;

// "use client";
// import Image from "next/image";
// import React from "react";
// import section1 from "@/constants/section1";

// const Section1 = () => {
//   // Duplicate items for a seamless loop
//   const duplicatedSection1 = [...section1, ...section1];

//   return (
//     <div className="w-full overflow-hidden p-10 relative">
//       <div className="flex w-max gap-12 py-10 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
//         {duplicatedSection1.map((item, i) => (
//           <div key={i} className="relative flex-shrink-0 w-[400px]">
//             <div className="rounded-full">
//               <Image
//                 src={item.icon}
//                 alt={item.text}
//                 width={120}
//                 height={120}
//                 className="rounded-full object-cover -mt-6 -ml-1 align-middle absolute z-10"
//               />
//             </div>

//             <div className="text-lg h-20 flex items-center w-full pl-32 wrap rounded-sm font-semibold text-white bg-gradient-to-r from-[#00BBF2] to-[#154880]">
//               {item.text}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section1;

"use client";
import Image from "next/image";
import React from "react";
import section1 from "@/constants/section1";
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CreditCard, 
  Headphones, 
  Star,
  Award,
  CircleCheckBig
} from "lucide-react";

/**
 * Section1 Redesign:
 * Premium Feature Bar with glassmorphism and smooth animations.
 */
const Section1 = () => {
  // Triple items for a truly seamless transition even on wide screens
  const duplicatedSection1 = [...section1, ...section1, ...section1];

  const getIcon = (index) => {
    const icons = [Award, ShieldCheck, Clock, Star, MapPin, CreditCard];
    const Icon = icons[index % icons.length];
    return <Icon className="w-6 h-6 text-blue-600" />;
  };

  return (
    <div className="w-full overflow-hidden py-16 bg-white relative border-y border-gray-100">
      {/* Background Decorative Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[12rem] font-black text-gray-400/5 select-none pointer-events-none tracking-tight">
        SAFEMARG
      </div>

      <div className="flex w-max gap-8 animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused] px-4">
        {duplicatedSection1.map((item, i) => (
          <div 
            key={i} 
            className="group relative flex-shrink-0 w-[380px] h-28 flex items-center gap-6 px-10 rounded-[2.5rem] bg-gray-50/50 border border-gray-100/50 backdrop-blur-sm hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 cursor-default overflow-hidden"
          >
            {/* Dynamic Gradient Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            
            {/* Icon/Brand Logo Container */}
            <div className="relative shrink-0 w-16 h-16 rounded-[1.25rem] bg-white shadow-sm flex items-center justify-center border border-gray-100 group-hover:bg-blue-600 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
               {i % 2 === 0 ? (
                 <Image
                   src={item.icon}
                   alt={item.text}
                   width={36}
                   height={36}
                   className="rounded-lg object-contain group-hover:brightness-0 group-hover:invert transition-all"
                 />
               ) : (
                 <div className="group-hover:text-white transition-colors">
                    {getIcon(i)}
                 </div>
               )}
               
               {/* Verification Badge */}
               <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white shadow-sm">
                  <CircleCheckBig className="w-3 h-3 text-white" />
               </div>
            </div>

            {/* Content Segment */}
            <div className="relative flex flex-col">
              <span className="text-[15px] font-black text-gray-800 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                {item.text}
              </span>
              <div className="flex items-center gap-2 mt-1.5">
                 <div className="h-1 w-4 bg-blue-400 rounded-full group-hover:w-8 transition-all duration-500"></div>
                 <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                    Premium Choice
                 </span>
              </div>
            </div>

            {/* Corner Decorative Element */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-blue-600/5 group-hover:bg-blue-600/10 rounded-full transition-colors blur-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;