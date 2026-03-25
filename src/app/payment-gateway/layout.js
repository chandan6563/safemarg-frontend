"use client";
import PaymentMethods from "@/components/PaymentMethods";
import PaymentIcon from "@/assets/paymentGateway/payment.svg";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";
import { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
export default function PaymentGatewayLayout({ children }) {
  const { countdown, formatTime, amount} = useContext(SessionContext);
// console.log("pppopp",amount)

  return (
    <div className="border border-gray-300 mx-10 mt-5 shadow-lg">
      <div className="bg-[#154880] px-2 py-2 flex items-center w-full ">
        <Image src={PaymentIcon} alt="payment icon" width={40} />
        <div className="text-white ml-2 text-xl font-medium">
          Payment Gateway
        </div>
      </div>
      <div className="flex items-center gap-2 p-3 bg-yellow-100 border border-yellow-300 rounded-md text-yellow-800 font-medium">
        <MdAccessTime className="text-yellow-600" size={22} />
        <span>
          Your session will expire in <strong>{formatTime(countdown)}</strong>. You must complete the
          booking within this time.
        </span>
      </div>
      <div className="flex justify-between px-5 pt-3 text-base ">
        <div>
          {/* <span className="font-semibold ">Transaction ID : </span>
          <span className="font-medium ">2014189295</span> */}
        </div>
        <div>

          <span className="font-semibold  ">Transaction Amount : </span>
          <span className="font-medium text-green-600">{amount}</span>
        </div>
      </div>
      <div className="flex h-1/2 m-5 border border-[#154880] bg-[#F6F9FC]">
        <div className="w-2/10">
          <PaymentMethods />
        </div>
        <div className="w-8/10">{children}</div>
      </div>
    </div>
  );
}
