"use client";
import PayTmIcon from "@/assets/paymentGateway/paytm.svg";
import RazorpayIcon from "@/assets/paymentGateway/razorpay.svg";
import SafemargIcon from "@/assets/paymentGateway/safemarg.svg";
import HdfcBankIcon from "@/assets/paymentGateway/hdfc.svg";
import PhonepeIcon from "@/assets/paymentGateway/PhonePe.svg"
import Image from "next/image";
import { useState, useEffect,useContext } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
const paymentMethod = [
  { icon: PhonepeIcon, name: "PhonePe" },
  { icon: PayTmIcon, name: "Paytm" },
  { icon: SafemargIcon, name: "Safemarg" },
  { icon: HdfcBankIcon, name: "HDFC Bank" },
];
import { SessionContext } from "../context/SessionContext";

const Home = () => {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [bookingPayload, setBookingPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flightOffers, setflightOffer] = useState(false);
  const [contactInfo, setContactInfo] = useState("");
  const [travellers, setTravellers] = useState("");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [token, setToken] = useState(null);
  const {  amount} = useContext(SessionContext);

useEffect(() => {
  if (typeof window !== "undefined") {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }
}, []);


  useEffect(() => {
    const storedData = sessionStorage.getItem("bookingPayload");
    const data1 = sessionStorage.getItem("data");

    if (storedData) {
      setBookingPayload(JSON.parse(storedData));
      setflightOffer(JSON.parse(data1));
    }
  }, []);


const handlePaymentClick = async (name) => {
  if (name === "PhonePe") {
    try {
      if (!bookingPayload) {
        alert("Booking data not found!");
        return;
      }

      // setLoading(true);

      const response = await fetch(`${baseUrl}api/v1/payment/initiate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: amount|| bookingPayload?.totalAmount ||bookingPayload?.fareDetails.total,
          contactInfo,
          travellers,
        }),
      });

      const data = await response.json();
      setLoading(false);
      if (data?.success && data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert("Payment initiation failed!");
      }
    } catch (error) {
      setLoading(false);
      console.error("PhonePe payment error:", error);
      alert("Something went wrong! Please try again.");
    }
    return;
  }

  if (name === "Paytm") {
    setSelectedPayment("Paytm");
  } else {
    alert(`${name} payment integration coming soon!`);
  }
};



  return (
    <div>
      {/* Payment Options */}
      <div className="grid grid-cols-3 gap-y-10 pt-10 pl-15">
        {paymentMethod.map(({ icon, name }) => (
          <div
            key={name}
            className="border border-[#154880] w-60 h-20 flex cursor-pointer hover:bg-gray-200"
            onClick={() => handlePaymentClick(name)}
          >
            <Image src={icon} alt={name} className="mx-auto" />
          </div>
        ))}
      </div>

      {/* Back & Make Payment buttons */}
      <div className="flex justify-end gap-x-10 mt-10 text-base mr-5">
        <button
          className="text-white bg-[#FF9F43] hover:bg-orange-300 px-12 py-1 rounded-sm cursor-pointer"
          onClick={() => router.back()}
        >
          &lt; Back
        </button>
        <button
          // onClick={handleMakePayment}
          className="bg-[#00BBF2] hover:bg-blue-300 text-white px-6 py-1 rounded-sm cursor-pointer"
        >
          {loading ? "Processing..." : "Make Payment"}
        </button>
      </div>
      {/* Show selected payment and amount for PhonePe */}
      {selectedPayment === "PhonePe" && bookingPayload && (
        <div className="mt-6 w-96 mx-auto bg-white border shadow-md rounded-lg p-4 text-center">
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Selected Payment:</span> {selectedPayment}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Amount to Pay:</span> ₹{bookingPayload.totalAmount || 0}
          </p>
          <button
            // onClick={handleMakePayment}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {loading ? "Processing..." : "Proceed to Pay"}
          </button>
        </div>
      )}

      {/* Paytm QR Modal */}
      {selectedPayment === "Paytm" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-96 text-center">
            <h2 className="text-xl font-bold mb-4">Pay via Paytm</h2>
            <p className="mb-4 text-gray-700">
              Scan the QR code below to complete your payment.
            </p>
            <Image
              src="/paytm-qr.png"
              alt="Paytm QR Code"
              width={192}
              height={192}
              className="mx-auto"
            />
            <div className="mt-6">
              <button
                onClick={handlePaymentClick}
                className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button> 
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
