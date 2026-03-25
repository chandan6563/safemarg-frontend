"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

import SelectDate from "@/components/select-flight/SelectDate";
import PrevIcon from "@/assets/selectFlight/prev.svg";
import NextIcon from "@/assets/selectFlight/next.svg";
import FlightList from "@/components/select-flight/FlightList";
import Filter from "@/components/select-flight/Filter";
import MainSection from "@/components/MainSection";
import FlightDetail from "@/components/model/FlightDetail";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function FlightSearchClient() {
  const searchParams = useSearchParams();
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFlightDetails, setFlightDetails] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 10;
  const [fare, setFare] = useState("");

  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");
  const departure = searchParams.get("departure");
  const ret = searchParams.get("return");
  const adults = Number(searchParams.get("adults") || 1);
  const children = Number(searchParams.get("children") || 0);
  const travelClass = searchParams.get("travelClass") || "ECONOMY";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem("data")) {
        sessionStorage.removeItem("data");
        console.log("data removed from sessionStorage");
      } else {
        console.log("data not found in sessionStorage");
      }
    }
  }, []);

  useEffect(() => {
    const fetchFlights = async () => {
      if (!origin || !destination || !departure) return;

      setLoading(true);

      const payload = {
        originLocationCode: origin.split("(")[1]?.replace(")", ""),
        destinationLocationCode: destination.split("(")[1]?.replace(")", ""),
        departureDate: departure,
        returnDate: ret || undefined,
        adults,
        children,
        travelClass,
      };

      try {
        const res = await fetch(`${BASE_URL}api/v1/flight/searchFlights`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (data.success) {
          setFlights(data.data || []);
          setFilteredFlights(data.data || []);
        } else {
          alert("Flight search failed: " + (data.message || "Unknown error"));
        }
      } catch (err) {
        console.error("Error fetching flights:", err);
        alert("Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [origin, destination, departure, ret, adults, children, travelClass]);

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);
  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);

  const handlePrevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, flights.length - 1));

  const handleFilter = useCallback((filtered) => {
    setFilteredFlights(filtered);
    setCurrentPage(1);
  }, []);

  return (
    <div className="relative">
      {loading ? (
        <div className="fixed inset-0 bg-opacity-0 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <Image
            src="/safemarg-logo-loading.png"
            alt="Loading..."
            width={200}
            height={200}
            className="animate-pulse"
          />
          <p className="mt-4 text-sm text-[#154880] font-medium">Loading flights...</p>
        </div>
      ) : (
        <>
          <MainSection />

          {/* Main Content Responsive */}
          <div className="flex flex-col lg:flex-row justify-evenly py-5 my-5 gap-5 lg:gap-0">
            {/* Filter Section */}
            <div className="w-full lg:w-3/12 border border-[#737373] rounded-md ml-4 p-2">
              <Filter flights={flights} onFilter={handleFilter} />
            </div>

            {/* Flight List Section */}
        <div className="w-full lg:w-8/12 mx-auto">
  <div className="flex items-center justify-between border border-[#737373] rounded-md overflow-hidden">
    {/* Prev Button - hide on mobile */}
    <span
      onClick={prevSlide}
      className="hidden lg:flex w-14 h-full justify-center items-center cursor-pointer border-r hover:bg-gray-100"
    >
      <Image src={PrevIcon} alt="prev" className="w-5 h-5" />
    </span>

    {/* Scrollable Dates */}
    <div className="flex overflow-x-auto gap-3 px-3 py-3 no-scrollbar w-full scroll-smooth">
      {filteredFlights
        .slice(currentIndex, currentIndex + 7)
        .map((f, i) => {
          const priceINR = Math.round(f.price?.total || 0);
          return (
            <div key={i} className="flex-shrink-0 w-[100px] sm:w-[120px]">
              <SelectDate
                date={f.departureDate || departure}
                price={priceINR}
              />
            </div>
          );
        })}
    </div>

    {/* Next Button - hide on mobile */}
    <span
      onClick={nextSlide}
      className="hidden lg:flex w-14 h-full justify-center items-center cursor-pointer border-l hover:bg-gray-100"
    >
      <Image src={NextIcon} alt="next" className="w-5 h-5" />
    </span>
  </div>


              {/* Flight Results */}
              <div className="mt-6">
                {filteredFlights.length > 0 ? (
                  <>
                    <FlightList
                      flights={currentFlights}
                      setFlightDetails={setFlightDetails}
                      Fares={setFare}
                    />

                    {/* Pagination */}
                    <div className="flex justify-center items-center mt-5 gap-4">
                      <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <span>
                        Page {currentPage} of {totalPages}
                      </span>
                      <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-center text-gray-500 mt-4">No flights found.</p>
                )}
              </div>
            </div>
          </div>

          {showFlightDetails && (
            <FlightDetail setFlightDetails={setFlightDetails} fare={fare} />
          )}
        </>
      )}
    </div>
  );
}
