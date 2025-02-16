"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { backendUrl, slidep1, slidep2, slidep3, slidep4, slidep5 } from "@/Constants";
import axios from "axios";
// import { photo1, photo2, photo3, photo4, photo5 } from "@/Constants";

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const defimages = [
    { url: slidep1 },
    { url: slidep2 },
    { url: slidep3 },
    { url: slidep4 },
    { url: slidep5 },
  ];

  const [images,setImages]=useState(defimages);

useEffect(()=>{

  async function CallImages(){
    const response = await axios.get(`${backendUrl}/getphotos`)
   //@ts-expect-error
      setImages(response.data)
    }


  CallImages()
    
  


},[])






  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-20" id="gallery">
      <div className="container  ">
   
        <h2 className="text-3xl font-bold text-center lg:text-start mb-12">
          School Life Gallery
        </h2>

        <div className="relative overflow-hidden rounded-xl">
      
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 aspect-video bg-gray-100"
              >
                <img
                //@ts-expect-error
                  src={image.url}
                  alt={`School activity ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80"
            onClick={nextSlide}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
