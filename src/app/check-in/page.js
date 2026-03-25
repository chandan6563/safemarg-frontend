"use client";
import React from "react";
import Image from "next/image";

const airlines = [
  {
    name: "Air India Express",
    logo: "https://static.wixstatic.com/media/038952_7621a14e053b40c5ab29d1c3bf4d4737~mv2.png/v1/fill/w_159,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Air_India_Express_logo_svg%20(1).png",
    link: "https://www.airindiaexpress.com/checkin-home",
  },
  {
    name: "Ryanair",
    logo: "https://static.wixstatic.com/media/038952_a54445cf5ee042c69b64e12d3d43e3c8~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(48).png",
    link: "https://www.ryanair.com/gb/en/lp/check-in",
  },
  {
    name: "AirAsia",
    logo: "https://static.wixstatic.com/media/247770_4e285717a0264691a51fc0913da2fc2c~mv2.png/v1/fill/w_139,h_139,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/247770_4e285717a0264691a51fc0913da2fc2c~mv2.png",
    link: "https://www.airasia.com/check-in/en/gb",
  },
];

const instructions = [
  "Enter your PNR/Booking Reference and Last Name/Email.",
  "Select the passenger(s) and confirm nationality details.",
  "Fill in required health or travel declarations (if any).",
  "Add optional extras like seats, meals, or baggage.",
  "Download/print your boarding pass or save it on your phone.",
];

const infoCards = [
  {
    title: "🛄 Baggage Information",
    desc: "Check your airline’s rules for cabin and checked baggage before arriving at the airport.",
  },
  {
    title: "📱 Boarding Pass",
    desc: "After web check-in, download the e-boarding pass to your phone or print it for easy access.",
  },
  {
    title: "⏰ Check-In Time",
    desc: "Most airlines open web check-in 48 hours before departure and close 60-75 minutes before the flight.",
  },
];

export default function AirlineCheckin() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-blue-0 to-indigo-100 text-white-1900">
      {/* Header */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-6 text-indigo-700">
          Airline Web Check-In
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Save time at the airport by checking in online. Select your airline
          below to complete your web check-in and get your boarding pass
          instantly.
        </p>

        {/* Airline Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {airlines.map((airline) => (
            <div
              key={airline.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-xl transition"
            >
              {/* <img
                src={airline.logo}
                alt={airline.name}
                className="w-32 h-28 object-contain mb-4"
              /> */}
                <Image
                  src={airline.logo}
                  alt={airline.name}
                  width={128}       // adjust width
                  height={112}      // adjust height
                  className="object-contain mb-4"
                />
              <h3 className="text-lg font-semibold mb-3">{airline.name}</h3>
              <a
                href={airline.link}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition"
              >
                Check In
              </a>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-20 bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
            How to Complete Web Check-In
          </h3>
          <ul className="list-decimal list-inside space-y-3 text-gray-700 text-base">
            {instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        {/* Extra Info */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {infoCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-indigo-50 to-blue-100 p-6 rounded-2xl shadow-md text-center"
            >
              <h4 className="text-xl font-bold text-indigo-700 mb-3">
                {card.title}
              </h4>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
