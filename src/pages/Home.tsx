import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";

import { GalleryCarousel } from "@/components/GalleryCarousal";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import StaffPanel from "@/components/StaffPanel";

import { wlogo } from "@/Constants";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col  ">
      <Header />
      <main className="flex-1 ">
        <Hero />
        <Features />
        <GalleryCarousel />
        <StaffPanel />
        <Contact />
        <button className="fixed bottom-20 right-10 m-4 w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-white shadow-xl rounded-full flex ">
          <img src={wlogo} className="rounded-full"  />
        </button>
      </main>
      <Footer />
    </div>
  );
}
