"use client";
import Image from "next/image";
import React, { useState } from "react";
import loginImage from "@/assets/home/login-image.svg";
import closeIcon from "@/assets/home/close.svg";
import Link from "next/link";

const Login = ({ setLoginPopup, setSignupPopup }) => {
  const [loginType, setLoginType] = useState("Customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = async () => {
    // Reset errors
    setEmailError("");
    setPasswordError("");
    setSuccessMsg("");

    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (!isValid) return;

    let endpoint = "";
    let bodyData = {};

    if (loginType === "Customer") {
      endpoint = "api/v1/user/login";
      bodyData = { email, password, role: "user" };
    } else {
      endpoint = "api/v1/agent/loginAgent";
      bodyData = { email, password }; 
    }

    try {
      const res = await fetch(`${baseUrl}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("role", data.user.role);
        setSuccessMsg("Login successful!");
        setLoginPopup(false);
        window.location.reload();
      } else {
        // Show API error
        setPasswordError(data.msg || "Login failed");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setPasswordError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col shadow-lg border border-gray-200 lg:flex-row mx-5 lg:mx-auto mt-5 rounded-t-xl lg:rounded-xl lg:w-6/10 absolute z-200 top-1/10 lg:left-1/5">
      <div className="flex-1">
        <Image
          src={loginImage}
          width={500}
          className="w-full h-full object-cover rounded-xl lg:rounded-l-xl"
          alt="image"
        />
      </div>
      <div className="flex-1 rounded-b-xl lg:rounded-r-xl bg-white">
        <div className="flex flex-col gap-y-7 p-5">
          <div className="ml-auto" onClick={() => setLoginPopup(false)}>
            <Image src={closeIcon} width={15} alt="close" />
          </div>
          <h2 className="font-semibold text-2xl">Login</h2>

          {/* Switch Customer / Corporate */}
          <div className="flex justify-between w-full gap-x-5">
            <button
              className={`border w-1/2 py-1 px-2 rounded-md h-8 ${
                loginType === "Customer"
                  ? "bg-[#9E20F6] text-white"
                  : "border-[#9E20F6] text-[#9E20F6]"
              }`}
              onClick={() => setLoginType("Customer")}
            >
              Customer Login
            </button>
            <button
              className={`border w-1/2 py-1 px-2 rounded-md h-8 ${
                loginType === "Corporate"
                  ? "bg-[#9E20F6] text-white"
                  : "border-[#9E20F6] text-[#9E20F6]"
              }`}
              onClick={() => setLoginType("Corporate")}
            >
              Corporate Login
            </button>
          </div>

          {/* Success Message */}
          {successMsg && (
            <p className="text-green-500 text-center font-medium mt-1">{successMsg}</p>
          )}

          {/* Email */}
          <div>
            <h2>Email</h2>
            <div className="flex flex-col">
              <input
                type="email"
                className={`w-full pl-2 py-1 border rounded-md ${
                  emailError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <span className="text-red-500 text-sm mt-1">{emailError}</span>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <h2>Password</h2>
            <div className="flex flex-col">
              <input
                type="password"
                className={`w-full pl-2 py-1 border rounded-md ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && (
                <span className="text-red-500 text-sm mt-1">{passwordError}</span>
              )}
            </div>
          </div>

          <Link
            href="#"
            className="underline ml-auto -mt-6 text-[#737373] text-sm cursor-pointer"
          >
            Forgot Password
          </Link>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="border-0 bg-[#FF910F] hover:bg-[#ffc400] text-white flex w-1/2 p-1 cursor-pointer justify-center mx-auto rounded-md"
          >
            Login
          </button>

          <div className="mx-auto text-sm">
            <span>Don't have an account? </span>
            <span
              className="text-[#9E20F6] cursor-pointer"
              onClick={() => {
                setLoginPopup(false);
                setSignupPopup(true);
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
