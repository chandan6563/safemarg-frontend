// "use client";
// import Image from "next/image";
// import fare from "@/assets/bookingDetails/fare-breakup.svg";
// import { useState } from "react";

// export default function FareBreakup({fareDetails,setFareDetails}) {
//   console.log("00000--fareDetails",fareDetails)
//   const [showTaxesandFees, setShowTaxesandFees] = useState(true);
//   const [showMealCharges, setShowMealCharges] = useState(true);
//   const [showBaggaeCharges, setShowBaggaeCharges] = useState(true);
//   const [showConvenienceFee, setShowConvenienceFee] = useState(true);
//   console.log()
//   return (
//     <div className="w-[300px] rounded-md border border-gray-200  shadow-xl">
//       <div className="bg-[#154880] px-2 py-2 flex items-center w-full rounded-t-md">
//         <Image src={fare} alt="fare-brakup" width={40} />
//         <div className="text-white ml-2 text-xl font-medium">Fare Breakup</div>
//       </div>
//       <div className="text-xs pl-2 py-4">
//         Include all taxes. (Subject to airline fare rules)
//       </div>
//       <div className="bg-[#F6F9FC] px-5">
//         <div className="text-xs text-[#00BBF2] py-2">Passengers</div>
//         <div className="text-base font-medium">Adult 1</div>
//         <div className="">
//           <div className="flex justify-between text-xs font-semibold border-b-2 border-gray-200 py-2">
//             <span>Base Fare</span>
//             <span className="text-[#154880]">&#8377;1984.00</span>
//           </div>
//           <div>
//             <div
//               className="flex justify-between text-xs font-semibold py-2 border-b-1 border-gray-500"
//               onClick={() => setShowTaxesandFees((prev) => !prev)}
//             >
//               <span>{showTaxesandFees ? "-" : "+"}Taxes & Fees</span>
//               <span className="text-[#154880]">&#8377;715.00</span>
//             </div>
//             {showTaxesandFees && (
//               <div className="px-3 bg-white  ">
//                 <div className="flex justify-between text-xs mt-2 border-b pb-2">
//                   <span>Airport dev. Fee</span>
//                   <span className="text-[#154880]">&#8377;0.00</span>
//                 </div>
//                 <div className="flex justify-between text-xs border-b py-2">
//                   <span>Full Surcharge</span>
//                   <span className="text-[#154880]">&#8377;0.00</span>
//                 </div>
//                 <div className="flex justify-between text-xs border-b py-2">
//                   <span>GST</span>
//                   <span className="text-[#154880]">&#8377;106.00</span>
//                 </div>
//                 <div className="flex justify-between text-xs border-b py-2">
//                   <span>Psgr. Srv. Fee</span>
//                   <span className="text-[#154880]">&#8377;0.00</span>
//                 </div>
//                 <div className="flex justify-between text-xs  py-2">
//                   <span>Other</span>
//                   <span className="text-[#154880]">&#8377;609.00</span>
//                 </div>
//               </div>
//             )}
//             <div
//               className="flex justify-between text-xs  py-2 border-b-1 border-gray-500 font-medium"
//               onClick={() => setShowMealCharges((prev) => !prev)}
//             >
//               <span>{showMealCharges ? "-" : "+"} Meal Charges</span>
//               <span className="text-[#154880] font-semibold">
//                 &#8377;150.00
//               </span>
//             </div>
//             {showMealCharges && (
//               <div className="px-3">
//                 <div className="flex justify-between text-xs bg-white py-2">
//                   <span>Masala Chai (1)</span>
//                   <span className="text-[#154880]">&#8377;150.00</span>
//                 </div>
//               </div>
//             )}
//             <div
//               className="flex justify-between border-b-1 py-2 font-medium text-xs"
//               onClick={() => setShowBaggaeCharges((prev) => !prev)}
//             >
//               <span>{showBaggaeCharges ? "-" : "+"} Baggage Charges</span>
//               <span className="text-[#154880] font-semibold">
//                 &#8377;150.00
//               </span>
//             </div>
//             {showBaggaeCharges && (
//               <div className="px-3">
//                 <div className="flex justify-between text-xs bg-white py-2">
//                   <span>+ 15 Kg</span>
//                   <span className="text-[#154880]">&#8377;150.00</span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="">
//           <div className="flex justify-between text-xs font-medium py-2 border-b-1 border-gray-500">
//             <span>Seat Charges</span>
//             <span className="text-[#154880]">&#8377;1700.00</span>
//           </div>
//           <div>
//             <div
//               className="flex justify-between py-2 border-b-2 shadow border-gray-500 font-semibold text-xs"
//               onClick={() => setShowConvenienceFee((prev) => !prev)}
//             >
//               <span>{showConvenienceFee ? "-" : "+"} Convenience Fee</span>
//               <span className="text-[#154880]">&#8377;150.00</span>
//             </div>
//             {showConvenienceFee && (
//               <div className="px-3 bg-white">
//                 <div className="flex justify-between text-xs border-b py-1">
//                   <span>IRCTC Booking Charges</span>
//                   <span className="text-[#154880]">&#8377;100.00</span>
//                 </div>
//                 <div className="flex justify-between text-xs py-1">
//                   <span>GST</span>
//                   <span className="text-[#154880] font-medium">
//                     &#8377;18.00
//                   </span>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between py-5 px-3 text-xs font-semibold">
//         <span>Total Payable</span>
//         <span className="text-[#154880]">&#8377;13,647.00</span>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import fare from "@/assets/bookingDetails/fare-breakup.svg";
import { useState } from "react";

// Tax codes to meaningful names
const TAX_NAMES = {
  P2: "Airport Dev. Fee",
  IN: "Insurance",
  K3: "Service Tax",
  YR: "Fuel Surcharge",
};

export default function FareBreakup({ fareDetails }) {
  const [showTaxesandFees, setShowTaxesandFees] = useState(true);
  const [showMealCharges, setShowMealCharges] = useState(true);
  const [showBaggaeCharges, setShowBaggaeCharges] = useState(true);
  const [showConvenienceFee, setShowConvenienceFee] = useState(true);

  if (!fareDetails) return null;

const { base = 0, taxes = [], total = 0, currency = "₹" } = fareDetails || {};

  const totalTax = taxes?.reduce((sum, tax) => sum + parseFloat(tax.amount), 0);

  return (
    <div className="w-[300px] rounded-md border border-gray-200 shadow-xl">
      <div className="bg-[#154880] px-2 py-2 flex items-center w-full rounded-t-md">
        <Image src={fare} alt="fare-breakup" width={40} />
        <div className="text-white ml-2 text-xl font-medium">Fare Breakup</div>
      </div>

      <div className="text-xs pl-2 py-4">
        Include all taxes. (Subject to airline fare rules)
      </div>

      <div className="bg-[#F6F9FC] px-5">
        <div className="text-xs text-[#00BBF2] py-2">Passengers</div>
        <div className="text-base font-medium">Adult 1</div>

        {/* Base Fare */}
        <div className="flex justify-between text-xs font-semibold border-b-2 border-gray-200 py-2">
          <span>Base Fare</span>
          <span className="text-[#154880]">{currency} {base}</span>
        </div>

        {/* Taxes & Fees */}
        <div
          className="flex justify-between text-xs font-semibold py-2 border-b-1 border-gray-500 cursor-pointer"
          onClick={() => setShowTaxesandFees((prev) => !prev)}
        >
          <span>{showTaxesandFees ? "-" : "+"} Taxes & Fees</span>
          <span className="text-[#154880]">{currency} {totalTax?.toFixed(2)}</span>
        </div>

        {showTaxesandFees && (
          <div className="px-3 bg-white">
            {taxes.map((tax, idx) => (
              <div key={idx} className="flex justify-between text-xs border-b py-2">
                <span>{TAX_NAMES[tax.code] || tax.code}</span>
                <span className="text-[#154880]">{currency} {parseFloat(tax.amount).toFixed(2)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Meal Charges */}
        {/* <div
          className="flex justify-between text-xs py-2 border-b-1 border-gray-500 font-medium cursor-pointer"
          onClick={() => setShowMealCharges((prev) => !prev)}
        >
          <span>{showMealCharges ? "-" : "+"} Meal Charges</span>
          <span className="text-[#154880] font-semibold">{currency} 150.00</span>
        </div>
        {showMealCharges && (
          <div className="px-3">
            <div className="flex justify-between text-xs bg-white py-2">
              <span>Masala Chai (1)</span>
              <span className="text-[#154880]">{currency} 150.00</span>
            </div>
          </div>
        )} */}

        {/* Baggage Charges */}
        {/* <div
          className="flex justify-between border-b-1 py-2 font-medium text-xs cursor-pointer"
          onClick={() => setShowBaggaeCharges((prev) => !prev)}
        >
          <span>{showBaggaeCharges ? "-" : "+"} Baggage Charges</span>
          <span className="text-[#154880] font-semibold">{currency} 150.00</span>
        </div>
        {showBaggaeCharges && (
          <div className="px-3">
            <div className="flex justify-between text-xs bg-white py-2">
              <span>+ 15 Kg</span>
              <span className="text-[#154880]">{currency} 150.00</span>
            </div>
          </div>
        )} */}

        {/* Seat Charges */}
        {/* <div className="flex justify-between text-xs font-medium py-2 border-b-1 border-gray-500">
          <span>Seat Charges</span>
          <span className="text-[#154880]">{currency} 1700.00</span>
        </div> */}

        {/* Convenience Fee */}
        <div>
          {/* <div
            className="flex justify-between py-2 border-b-2 shadow border-gray-500 font-semibold text-xs cursor-pointer"
            onClick={() => setShowConvenienceFee((prev) => !prev)}
          >
            <span>{showConvenienceFee ? "-" : "+"} Convenience Fee</span>
            <span className="text-[#154880]">{currency} 150.00</span>
          </div>
          {showConvenienceFee && (
            <div className="px-3 bg-white">
              <div className="flex justify-between text-xs border-b py-1">
                <span>IRCTC Booking Charges</span>
                <span className="text-[#154880]">{currency} 100.00</span>
              </div>
              <div className="flex justify-between text-xs py-1">
                <span>GST</span>
                <span className="text-[#154880] font-medium">{currency} 18.00</span>
              </div>
            </div>
          )} */}
        </div>

        {/* Total Payable */}
        <div className="flex justify-between py-5 px-3 text-xs font-semibold">
          <span>Total Payable</span>
          <span className="text-[#154880] font-bold">{currency} {total}</span>
        </div>
      </div>
    </div>
  );
}
