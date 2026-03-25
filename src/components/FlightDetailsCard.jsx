import CabinBag from "@/assets/fare/cabin-bag-black.svg";
import CheckInBag from "@/assets/fare/checkin-bag-black.svg";
import Flight from "@/assets/bookingDetails/flight.svg";
import FlightBlack from "@/assets/bookingDetails/flight-black.svg";
import RoundCircle from "@/assets/bookingDetails/round-circle.svg";
import DefaultAirline from "@/assets/bookingDetails/air-india.svg";
import Image from "next/image";
import { airlines } from "./airlines";

const getAirlineLogo = (code, size = 64) =>
  `https://images.kiwi.com/airlines/${size}/${code}.png`;

const FlightDetailsCard = ({ details = {} }) => {
  const {
    originCity = "Origin",
    originAirport = "Origin Airport",
    originCode = "XXX",
    departureTime,
    destinationCity = "Destination",
    destinationAirport = "Destination Airport",
    destinationCode = "XXX",
    arrivalTime,
    airlineCode = "XX",
    flightNumber = "0000",
    duration = "00h 00m",
    stops = 0,
    baggage = { weight: 0, weightUnit: "kg" },
  } = details;

  const parseISODuration = (duration) => {
    const match = duration.match(/PT(\d+)H(\d+)M/);
    if (!match) return duration;
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    return `${hours}h ${minutes}m`;
  };

  const airlineName = airlines[airlineCode] || "Unknown Airline";
  const airlineLogoUrl = getAirlineLogo(airlineCode, 120);

  return (
    <div className="rounded-md border border-gray-200 shadow-xl space-y-3">
      {/* Header */}
      <div className="bg-[#154880] rounded-md px-2 py-2 flex items-center w-full">
        <Image src={Flight} alt="flight1" width={60} />
        <div className="text-white ml-2 text-xl font-medium">Flight Details</div>
      </div>

      {/* Route summary */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pl-4 bg-[#F6F9FC] font-medium text-base py-1 text-center sm:text-left">
        {originCity}
        <Image src={FlightBlack} alt="flight2" width={16} className="mx-1" />
        {destinationCity} |{" "}
        {departureTime ? new Date(departureTime).toLocaleDateString() : "Date"}
      </div>

      {/* Flight Info Card */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#F6F9FC] rounded-2xl border mx-2 sm:mx-5 p-3 sm:px-5 sm:py-4 gap-3 sm:gap-0">
        {/* Left side - Airline Info */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 sm:w-1/6 w-full">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
            <img
              src={airlineLogoUrl}
              alt={airlineName}
              width={64}
              height={64}
              className="object-contain"
              onError={(e) => (e.target.src = DefaultAirline.src)}
            />
          </div>
          <div className="flex flex-col text-center">
            <span className="text-[14px] sm:text-[15px] font-semibold">{airlineName}</span>
            <span className="text-xs text-[#737373] font-medium">
              {airlineCode} {flightNumber}
            </span>
          </div>
        </div>

        <div className="flex w-full flex-nowrap  ml-50 gap-2 sm:gap-5">
          {/* Center - Route Info */}
          <div className="flex flex-col justify-between h-32 border-r-2 border-dashed flex-shrink-0 w-[60px] sm:w-1/8">
            <div className="text-lg font-bold flex gap-x-2 justify-end relative">
              <span className="pr-5 font-semibold text-[20px]">
                {departureTime
                  ? new Date(departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                  : "00:00"}
              </span>
              <Image src={RoundCircle} alt="circle" width={12} className="absolute -right-1.5" />
            </div>
            <div className="text-lg font-bold flex justify-end relative">
              <span className="pr-5 font-semibold text-[20px]">
                {arrivalTime
                  ? new Date(arrivalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
                  : "00:00"}
              </span>
              <Image src={RoundCircle} width={12} alt="circle" className="absolute -right-1.5 bottom-0" />
            </div>
          </div>

          {/* Middle - Airports */}
          <div className="flex flex-col justify-between  sm:text-left flex-1 min-w-[150px]">
            <div>
              <span className="font-medium text-[15px]">
                {originCity} ({originCode})
              </span>
              <span className="text-sm text-[#737373] font-normal pl-1 block sm:inline">
                {originAirport}
              </span>
            </div>

            <div className="flex items-center  sm:justify-start my-2">
              <span className="text-sm text-[#737373] font-normal">
                {parseISODuration(duration)}{" "}
                <span className="text-black font-semibold text-[13px]">
                  {stops} stop{stops !== 1 ? "s" : ""}
                </span>
              </span>
            </div>

            <div>
              <span className="font-medium text-[15px]">
                {destinationCity} ({destinationCode})
              </span>
              <span className="text-sm text-[#737373] font-normal pl-1 block sm:inline">
                {destinationAirport}
              </span>
            </div>
          </div>
        </div>

        {/* Right side - Baggage */}
        <div className="flex sm:flex-col items-center justify-center sm:justify-between text-sm w-full sm:w-1/6 gap-3 sm:gap-5 border-t sm:border-t-0 sm:border-l sm:border-dotted border-gray-300 pt-2 sm:pt-0">
          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <Image src={CabinBag} alt="cabinbag" width={20} />
            {baggage.weight} {baggage.weightUnit}
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-end">
            <Image src={CheckInBag} alt="checkin" width={25} />
            {baggage.weight} {baggage.weightUnit}
          </div>
        </div>
      </div>

      <p className="text-[#FF9F43] text-sm sm:text-base pl-4 sm:pl-5 pb-3 text-center sm:text-left">
        * Please check all the details of journey including ancillary Services, Baggage etc.
      </p>
    </div>
  );
};

export default FlightDetailsCard;

