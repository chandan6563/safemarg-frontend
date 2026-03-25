"use client";
import SafemargIcon from "@/assets/paymentGateway/safemarg.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const paymentMethod = [{ icon: SafemargIcon, name: "safemarg" }];

const SafemargPay = () => {
  const router = useRouter();

  // 🔹 Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // 🔹 Payment options
    const options = {
      key: "RAZORPAY_KEY_HERE", // Replace with your Razorpay key
      amount: 50000, // in paise (500.00 INR)
      currency: "INR",
      name: "SafeMarg",
      description: "Flight Booking Payment",
      image: "/safemarg.png", // optional
      handler: function (response) {
        // 🔹 Payment successful
        alert("Payment Successful. Payment ID: " + response.razorpay_payment_id);
        router.push("/payment-success"); // redirect on success
      },
      prefill: {
        name: "Ravindra Chauhan",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#00BBF2",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-y-10 pt-10 pl-15">
        {paymentMethod.map(({ icon, name }) => (
          <div
            key={name}
            className="border border-[#154880] w-60 h-20 flex cursor-pointer hover:bg-gray-200"
          >
            <Image src={icon} alt={name} className="mx-auto" />
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-x-10 mt-10 text-base mr-5">
        <button
          className="text-white bg-[#FF9F43] hover:bg-orange-300 px-12 py-1 rounded-sm cursor-pointer"
          onClick={() => router.back()}
        >
          &lt; Back
        </button>

        <button
          className="bg-[#00BBF2] hover:bg-blue-300 text-white px-6 py-1 rounded-sm cursor-pointer"
          onClick={handlePayment}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default SafemargPay;
