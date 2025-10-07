import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between gap-8 px-14 py-20 bg-gray-50">
      {/* Left section */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">ShadeCN Landing</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A beautiful and minimal demo page built using Next.js, Tailwind, and
          shadcn/ui.
        </p>
        <Button>Get Started</Button>
      </div>

      {/* Right section */}
      <div className="flex-1 flex justify-end">
        <Image
          src="/img/priya-2.jpg"
          alt="Main Hero Image"
          width={500}
          height={400}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    </main>
  );
};

export default HeroSection;
