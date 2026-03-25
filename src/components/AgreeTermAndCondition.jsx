"use client";
import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";

const AgreeTermAndCondition = ({agreed,setAgreed}) => {
  const [isAgreeTermAndCondition, setIsAgreeTermAndCondition] = useState(false);
  const router = useRouter();
 useEffect(() => {
    setAgreed(isAgreeTermAndCondition); 
  }, [isAgreeTermAndCondition, setAgreed]);

  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={isAgreeTermAndCondition}
          onChange={() => setIsAgreeTermAndCondition((prev) => !prev)}
          className="scale-200 mr-5 ml-2"
          id="check"
        />
        <label htmlFor="check text-[13px] font-normal mx-10">
          I agree with the Airline & User Terms & conditions and agree to pay
          total amount & Applicable Payment Gateway Charges. <span className="text-red-500">*</span>I also agree that
          I have checked all the details of my journey including ancillary
          Services, Baggage etc.
        </label>
      </div>
      {/* <div className="flex justify-end gap-x-15 mt-10 text-base">
        <button
          className="text-white bg-[#FF9F43] hover:bg-orange-300 px-12  py-1 rounded-sm cursor-pointer"
          onClick={() => router.back()}
        >
          &lt; Back
        </button>
        <button
          className="bg-[#00BBF2] hover:bg-blue-300 text-white px-6 py-1 rounded-sm cursor-pointer"
          onClick={() => router.push("/payment-gateway")}
        >
          Make Payment
        </button>
      </div> */}
    </div>
  );
};

export default AgreeTermAndCondition;
