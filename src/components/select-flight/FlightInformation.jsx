import LockIcon from "@/assets/selectFlight/lock.svg";
import ArrowRightIcon from "@/assets/selectFlight/arrow-right.svg";
import IndigoIcon from "@/assets/selectFlight/indigo.svg";
import Image from "next/image";

const formatDuration = (duration) => {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  const hours = match?.[1] || "0";
  const minutes = match?.[2] || "0";
  return `${hours} h ${minutes} m`;
};

const formatTime = (iso) =>
  new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString([], { day: "2-digit", month: "short" });

export default function FlightInformation({ flight, Fares, setFlightDetails }) {
  if (!flight) return null;

  const itinerary = flight.itineraries[0];
  const firstSegment = itinerary.segments[0];
  const lastSegment = itinerary.segments[itinerary.segments.length - 1];

  const duration = formatDuration(itinerary.duration);
  const stops = itinerary.segments.length - 1;

  const airlineCode =
    firstSegment.operating?.carrierCode || firstSegment.carrierCode;
  const flightNumber = firstSegment.number;
  const price = flight.price.grandTotal;
  const currency = flight.price.currency;

  const handleViewPrice = () => {
    Fares(flight);
    setFlightDetails(true);
  };

  return (
    <div className="p-3 sm:p-5 space-y-4 border my-3 rounded-md shadow-sm">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 font-semibold">
        {/* Airline */}
        <div className="flex items-center gap-3">
          <Image src={IndigoIcon} alt={airlineCode} className="w-8 h-8" />
          <div>
            <div className="font-medium text-lg">Air {airlineCode}</div>
            <div className="font-medium text-xs text-[#737373]">
              {flightNumber}
            </div>
          </div>
        </div>

        {/* Flight Route Info */}
        <div className="flex justify-between items-center gap-3 sm:gap-8 w-full lg:w-auto">
          {/* Departure */}
          <div className="text-center sm:text-left">
            <div className="font-semibold text-base">
              {formatTime(firstSegment.departure.at)}
            </div>
            <div className="text-[11px] font-normal">
              {firstSegment.departure.iataCode}
            </div>
            <div className="text-[10px] text-[#737373]">
              {formatDate(firstSegment.departure.at)}
            </div>
          </div>

          {/* Duration */}
          <div className="text-center hidden sm:block">
            <div className="text-sm text-[#737373]">{duration}</div>
            <div className="bg-[#00BBF2] h-[3px] w-[60px] mx-auto"></div>
            <div className="text-[10px] text-[#737373]">
              {stops === 0 ? "Non stop" : `${stops} stop${stops > 1 ? "s" : ""}`}
            </div>
          </div>

          {/* Arrival */}
          <div className="text-center sm:text-right">
            <div className="font-semibold text-base">
              {formatTime(lastSegment.arrival.at)}
            </div>
            <div className="text-[11px] font-normal">
              {lastSegment.arrival.iataCode}
            </div>
            <div className="text-[10px] text-[#737373]">
              {formatDate(lastSegment.arrival.at)}
            </div>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full lg:w-auto">
          <div className="text-end">
            <div className="text-green-500 text-lg font-semibold">
              {currency} {price}
            </div>
            <div className="text-[#737373] text-xs">per adult</div>
          </div>
          <button
            className="bg-[#00BBF2] hover:bg-[#00e2f2] text-white text-sm sm:text-base px-5 sm:px-8 py-2 rounded-lg"
            onClick={handleViewPrice}
          >
            View Price
          </button>
        </div>
      </div>

      {/* Lock Price + Compare Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        <span className="text-[#00BBF2] font-medium text-sm cursor-pointer">
          Add to compare +
        </span>

        <span className="flex items-center text-sm font-normal text-[#154880] bg-[#00BBF233] p-2 px-3 rounded-md w-full sm:w-auto justify-center sm:justify-start">
          <Image src={LockIcon} alt="lock" className="w-4 h-4 mr-2" />
          <span>
            Lock this price starting from &#8377;
            {Math.round(flight.price.grandTotal / 10)}
          </span>
          <Image
            src={ArrowRightIcon}
            alt="arrow"
            className="w-4 h-4 ml-2 inline-block"
          />
        </span>
      </div>

      {/* View Details */}
      <div
        className="text-end text-[#154880] font-normal underline text-sm cursor-pointer"
        onClick={handleViewPrice}
      >
        View Flight Details
      </div>
    </div>
  );
}
