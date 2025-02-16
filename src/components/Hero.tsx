import { Button } from "@/components/ui/button";
import { FormLink, heroImg } from "@/Constants";

import { SparklesText } from "./magicui/sparkles-text";

export function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black backdrop-blur-[2px]  bg-opacity-50"></div>

      {/* Content */}
      <div className="h-full container flex flex-col items-center justify-center mx-auto px-4 text-center relative z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          KCL Public School
        </h1>
        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Preparing students for success in a changing world through innovative
          learning and character development.
        </p>
        
        <SparklesText  className=" text-3xl lg:text-5xl  text-yellow-500" text=" Registration is free for 2025-26 Hurry up!!" />;{/* Button */}
        <Button onClick={()=>window.open(FormLink)} variant="outline" size="lg" className="text-lg">
          Apply Now
        </Button>
      </div>
    </section>
  );
}
