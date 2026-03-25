"use client";
import Image from "next/image";
import React from "react";
import closeIcon from "@/assets/home/close.svg";
import Login1 from "./Login1";
import RefundWithoutLogin from "./RefundWithoutLogin";
import Cookies from "js-cookie";
const KnowRefund = ({ setLoginPopup, setSignupPopup }) => {
    const mobile = Cookies.get("mobile");
    
  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
        onClick={() => setLoginPopup(false)}
      ></div>

      {/* Modal content */}
        <div className="fixed z-50 top-1/10 lg:left-1/5 mx-5 lg:mx-auto lg:w-6/10 shadow-lg border border-gray-200 rounded-t-xl lg:rounded-xl bg-white">
        {/* Header: Title + Close button */}
            <div className="flex justify-between items-center p-5 border-b border-gray-200">
                <h2 className="font-semibold text-2xl">Know Your Refund</h2>
                <div className="cursor-pointer" onClick={() => setLoginPopup(false)}>
                <Image src={closeIcon} width={15} alt="close" />
            </div>
        </div>
        {/* Description */}
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-700 lg:text-base">
            Make well-informed travel decisions by utilizing this feature, which allows you to check the refund eligibility and accurately calculate the refund amount you would get upon cancelling your booking right now. Take advantage of this option to ensure your choices align with your preferences.
          </p>
        </div>

        {/* Body: Login and RefundWithoutLogin side by side */}
        <div className="flex flex-col lg:flex-row border-t border-gray-200">
          {/* Left side: Login */}
          {!mobile &&<div className="flex-1 p-5 border-b lg:border-b-0 lg:border-r border-gray-200">
            <Login1 setLoginPopup={setLoginPopup} setSignupPopup={setSignupPopup} />
          </div>
            }
          {/* Right side: Refund without login */}
          <div className="flex-1 p-5">
            <RefundWithoutLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowRefund;
