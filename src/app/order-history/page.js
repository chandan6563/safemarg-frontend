"use client";
import React, { useEffect, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiUser,
  FiMapPin,
  FiChevronRight,
  FiLoader,
  FiDownload,
  FiTrash2,
  FiEye
} from "react-icons/fi";
import Image from "next/image";

export default function FlightOrderHistory() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [token, setToken] = useState("");
  const [orders, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  const flightBooking = async () => {
    try {
      const response = await fetch(`${baseUrl}api/v1/booking/getBooking`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.status && Array.isArray(data.data)) {
        setBookings(data.data);
      } else {
        console.error("API error:", data.message);
      }
    } catch (error) {
      console.error("----flight booking api error--", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      flightBooking();
    }
  }, [token]);

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "booked":
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "cancelled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "booked":
      case "confirmed":
        return <FiCheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <FiXCircle className="w-4 h-4" />;
      default:
        return <FiLoader className="w-4 h-4" />;
    }
  };

  const calculateDuration = (departAt, arriveAt) => {
    if (!departAt || !arriveAt) return "N/A";
    
    const depart = new Date(departAt);
    const arrive = new Date(arriveAt);
    const diff = arrive.getTime() - depart.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

  // ✅ Enhanced loading state
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-white to-[#f2f6fb] flex flex-col items-center justify-center z-50">
              <Image
                src="/safemarg-logo-loading.png"
                alt="Loading..."
                width={150}
                height={150}
                className="animate-bounce drop-shadow-lg"
              />
              <p className="mt-6 text-[#154880] text-base font-semibold tracking-wide">
                Loading your booking...
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Please wait, this may take a few seconds.
              </p>
            </div>
      // <div className="min-h-screen bg-slate-50 py-8">
      //   <div className="max-w-6xl mx-auto px-4">
      //     <div className="text-center py-16">
      //       <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
      //         <FiLoader className="w-8 h-8 text-blue-600 animate-spin" />
      //       </div>
      //       <h2 className="text-2xl font-bold text-slate-800 mb-3">
      //         Loading Your Bookings
      //       </h2>
      //       <p className="text-slate-600 text-lg">We're fetching your flight details...</p>
      //     </div>
      //   </div>
      // </div>
    );
  }

  // ✅ Enhanced empty state
  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
              <FiMapPin className="w-10 h-10 text-slate-400" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-3">No Bookings Found</h2>
            <p className="text-slate-600 text-lg mb-8">Start your journey by booking your first flight!</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Flights
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            My Flight Bookings
          </h1>
          <p className="text-slate-600 text-lg">
            You have {orders.length} flight booking{orders.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Bookings List */}
        <div className="space-y-5">
          {orders.map((order, index) => {
            const segment = order.itinerary?.[0];
            const passenger = order.passengers?.[0];
            const isExpanded = expandedOrder === order.id;

            const formattedDate = segment?.departAt
              ? new Date(segment.departAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "N/A";

            const departureTime = segment?.departAt
              ? new Date(segment.departAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })
              : "N/A";

            const arrivalTime = segment?.arriveAt
              ? new Date(segment.arriveAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })
              : "N/A";

            const flightDuration = calculateDuration(segment?.departAt, segment?.arriveAt);

            return (
              <div
                key={order.id || index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-200 overflow-hidden"
              >
                {/* Main Booking Card */}
                <div 
                  className="p-6 cursor-pointer hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => toggleOrderDetails(order.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Flight Route & Details */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${
                            order.status === "booked" ? "bg-emerald-500" : "bg-rose-500"
                          }`}></div>
                          <span className="text-sm font-medium text-slate-500">
                            Booking #{order?.id || "------"}
                          </span>
                        </div>
                        
                        {/* Status Badge - Mobile */}
                        <div className="lg:hidden">
                          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="text-sm font-semibold capitalize">
                              {order.status || "Unknown"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Flight Route */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center flex-1">
                          <div className="text-2xl font-bold text-slate-900 mb-1">
                            {segment?.departureAirport || "N/A"}
                          </div>
                          <div className="text-sm text-slate-600 font-medium">{departureTime}</div>
                        </div>
                        
                        <div className="flex flex-col items-center mx-6">
                          <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-2 border border-blue-100">
                            <FiMapPin className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-xs text-slate-500 font-medium bg-slate-100 px-2 py-1 rounded-full">
                            {flightDuration}
                          </div>
                        </div>
                        
                        <div className="text-center flex-1">
                          <div className="text-2xl font-bold text-slate-900 mb-1">
                            {segment?.arrivalAirport || "N/A"}
                          </div>
                          <div className="text-sm text-slate-600 font-medium">{arrivalTime}</div>
                        </div>
                      </div>

                      {/* Date & Passenger */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <FiCalendar className="text-blue-600" />
                          <span className="font-medium">{formattedDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiUser className="text-blue-600" />
                          <span className="font-medium">
                            {passenger ? `${passenger.firstName} ${passenger.lastName}` : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Section - Desktop */}
                    <div className="hidden lg:flex flex-col items-end gap-4">
                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-slate-500 mb-1">Total Amount</p>
                        <p className="text-2xl font-bold text-emerald-600">
                          ₹{order.totalPrice?.toLocaleString() || "N/A"}
                        </p>
                      </div>

                      {/* Status Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="text-sm font-semibold capitalize">
                          {order.status || "Unknown"}
                        </span>
                      </div>
                    </div>

                    {/* Expand Arrow */}
                    <div className={`self-center transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
                      <FiChevronRight className="w-6 h-6 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Expandable Details */}
                {isExpanded && (
                  <div className="border-t border-slate-200 bg-slate-50/50 px-6 py-6 animate-in fade-in duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Passenger Details */}
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-3 text-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FiUser className="w-4 h-4 text-blue-600" />
                          </div>
                          Passenger Details
                        </h4>
                        <div className="space-y-3">
                          {order.passengers?.map((passenger, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                              <div className="flex items-center justify-between mb-2">
                                <p className="font-semibold text-slate-900 text-lg">
                                  {passenger.firstName} {passenger.lastName}
                                </p>
                                <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
                                  Passenger {idx + 1}
                                </span>
                              </div>
                              <div className="space-y-1 text-sm">
                                <p className="text-slate-600 flex items-center gap-2">
                                  <span className="font-medium">DOB:</span>{" "}
                                  {new Date(passenger.dob).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  })}
                                </p>
                                <p className="text-slate-600 flex items-center gap-2">
                                  <span className="font-medium">Gender:</span> {passenger.gender}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Flight & Booking Details */}
                      <div className="space-y-6">
                        {/* Flight Information */}
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-3 text-lg">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FiMapPin className="w-4 h-4 text-blue-600" />
                            </div>
                            Flight Information
                          </h4>
                          <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 space-y-3">
                            <div className="flex justify-between items-center py-2">
                              <span className="text-slate-600 font-medium">Flight Duration</span>
                              <span className="font-semibold text-slate-900">{flightDuration}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-slate-100">
                              <span className="text-slate-600 font-medium">Travel Class</span>
                              <span className="font-semibold text-slate-900">Economy</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-slate-100">
                              <span className="text-slate-600 font-medium">Departure Time</span>
                              <span className="font-semibold text-slate-900">{departureTime}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-slate-100">
                              <span className="text-slate-600 font-medium">Arrival Time</span>
                              <span className="font-semibold text-slate-900">{arrivalTime}</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-t border-slate-100">
                              <span className="text-slate-600 font-medium">Booking Reference</span>
                              <span className="font-semibold text-blue-600">
                                #{order?.id || "------"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        {/* <div className="flex gap-3 pt-4">
                          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                            <FiEye className="w-4 h-4" />
                            View E-Ticket
                          </button>
                          <button className="flex-1 bg-white hover:bg-slate-100 text-slate-700 py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-slate-300">
                            <FiDownload className="w-4 h-4" />
                            Download
                          </button>
                          {order.status === "booked" && (
                            <button className="px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 border border-rose-200">
                              <FiTrash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}