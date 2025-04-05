import { AnimatePresence, motion as Motion } from 'framer-motion';
import React, { useState } from 'react';
import CrashImg from '../assets/crash.jpg';
import Black from '../assets/black.jpg';
import Global from '../assets/global.jpg';
import Covid from '../assets/crash.jpg';
import { Link } from 'react-router-dom';
import { MoveLeftIcon, MoveRightIcon } from 'lucide-react';

const crashes = [
  { name: 'Wall Street Crash of 1929', path: 'wall-street', img: CrashImg },
  { name: 'Black Monday (1987)', path: 'black-monday', img: Black },
  { name: 'Global Financial Crisis (2008-2009)', path: 'global', img: Global },
  { name: 'COVID-19 Crash (2020)', path: 'covid', img: Covid }
];

const slideVariants = {
  hidden: (direction) => ({
    x: direction === 'next' ? 100 : -100,
    opacity: 0
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: (direction) => ({
    x: direction === 'next' ? -100 : 100,
    opacity: 0,
    transition: { duration: 0.5 }
  })
};

export const Crash = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  // Moves to the next image, wrapping around to the first image when necessary.
  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % crashes.length);
  };

  // Moves to the previous image, wrapping around to the last image when at the start.
  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + crashes.length) % crashes.length);
  };

  const currentCrash = crashes[currentIndex];

  return (
    <div className="relative flex flex-col border border-gray-300 rounded-lg my-8 shadow-lg p-6 max-w-lg mx-auto bg-white">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-center mb-6">Greatest Stock Market Crashes</h2>

      <div className="relative">
        {/* Image container with overflow hidden for smooth transitions */}
        <div className="overflow-hidden rounded-lg h-[300px] relative">
          <AnimatePresence custom={direction} mode="popLayout">
            <Motion.div
              key={currentCrash.name}
              className="flex flex-col items-center justify-center h-full"
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Display the crash image */}
              <img src={currentCrash.img} alt={currentCrash.name} className="w-full h-full object-cover" />
              {/* Overlay section with the crash name and navigation link */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 rounded-b-lg">
                <h3 className="text-xl font-semibold text-white mb-3 pl-30">{currentCrash.name}</h3>
                <Link to={`/crash/${currentCrash.path}`} className='pl-34'>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                    Know More
                  </button>
                </Link>
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* Left navigation arrow */}
        <Motion.div
          whileHover={{ scale: 1.2 }}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
          onClick={handlePrev}
        >
          <MoveLeftIcon size={32} />
        </Motion.div>

        {/* Right navigation arrow */}
        <Motion.div
          whileHover={{ scale: 1.2 }}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-white"
          onClick={handleNext}
        >
          <MoveRightIcon size={32} />
        </Motion.div>
      </div>
    </div>
  );
};
