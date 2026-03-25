"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";
const RefundWithoutLogin = () => {
  const [mobile, setMobile] = useState("");
  const [refNo, setRefNo] = useState("");
  const [loading, setLoading] = useState(false);
  const [viewRefundDetails, setViewRefundDetails] = useState(false);
  const [viewRefundStatus, setViewRefundStatus] = useState(false);
  const mobileNumber= Cookies.get("mobile")
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // fake API simulation
    setTimeout(() => {
      setLoading(false);
      // for demo - toggle between details/status
      if (viewRefundDetails) {
        alert(`Fetching booking details for RefNo: ${refNo}, Mobile: ${mobile}`);
      } else {
        alert(`Fetching refund status for RefNo: ${refNo}, Mobile: ${mobile}`);
      }
    }, 1200);
  };

  return (
    <div className={`col-span-12 md:col-span-6`}>
      <div className="border px-3 py-6 h-full bg-[#6C2BD9] rounded-lg shadow-md">
        <h6 className="text-center mb-4 font-semibold text-white text-sm">
          Fetch Your Refund Details <span className="block">without Login</span>
        </h6>

        <form onSubmit={handleSubmit} className="space-y-14">
          {/* Mobile Input */}
          {!mobileNumber &&
          <div>
            <label className="font-semibold block text-white text-sm mb-1">Mobile Number</label>
            <div className="flex items-center border-b border-white pb-1">
              <span className="text-white font-semibold pr-2">+91</span>
              <input
                type="tel"
                maxLength={10}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Type Your Mobile Number"
                className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none"
                required
              />
            </div>
          </div>
          }
          {/* Booking Ref No */}
          <div>
            <label className="font-semibold block text-white text-sm mb-1 ">
              Booking Reference Number
            </label>
            <div className="flex items-center border-b border-white pb-1">
              <input
                type="text"
                maxLength={9}
                value={refNo}
                onChange={(e) => setRefNo(e.target.value)}
                placeholder="Type Your Booking Reference Number"
                className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none"
                required
              />
            </div>
            <span className="text-red-400 text-xs" id="spnRefNumErrorMsg"></span>
          </div>

          {/* Actions */}
          {viewRefundDetails ? (
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-white text-[#6C2BD9] rounded-full font-medium hover:bg-gray-200"
            >
              {loading ? "Loading..." : "View Booking Details"}
            </button>
          ) : viewRefundStatus ? (
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 bg-white text-[#6C2BD9] rounded-full font-medium hover:bg-gray-200"
            >
              {loading ? "Loading..." : "View Refund Status"}
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setViewRefundDetails(true)}
                className="w-1/2 h-10 bg-white text-[#6C2BD9] rounded-full font-medium hover:bg-gray-200"
              >
                Booking Details
              </button>
              <button
                type="button"
                onClick={() => setViewRefundStatus(true)}
                className="w-1/2 h-10 bg-white text-[#6C2BD9] rounded-full font-medium hover:bg-gray-200"
              >
                Refund Status
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default RefundWithoutLogin;
