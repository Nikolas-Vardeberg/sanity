import Logo from "@/components/elements/icons/Logo";
import Header from "@/components/layout/Header";
import { Hero } from "@/components/sections/hero/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <Hero />
    </main>
  );
}
