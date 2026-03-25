import Image from "next/image";
import React, { useState, useEffect } from "react";
import closeIcon from "@/assets/home/close.svg";
import cabinBag from "@/assets/fare/cabin-bag.svg";
import checkInbag from "@/assets/fare/checkin-bag.svg";
import changeCharges from "@/assets/fare/change-charges.svg";
import cancellationCharges from "@/assets/fare/cancellation-charges.svg";
import { useRouter } from "next/navigation";

const FlightDetail = ({ setFlightDetails, fare }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fares, setFares] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const handleBooking = (fare) => {
    // console.log("sasa",fare)
    const url = `/add-booking-details?fare=${encodeURIComponent(JSON.stringify(fare))}`;
    router.push(url);
  };

  const fetchUpsellingData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}api/v1/booking/flightfare`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payload: {
            data: {
              type: "flight-offers-upselling",
              flightOffers: [fare],
            },
          },
        }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setFares(data.data || []);
    } catch (error) {
      console.error("Error fetching flight upselling data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUpsellingData();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-0 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative flex flex-col bg-white rounded-xl shadow-lg border border-gray-200 w-11/12 lg:w-9/12 max-h-[90vh] overflow-y-auto z-10">
        {/* Header */}
        <div className="flex justify-between items-center bg-[#F6F9FC] px-5 py-3 rounded-t-xl shadow border-b border-gray-300">
          <h1 className="text-lg lg:text-xl font-medium"></h1>
          <div
            className="cursor-pointer"
            onClick={() => setFlightDetails(false)}
          >
            <Image src={closeIcon} width={20} alt="close" />
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="text-base font-medium">
            {fare?.itineraries?.[0]?.segments?.[0]?.departure?.iataCode} -{" "}
            {fare?.itineraries?.[0]?.segments?.[0]?.arrival?.iataCode}{" "}
            {fare?.validatingAirlineCodes?.[0]} -{" "}
            {new Date(
              fare?.itineraries?.[0]?.segments?.[0]?.departure?.at,
            ).toLocaleDateString()}{" "}
            Departure at{" "}
            {new Date(
              fare?.itineraries?.[0]?.segments?.[0]?.departure?.at,
            ).toLocaleTimeString()}{" "}
            - Arrival at{" "}
            {new Date(
              fare?.itineraries?.[0]?.segments?.[0]?.arrival?.at,
            ).toLocaleTimeString()}
          </h3>

          <div className="flex my-2 text-base">
            {/* Sidebar Labels */}
            <div className="p-2 w-1/4 space-y-10 ml-5 rounded-xl text-[#00BBF2] text-base">
              <div>
                <div>Fare Types</div>
                <div className="text-[#737373] text-xs underline cursor-pointer">
                  Know more
                </div>
              </div>
              <div>Baggage</div>
              <div>Change/cancellation</div>
              <div>Add-ons and services</div>
            </div>

            {/* Right Column */}
            <div className="text-[#737373] text-xs mx-5 space-y-5 w-full">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-64">
                  {/* <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-[#154880]"></div> */}
                  <Image
                    src="/safemarg-logo-loading.png"
                    alt="Loading..."
                    width={200}
                    height={200}
                    className="animate-pulse"
                  />
                  <p className="mt-4 text-sm text-[#154880] font-medium">
                    Fetching fare options...
                  </p>
                </div>
              ) : fares.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  No fare options available for this flight.
                </p>
              ) : (
                <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-7">
                  {fares.map((item, i) => {
                    const traveler = item.travelerPricings?.[0];
                    const fareDetails = traveler?.fareDetailsBySegment?.[0];
                    const amenities = fareDetails?.amenities || [];

                    return (
                      <div
                        key={i}
                        className="border border-[#154880] rounded-2xl px-3 bg-[#F6F9FC]"
                      >
                        <div className="py-5 border-b">
                          <div className="text-base">
                            {fareDetails?.brandedFare || "Standard Fare"}
                          </div>
                          <div className="text-xl font-semibold text-[#154880]">
                            {item.price?.currency} {item.price?.grandTotal}
                          </div>
                          <div className="text-[#00BBF2] text-xs">
                            Cabin: {fareDetails?.cabin} ({fareDetails?.class})
                          </div>
                        </div>

                        {/* Baggage Info */}
                        <div className="py-5 space-y-1 border-b">
                          <div className="flex items-center gap-x-2">
                            <Image src={cabinBag} width={11} alt="cabin-bag" />
                            <span>Cabin Bag Included</span>
                          </div>
                          <div className="flex items-center gap-x-2">
                            <Image src={checkInbag} alt="checkin-bag" />
                            <span>
                              {fareDetails?.includedCheckedBags?.weight}{" "}
                              {fareDetails?.includedCheckedBags?.weightUnit}{" "}
                              Check-in
                            </span>
                          </div>
                        </div>

                        {/* Amenities */}
                        <div className="pt-5 space-y-2">
                          {amenities.map((am, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-x-2"
                            >
                              {am.description.includes("CHANGEABLE") && (
                                <Image
                                  src={changeCharges}
                                  alt="change-charge"
                                />
                              )}
                              {am.description.includes("REFUNDABLE") && (
                                <Image
                                  src={cancellationCharges}
                                  alt="cancel-charge"
                                />
                              )}
                              <span>
                                {am.description}{" "}
                                {am.isChargeable ? "(Chargeable)" : "(Free)"}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Book Now */}
                        <div className="text-center my-5">
                          <button
                            onClick={() => handleBooking(item)}
                            className="bg-[#154880] hover:bg-[#475b70] text-white font-bold text-center w-1/2 py-2 rounded-lg"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <div className="flex justify-between text-sm my-5">
                <div>
                  <span className="underline cursor-pointer mr-2">
                    Click here
                  </span>
                  to know more about flight
                </div>
                <div>
                  Book Return trip now & Save Big!
                  <span className="underline text-[#154880] pl-1 cursor-pointer">
                    Modify Booking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetail;
