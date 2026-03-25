"use client";
import Image from "next/image";
import React, { useState } from "react";
import loginImage from "@/assets/home/login-image.svg";
import closeIcon from "@/assets/home/close.svg";
import Link from "next/link";

const Login1 = ({ setLoginPopup, setSignupPopup }) => {
  const [loginType, setLoginType] = useState("Customer");
  return (
    // <div className="flex flex-col shadow-lg border border-gray-200  lg:flex-row mx-5 lg:mx-auto mt-5 rounded-t-xl lg:rounded-xl lg:w-6/10 absolute z-200 top-1/10 lg:left-1/5">
      <div className=" flex-1 rounded-b-xl lg:rounded-r-xl bg-white">
        <div className="flex flex-col gap-y-7 p-5">
         
          <h5 className="font-semibold  ">Fetch You Refund Details by Login</h5>
          <div className="flex justify-between w-full gap-x-5">
            <button
              className={`border w-1/2 py-1 px-2  rounded-md h-8 ${
                loginType == "Customer"
                  ? "bg-[#9E20F6] text-white"
                  : "border-[#9E20F6] text-[#9E20F6]"
              }`}
              onClick={() => setLoginType("Customer")}
            >
              Customer Login
            </button>
            <button
              className={`border w-1/2 py-1 px-2  rounded-md h-8 ${
                loginType == "Corporate"
                  ? "bg-[#9E20F6] text-white"
                  : "border-[#9E20F6] text-[#9E20F6]"
              }`}
              onClick={() => setLoginType("Corporate")}
            >
              Corporate Login
            </button>
          </div>
          <div className="">
            <h2>Mobile Number</h2>
            <div className="flex border rounded-md">
              <span className="border-r py-1 px-2">+91</span>
              <input
                type="text"
                className="w-full pl-2"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
          <div className="">
            <h2>Password</h2>
            <div className="flex border rounded-md">
              <span className="border-r py-1 px-2">+91</span>
              <input
                type="text"
                className="w-full pl-2"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <Link
            href="#"
            className="underline ml-auto -mt-6 text-[#737373] text-sm cursor-pointer"
          >
            Forgot Password
          </Link>
          <button className="border-0 bg-[#FF910F] hover:bg-[#ffc400] text-white flex w-1/2 p-1 cursor-pointer justify-center mx-auto rounded-md">
            Login
          </button>
          {/* <div className="mx-auto text-sm">
            <span>Don't have on account ? </span>
            <span
              className="text-[#9E20F6] cursor-pointer"
              onClick={() => {
                setLoginPopup(false), setSignupPopup(true);
              }}
            >
              Sign Up
            </span>
          </div> */}
        </div>
      </div>
    // </div>
  );
};

export default Login1;
