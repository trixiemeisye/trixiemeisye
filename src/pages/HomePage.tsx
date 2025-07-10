import React, { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import gallery1 from "@/assets/bebras1.jpg";
import gallery2 from "@/assets/ASDOS.jpg";
import gallery3 from "@/assets/matrikulasi.jpg";
import gallery4 from "@/assets/buku.jpeg";
import gallery5 from "@/assets/studler.jpg";
import gallery6 from "@/assets/mateo.jpg";
import gallery7 from "@/assets/ASDOS1.jpg";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = 
    [
        {
          image: gallery1,
          title: "Bebras Challenge",
          info: "Promoting informatics and computational thinking among students in Toba.",
        },
        {
          image: gallery2,
          title: "Teaching Assistant – English 1",
          info: "Supported learning activities, focusing on communication and academic writing.",
        },
        {
          image: gallery3,
          title: "Matriculation Program",
          info: "Introduced new students to the fundamentals of the major and academic expectations.",
        },
        {
          image: gallery4,
          title: "Book Publication",
          info: "Contributed as a writer and editor to educational resources in cybersecurity.",
        },
        {
          image: gallery5,
          title: "Award Moment",
          info: "Captured achievements as Student Leader",
        },
        {
          image: gallery6,
          title: "Mateo Choir",
          info: "Participated in student choir group performances, promoting arts and collaboration.",
        },
        {
          image: gallery7,
          title: "Teaching Assistant – English 1",
          info: "Supported learning activities, helping students grasp foundational English skills.",
        },
      ];
      

export default function HomePage() {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 16 },
    loop: true,
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2, spacing: 16 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
  });

  return (
    <>
      <HeroSection />
      <section className="py-8 bg-[#f8f6fa] w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6 text-[#4A3655] text-center">Gallery</h3>
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#4A3655] text-white rounded-full p-2 shadow hover:bg-[#C4A7BB] transition"
              onClick={() => slider?.current?.prev()}
              aria-label="Previous"
              style={{ left: '-1.5rem' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#4A3655] text-white rounded-full p-2 shadow hover:bg-[#C4A7BB] transition"
              onClick={() => slider?.current?.next()}
              aria-label="Next"
              style={{ right: '-1.5rem' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div ref={sliderInstanceRef} className="keen-slider mb-12">
              {galleryItems.map((item, idx) => (
                <div key={idx} className="keen-slider__slide flex flex-col overflow-hidden rounded-xl shadow-md bg-white">
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300" />
                  <div className="p-3">
                    <div className="font-semibold text-[#4A3655]">{item.title}</div>
                    <div className="text-xs text-[#4A3655]/80">{item.info}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 