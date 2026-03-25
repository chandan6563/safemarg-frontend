// app/select-flight/page.js
"use client";

import { Suspense } from "react";
import FlightSearchClient from "./FlightSearchClient";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FlightSearchClient />
    </Suspense>
  );
}
