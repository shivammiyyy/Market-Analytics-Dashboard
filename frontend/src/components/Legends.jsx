import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

// Import images
import Soros from "../assets/soros.jpg";
import Lynch from "../assets/lynch.jpg";
import Buffet from "../assets/buffett.jpg";
import Livermore from "../assets/livermore.jpg";
import Tudor from "../assets/tudor.jpg";

const legends = [
  { name: "Jesse Livermore", path: "jesse_livermore", img: Livermore },
  { name: "Warren Buffett", path: "warren_buffett", img: Buffet },
  { name: "Paul Tudor Jones", path: "paul_tudor", img: Tudor },
  { name: "George Soros", path: "george_soros", img: Soros },
  { name: "Peter Lynch", path: "peter_lynch", img: Lynch },
];

const slideVariants = {
  hidden: (direction) => ({
    x: direction === "next" ? 150 : -150,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction === "next" ? -150 : 150,
    opacity: 0,
    transition: { duration: 0.6, ease: "easeIn" },
  }),
};

export const Legends = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % legends.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + legends.length) % legends.length);
  };

  const currentLegend = legends[currentIndex];

  return (
    <div className="relative flex flex-col items-center border border-gray-300 rounded-lg my-10 shadow-lg p-6 max-w-xl mx-auto bg-white">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Legendary Stock Brokers</h2>

      {/* Image Slider Container */}
      <div className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-lg h-[320px] relative shadow-md">
          <AnimatePresence custom={direction} mode="popLayout">
            <Motion.div
              key={currentLegend.name}
              className="flex flex-col items-center justify-center h-full"
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Broker Image */}
              <img
                src={currentLegend.img}
                alt={currentLegend.name}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{currentLegend.name}</h3>
                <Link to={`/brokers/${currentLegend.path}`}>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                    Know More
                  </button>
                </Link>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Motion.button
          whileHover={{ scale: 1.2 }}
          onClick={handlePrev}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-900 p-2 rounded-full text-white"
        >
          <MoveLeft size={24} />
        </Motion.button>

        <Motion.button
          whileHover={{ scale: 1.2 }}
          onClick={handleNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800/70 hover:bg-gray-900 p-2 rounded-full text-white"
        >
          <MoveRight size={24} />
        </Motion.button>
      </div>
    </div>
  );
};
