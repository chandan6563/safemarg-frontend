"use client";

import { FiUser, FiMapPin, FiCalendar, FiClock, FiCheckCircle } from "react-icons/fi";

export default function Ticketing() {
  const tickets = [
    {
      id: "TCK12345",
      passenger: "John Doe",
      from: "New Delhi (DEL)",
      to: "Mumbai (BOM)",
      departure: "2023-10-12T09:30:00",
      arrival: "2023-10-12T11:45:00",
      status: "Confirmed",
    },
    {
      id: "TCK67890",
      passenger: "Jane Smith",
      from: "Bangalore (BLR)",
      to: "Chennai (MAA)",
      departure: "2023-11-05T14:00:00",
      arrival: "2023-11-05T15:20:00",
      status: "Cancelled",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">My Tickets</h1>

      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white shadow-md rounded-lg p-6 mb-6 border border-gray-200"
        >
          {/* Ticket ID */}
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-gray-700">Ticket ID:</span>
            <span className="text-blue-600 font-bold">{ticket.id}</span>
          </div>

          {/* Passenger */}
          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <FiUser className="text-blue-500" />
            <span>{ticket.passenger}</span>
          </div>

          {/* Route */}
          <div className="flex items-center gap-2 text-gray-700 mb-3">
            <FiMapPin className="text-green-500" />
            <span>
              {ticket.from} → {ticket.to}
            </span>
          </div>

          {/* Departure & Arrival */}
          <div className="grid grid-cols-2 gap-4 text-gray-700 mb-3">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-blue-500" />
              <span>
                {new Date(ticket.departure).toLocaleDateString("en-GB")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-purple-500" />
              <span>
                {new Date(ticket.departure).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-blue-500" />
              <span>
                {new Date(ticket.arrival).toLocaleDateString("en-GB")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FiClock className="text-purple-500" />
              <span>
                {new Date(ticket.arrival).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          {/* Status */}
          <div className="mt-4 flex items-center gap-2">
            <FiCheckCircle
              className={
                ticket.status === "Confirmed"
                  ? "text-green-500"
                  : "text-red-500"
              }
            />
            <span
              className={
                ticket.status === "Confirmed"
                  ? "text-green-600 font-medium"
                  : "text-red-600 font-medium"
              }
            >
              {ticket.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
