"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PaymentSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const transactionId = searchParams.get("transactionId");
  const merchantId = searchParams.get("merchantId");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const [payment, setPayment] = useState(null);
  const [final, setFinal] = useState(null);

  const [loading, setLoading] = useState(false);
  const [bookingPayload, setBookingPayload] = useState(null);
  const [contactInfo, setContactInfo] = useState(null);
  const [travellers, setTravellers] = useState(null);
  const [flightOffers, setFlightOffers] = useState(null);
  const [token, setToken] = useState(null);
  const [bookingDone, setBookingDone] = useState(false);

  // ✅ Load token
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  // ✅ Fetch payment status
  useEffect(() => {
    if (!transactionId) router.replace("/");

    const fetchStatus = async () => {
      const res = await fetch(
        `${baseUrl}api/v1/payment/status/${transactionId}?merchantId=${merchantId}`
      );
      const data = await res.json();
      setPayment(data);
    };

    fetchStatus();

  }, [transactionId, merchantId, baseUrl, router]);

  // ✅ Load stored booking data
  useEffect(() => {
    const storedData = sessionStorage.getItem("bookingPayload");
    const data1 = sessionStorage.getItem("data");
        //   setLoading(true);

    if (storedData) {
      setBookingPayload(JSON.parse(storedData));
      setFlightOffers(JSON.parse(data1));
    }
  }, []);

  // ✅ Format contact info and travellers
  useEffect(() => {
    if (bookingPayload?.contactInfo) {
      const formattedContact = {
        addresseeName: {
          firstName: bookingPayload.contactInfo.fname,
          lastName: bookingPayload.contactInfo.lname,
        },
        companyName: "INCREIBLE VIAJES",
        purpose: "STANDARD",
        phones: [
          {
            deviceType: "MOBILE",
            countryCallingCode: "91",
            number: bookingPayload.contactInfo.mob,
          },
        ],
        emailAddress: bookingPayload.contactInfo.email,
        address: {
          lines: [bookingPayload.contactInfo.address],
          postalCode: bookingPayload.contactInfo.pincode,
          cityName: bookingPayload.contactInfo.city,
          countryCode: bookingPayload.contactInfo.country
            ?.slice(0, 2)
            .toUpperCase(),
        },
      };

      const formattedTravellers = bookingPayload.travellers.map(
        (traveller, index) => ({
          id: (index + 1).toString(),
          dateOfBirth: traveller.dob,
          gender: traveller.title?.toLowerCase() === "mr" ? "MALE" : "FEMALE",
          name: {
            firstName: traveller.fmname?.toUpperCase() || "",
            lastName: traveller.lname?.toUpperCase() || "",
          },
          contact: {
            emailAddress: traveller.email,
            phones: [
              {
                deviceType: "MOBILE",
                countryCallingCode: "91",
                number: traveller.mob,
              },
            ],
          },
        })
      );

      setContactInfo(formattedContact);
      setTravellers(formattedTravellers);
    }
  }, [bookingPayload]);

  // ✅ Trigger booking automatically if payment is successful
  useEffect(() => {
    const makeBooking = async () => {
      if (
        bookingDone ||
        !bookingPayload ||
        !payment ||
        !payment.rawResponse ||
        payment.rawResponse.data?.responseCode !== "SUCCESS"
      )
        return;

      console.log("✅ Payment verified, starting booking...");

      try {
        const response = await fetch(`${baseUrl}api/v1/booking/createBooking`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            offer: flightOffers,
            contact: contactInfo,
            travelers: travellers,
            remarks: {
              general: [
                {
                  subType: "GENERAL_MISCELLANEOUS",
                  text: "ONLINE BOOKING FROM INCREIBLE VIAJES",
                },
              ],
            },
            ticketingAgreement: {
              option: "DELAY_TO_CANCEL",
              delay: "6D",
            },
            transaction:payment,
          }),
        });

        const data = await response.json();
        setLoading(false);

        if (response.ok) {
        //   alert("Booking created successfully!");
          setBookingDone(true);
        //   router.push("/");()
        setFinal(data)
        } else {
          alert("Booking failed: " + (data.error || "Unknown error"));
        }
      } catch (err) {
        setLoading(false);
        console.error("Booking error:", err);
        alert("Something went wrong! Please try again.");
      }
    };

    makeBooking();
  }, [
    payment,
    bookingPayload,
    contactInfo,
    travellers,
    flightOffers,
    baseUrl,
    router,
    token,
    bookingDone,
  ]);

  if (!transactionId) return null;
return (
  <>
    {loading && (
      // ✅ Elegant Full Page Loader
      <div className="fixed inset-0 bg-gradient-to-b from-white to-[#f2f6fb] flex flex-col items-center justify-center z-50">
        <Image
          src="/safemarg-logo-loading.png"
          alt="Loading..."
          width={150}
          height={150}
          className="animate-bounce drop-shadow-lg"
        />
        <p className="mt-6 text-[#154880] text-base font-semibold tracking-wide">
          Processing your booking...
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Please wait, this may take a few seconds.
        </p>
      </div>
    )}

    {/* ✅ Payment Result UI */}
    {!loading && (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gradient-to-br from-[#f5f9ff] to-[#e8f0ff]">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md text-center">
          <div
            className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center shadow-md ${
              final?.success
                ? "bg-green-100 text-green-600 animate-[pop_0.4s_ease-out]"
                : "bg-red-100 text-red-600 animate-[pop_0.4s_ease-out]"
            }`}
          >
            {final?.success ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>

            <h1
                className={`mt-6 text-2xl font-bold ${
                    final?.success ? "text-green-600" : "text-red-600"
                }`}
                >
                {final?.success
                    ? "Payment Successful!"
                    : final?.message === "Booking already done for this transaction."
                    ? "Booking Already Done!"
                    : "Payment Failed!"}
                </h1>

                <p className="text-gray-600 mt-2 text-sm">
                {final?.success
                    ? "Your booking has been successfully processed. You will receive confirmation shortly."
                    : final?.message === "Booking already done for this transaction."
                    ? `Booking already exists with ID: ${final.existingBookingId}`
                    : "Unfortunately, your payment could not be processed. Please try again or contact support."}
                </p>

          <div className="mt-6 bg-gray-50 rounded-lg p-4 text-left text-sm border border-gray-100">
            <p>
              <span className="font-semibold text-gray-700">Transaction ID:</span>{" "}
              {transactionId || "N/A"}
            </p>
            {/* <p className="mt-1">
              <span className="font-semibold text-gray-700">transactionId ID:</span>{" "}
              {merchantId || "N/A"}
            </p> */}
          </div>

          <button
            onClick={() => window.location.href = "/"}
            className="mt-8 px-6 py-2 rounded-full bg-[#154880] text-white font-semibold hover:bg-[#103b6d] transition-all duration-200 shadow-md"
          >
            Go to Home
          </button>
        </div>
      </div>
    )}
  </>
);

}
