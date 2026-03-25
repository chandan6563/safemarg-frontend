"use client"; // Needed because we use hooks

import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "./authContext";
import { SessionProvider } from "./context/SessionContext";
import { usePathname } from "next/navigation";
import React from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-poppins",
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const useSession = ["/add-booking-details", "/booking-details","/payment-gateway","/payment-gateway/credit-debit-cards","/payment-gateway/net-banking","/payment-gateway/safemarg-pay","/payment-gateway/wallets"].includes(pathname);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased bg-white`}>
        <AuthProvider>
          {useSession ? (
            <SessionProvider>
              <Header />
              {children}
              <Footer />
            </SessionProvider>
          ) : (
            <>
              <Header />
              {children}
              <Footer />
            </>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
