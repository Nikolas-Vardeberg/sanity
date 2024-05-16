import Logo from "@/components/elements/icons/Logo";
import Header from "@/components/layout/Header";
import About from "@/components/sections/about-us/About";
import Blog from "@/components/sections/blog/Blog";
import Experts from "@/components/sections/experts/Experts";
import Features from "@/components/sections/features/Features";
import { Hero } from "@/components/sections/hero/Hero";
import Matrics from "@/components/sections/metrics/Matrics";
import NewsLetter from "@/components/sections/news-letter/NewsLetter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
      <div className="p-4">
        <Features />
      </div>
      <About />
      <Matrics />
      <Experts />
      <div className="p-4 bg-secondary-950">
        <NewsLetter />
      </div>
      <Blog />
      
    </main>
  );
}
