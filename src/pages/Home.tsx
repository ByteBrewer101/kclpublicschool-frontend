import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { GalleryCarousel } from "@/components/GalleryCarousal";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import StaffPanel from "@/components/StaffPanel";
import { WhatsappNumber, wlogo } from "@/Constants";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <div className="mx-0 lg:mx-40">
          <Features />

          <GalleryCarousel />
        
            <StaffPanel />
         

          <Contact />
        </div>

        <button
          onClick={() => window.open(`https://wa.me/${WhatsappNumber}`)}
          className="fixed bottom-8 right-4 md:bottom-10 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200"
        >
          <img
            src={wlogo}
            alt="WhatsApp"
            className="rounded-full w-full h-full object-cover p-2 md:p-3"
          />
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
