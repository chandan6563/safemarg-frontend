"use client";
import PayTmIcon from "@/assets/paymentGateway/paytm.svg";
import RazorpayIcon from "@/assets/paymentGateway/razorpay.svg";
import SafemargIcon from "@/assets/paymentGateway/safemarg.svg";
import SbiBankIcon from "@/assets/paymentGateway/sbi.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const paymentMethod = [
  { icon: RazorpayIcon, name: "Razorpay" },
  { icon: PayTmIcon, name: "Paytm" },
  { icon: SafemargIcon, name: "Safemarg" },
  { icon: SbiBankIcon, name: "SBI Bank" },
];

const NetBanking = () => {
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

  const handlePayment = async (method) => {
    if (method !== "Razorpay") {
      alert(`${method} payment integration coming soon!`);
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "RAZORPAY_KEY_HERE", // Replace with your key
      amount: 50000, // in paise (₹500)
      currency: "INR",
      name: "SafeMarg",
      description: "Flight Booking Payment",
      image: "/safemarg.png",
      handler: function (response) {
        alert("Payment Successful. Payment ID: " + response.razorpay_payment_id);
        router.push("/payment-success");
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
            onClick={() => handlePayment(name)}
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
      </div>
    </div>
  );
};

export default NetBanking;
