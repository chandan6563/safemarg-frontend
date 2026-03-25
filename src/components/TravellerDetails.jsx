"use client";
import Image from "next/image";
import Traveller from "@/assets/bookingDetails/traveller.svg";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function TravellerDetails({ travellers, setTravellers, setError }) {
  const [travellersList, setTravellersList] = useState([]);
  const [travelerDetails, setTravelDetails] = useState({
    title: "mr",
    fmname: "",
    lname: "",
    dob: "",
    email: "",
    mob: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    if (travellersList.length === 0) {
      if (travellers && travellers.length > 0) setTravellersList(travellers);
      else {
        const storedPayload = sessionStorage.getItem("bookingPayload");
        if (storedPayload) {
          try {
            const payload = JSON.parse(storedPayload);
            if (payload.travellers && payload.travellers.length > 0) {
              setTravellersList(payload.travellers);
              if (setTravellers) setTravellers(payload.travellers);
            }
          } catch (err) {
            console.error("Error parsing booking payload:", err);
          }
        }
      }
    }
  }, []);

  useEffect(() => {
    if (setTravellers) setTravellers(travellersList);
    if (travellersList.length === 0) setError("⚠ At least one traveller is required");
    else setError("");
  }, [travellersList, setTravellers, setError]);

  const validateFields = () => {
    const errors = {};
    const { fmname, lname, dob, email, mob } = travelerDetails;

    if (!fmname) errors.fmname = "First name required";
    if (!lname) errors.lname = "Last name required";
    if (!dob) errors.dob = "DOB required";
    if (!email) errors.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email";
    if (!mob) errors.mob = "Mobile required";
    else if (!/^\d{10}$/.test(mob)) errors.mob = "Invalid mobile";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTravelDetails((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateFields()) {
      setError("⚠ Please fix the errors above");
      return;
    }
    setTravellersList((prev) => [...prev, travelerDetails]);
    setTravelDetails({ title: "mr", fmname: "", lname: "", dob: "", email: "", mob: "" });
    setFieldErrors({});
    setError("");
  };

  const deleteTraveller = (index) => {
    const updatedList = travellersList.filter((_, i) => i !== index);
    setTravellersList(updatedList);
    const storedPayload = sessionStorage.getItem("bookingPayload");
    if (storedPayload) {
      try {
        const payload = JSON.parse(storedPayload);
        payload.travellers = updatedList;
        sessionStorage.setItem("bookingPayload", JSON.stringify(payload));
      } catch (err) {
        console.error("Error updating session storage:", err);
      }
    }
  };

  return (
    <div className="rounded-md border border-gray-200 shadow-xl w-full">
      {/* Header */}
      <div className="bg-[#154880] rounded-t-md pl-3 py-3 flex items-center w-full">
        <Image src={Traveller} alt="traveller" width={30} />
        <div className="text-white ml-2 text-xl font-medium">Traveller Details</div>
      </div>

      {/* Travellers List */}
      <div className="py-5 px-2 sm:px-5 text-base overflow-x-auto">
        {travellersList.length > 0 && (
          <table className="table-auto border-collapse border border-gray-400 w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-100 text-base">
                <th className="border border-gray-300 text-start pl-2 sm:pl-5 py-2">Sr. No</th>
                <th className="border border-gray-300 text-start pl-2 sm:pl-5">Name</th>
                <th className="border border-gray-300 text-start pl-2 sm:pl-5">Type</th>
                <th className="border border-gray-300 text-start pl-2 sm:pl-5">DOB</th>
                <th className="border border-gray-300 text-start pl-2 sm:pl-5">Gender</th>
                <th className="border border-gray-300 text-start pl-2 sm:pl-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {travellersList.map((traveller, i) => (
                <tr className="text-sm" key={i}>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5 py-2">{i + 1}</td>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5">{`${traveller.fmname} ${traveller.lname}`}</td>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5">Adult</td>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5">{traveller.dob}</td>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5">{traveller.title === "mr" ? "Male" : "Female"}</td>
                  <td className="border border-gray-300 text-start pl-2 sm:pl-5">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded" onClick={() => deleteTraveller(i)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Traveller Form */}
      {pathname !== "/booking-details" && (
        <div>
          <h2 className="pl-2 sm:pl-5 pt-1 font-medium text-base">{travellersList.length + 1}. Adult</h2>

          <form className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-5 p-5" onSubmit={submitHandler}>
            {/* Title */}
            <div className="flex flex-col">
              <label htmlFor="title" className="font-medium text-[15px]">Title<span className="text-red-500">*</span></label>
              <select id="title" name="title" value={travelerDetails.title} className="bg-[#F6F9FC] px-2 py-1 text-[#737373] text-sm mt-2" onChange={changeHandler}>
                <option value="mr">Mr</option>
                <option value="ms">Ms</option>
                <option value="mrs">Mrs</option>
              </select>
            </div>

            {/* First/Middle Name */}
            <div className="flex flex-col">
              <label htmlFor="fmname" className="font-medium text-[15px]">First/Middle Name <span className="text-red-500">*</span></label>
              <input type="text" id="fmname" name="fmname" placeholder="Enter First/Middle Name" value={travelerDetails.fmname} className={`bg-[#F6F9FC] px-2 py-1 text-[#737373] text-sm mt-2 ${fieldErrors.fmname ? "border border-red-500" : ""}`} onChange={changeHandler} />
              {fieldErrors.fmname && <span className="text-red-500 text-sm">{fieldErrors.fmname}</span>}
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label htmlFor="lname" className="font-medium text-[15px]">Last Name <span className="text-red-500">*</span></label>
              <input type="text" id="lname" name="lname" placeholder="Enter Last Name" value={travelerDetails.lname} className={`bg-[#F6F9FC] px-2 py-1 text-[#737373] text-sm mt-2 ${fieldErrors.lname ? "border border-red-500" : ""}`} onChange={changeHandler} />
              {fieldErrors.lname && <span className="text-red-500 text-sm">{fieldErrors.lname}</span>}
            </div>

            {/* DOB */}
            <div className="flex flex-col">
              <label htmlFor="dob" className="font-medium text-[15px]">Date of Birth <span className="text-red-500">*</span></label>
              <input type="date" id="dob" name="dob" value={travelerDetails.dob} className={`bg-transparent outline-none w-full px-2 py-1 text-[#737373] text-sm mt-2 ${fieldErrors.dob ? "border border-red-500" : ""}`} onChange={changeHandler} max={new Date().toISOString().split("T")[0]} />
              {fieldErrors.dob && <span className="text-red-500 text-sm">{fieldErrors.dob}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-[15px]">Email ID <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={travelerDetails.email} className={`bg-[#F6F9FC] px-2 py-1 text-[#737373] text-sm mt-2 ${fieldErrors.email ? "border border-red-500" : ""}`} onChange={changeHandler} />
              {fieldErrors.email && <span className="text-red-500 text-sm">{fieldErrors.email}</span>}
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label htmlFor="mob" className="font-medium text-[15px]">Mobile Number <span className="text-red-500">*</span></label>
              <input type="tel" id="mob" name="mob" placeholder="Enter your number" value={travelerDetails.mob} className={`bg-[#F6F9FC] px-2 py-1 text-[#737373] text-sm mt-2 ${fieldErrors.mob ? "border border-red-500" : ""}`} onChange={changeHandler} />
              {fieldErrors.mob && <span className="text-red-500 text-sm">{fieldErrors.mob}</span>}
            </div>

            {/* Submit */}
            <div className="flex items-end">
              <button type="submit" className="bg-[#154880] hover:bg-[#2a78ca] text-white px-3 py-1 rounded-md w-full sm:w-auto">Add traveller</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
