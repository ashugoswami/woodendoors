"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react";
import WindowShuttersImage1 from "./window-shutters-image1";

const carouselItems = [
  {
    id: 1,
    title: "Modern Window",
    subtitle: "Blinds and Shutters",
    description:
      "Proin rhoncus tincidunt tortor. Aenean non malesuada est, commodo dapibus ipsum. Nam malesuada turpis eget massa aliquet elementum.",
    image: <WindowShuttersImage1 />,
    src: "http://windazo.like-themes.com/wp-content/uploads/2019/05/slide_03_01.png",
  },
  {
    id: 2,
    title: "Elegant Designs",
    subtitle: "For Your Home",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed eget libero vel nunc.",
    image: <WindowShuttersImage1 />,
    src: "http://windazo.like-themes.com/wp-content/uploads/2019/05/slide_01_01-1.png",
  },
  {
    id: 3,
    title: "Quality Materials",
    subtitle: "Built to Last",
    description:
      "Cras vel magna vel orci rutrum ultricies. Donec vel elit neque. Curabitur tempor dignissim eros ut pretium.",
    image: <WindowShuttersImage1 />,
    src: "http://windazo.like-themes.com/wp-content/uploads/2019/05/slide_02_01.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === carouselItems.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden bg-cream-50">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="z-10">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8 absolute"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 animate-fade-in-up">
                  {item.title.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block animate-fade-in-up"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </h1>
                <h2
                  className="text-4xl md:text-5xl font-bold text-gold mb-6 animate-fade-in-up"
                  style={{ animationDelay: "0.3s" }}
                >
                  {item.subtitle}
                </h2>
                <p
                  className="text-gray-600 mb-8 max-w-md animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  {item.description}
                </p>
                <div
                  className="flex space-x-4 animate-fade-in-up"
                  style={{ animationDelay: "0.7s" }}
                >
                  <button className="flex items-center bg-brown-900 hover:bg-gray-900 text-white px-6 py-3 rounded-none transition-transform duration-300 hover:translate-y-[-4px] home-btn">
                    MAKE ORDER
                    <MoveRight className="ml-2 h-4 w-6" />
                  </button>
                  <button
                    // variant="outline"
                    className="flex items-center bg-gold hover:bg-gold-dark text-white border-gold hover:border-gold px-6 py-3 rounded-none transition-transform duration-300 hover:translate-y-[-4px] home-btn"
                  >
                    READ MORE <MoveRight className="ml-2 h-4 w-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="relative h-[400px] md:h-[500px] flex justify-center">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 transform scale-100"
                    : "opacity-0 transform scale-95"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <img
                  className="ltx-floating-image"
                  alt="bg"
                  src={item?.src}
                  style={{ height: "450px" }}
                />
              </div>
            ))}

            {/* <div
              data-depth="0.15"
              className="ltx-layer ltx-layer-2 ltx-floating-image im2"
              style={{
                transform: "translate3d(-6.9px, -8.6px, 0px)",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                position: "relative",
                display: "block",
                left: "0px",
                top: "0px",
              }}

             
            >
              <img
                className="ltx-floating-image"
                alt="bg"
                src="http://windazo.like-themes.com/wp-content/uploads/2019/05/slide_03_01.png"
              />
            </div> */}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-gold" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
