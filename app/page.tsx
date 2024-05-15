import Logo from "@/components/elements/icons/Logo";
import Header from "@/components/layout/Header";
import About from "@/components/sections/about-us/About";
import Features from "@/components/sections/features/Features";
import { Hero } from "@/components/sections/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <About />
    </main>
  );
}
