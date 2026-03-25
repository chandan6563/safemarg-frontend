// // "use client";
// // import Image from "next/image";
// // import React, { useState, useEffect, useRef } from "react";
// // import Cookies from "js-cookie";
// // import SafemargLogo from "@/assets/home/safemarg-logo.png";
// // import UserIcon from "@/assets/home/header/user.svg";
// // import CheckInIcon from "@/assets/home/header/check-in.svg";
// // import RefuncdIcon from "@/assets/home/header/refund.svg";
// // import TripIcon from "@/assets/home/header/trip.svg";
// // import LoginIcon from "@/assets/home/header/login.svg";
// // import IndiaFlagIcon from "@/assets/home/header/india-flag.svg";
// // import LangIcon from "@/assets/home/header/language.svg";
// // import DownBlackIcon from "@/assets/home/header/down-black.svg";
// // import DownWhiteIcon from "@/assets/home/header/down-white.svg";
// // import Link from "next/link";
// // import Login from "@/components/model/Login";
// // import Signup from "./model/Signup";
// // import KnowRefund from "./model/KnowYourRefund";
// // import { useRouter } from "next/navigation";

// // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [loginPopup, setLoginPopup] = useState(false);
// //   const [refundPopup, setRefundPopup] = useState(false);
// //   const [signupPopup, setSignupPopup] = useState(false);
// //   const [username, setUsername] = useState(null);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [refundDropdownOpen, setRefundDropdownOpen] = useState(false);
// //   const dropdownRef = useRef(null);
// //   const fundDropdownRef = useRef(null);
// //   const [token, setToken] = useState("");

// //   const router = useRouter();

// //   useEffect(() => {
// //     const user = localStorage.getItem("name");
// //     const token = localStorage.getItem("token");
// //     if (token) setToken(token);
// //     if (user) setUsername(user);
// //   }, []);

// //   useEffect(() => {
// //     const fetchUserDetails = async () => {
// //       try {
// //         const res = await fetch(`${baseUrl}api/v1/user/getDetails`, {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// //         const data = await res.json();
// //         if (data.success) {
// //           localStorage.setItem("name", data.name);
// //           localStorage.setItem("role", data.user.role);
// //         }
// //       } catch (error) {
// //         console.log("Error in get details API:", error);
// //       }
// //     };
// //     if (token) fetchUserDetails();
// //   }, [token]);

// //   const loginHandler = () => {
// //     if (!username) {
// //       setLoginPopup((prev) => !prev);
// //     } else {
// //       setDropdownOpen((prev) => !prev);
// //     }
// //   };

// //   const fundHandler = () => setRefundDropdownOpen((prev) => !prev);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("name");
// //     localStorage.removeItem("role");
// //     setUsername(null);
// //     setDropdownOpen(false);
// //     router.push("/");
// //   };

// //   // Close dropdown when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //         setDropdownOpen(false);
// //       }
// //       if (fundDropdownRef.current && !fundDropdownRef.current.contains(event.target)) {
// //         setRefundDropdownOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <>
// //       <header className="py-2 px-4 md:px-10 sticky top-0 z-50 shadow-2xl bg-white">
// //         <div className="flex justify-between items-center">
// //           <Link href={"/"}>
// //             <Image src={SafemargLogo} width={150} alt="safemarglogo" />
// //           </Link>

// //           {/* Desktop Menu */}
// //           <div className="hidden lg:flex space-x-6 items-center">
// //             <Link href={"/support"}>
// //               <Image src={UserIcon} alt="usericon" width={40} />
// //             </Link>
// //             <div className="flex items-center gap-1">
// //               <Image src={CheckInIcon} alt="checkin" />
// //               <Link href="/check-in">Check-in</Link>
// //             </div>
// //             <div className="relative" ref={fundDropdownRef}>
// //               <div
// //                 className="flex items-center cursor-pointer gap-1"
// //                 onClick={fundHandler}
// //               >
// //                 <Image src={RefuncdIcon} alt="refund" />
// //                 <span>Refund</span>
// //                 <Image src={DownBlackIcon} alt="down" className="mt-1" />
// //               </div>
// //               {refundDropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
// //                   <button
// //                     onClick={() => setRefundPopup(true)}
// //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
// //                   >
// //                     Know Your Refund
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="flex items-center gap-1">
// //               <Image src={TripIcon} alt="trip" />
// //               <button
// //                 onClick={() =>
// //                   username ? router.push("/history") : setLoginPopup(true)
// //                 }
// //               >
// //                 My Trip
// //               </button>
// //             </div>

// //             <div className="relative" ref={dropdownRef}>
// //               <div
// //                 className="flex items-center cursor-pointer gap-1"
// //                 onClick={loginHandler}
// //               >
// //                 <Image src={LoginIcon} alt="login" />
// //                 <span>{username ? username : "Log In"}</span>
// //                 <Image src={DownBlackIcon} alt="down" className="mt-1" />
// //               </div>

// //               {username && dropdownOpen && (
// //                 <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
// //                   <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
// //                     Profile
// //                   </Link>
// //                   <Link href="/order-history" className="block px-4 py-2 hover:bg-gray-100">
// //                     Orders History
// //                   </Link>
// //                   <Link href="/ticketing" className="block px-4 py-2 hover:bg-gray-100">
// //                     Ticketing
// //                   </Link>
// //                   <Link href="/change-password" className="block px-4 py-2 hover:bg-gray-100">
// //                     Change Password
// //                   </Link>
// //                   <button
// //                     onClick={handleLogout}
// //                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
// //                   >
// //                     Logout
// //                   </button>
// //                 </div>
// //               )}
// //             </div>

// //             <button className="bg-[#00BBF2] text-white rounded-md px-4 py-2 flex items-center">
// //               <Image src={IndiaFlagIcon} alt="flag" width={25} />
// //               <span className="px-1">India</span>
// //               <Image src={DownWhiteIcon} alt="down" />
// //             </button>
// //             <button className="bg-[#154880] text-white rounded-md px-3 py-2 flex items-center">
// //               <Image src={LangIcon} width={20} alt="lang" />
// //               <span className="pl-1">English</span>
// //               <Image src={DownWhiteIcon} width={25} alt="down" />
// //             </button>
// //           </div>

// //           {/* Mobile Hamburger */}
// //           <div className="lg:hidden">
// //             <button
// //               onClick={() => setMenuOpen(!menuOpen)}
// //               className="p-2 rounded-md hover:bg-gray-200 transition-colors"
// //             >
// //               <svg
// //                 className="w-6 h-6 text-gray-700"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth={2}
// //                   d={
// //                     menuOpen
// //                       ? "M6 18L18 6M6 6l12 12"
// //                       : "M4 6h16M4 12h16M4 18h16"
// //                   }
// //                 />
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* ✅ Mobile Menu Dropdown */}
// //         {menuOpen && (
// //           <div className="lg:hidden mt-4 flex flex-col bg-white shadow-lg rounded-md p-4 space-y-4 absolute left-0 w-full z-50">
// //             <Link href="/support" className="flex items-center gap-2">
// //               <Image src={UserIcon} alt="usericon" width={25} /> Support
// //             </Link>
// //             <Link href="/check-in" className="flex items-center gap-2">
// //               <Image src={CheckInIcon} alt="checkin" /> Check-in
// //             </Link>
// //             <button
// //               onClick={() => setRefundPopup(true)}
// //               className="flex items-center gap-2"
// //             >
// //               <Image src={RefuncdIcon} alt="refund" /> Know Refund
// //             </button>
// //             <button
// //               onClick={() =>
// //                 username ? router.push("/history") : setLoginPopup(true)
// //               }
// //               className="flex items-center gap-2"
// //             >
// //               <Image src={TripIcon} alt="trip" /> My Trip
// //             </button>
// //             <button onClick={loginHandler} className="flex items-center gap-2">
// //               <Image src={LoginIcon} alt="login" />
// //               {username ? username : "Log In"}
// //             </button>
// //           </div>
// //         )}
// //       </header>

// //       {loginPopup && (
// //         <Login setLoginPopup={setLoginPopup} setSignupPopup={setSignupPopup} />
// //       )}
// //       {signupPopup && (
// //         <Signup setSignupPopup={setSignupPopup} setLoginPopup={setLoginPopup} />
// //       )}
// //       {refundPopup && (
// //         <KnowRefund setLoginPopup={setRefundPopup} setSignupPopup={setSignupPopup} />
// //       )}
// //     </>
// //   );
// // };

// // export default Header;

// "use client";
// import Image from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import Cookies from "js-cookie";
// import SafemargLogo from "@/assets/home/safemarg-logo.png";
// import UserIcon from "@/assets/home/header/user.svg";
// import CheckInIcon from "@/assets/home/header/check-in.svg";
// import RefuncdIcon from "@/assets/home/header/refund.svg";
// import TripIcon from "@/assets/home/header/trip.svg";
// import LoginIcon from "@/assets/home/header/login.svg";
// import IndiaFlagIcon from "@/assets/home/header/india-flag.svg";
// import LangIcon from "@/assets/home/header/language.svg";
// import DownBlackIcon from "@/assets/home/header/down-black.svg";
// import DownWhiteIcon from "@/assets/home/header/down-white.svg";
// import Link from "next/link";
// import Login from "@/components/model/Login";
// import Signup from "./model/Signup";
// import KnowRefund from "./model/KnowYourRefund";
// import { useRouter } from "next/navigation";

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [loginPopup, setLoginPopup] = useState(false);
//   const [refundPopup, setRefundPopup] = useState(false);
//   const [signupPopup, setSignupPopup] = useState(false);
//   const [username, setUsername] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [refundDropdownOpen, setRefundDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const fundDropdownRef = useRef(null);
//   const [token, setToken] = useState("");

//   const router = useRouter();

//   useEffect(() => {
//     const user = localStorage.getItem("name");
//     const token = localStorage.getItem("token");
//     if (token) setToken(token);
//     if (user) setUsername(user);
//   }, []);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       try {
//         const res = await fetch(`${baseUrl}api/v1/user/getDetails`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         if (data.success) {
//           localStorage.setItem("name", data.name);
//           localStorage.setItem("role", data.user.role);
//         }
//       } catch (error) {
//         console.log("Error in get details API:", error);
//       }
//     };
//     if (token) fetchUserDetails();
//   }, [token]);

//   const loginHandler = () => {
//     if (!username) {
//       setLoginPopup((prev) => !prev);
//     } else {
//       setDropdownOpen((prev) => !prev);
//     }
//   };

//   const fundHandler = () => setRefundDropdownOpen((prev) => !prev);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("name");
//     localStorage.removeItem("role");
//     setUsername(null);
//     setDropdownOpen(false);
//     router.push("/");
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//       if (fundDropdownRef.current && !fundDropdownRef.current.contains(event.target)) {
//         setRefundDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <>
//       <header className="py-2 px-4 md:px-10 sticky top-0 z-50 shadow-2xl bg-white/70 backdrop-blur-md">
//         <div className="flex justify-between items-center">
//           <Link href={"/"}>
//             <Image src={SafemargLogo} width={150} alt="safemarglogo" />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-6 items-center">
//             <Link href={"/support"}>
//               <Image src={UserIcon} alt="usericon" width={40} />
//             </Link>
//             <div className="flex items-center gap-1">
//               <Image src={CheckInIcon} alt="checkin" />
//               <Link href="/check-in">Check-in</Link>
//             </div>
//             <div className="relative" ref={fundDropdownRef}>
//               <div
//                 className="flex items-center cursor-pointer gap-1"
//                 onClick={fundHandler}
//               >
//                 <Image src={RefuncdIcon} alt="refund" />
//                 <span>Refund</span>
//                 <Image src={DownBlackIcon} alt="down" className="mt-1" />
//               </div>
//               {refundDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-md shadow-lg rounded-lg py-2 z-50">
//                   <button
//                     onClick={() => setRefundPopup(true)}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Know Your Refund
//                   </button>
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center gap-1">
//               <Image src={TripIcon} alt="trip" />
//               <button
//                 onClick={() =>
//                   username ? router.push("/history") : setLoginPopup(true)
//                 }
//               >
//                 My Trip
//               </button>
//             </div>

//             <div className="relative" ref={dropdownRef}>
//               <div
//                 className="flex items-center cursor-pointer gap-1"
//                 onClick={loginHandler}
//               >
//                 <Image src={LoginIcon} alt="login" />
//                 <span>{username ? username : "Log In"}</span>
//                 <Image src={DownBlackIcon} alt="down" className="mt-1" />
//               </div>

//               {username && dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-md shadow-lg rounded-lg py-2 z-50">
//                   <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">
//                     Profile
//                   </Link>
//                   <Link href="/order-history" className="block px-4 py-2 hover:bg-gray-100">
//                     Orders History
//                   </Link>
//                   <Link href="/ticketing" className="block px-4 py-2 hover:bg-gray-100">
//                     Ticketing
//                   </Link>
//                   <Link href="/change-password" className="block px-4 py-2 hover:bg-gray-100">
//                     Change Password
//                   </Link>
//                   <button
//                     onClick={handleLogout}
//                     className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>

//             <button className="bg-[#00BBF2] text-white rounded-md px-4 py-2 flex items-center">
//               <Image src={IndiaFlagIcon} alt="flag" width={25} />
//               <span className="px-1">India</span>
//               <Image src={DownWhiteIcon} alt="down" />
//             </button>
//             <button className="bg-[#154880] text-white rounded-md px-3 py-2 flex items-center">
//               <Image src={LangIcon} width={20} alt="lang" />
//               <span className="pl-1">English</span>
//               <Image src={DownWhiteIcon} width={25} alt="down" />
//             </button>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="lg:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="p-2 rounded-md hover:bg-gray-200 transition-colors"
//             >
//               <svg
//                 className="w-6 h-6 text-gray-700"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={
//                     menuOpen
//                       ? "M6 18L18 6M6 6l12 12"
//                       : "M4 6h16M4 12h16M4 18h16"
//                   }
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* ✅ Mobile Menu Dropdown */}
//         {menuOpen && (
//           <div className="lg:hidden mt-4 flex flex-col bg-white/90 backdrop-blur-md shadow-lg rounded-md p-4 space-y-4 absolute left-0 w-full z-50">
//             <Link href="/support" className="flex items-center gap-2">
//               <Image src={UserIcon} alt="usericon" width={25} /> Support
//             </Link>
//             <Link href="/check-in" className="flex items-center gap-2">
//               <Image src={CheckInIcon} alt="checkin" /> Check-in
//             </Link>
//             <button
//               onClick={() => setRefundPopup(true)}
//               className="flex items-center gap-2"
//             >
//               <Image src={RefuncdIcon} alt="refund" /> Know Refund
//             </button>
//             <button
//               onClick={() =>
//                 username ? router.push("/history") : setLoginPopup(true)
//               }
//               className="flex items-center gap-2"
//             >
//               <Image src={TripIcon} alt="trip" /> My Trip
//             </button>
//             <button onClick={loginHandler} className="flex items-center gap-2">
//               <Image src={LoginIcon} alt="login" />
//               {username ? username : "Log In"}
//             </button>
//           </div>
//         )}
//       </header>

//       {loginPopup && (
//         <Login setLoginPopup={setLoginPopup} setSignupPopup={setSignupPopup} />
//       )}
//       {signupPopup && (
//         <Signup setSignupPopup={setSignupPopup} setLoginPopup={setLoginPopup} />
//       )}
//       {refundPopup && (
//         <KnowRefund setLoginPopup={setRefundPopup} setSignupPopup={setSignupPopup} />
//       )}
//     </>
//   );
// };

// export default Header;


"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import SafemargLogo from "@/assets/home/safemarg-logo.png";
import Link from "next/link";
import Login from "@/components/model/Login";
import Signup from "./model/Signup";
import KnowRefund from "./model/KnowYourRefund";
import { useRouter } from "next/navigation";
import { 
  User, 
  TicketCheck, 
  RotateCcw, 
  Briefcase, 
  LogIn, 
  ChevronDown, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck,
  UserCircle
} from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Header Redesign:
 * Premium glassmorphic header with sticky positioning.
 * Refined desktop/mobile navigation with Lucide icons.
 */
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [refundPopup, setRefundPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [refundDropdownOpen, setRefundDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const fundDropdownRef = useRef(null);
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    if (token) setToken(token);
    if (user) setUsername(user);
  }, []);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await fetch(`${baseUrl}api/v1/user/getDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (data.success) {
          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.user.role);
        }
      } catch (error) {
        console.log("Error in get details API:", error);
      }
    };
    if (token) fetchUserDetails();
  }, [token]);

  const loginHandler = () => {
    if (!username) {
      setLoginPopup((prev) => !prev);
    } else {
      setDropdownOpen((prev) => !prev);
    }
  };

  const fundHandler = () => setRefundDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    setUsername(null);
    setDropdownOpen(false);
    router.push("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (fundDropdownRef.current && !fundDropdownRef.current.contains(event.target)) {
        setRefundDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex justify-between items-center font-[family-name:var(--font-poppins)]">
          
          {/* Brand Identity */}
          <Link href="/" className="relative hover:scale-105 transition-transform duration-300">
            <Image src={SafemargLogo} width={160} alt="SafeMarg Logo" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Support Link */}
            <Link 
              href="/support" 
              className="group flex items-center gap-2.5 px-4 py-2 rounded-2xl hover:bg-gray-50 transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-black text-gray-700 uppercase tracking-tight">Support</span>
            </Link>

            {/* Check-in */}
            <Link 
              href="/check-in" 
              className="group flex items-center gap-2.5 px-4 py-2 rounded-2xl hover:bg-gray-50 transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <TicketCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-black text-gray-700 uppercase tracking-tight">Check-in</span>
            </Link>

            {/* Refund Dropdown */}
            <div className="relative" ref={fundDropdownRef}>
              <button
                onClick={fundHandler}
                className="group flex items-center gap-2.5 px-4 py-2 rounded-2xl hover:bg-gray-50 transition-all duration-300 outline-none"
              >
                <div className="p-2 rounded-xl bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <span className="text-sm font-black text-gray-700 uppercase tracking-tight">Refund</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-transform ${refundDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {refundDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white/95 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-3xl border border-gray-100 p-2 animate-in fade-in zoom-in-95 duration-200">
                  <button
                    onClick={() => { setRefundPopup(true); setRefundDropdownOpen(false); }}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 rounded-2xl transition-colors text-left"
                  >
                    <RotateCcw className="w-4 h-4 text-blue-600" /> Know Your Refund
                  </button>
                </div>
              )}
            </div>

            {/* My Trip */}
            <button
              onClick={() => username ? router.push("/history") : setLoginPopup(true)}
              className="group flex items-center gap-2.5 px-4 py-2 rounded-2xl hover:bg-gray-50 transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-sm font-black text-gray-700 uppercase tracking-tight">My Trip</span>
            </button>

            {/* Divider */}
            <div className="w-px h-8 bg-gray-100 mx-2"></div>

            {/* Authentication / Profile */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={loginHandler}
                className="p-1 px-4 pr-6 bg-gray-900 text-white rounded-[1.5rem] flex items-center gap-3 hover:shadow-xl hover:shadow-gray-300 transition-all duration-300 group active:scale-95"
              >
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col items-start translate-y-0.5">
                   <span className="text-[9px] font-black text-white/40 uppercase tracking-wider leading-none">Account</span>
                   <span className="text-[13px] font-black leading-tight max-w-[100px] truncate">
                      {username ? username : "Log In"}
                   </span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {username && dropdownOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem] border border-gray-100 p-3 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-4 border-b border-gray-50 mb-2">
                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Signed in as</span>
                     <span className="font-black text-gray-900">{username}</span>
                  </div>
                  {[
                    { href: "/profile", label: "Profile", icon: UserCircle },
                    { href: "/order-history", label: "Order History", icon: Briefcase },
                    { href: "/ticketing", label: "Ticketing", icon: TicketCheck },
                    { href: "/change-password", label: "Settings", icon: ShieldCheck }
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 rounded-2xl transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-black text-gray-700 uppercase tracking-tight group-hover:text-blue-600 transition-colors">{item.label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-4 px-5 py-3.5 hover:bg-red-50 rounded-2xl transition-all duration-300 text-red-600 group mt-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                       <LogIn className="w-5 h-5 rotate-180" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-tight">Logout System</span>
                  </button>
                </div>
              )}
            </div>

            {/* Global Settings */}
            <div className="flex items-center gap-3">
               <button className="w-12 h-12 rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm group">
                  <Globe className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
               </button>
            </div>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <button className="p-3 rounded-2xl bg-gray-900 text-white" onClick={loginHandler}>
               <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-3 rounded-2xl bg-gray-100 text-gray-900"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-2xl p-6 space-y-4 animate-in slide-in-from-top duration-300">
            {[
              { label: "Check-in", href: "/check-in", icon: TicketCheck },
              { label: "Support", href: "/support", icon: ShieldCheck },
              { label: "Refund Status", href: "#", icon: RotateCcw, onClick: () => setRefundPopup(true) }
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.onClick || (() => { router.push(item.href); setMenuOpen(false); })}
                className="flex items-center gap-5 w-full p-6 h-20 bg-gray-50 rounded-[2rem] border border-gray-100"
              >
                <item.icon className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-black text-gray-900 uppercase tracking-tight">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Popups */}
      {loginPopup && (
        <Login setLoginPopup={setLoginPopup} setSignupPopup={setSignupPopup} />
      )}
      {signupPopup && (
        <Signup setSignupPopup={setSignupPopup} setLoginPopup={setLoginPopup} />
      )}
      {refundPopup && (
        <KnowRefund setLoginPopup={setRefundPopup} setSignupPopup={setSignupPopup} />
      )}
    </>
  );
};

export default Header;
