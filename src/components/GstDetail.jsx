"use client";

import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GstDetails({gstInfo,setGstInfo}) {
  const [gstDetail, setGstDetail] = useState({
    gstin: "",
    companyName: "",
    comapnyEmail: "",
    pincode: "",
  });

  const pathname = usePathname();

  // console.log(gstDetail, pathname);
  useEffect(() => {
    if (setGstInfo) {
      setGstInfo(gstDetail);
    }
  }, [gstDetail]);
  const changeHandler = (e) => {
    try {
      const { name, value } = e.target;
      console.log(name, value);
      setGstDetail((prev) => ({ ...prev, [name]: value }));
    } catch (error) {
      console.log(error.message);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    try {
      //   if (
      //     !travelerDetails.dob ||
      //     !travelerDetails.fmname ||
      //     !travelerDetails.lname ||
      //     !travelerDetails.dob ||
      //     !travelerDetails.email ||
      //     !travelerDetails.mob
      //   ) {
      console.log("Required all details");
      return;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className=" rounded-md border border-gray-200 shadow-xl w-full ">
      <div className="bg-[#154880] rounded-t-md pl-3 py-3 flex items-center w-full">
        <div className="text-white ml-2 text-xl font-medium">
          GST Details (Optional)
        </div>
      </div>
      <div>
        {pathname !== "/booking-details" && (
          <div>
            <form
              className="grid  grid-cols-3 p-5 gap-y-5 gap-x-8"
              onSubmit={submitHandler}
            >
              <div className="flex flex-col">
                <label htmlFor="gstin" className="font-medium text-[15px]">
                  GSTIN Number
                </label>
                <input
                  type="text"
                  id="gstin"
                  name="gstin"
                  placeholder="GST number"
                  value={gstDetail.gstin}
                  className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="companyName" className="font-medium text-[15px]">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter your company"
                  value={gstDetail.companyName}
                  className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="comapnyEmail" className="font-medium text-[15px]">
                  Company Email
                </label>
                <input
                  type="email"
                  id="comapnyEmail"
                  name="comapnyEmail"
                  placeholder="Enter your company email"
                  value={gstDetail.comapnyEmail}
                  className="bg-transparent outline-none w-full px-2 py-1 text-[#737373] font-normal text-sm mt-2"
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col ">
                <label htmlFor="email" className="font-medium text-[15px]">
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your company email"
                  className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
                  value={gstDetail.email || ""}
                  onChange={changeHandler}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="pincode" className="font-medium text-[15px]">
                  Pin Code
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  placeholder="Pin code"
                  value={gstDetail.pincode}
                  className="bg-[#F6F9FC] px-2 py-1 text-[#737373] font-normal text-sm mt-2"
                  onChange={changeHandler}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
