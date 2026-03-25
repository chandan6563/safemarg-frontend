"use client";
import Image from "next/image";
import IndigoIcon from "@/assets/selectFlight/indigo.svg";
import Before6Am from "@/assets/dayTime/before6am.svg";
import After6pm from "@/assets/dayTime/after6pm.svg";
import m12pmTo6pm from "@/assets/dayTime/12pmTo6pm.svg";
import m6amTo12pm from "@/assets/dayTime/6amTo12pm.svg";
import { useEffect, useState } from "react";

const dayTiming = [
  { key: "before6am", icon: Before6Am, time: "Before 6 Am" },
  { key: "6to12", icon: m6amTo12pm, time: "6 Am to 12 Pm" },
  { key: "12to6", icon: m12pmTo6pm, time: "12 Pm to 6 Pm" },
  { key: "after6pm", icon: After6pm, time: "After 6 Pm" },
];

export default function Filter({ flights, onFilter }) {
  const [filters, setFilters] = useState({
    stops: [],
    airlines: [],
    departureTimes: [],
    arrivalTimes: [],
    priceRange: [0, 100000],
  });


  // Function to check if a time (hour) matches selected time ranges
  const matchTime = (hour, selectedTimes) => {
    if (selectedTimes.includes("before6am") && hour < 6) return true;
    if (selectedTimes.includes("6to12") && hour >= 6 && hour < 12) return true;
    if (selectedTimes.includes("12to6") && hour >= 12 && hour < 18) return true;
    if (selectedTimes.includes("after6pm") && hour >= 18) return true;
    return false;
  };

  // Apply filters whenever filters change
  useEffect(() => {
    let filtered = flights;

    // Stops filter
      if (filters.stops.length > 0) {
      filtered = filtered.filter((f) => {
        // total stops = total segments - 1
        const totalStops = f.itineraries[0].segments.length - 1;
        return filters.stops.includes(totalStops);
      });
    }

    // Airlines filter
    if (filters.airlines.length > 0) {
      filtered = filtered.filter((f) =>
        filters.airlines.includes(f.validatingAirlineCodes[0])
      );
    }

    // Price filter
    filtered = filtered.filter(
      (f) =>
        Number(f.price.total) >= filters.priceRange[0] &&
        Number(f.price.total) <= filters.priceRange[1]
    );

    // Departure Time filter
    if (filters.departureTimes.length > 0) {
      filtered = filtered.filter((f) => {
        const depHour = new Date(f.itineraries[0].segments[0].departure.at).getHours();
        return matchTime(depHour, filters.departureTimes);
      });
    }

    // Arrival Time filter
    if (filters.arrivalTimes.length > 0) {
      filtered = filtered.filter((f) => {
        const arrHour = new Date(f.itineraries[0].segments[0].arrival.at).getHours();
        return matchTime(arrHour, filters.arrivalTimes);
      });
    }

    onFilter(filtered);
  }, [filters, flights]);

  return (
    <div className="bg-[#F6FAFC]">
      {/* Stops Filter */}
      <div>
        <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">Stops</h3>
        <div className="w-full py-4">
          {[0, 1].map((stop) => (
            <label className="flex items-center space-x-2 px-3" key={stop}>
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={filters.stops.includes(stop)}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    stops: prev.stops.includes(stop)
                      ? prev.stops.filter((s) => s !== stop)
                      : [...prev.stops, stop],
                  }))
                }
              />
              <span className="flex-1 flex justify-between text-sm text-[#737373]">
                <span>{stop === 0 ? "Non Stop" : "1 Stop"}</span>
              </span>
            </label>
          ))}
        </div>
      </div>

    {/* Price Range */}
      <div>
        <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">One Way Price</h3>
        <div className="flex justify-between text-[#737373] px-3 py-4">
          <span className="font-semibold">₹ {filters.priceRange[0]}</span>
          <input
            type="range"
            min={0}
            max={100000}  // max price API ke hisaab se
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: [0, Number(e.target.value)],
              }))
            }
            className="flex-1 mx-2"
          />
          <span className="font-semibold">₹ {filters.priceRange[1]}</span>
        </div>
      </div>


      {/* Departure Times */}
      <div>
        <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">Departure Time</h3>
        <div className="w-full flex gap-2 px-4 py-4 flex-wrap lg:flex-nowrap">
          {dayTiming.map(({ key, icon, time }) => (
            <div
              key={key}
              className={`flex-1 min-w-[50px] flex flex-col justify-between border rounded-md px-2 py-2 cursor-pointer text-center ${
                filters.departureTimes.includes(key)
                  ? "border-blue-600 bg-blue-50"
                  : "border-[#737373]"
              }`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  departureTimes: prev.departureTimes.includes(key)
                    ? prev.departureTimes.filter((d) => d !== key)
                    : [...prev.departureTimes, key],
                }))
              }
            >
              <Image src={icon} alt="time" />
              <span className="text-[10px] break-words">{time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrival Times */}
      <div>
        <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">
          Arrival Time
        </h3>
        <div className="w-full flex gap-2 px-4 py-4 flex-wrap lg:flex-nowrap">
          {dayTiming.map(({ key, icon, time }) => (
            <div
              key={key + "-arr"}
              className={`flex-1 min-w-[50px] flex flex-col justify-between border rounded-md px-2 py-2 cursor-pointer text-center ${
                filters.arrivalTimes.includes(key)
                  ? "border-green-600 bg-green-50"
                  : "border-[#737373]"
              }`}
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  arrivalTimes: prev.arrivalTimes.includes(key)
                    ? prev.arrivalTimes.filter((d) => d !== key)
                    : [...prev.arrivalTimes, key],
                }))
              }
            >
              <Image src={icon} alt="time" className="mx-auto" />
              <span className="text-[10px] break-words">{time}</span>
            </div>
          ))}
        </div>
      </div>


      {/* Airlines */}
      <div>
        {/* <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">Airlines</h3> */}
        <div className="w-full py-4">
         <div>
  <h3 className="border-b border-[#737373] pl-4 py-4 font-medium text-lg">Airlines</h3>
  <div className="w-full py-4">
    {[
      ...new Set(flights.flatMap(f => f.validatingAirlineCodes))
    ].map((airline) => {
      // Dynamic icon mapping
      const airlineIcons = {
        AI: IndigoIcon,
        IX: IndigoIcon, // agar different airlines ke icons hain, map kar sakte ho
        EY: IndigoIcon, // example
        KU: IndigoIcon,
      };

      // Dynamic name mapping
      const airlineNames = {
        AI: "Air India",
        IX: "Air India Express",
        EY: "Etihad Airways",
        KU: "Kuwait Airways",
      };

      return (
        <label className="flex items-center space-x-2 px-3" key={airline}>
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={filters.airlines.includes(airline)}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                airlines: prev.airlines.includes(airline)
                  ? prev.airlines.filter((a) => a !== airline)
                  : [...prev.airlines, airline],
              }))
            }
          />
          <span className="flex-1 flex justify-between items-center text-sm text-[#737373]">
            <span className="flex items-center gap-x-1">
              {airlineIcons[airline] && (
                <Image src={airlineIcons[airline]} width={15} alt="flightIcon" />
              )}
              <span>{airlineNames[airline] || airline}</span>
            </span>
          </span>
        </label>
      );
    })}
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
