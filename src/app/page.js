"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import FlightDetail from "@/components/model/FlightDetail";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Image from "next/image";
import { useState, Suspense } from "react";
import Filter from "@/components/select-flight/Filter";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSection />
      </Suspense>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
}