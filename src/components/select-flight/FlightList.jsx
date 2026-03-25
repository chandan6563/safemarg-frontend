import { useState } from "react";
import FlightInformation from "./FlightInformation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function FlightList({ flights, setFlightDetails ,Fares}) {
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 8;
  const totalPages = Math.ceil(flights.length / flightsPerPage);
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3,  "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div>
      {/* Flight List */}
      {currentFlights.map((flight, idx) => (
        <FlightInformation
          key={idx}
          flight={flight}
          Fares={Fares}
          setFlightDetails={setFlightDetails}
        />
      ))}

      {/* Pagination */}
    
    </div>
  );
}
