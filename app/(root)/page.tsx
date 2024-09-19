import BelowHero from "@/components/BelowHero";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeInfo } from "@/components/HomeInfo";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className=" flex flex-col py-2">
      <Header>

        <div className="text-slate-100 flex justify-center items-center text-[16px] gap-5">
          <p>Pricing</p>
          <p>About</p>
          <p>Features</p>
        </div>

        <div className="text-slate-100">
        <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>

      <Hero/>
      <BelowHero/>
      <HomeInfo/>
    </main>
  );
}
