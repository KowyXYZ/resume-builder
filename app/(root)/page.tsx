import BelowHero from "@/components/BelowHero";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeInfo } from "@/components/HomeInfo";
import {Features} from '@/components/Features'

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Prices } from "@/components/Prices";
import { Spin } from "@/components/Spin";

import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { GetStartedBottom } from "@/components/GetStartedBottom";


export default function Home() {
  return (
    <main className=" flex flex-col py-2 pb-0">
      <Header>

        <div className="text-slate-100 flex justify-center items-center text-[16px] gap-5">
          <p>Pricing</p>
          <p>About</p>
          <p>Features</p>
        </div>

        <div className="text-slate-100">
        <button className="inline-flex h-10  animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#212121)] bg-[length:200%_100%] px-6 font-medium text-purple-400 transition-colors focus:outline-none   ">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </button>
       
        </div>
      </Header>

      <Hero/>
      <BelowHero/>
      <HomeInfo/>
      <Features/>
      <Prices/>
      <Spin/>
      <GetStartedBottom/>
      <div className="flex justify-center items-center p-2 bg-purple-700/60 opacity-30">
        <p>@kowy</p>
      </div>
    </main>
  );
}
