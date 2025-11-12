// import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { Button } from "./ui/button";
import { Smartphone } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="./pexels-jmueller-7017277.jpg"
          alt="Dark space red photo CREDIT: Jeremy Müller"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-6">
          <img
            src="./DarkSkyApp-PankoDigital-1024x1024.png"
            alt="logo"
            className="w-1/2 h-auto mx-auto rounded-2xl"
          />
          <h1 className="text-white tracking-tight hidden">Dark Sky App</h1>
          <h3 className="text-red-200 max-w-xl mt-4 mx-auto tracking-tight">
            Measure and track night sky quality with your smartphone
          </h3>
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-12 max-w-xl mx-auto">
          Dark Sky is a mobile application designed for astronomy enthusiasts
          and researchers to measure and track night sky quality (light
          pollution levels) using their smartphone cameras. Developed with
          DarkSky Victoria and the Astronomical Society of Victoria, Australia.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="bg-red-600 border-2 border-white hover:bg-red-700 text-white px-8 min-w-[200px]">
            <Smartphone className="w-5 h-5 mr-2" />
            Apple IOS Coming Soon
          </button>{" "}
          <button className="bg-red-600 border-2 border-white hover:bg-red-700 text-white px-8 min-w-[200px]">
            <Smartphone className="w-5 h-5 mr-2" />
            Android Coming Soon
          </button>
          <button className="bg-black hover:bg-slate-900 text-white px-8 min-w-[200px]">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-slate-950 to-transparent z-10" />
    </div>
  );
}
