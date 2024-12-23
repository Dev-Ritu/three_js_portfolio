import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechCard = ({ techStackSections }) => {
  const cardRef = useRef([]);
  return (
<div className="py-12 px-4 sm:px-6 md:px-10 lg:px-16 bg-black text-white min-h-screen">
  <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">Tech Stack</h2>
  <p className="text-center text-base sm:text-lg mb-12 text-gray-400">
    I specialize in a variety of libraries, frameworks, and tools that allow me to build robust and scalable applications.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
    {techStackSections.map((section, index) => (
      <div
        key={index}
        ref={(el) => (cardRef.current[index] = el)}
        className="border-black-300 bg-black-200  rounded-xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-gray-200">
          {section.title}
        </h3>
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {section.images.map((img, idx) => (
            <div
              key={idx}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>


  
  
  );
};

export default TechCard;
