"use client";

import RetroGrid from "@/components/magicui/retro-grid";
import PulsatingButton from "@/components/magicui/pulsating-button";
 
export function Hero() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background ">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-violet-600 to-indigo-600 bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
      Build your next idea and <br /> ship your dream job
      </span>

      <p className="mt-5 text-gray-400">Zero code, maximum speed. Make professional resume.</p>

      <div className="mt-5">
        <PulsatingButton>Get Started</PulsatingButton>
      </div>

      <RetroGrid />
    </div>
  );
}

