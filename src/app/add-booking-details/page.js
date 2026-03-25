"use client";
import React, { Suspense } from "react";
import Booking from "./booking";

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Booking />
    </Suspense>
  );
};

export default Page;
