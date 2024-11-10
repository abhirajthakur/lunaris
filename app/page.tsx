"use client";

import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
