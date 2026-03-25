// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import Img6 from "@/assets/home/main-sectionBG.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import locationIcon from "@/assets/home/location.svg";
// import exchangeIcon from "@/assets/home/exchange.svg";
// import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";

// const MainSection = () => {
//   const [exchange, setExchange] = useState(false);
//   const [departureDay, setDepartureDay] = useState(new Date());
//   const [returnDay, setReturnDay] = useState("");
//   const [originCity, setOriginCity] = useState("");
//   const [designationCity, setDesignationCity] = useState("");
//   const [tripType, setTripType] = useState("ONWAY");
//   const searchParams = useSearchParams();

//   const [fromSuggestions, setFromSuggestions] = useState([]);
//   const [toSuggestions, setToSuggestions] = useState([]);
//   const router = useRouter();
//   const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
//   // Add state for passengers, class, and errors
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [travelClass, setTravelClass] = useState("ECONOMY");
//   const [errors, setErrors] = useState({});

//   const exchangeLocation = () => {
//     setExchange(!exchange);
//     const temp = originCity;
//     setOriginCity(designationCity);
//     setDesignationCity(temp);
//   };
//   const fromRef = useRef(null);
//   const toRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (fromRef.current && !fromRef.current.contains(event.target)) {
//         setFromSuggestions([]);
//       }
//       if (toRef.current && !toRef.current.contains(event.target)) {
//         setToSuggestions([]);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);
//   const handleSubmit = () => {
//     let tempErrors = {};

//     if (!originCity) tempErrors.originCity = "Origin city is required";
//     if (!designationCity) tempErrors.designationCity = "Destination city is required";
//     if (!departureDay) tempErrors.departureDay = "Departure date is required";
//     if (!adults || adults < 1) tempErrors.adults = "At least 1 adult is required";

//     setErrors(tempErrors);
//     if (Object.keys(tempErrors).length > 0) return;

//     // Prepare URL params
//     const queryParams = new URLSearchParams({
//       origin: originCity,
//       destination: designationCity,
//       departure: departureDay.toISOString().split("T")[0],
//       return: returnDay ? returnDay.toISOString().split("T")[0] : "",
//       adults: adults.toString(),
//       children: children.toString(),
//       travelClass,
//       tripType,
//     }).toString();

//     // Navigate to select-flight page with query params
//     router.push(`/select-flight?${queryParams}`);
//   };

//   // 🔍 API call for location search
//   const searchLocation = async (query, type) => {
//     try {
//       if (!query) return;

//       const res = await fetch(`${BASE_URL}api/v1/booking/searchLocation`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ location: query }),
//       });

//       const data = await res.json();

//       if (data.status === 200) {
//         // data.data contains the array of locations from API
//         if (type === "from") {
//           setFromSuggestions(data.data);
//         } else {
//           setToSuggestions(data.data);
//         }
//       }
//     } catch (error) {
//       console.error("Search API error", error);
//     }
//   };


//   useEffect(() => {
//     if (tripType === "ONWAY") {
//       setReturnDay("");
//     }
//   }, [tripType]);
//   useEffect(() => {
//     const urlOrigin = searchParams.get("origin") || "";
//     const urlDestination = searchParams.get("destination") || "";
//     const urlDeparture = searchParams.get("departure")
//       ? new Date(searchParams.get("departure"))
//       : new Date();
//     const urlReturn = searchParams.get("return")
//       ? new Date(searchParams.get("return"))
//       : "";
//     const urlAdults = Number(searchParams.get("adults")) || 1;
//     const urlChildren = Number(searchParams.get("children")) || 0;
//     const urlTravelClass = searchParams.get("travelClass") || "ECONOMY";
//     const urlTripType = searchParams.get("tripType") || "ONWAY";

//     setOriginCity(urlOrigin);
//     setDesignationCity(urlDestination);
//     setDepartureDay(urlDeparture);
//     setReturnDay(urlReturn);
//     setAdults(urlAdults);
//     setChildren(urlChildren);
//     setTravelClass(urlTravelClass);
//     setTripType(urlTripType);
//   }, [searchParams]);
//   return (
//     <div className="relative mb-8 lg:mb-20">
//       {/* Background Image */}
//       <div>
//         <Image
//           src={Img6}
//           className="object-cover object-center h-100 lg:w-full"
//           alt="image"
//         />
//       </div>

//       {/* Form Container */}
//       <div
//         className="mx-2 mt-0 lg:-mt-[30%] lg:absolute lg:w-8/10 lg:-bottom-[20%] lg:left-[10%]"
//         style={{ marginTop: "-90%" }}
//       >
//         {/* Trip Type Buttons */}
//         <div className="w-full flex  mb -[-10px] mb-2">
//           <div className="flex gap-2 overflow-x-auto no-scrollbar whitespace-nowrap text-xs sm:text-sm">
//             {["ONWAY", "ROUND TRIP", "MULTITAB SEARCH"].map((type) => (
//               <button
//                 key={type}
//                 className={`rounded-xl border py-2 px-3 sm:px-4 ${type === tripType
//                   ? "text-black bg-white"
//                   : "text-white border-2 border-white"
//                   }`}
//                 onClick={() => setTripType(type)}
//               >
//                 {type}
//               </button>
//             ))}
//           </div>
//         </div>


//         {/* Main White Box */}
//         <div className="p-3 bg-white border w-full lg:p-8 rounded-lg shadow-lg relative">
//           {/* City & Date Section */}
//           <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
//             {/* Left Section (From/To) */}
//             <div className="flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:w-6/10 relative">
//               {/* Row 1: From + To on Mobile */}
//               <div className="flex flex-row gap-2  w-full">
//                 {/* From */}
//                 <div className="flex-1 border p-1 rounded-lg relative w-[48%]">
//                   <h2 className="text-[#154880] text-sm font-semibold">From</h2>
//                   <div className="flex border-b mt-1 items-center">
//                     <Image src={locationIcon} alt="location" width={18} />
//                     <input
//                       type="text"
//                       placeholder="Select Origin City"
//                       className="outline-none flex-1 ml-2 text-sm"
//                       onChange={(e) => {
//                         setOriginCity(e.target.value);
//                         searchLocation(e.target.value, "from");
//                       }}
//                       value={originCity}
//                     />
//                   </div>
//                   {errors.originCity && (
//                     <p className="text-red-500 text-xs">{errors.originCity}</p>
//                   )}
//                   {/* From Dropdown */}
//                   <div className="relative w-full" ref={fromRef}>
//                     {fromSuggestions.length > 0 && (
//                       <ul className="absolute z-50 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
//                         {fromSuggestions.map((city) => (
//                           <li
//                             key={city.id}
//                             className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-50 transition-colors"
//                             onClick={() => {
//                               setOriginCity(
//                                 `${city.address.cityName} (${city.iataCode})`
//                               );
//                               setFromSuggestions([]);
//                             }}
//                           >
//                             <img
//                               src={`https://flagcdn.com/24x18/${city.address.countryCode.toLowerCase()}.png`}
//                               alt={city.address.countryName}
//                               className="w-6 h-4 rounded-sm object-cover"
//                             />
//                             <div className="flex flex-col">
//                               <span className="font-semibold text-sm">
//                                 {city.address.cityName}
//                               </span>
//                               <span className="text-gray-500 text-xs">
//                                 {city.iataCode} - {city.name}
//                               </span>
//                             </div>
//                             <span className="ml-auto text-gray-400 text-lg">✈️</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//                 {/* Exchange Icon (desktop only) */}
//                 <div className="hidden lg:flex justify-center">
//                   <Image
//                     src={exchangeIcon}
//                     alt="exchange"
//                     width={30}
//                     onClick={exchangeLocation}
//                     className={`cursor-pointer transition-transform duration-500 ${exchange ? "rotate-180" : "rotate-0"
//                       }`}
//                   />
//                 </div>
//                 {/* To */}
//                 <div className="flex-1 border p-2 rounded-lg relative w-[48%]">
//                   <h2 className="text-[#154880] text-sm font-semibold">To</h2>
//                   <div className="flex border-b mt-1 items-center">
//                     <Image src={locationIcon} alt="location" width={18} />
//                     <input
//                       type="text"
//                       placeholder="Select Destination City"
//                       className="outline-none flex-1 ml-2 text-sm  w-[48%]"
//                       onChange={(e) => {
//                         setDesignationCity(e.target.value);
//                         searchLocation(e.target.value, "to");
//                       }}
//                       value={designationCity}
//                     />
//                   </div>
//                   {errors.designationCity && (
//                     <p className="text-red-500 text-xs">{errors.designationCity}</p>
//                   )}

//                   {/* To Dropdown */}
//                   <div className="relative w-full" ref={toRef}>
//                     {toSuggestions.length > 0 && (
//                       <ul className="absolute z-50 w-full bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
//                         {toSuggestions.map((city) => (
//                           <li
//                             key={city.id}
//                             className="flex items-center gap-2 p-2 cursor-pointer hover:bg-blue-50 transition-colors"
//                             onClick={() => {
//                               setDesignationCity(
//                                 `${city.address.cityName} (${city.iataCode})`
//                               );
//                               setToSuggestions([]);
//                             }}
//                           >
//                             <img
//                               src={`https://flagcdn.com/24x18/${city.address.countryCode.toLowerCase()}.png`}
//                               alt={city.address.countryName}
//                               className="w-6 h-4 rounded-sm object-cover"
//                             />
//                             <div className="flex flex-col">
//                               <span className="font-semibold text-sm">
//                                 {city.address.cityName}
//                               </span>
//                               <span className="text-gray-500 text-xs">
//                                 {city.iataCode} - {city.name}
//                               </span>
//                             </div>
//                             <span className="ml-auto text-gray-400 text-lg">✈️</span>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 </div>
//               </div>


//             </div>

//             {/* Right Section (Departure/Return) */}
//             <div className="flex flex-row gap-3 w-full lg:flex-row lg:w-4/10">
//               {/* Departure */}
//               <div className="flex-1 border p-2 rounded-lg">
//                 <h2 className="text-[#154880] text-sm font-semibold">Departure</h2>
//                 <DatePicker
//                   selected={departureDay}
//                   onChange={(date) => setDepartureDay(date)}
//                   dateFormat="EE, MMM d, yyyy"
//                   className="border-b outline-none mt-1 w-full text-sm"
//                   minDate={new Date()}
//                 />
//                 {errors.departureDay && (
//                   <p className="text-red-500 text-xs">{errors.departureDay}</p>
//                 )}
//               </div>

//               {/* Return */}
//               <div className="flex-1 border p-2 rounded-lg">
//                 <h2 className="text-[#154880] text-sm font-semibold">Return</h2>
//                 <DatePicker
//                   selected={returnDay}
//                   onChange={(date) => {
//                     if (tripType !== "MULTITAB SEARCH") {
//                       setTripType("ROUND TRIP");
//                     }
//                     setReturnDay(date);
//                   }}
//                   onFocus={() => {
//                     if (tripType !== "MULTITAB SEARCH") {
//                       setTripType("ROUND TRIP");
//                     }
//                   }}
//                   dateFormat="EE, MMM d, yyyy"
//                   placeholderText="Select Date"
//                   className="border-b outline-none mt-1 w-full text-sm"
//                   minDate={departureDay}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Passenger + Class + Search */}
//           <div className="flex flex-col gap-3 mt-4 lg:flex-row lg:justify-between lg:items-center">
//             <div className="flex gap-3 flex-wrap">
//               <select
//                 className="border rounded-lg py-1 px-2 text-sm"
//                 value={adults}
//                 onChange={(e) => setAdults(Number(e.target.value))}
//               >
//                 <option value={1}>1 PAX</option>
//                 <option value={2}>2 PAX</option>
//               </select>
//               {errors.adults && (
//                 <p className="text-red-500 text-xs">{errors.adults}</p>
//               )}
//               <select
//                 className="border rounded-lg py-1 px-2 text-sm"
//                 value={travelClass}
//                 onChange={(e) => setTravelClass(e.target.value)}
//               >
//                 <option value="ECONOMY">Economy</option>
//                 <option value="BUSINESS">Business</option>
//               </select>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 onClick={handleSubmit}
//                 className="text-white font-semibold border-2 border-black px-6 py-2 rounded-lg bg-[#FF9F43] hover:bg-white hover:text-[#FF9F43] hover:border-[#FF9F43] transition-all"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           {/* Checkboxes */}
//           <div className="flex flex-col mt-4 gap-3 lg:flex-row lg:justify-between lg:items-center">
//             <div className="flex flex-wrap gap-3">
//               {["Defence", "Student", "Senior Citizen", "Doctor & Nurse"].map(
//                 (label, idx) => (
//                   <label key={idx} className="flex items-center space-x-2 text-sm">
//                     <input type="checkbox" className="w-4 h-4" />
//                     <span>{label}</span>
//                   </label>
//                 )
//               )}
//               {tripType === "ROUND TRIP" && (
//                 <label className="flex items-center space-x-2 text-sm">
//                   <input type="checkbox" className="w-4 h-4" />
//                   <span>Round Trip Discount</span>
//                 </label>
//               )}
//             </div>

//             <label className="flex items-center justify-center space-x-2 text-sm">
//               <input type="checkbox" className="w-4 h-4" />
//               <span>Direct Flight</span>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// };

// export default MainSection;

"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Img6 from "@/assets/home/main-sectionBG.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import locationIcon from "@/assets/home/location.svg";
import exchangeIcon from "@/assets/home/exchange.svg";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  PlaneTakeoff, 
  PlaneLanding, 
  Calendar, 
  Users, 
  Search, 
  ArrowRightLeft,
  ChevronDown,
  Sparkles,
  Zap,
  ShieldCheck,
  Languages
} from "lucide-react";

const MainSection = () => {
  const [exchange, setExchange] = useState(false);
  const [departureDay, setDepartureDay] = useState(new Date());
  const [returnDay, setReturnDay] = useState("");
  const [originCity, setOriginCity] = useState("");
  const [designationCity, setDesignationCity] = useState("");
  const [tripType, setTripType] = useState("ONWAY");
  const searchParams = useSearchParams();

  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const router = useRouter();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [travelClass, setTravelClass] = useState("ECONOMY");
  const [showPicker, setShowPicker] = useState(false);
  const [errors, setErrors] = useState({});

  const exchangeLocation = () => {
    setExchange(!exchange);
    const temp = originCity;
    setOriginCity(designationCity);
    setDesignationCity(temp);
  };

  const fromRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) setFromSuggestions([]);
      if (toRef.current && !toRef.current.contains(event.target)) setToSuggestions([]);
      if (!event.target.closest('.traveller-picker-container')) setShowPicker(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = () => {
    let tempErrors = {};
    if (!originCity) tempErrors.originCity = "Required";
    if (!designationCity) tempErrors.designationCity = "Required";
    if (!departureDay) tempErrors.departureDay = "Required";
    
    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) return;

    const queryParams = new URLSearchParams({
      origin: originCity,
      destination: designationCity,
      departure: departureDay.toISOString().split("T")[0],
      return: returnDay ? returnDay.toISOString().split("T")[0] : "",
      adults: adults.toString(),
      children: children.toString(),
      travelClass,
      tripType,
    }).toString();

    router.push(`/select-flight?${queryParams}`);
  };

  const searchLocation = async (query, type) => {
    try {
      if (!query) return;
      const res = await fetch(`${BASE_URL}api/v1/booking/searchLocation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ location: query }),
      });
      const data = await res.json();
      if (data.status === 200) {
        if (type === "from") setFromSuggestions(data.data);
        else setToSuggestions(data.data);
      }
    } catch (error) {
      console.error("Search API error", error);
    }
  };

  useEffect(() => {
    if (tripType === "ONWAY") setReturnDay("");
  }, [tripType]);

  useEffect(() => {
    const urlOrigin = searchParams.get("origin") || "";
    const urlDestination = searchParams.get("destination") || "";
    const urlDeparture = searchParams.get("departure") ? new Date(searchParams.get("departure")) : new Date();
    const urlReturn = searchParams.get("return") ? new Date(searchParams.get("return")) : "";
    const urlAdults = Number(searchParams.get("adults")) || 1;
    const urlTravelClass = searchParams.get("travelClass") || "ECONOMY";
    const urlTripType = searchParams.get("tripType") || "ONWAY";

    setOriginCity(urlOrigin);
    setDesignationCity(urlDestination);
    setDepartureDay(urlDeparture);
    setReturnDay(urlReturn);
    setAdults(urlAdults);
    setTravelClass(urlTravelClass);
    setTripType(urlTripType);
  }, [searchParams]);

  return (
    <div className="relative min-h-[500px] lg:min-h-[600px] font-[family-name:var(--font-poppins)] flex flex-col justify-end">
      {/* Visual Background with Signature Curve */}
      <div 
        className="absolute top-0 inset-x-0 h-[450px] lg:h-[500px] pointer-events-none -z-10 overflow-hidden"
        style={{ clipPath: 'ellipse(150% 100% at 50% -10%)' }}
      >
        <Image src={Img6} fill className="object-cover brightness-90 transition-all duration-700" alt="Hero BG" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>
      </div>

      {/* Hero Content positioned to overlap with signature curve */}
      <div className="max-w-7xl mx-auto px-6 w-full  lg:pt-24 relative z-10">
        {/* <div className="space-y-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-center lg:text-left">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest mx-auto lg:mx-0">
              <Sparkles className="w-3 h-3 text-blue-400" /> Smart Pricing Enabled
           </div>
           <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl">
             Your Next Journey <br className="hidden lg:block" />
             <span className="text-blue-500 italic">Starts Here.</span>
           </h1>
           <p className="text-sm md:text-base text-white/90 max-w-lg font-medium drop-shadow-lg mx-auto lg:mx-0">
             Compare prices from 100+ airlines with IATA-certified security.
           </p>
        </div> */}

        {/* Compact Search Engine Panel sitting on the curve */}
        <div className="bg-white rounded-[2.5rem] p-4 lg:p-7 shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100 animate-in zoom-in-95 duration-700">
          
          {/* Trip Type Tabs */}
          <div className="flex items-center gap-1 mb-6 p-1 bg-gray-100/80 rounded-xl w-fit">
            {["ONWAY", "ROUND TRIP", "MULTITAB SEARCH"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all duration-300 ${
                  type === tripType 
                  ? "bg-white text-blue-600 shadow-sm" 
                  : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {type.replace("_", " ")}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {/* Row 1: Destinations */}
            <div className="grid lg:grid-cols-11 gap-3 items-center relative">
              
              {/* From */}
              <div className="lg:col-span-5 relative group" ref={fromRef}>
                <div className={`p-4 rounded-2xl border-2 transition-all duration-300 bg-gray-50/50 ${errors.originCity ? 'border-red-200' : 'border-transparent group-hover:border-blue-100 hover:bg-white'}`}>
                   <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-0.5 block">From</span>
                   <div className="flex items-center gap-3">
                      <PlaneTakeoff className="w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Origin City" 
                        value={originCity}
                        onChange={(e) => {
                          setOriginCity(e.target.value);
                          searchLocation(e.target.value, "from");
                        }}
                        className="bg-transparent text-lg font-bold text-gray-900 outline-none w-full placeholder:text-gray-300"
                      />
                   </div>
                </div>
                {fromSuggestions.length > 0 && (
                  <ul className="absolute z-50 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl mt-2 max-h-60 overflow-auto p-1">
                    {fromSuggestions.map((city) => (
                      <li key={city.id} onClick={() => { setOriginCity(`${city.address.cityName} (${city.iataCode})`); setFromSuggestions([]); }}
                        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-blue-50 transition-colors rounded-xl"
                      >
                         <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                           <img src={`https://flagcdn.com/w40/${city.address.countryCode.toLowerCase()}.png`} width={20} className="rounded-sm" alt="flag" />
                         </div>
                         <div className="flex flex-col">
                           <span className="font-bold text-gray-900 text-sm">{city.address.cityName}</span>
                           <span className="text-[10px] text-gray-400 font-medium uppercase">{city.iataCode} • {city.name}</span>
                         </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Exchange Button */}
              <div className="lg:col-span-1 flex justify-center -my-3 lg:my-0 relative z-20">
                <button 
                  onClick={exchangeLocation}
                  className="w-10 h-10 rounded-xl bg-white border-2 border-gray-50 shadow-lg flex items-center justify-center hover:scale-110 active:rotate-180 transition-all duration-500 text-blue-600 group"
                >
                  <ArrowRightLeft className={`w-5 h-5 transition-transform duration-500 ${exchange ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {/* To */}
              <div className="lg:col-span-5 relative group" ref={toRef}>
                <div className={`p-4 rounded-2xl border-2 transition-all duration-300 bg-gray-50/50 ${errors.designationCity ? 'border-red-200' : 'border-transparent group-hover:border-blue-100 hover:bg-white'}`}>
                   <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-0.5 block">To</span>
                   <div className="flex items-center gap-3">
                      <PlaneLanding className="w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Destination City" 
                        value={designationCity}
                        onChange={(e) => {
                          setDesignationCity(e.target.value);
                          searchLocation(e.target.value, "to");
                        }}
                        className="bg-transparent text-lg font-bold text-gray-900 outline-none w-full placeholder:text-gray-300"
                      />
                   </div>
                </div>
                {toSuggestions.length > 0 && (
                  <ul className="absolute z-50 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl mt-2 max-h-60 overflow-auto p-1">
                    {toSuggestions.map((city) => (
                      <li key={city.id} onClick={() => { setDesignationCity(`${city.address.cityName} (${city.iataCode})`); setToSuggestions([]); }}
                        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-blue-50 transition-colors rounded-xl"
                      >
                         <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                           <img src={`https://flagcdn.com/w40/${city.address.countryCode.toLowerCase()}.png`} width={20} className="rounded-sm" alt="flag" />
                         </div>
                         <div className="flex flex-col">
                           <span className="font-bold text-gray-900 text-sm">{city.address.cityName}</span>
                           <span className="text-[10px] text-gray-400 font-medium uppercase">{city.iataCode} • {city.name}</span>
                         </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Row 2: Dates & Passengers */}
            <div className="grid lg:grid-cols-12 gap-4 items-end">
              
              {/* Departure Date */}
              <div className="lg:col-span-3 space-y-1 group">
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-blue-600 pl-3 ml-2">Departure</span>
                <div className="relative bg-gray-50/50 rounded-2xl border-2 border-transparent group-hover:border-blue-100 transition-all p-3 px-5 flex items-center gap-3 group-hover:bg-white">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <DatePicker
                    selected={departureDay}
                    onChange={(date) => setDepartureDay(date)}
                    dateFormat="MMM d, yyyy"
                    className="bg-transparent font-bold text-sm text-gray-900 outline-none w-full cursor-pointer"
                    minDate={new Date()}
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="lg:col-span-3 space-y-1 group">
                <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest border-l-2 border-emerald-500 pl-3 ml-2">Return</span>
                <div className="relative bg-gray-50/50 rounded-2xl border-2 border-transparent group-hover:border-blue-100 transition-all p-3 px-5 flex items-center gap-3 group-hover:bg-white">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <DatePicker
                    selected={returnDay}
                    onChange={(date) => { if (tripType !== "MULTITAB SEARCH") setTripType("ROUND TRIP"); setReturnDay(date); }}
                    onFocus={() => { if (tripType !== "MULTITAB SEARCH") setTripType("ROUND TRIP"); }}
                    dateFormat="MMM d, yyyy"
                    placeholderText="Add Return"
                    className="bg-transparent font-bold text-sm text-gray-900 outline-none w-full cursor-pointer placeholder:text-gray-300"
                    minDate={departureDay}
                  />
                </div>
              </div>

              {/* Passengers & Class - Custom Picker */}
              <div className="lg:col-span-3 space-y-1 relative traveller-picker-container">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest ml-2">Travellers & Class</span>
                <div 
                  onClick={() => setShowPicker(!showPicker)}
                  className="relative bg-gray-50/50 rounded-2xl border-2 border-transparent hover:border-blue-100 transition-all p-3 px-5 flex items-center justify-between cursor-pointer group hover:bg-white"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-gray-400" />
                    <div className="flex flex-col">
                       <span className="font-bold text-[12px] text-gray-900 leading-none">
                         {adults + children + infants} Travellers
                       </span>
                       <span className="text-[10px] text-gray-400 font-medium capitalize">
                         {travelClass.toLowerCase().replace('_', ' ')}
                       </span>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${showPicker ? 'rotate-180' : ''}`} />
                </div>

                {/* The Dropdown Picker Panel */}
                {showPicker && (
                  <div className="absolute top-full right-0 lg:left-0 mt-3 w-[320px] bg-white rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-gray-100 z-50 p-6 animate-in fade-in zoom-in-95 duration-200">
                    <div className="space-y-6">
                      {/* Section: Travellers */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-black text-gray-900 tracking-tight">Travellers</h4>
                        
                        {/* Adults */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-800">Adults</span>
                            <span className="text-[9px] text-gray-400">12+ years</span>
                          </div>
                          <div className="flex items-center gap-2">
                             {[1,2,3,4,5].map(n => (
                               <button key={n} onClick={() => setAdults(n)} className={`w-7 h-7 rounded-lg text-[10px] font-bold transition-all ${adults === n ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>{n}</button>
                             ))}
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-800">Children</span>
                            <span className="text-[9px] text-gray-400">2-10 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                             {[0,1,2,3,4].map(n => (
                               <button key={n} onClick={() => setChildren(n)} className={`w-7 h-7 rounded-lg text-[10px] font-bold transition-all ${children === n ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>{n}</button>
                             ))}
                          </div>
                        </div>

                        {/* Infants */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-xs font-bold text-gray-800">Infants</span>
                            <span className="text-[9px] text-gray-400">0-2 years</span>
                          </div>
                          <div className="flex items-center gap-2">
                             {[0,1,2,3].map(n => (
                               <button key={n} onClick={() => setInfants(n)} className={`w-7 h-7 rounded-lg text-[10px] font-bold transition-all ${infants === n ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}`}>{n}</button>
                             ))}
                          </div>
                        </div>
                      </div>

                      {/* Section: Class */}
                      <div className="space-y-3 pt-4 border-t border-gray-50">
                        <h4 className="text-sm font-black text-gray-900 tracking-tight">Class</h4>
                        <div className="flex flex-wrap gap-2">
                           {["ECONOMY", "BUSINESS", "FIRST"].map(c => (
                             <button 
                               key={c}
                               onClick={() => setTravelClass(c)}
                               className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tight transition-all ${travelClass === c ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                             >
                               {c}
                             </button>
                           ))}
                        </div>
                      </div>

                      {/* Action: Done */}
                      <div className="pt-4 flex justify-end">
                        <button 
                          onClick={() => setShowPicker(false)}
                          className="bg-[#FF9F43] text-white px-8 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-100 hover:-translate-y-0.5 transition-all"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="lg:col-span-3">
                <button
                  onClick={handleSubmit}
                  className="w-full h-12 bg-blue-600 text-white rounded-xl font-black text-sm shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
                >
                  SEARCH FLIGHTS <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Row 3: Trust Badges / Checkboxes */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100/50">
               <div className="flex items-center gap-4">
                  {["Defence", "Student", "Senior Citizen"].map((label) => (
                    <label key={label} className="flex items-center gap-1.5 cursor-pointer group">
                       <input type="checkbox" className="w-4 h-4 rounded-md border-2 border-gray-200 text-blue-600 focus:ring-blue-500 transition-all cursor-pointer" />
                       <span className="text-[10px] font-bold text-gray-500 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{label}</span>
                    </label>
                  ))}
               </div>

               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-emerald-600 text-[9px] font-black uppercase tracking-widest border border-emerald-100 bg-emerald-50 px-2.5 py-1 rounded-full">
                     <ShieldCheck className="w-3 h-3" /> Secure Checkout
                  </div>
                  <div className="flex items-center gap-1.5 text-blue-600 text-[9px] font-black uppercase tracking-widest border border-blue-100 bg-blue-50 px-2.5 py-1 rounded-full">
                     <Zap className="w-3 h-3" /> Best Price Guarantee
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
