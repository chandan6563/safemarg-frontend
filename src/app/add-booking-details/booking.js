"use client";
export const dynamic = 'force-dynamic';
import AgreeTermAndCondition from "@/components/AgreeTermAndCondition";
import ContactInformation from "@/components/ContactInformation";
import DiscountsAndOffers from "@/components/DiscountsAndOffers";
import FareBreakup from "@/components/FareBreakup";
import FlightDetailsCard from "@/components/FlightDetailsCard";
import GstDetails from "@/components/GstDetail";
import TravelAndInsurance from "@/components/TravelAndInsurance";
import TravellerDetails from "@/components/TravellerDetails";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, useEffect, useContext } from "react";
import { MdAccessTime } from "react-icons/md";
import { SessionContext } from "../context/SessionContext";
import SeatMap from "@/components/SeatMap";

const Booking = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [flightDetails, setFlightDetails] = useState({});
  const [travellers, setTravellers] = useState([]);
  const [insurance, setInsurance] = useState(null);
  const [ancillaryServices, setAncillaryServices] = useState([]);
  const [gstInfo, setGstInfo] = useState({});
  const [contactInfo, setContactInfo] = useState({});
  const [fareDetails, setFareDetails] = useState({});
  const [discounts, setDiscounts] = useState([]);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [data, setData] = useState(false);
  const [error, setError] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);

  const { setAmount, countdown, formatTime } = useContext(SessionContext);

  useEffect(() => {
    const fareParam = searchParams.get("fare");
    if (fareParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(fareParam));
        setData(parsed);
        const segment = parsed?.itineraries?.[0]?.segments?.[0];
        const price = parsed?.travelerPricings?.[0]?.price;
        setAmount(price.total);
        setFlightDetails({
          originCode: segment?.departure?.iataCode,
          departureTime: segment?.departure?.at,
          destinationCode: segment?.arrival?.iataCode,
          arrivalTime: segment?.arrival?.at,
          airlineCode: segment?.carrierCode,
          flightNumber: segment?.number,
          duration: segment?.duration,
          stops: segment?.numberOfStops,
          baggage: parsed?.travelerPricings?.[0]?.fareDetailsBySegment?.[0]
            ?.includedCheckedBags,
        });

        setFareDetails(price);
      } catch (err) {
        console.error("Invalid fare param:", err);
      }
    }
  }, [searchParams, setAmount]);

  const handleContinue = () => {
    const bookingPayload = {
      flightDetails,
      travellers,
      insurance,
      ancillaryServices,
      gstInfo,
      contactInfo,
      fareDetails,
      discounts,
      agreedTerms,
      selectedSeats,
    };

    console.log("Booking Payload:", bookingPayload);
    sessionStorage.setItem("bookingPayload", JSON.stringify(bookingPayload));
    sessionStorage.setItem("data", JSON.stringify(data));

    router.push("/booking-details");
  };

  const handleSeatsUpdate = (seats) => {
    setSelectedSeats(seats);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-x-5 w-full mx-3 sm:mx-5 lg:mx-auto lg:max-w-[1200px] my-5">
      {/* Left Section */}
      <div className="w-full lg:w-4/5 space-y-5">
        {/* Countdown Banner */}
        <div className="flex items-center gap-2 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 font-medium">
          <MdAccessTime className="text-yellow-600" size={22} />
          <span>
            Your session will expire in <strong>{formatTime(countdown)}</strong>. You must complete the
            booking within this time.
          </span>
        </div>

        {/* Flight & Booking Sections */}
        <FlightDetailsCard details={flightDetails} setDetails={setFlightDetails} />
        <TravellerDetails travellers={travellers} setTravellers={setTravellers} setError={setError} />
        <TravelAndInsurance insurance={insurance} setInsurance={setInsurance} />
        <GstDetails gstInfo={gstInfo} setGstInfo={setGstInfo} />
        <ContactInformation contactInfo={contactInfo} setContactInfo={setContactInfo} error={error} setError={setError} />

        {/* Continue Button */}
        <div className="flex justify-end mt-5">
          <button
            className={`px-6 py-2 rounded-md text-white bg-[#00BBF2] hover:bg-blue-300 ${error ? 'cursor-not-allowed opacity-50' : ''}`}
            onClick={handleContinue}
            disabled={error}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/5 space-y-5 mt-5 lg:mt-0">
        <FareBreakup fareDetails={fareDetails} setFareDetails={setFareDetails} />
        <DiscountsAndOffers discounts={discounts} setDiscounts={setDiscounts} />
      </div>
    </div>
  );
};

export default Booking;
