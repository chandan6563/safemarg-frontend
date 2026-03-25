"use client";

import React, { useState, useEffect, useContext } from "react";
import AgreeTermAndCondition from "@/components/AgreeTermAndCondition";
import AncillaryServices from "@/components/AncillaryServices";
import ContantInformation from "@/components/ContactInformation";
import DiscountsAndOffers from "@/components/DiscountsAndOffers";
import FareBreakup from "@/components/FareBreakup";
import FlightDetailscard from "@/components/FlightDetailsCard";
import GstDetails from "@/components/GstDetail";
import TravelAndInsurance from "@/components/TravelAndInsurance";
import TravellerDetails from "@/components/TravellerDetails";
import { useRouter } from "next/navigation";
import { SessionContext } from "../context/SessionContext";
import { MdAccessTime } from "react-icons/md";

const Page = () => {
  const [flightDetails, setFlightDetails] = useState({});
  const [travellers, setTravellers] = useState([]);
  const [insurance, setInsurance] = useState(null);
  const [ancillaryServices, setAncillaryServices] = useState([]);
  const [gstInfo, setGstInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [fareDetails, setFareDetails] = useState({});
  const [discounts, setDiscounts] = useState([]);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const router = useRouter();
  const { countdown, formatTime, amount } = useContext(SessionContext);
  const [error, setError] = useState("");
  const [bookingPayload, setBookingPayload] = useState(null);

  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const storedPayload = sessionStorage.getItem("bookingPayload");
    if (storedPayload) {
      try {
        const payload = JSON.parse(storedPayload);
        setBookingPayload(payload);
        if (payload.flightDetails) setFlightDetails(payload.flightDetails);
        if (payload.travellers) setTravellers(payload.travellers);
        if (payload.insurance) setInsurance(payload.insurance);
        if (payload.ancillaryServices) setAncillaryServices(payload.ancillaryServices);
        if (payload.gstInfo) setGstInfo(payload.gstInfo);
        if (payload.contactInfo) setContactInfo(payload.contactInfo);
        if (payload.fareDetails) setFareDetails(payload.fareDetails);
        if (payload.discounts) setDiscounts(payload.discounts);
      } catch (err) {
        console.error("Error parsing booking payload:", err);
      }
    }
  }, []);

  const handleContinue = async () => {
    try {
      let userToken = token;

      if (!userToken) {
        if (!contactInfo.email && !contactInfo.mob) {
          setError("Email or Mobile number is required!");
          return;
        }

        const registerResponse = await fetch(`${baseUrl}api/v1/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "Guest",
            email: contactInfo.email,
            phone: contactInfo.mob,
            password: contactInfo.mob,
            role: "user",
          }),
        });

        const registerData = await registerResponse.json();
        if (!registerResponse.ok) {
          setError(registerData?.msg || "Registration failed!");
          return;
        }

        if (registerData?.token) {
          localStorage.setItem("token", registerData.token);
          userToken = registerData.token;
        } else {
          setError("Token not received after registration!");
          return;
        }
      }

      if (!bookingPayload) {
        alert("Booking data not found!");
        return;
      }

      const paymentResponse = await fetch(`${baseUrl}api/v1/payment/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          amount: 1, // Replace with real amount if needed
          contactInfo,
          travellers,
        }),
      });

      const paymentData = await paymentResponse.json();

      if (paymentData?.success && paymentData?.redirectUrl) {
        window.location.href = paymentData.redirectUrl;
      } else {
        alert(paymentData?.msg || "Payment initiation failed!");
      }
    } catch (error) {
      console.error("Error during process:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-5 w-full mx-3 sm:mx-5 lg:mx-auto lg:max-w-[1200px] my-5">
      {/* Left Section */}
      <div className="w-full lg:w-4/5 space-y-5">
        <div className="flex items-center gap-2 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 font-medium">
          <MdAccessTime className="text-yellow-600" size={22} />
          <span>
            Your session will expire in <strong>{formatTime(countdown)}</strong>. You must complete the
            booking within this time.
          </span>
        </div>

        <FlightDetailscard details={flightDetails} setDetails={setFlightDetails} />
        <TravellerDetails travellers={travellers} setTravellers={setTravellers} setError={setError} />
        <TravelAndInsurance insurance={insurance} setInsurance={setInsurance} />
        {/* <AncillaryServices services={ancillaryServices} setServices={setAncillaryServices} /> */}
        <GstDetails gstInfo={gstInfo} setGstInfo={setGstInfo} />
        <ContantInformation contactInfo={contactInfo} setContactInfo={setContactInfo} error={error} setError={setError} />
        <AgreeTermAndCondition agreed={agreedTerms} setAgreed={setAgreedTerms} />

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
          <button
            className="text-white bg-[#FF9F43] hover:bg-orange-300 px-12 py-2 rounded-md"
            onClick={() => router.back()}
          >
            &lt; Back
          </button>
          <button
            className={`px-10 py-2 rounded-md text-white ${agreedTerms
              ? "bg-[#00BBF2] hover:bg-blue-300"
              : "bg-gray-300 cursor-not-allowed"
              }`}
            onClick={handleContinue}
            disabled={!agreedTerms}
          >
            Continue
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/5 space-y-5 mt-5 lg:mt-0">
        <FareBreakup fareDetails={fareDetails} setFareDetails={setFareDetails} />
        <DiscountsAndOffers discounts={discounts} setDiscounts={setDiscounts} />
      </div>
    </div>
  );
};

export default Page;
