"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignupImage from "@/assets/home/sign-up.svg";
import closeIcon from "@/assets/home/close.svg";

const generateCaptcha = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let captcha = "";
  for (let i = 0; i < 6; i++) {
    captcha += chars[Math.floor(Math.random() * chars.length)];
  }
  return captcha;
};

const Signup = ({ setLoginPopup, setSignupPopup }) => {
  const [signupType, setSignupType] = useState("Customer"); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    title: "Mr",
    firstName: "",
    lastName: "",
    address: "",
    pinCode: "",
    gstDetails: "",
    remarks: "",
    captcha: "",
  });
  const [generatedCaptcha, setGeneratedCaptcha] = useState(generateCaptcha());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const isCaptchaCorrect = formData.captcha.trim().toUpperCase() === generatedCaptcha;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMsg(""); // reset success message on input change
  };

  const refreshCaptcha = () => {
    setGeneratedCaptcha(generateCaptcha());
    setFormData({ ...formData, captcha: "" });
  };

  const handleSignup = async () => {
    const validationErrors = {};

    // Captcha validation
    if (!formData.captcha.trim()) validationErrors.captcha = "Captcha is required";
    else if (!isCaptchaCorrect) validationErrors.captcha = "Captcha does not match";

    if (signupType === "Customer") {
      if (!formData.name.trim()) validationErrors.name = "Name is required";
      if (!formData.phone.trim()) validationErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(formData.phone)) validationErrors.phone = "Phone must be 10 digits";
      if (!formData.email.trim()) validationErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(formData.email)) validationErrors.email = "Invalid email format";
      if (!formData.password) validationErrors.password = "Password is required";
      else if (formData.password.length < 6) validationErrors.password = "Password must be at least 6 characters";
      if (!formData.confirmPassword) validationErrors.confirmPassword = "Please confirm password";
      else if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = "Passwords do not match";
    } else {
      // Corporate / Agent validation
      const requiredFields = ["companyName", "title", "firstName", "lastName", "mobile", "email", "password", "address", "pinCode", "gstDetails"];
      requiredFields.forEach((field) => {
        if (!formData[field]) validationErrors[field] = `${field} is required`;
      });
      if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) validationErrors.mobile = "Mobile must be 10 digits";
      if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) validationErrors.email = "Invalid email format";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      let res, data;
      if (signupType === "Customer") {
        res = await fetch(`${baseUrl}api/v1/user/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            role: "user",
          }),
        });
        data = await res.json();
      } else {
        // Corporate / Agent
        res = await fetch(`${baseUrl}api/v1/agent/registerAgent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            companyName: formData.companyName,
            title: formData.title,
            firstName: formData.firstName,
            lastName: formData.lastName,
            mobile: formData.mobile,
            email: formData.email,
            password: formData.password,
            address: formData.address,
            pinCode: formData.pinCode,
            gstDetails: formData.gstDetails,
            remarks: formData.remarks,
          }),
        });
        data = await res.json();
      }

      if (data.success) {
        setSuccessMsg(data.msg || "Registration successful!");
        setErrors({});
        setSignupPopup(false);
        // setLoginPopup(true);
      } else {
        setErrors({ api: data.msg || "Registration failed" });
        setSuccessMsg("");
      }
    } catch (error) {
      setErrors({ api: "Something went wrong. Try again." });
      setSuccessMsg("");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col shadow-lg border border-gray-200 z-200 lg:flex-row mx-5 lg:mx-auto mt-5 rounded-t-xl lg:rounded-xl lg:w-6/10 absolute top-1/10 lg:left-1/5">
      <div className="flex-1">
        <Image src={SignupImage} width={500} className="w-full h-full object-cover rounded-xl lg:rounded-l-xl" alt="image" />
      </div>
      <div className="flex-1 rounded-b-xl lg:rounded-r-xl bg-white">
        <div className="flex flex-col gap-y-3 p-5">
          <div className="ml-auto cursor-pointer" onClick={() => setSignupPopup(false)}>
            <Image src={closeIcon} width={15} alt="close" />
          </div>
          <h2 className="font-semibold text-2xl -mt-3">Sign Up</h2>

          {/* Switch Customer / Corporate */}
          <div className="flex justify-between w-full gap-x-5">
            <button
              className={`border w-1/2 py-1 px-2 rounded-md h-8 ${signupType === "Customer" ? "bg-[#9E20F6] text-white" : "border-[#9E20F6] text-[#9E20F6]"}`}
              onClick={() => setSignupType("Customer")}
            >
              Customer Sign Up
            </button>
            <button
              className={`border w-1/2 py-1 px-2 rounded-md h-8 ${signupType === "Corporate" ? "bg-[#9E20F6] text-white" : "border-[#9E20F6] text-[#9E20F6]"}`}
              onClick={() => setSignupType("Corporate")}
            >
              Corporate Sign Up
            </button>
          </div>

          {/* Success Message */}
          {successMsg && <p className="text-green-500 text-center font-medium mb-2">{successMsg}</p>}

          {/* Customer Form */}
          {signupType === "Customer" && (
            <>
              <div>
                <label>Name</label>
                <input type="text" name="name" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label>Mobile Number</label>
                <input type="tel" name="phone" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter your mobile number" value={formData.phone} onChange={handleChange} maxLength={10} />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Confirm your password" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
              </div>
            </>
          )}

          {/* Corporate / Agent Form */}
          {signupType === "Corporate" && (
            <>
              <div>
                <label>Company Name</label>
                <input type="text" name="companyName" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Company Name" value={formData.companyName} onChange={handleChange} />
                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
              </div>
              <div>
                <label>Title</label>
                <select name="title" className="border w-full rounded-md h-8 pl-2 mt-1" value={formData.title} onChange={handleChange}>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label>First Name</label>
                <input type="text" name="firstName" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your First Name" value={formData.firstName} onChange={handleChange} />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" name="lastName" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Last Name" value={formData.lastName} onChange={handleChange} />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
              <div>
                <label>Mobile Number</label>
                <input type="tel" name="mobile" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Mobile Number" value={formData.mobile || ""} onChange={handleChange} maxLength={10} />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div>
                <label>Email</label>
                <input type="email" name="email" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Email Id" value={formData.email} onChange={handleChange} />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label>Address</label>
                <input type="text" name="address" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter Your Address" value={formData.address} onChange={handleChange} />
                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
              </div>
              <div>
                <label>Pin Code</label>
                <input type="text" name="pinCode" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Pin Code" value={formData.pinCode} onChange={handleChange} />
                {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
              </div>
              <div>
                <label>GST Details</label>
                <input type="text" name="gstDetails" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your GST Details" value={formData.gstDetails} onChange={handleChange} />
                {errors.gstDetails && <p className="text-red-500 text-sm">{errors.gstDetails}</p>}
              </div>
              <div>
                <label>Remarks</label>
                <input type="text" name="remarks" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Type Your Remarks" value={formData.remarks} onChange={handleChange} />
              </div>
              <div>
                <label>Password</label>
                <input type="password" name="password" className="border w-full rounded-md h-8 pl-2 mt-1" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
            </>
          )}

          {/* Captcha */}
          <div>
            <label>Captcha</label>
            <div className="flex gap-x-3 mt-1">
              <input type="text" name="captcha" placeholder="Enter captcha" className="border w-full rounded-md h-8 pl-2" value={formData.captcha} onChange={handleChange} />
              <input type="text" value={generatedCaptcha} disabled className="border w-32 bg-gray-300 rounded-md h-8 pl-2 cursor-not-allowed text-center font-bold" />
              <button type="button" onClick={refreshCaptcha} className="bg-purple-600 text-white px-2 rounded-md">↻</button>
            </div>
            {errors.captcha && <p className="text-red-500 text-sm">{errors.captcha}</p>}
          </div>

          {errors.api && <p className="text-red-500 text-sm text-center">{errors.api}</p>}

          <button
            onClick={handleSignup}
            disabled={!isCaptchaCorrect || isSubmitting}
            className={`border-0 mt-3 cursor-pointer bg-[#FF910F] text-white flex w-1/2 p-1 justify-center mx-auto rounded-md ${!isCaptchaCorrect || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="mx-auto text-sm">
            <span>Already have an account? </span>
            <span
              className="text-[#9E20F6] font-semibold cursor-pointer"
              onClick={() => { setLoginPopup(true); setSignupPopup(false); }}
            >
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
