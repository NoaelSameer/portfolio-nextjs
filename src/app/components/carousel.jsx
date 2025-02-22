"use client";

import { motion, useAnimationControls } from "framer-motion";
import Images from "../images/images";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel() {
  const controls = useAnimationControls();
  let index = 0;

  const nextSlide = async () => {
    index = (index + 1) % Images.length;
    await controls.start({
      x: `-${index * 100}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const prevSlide = async () => {
    index = (index - 1 + Images.length) % Images.length;
    await controls.start({
      x: `-${index * 100}%`,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
      <motion.div className="flex" animate={controls}>
        {Images.map(({ src, link }, i) => (
          <a href={link} key={i} className="block min-w-full h-[65 vh]">
            <motion.img
              src={src}
              className="w-full h-full object-cover"
              alt={`Slide ${i + 1}`}
            />
            <div/>
          </a>
        ))}
      </motion.div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-slate-800 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-lg font-semibold opacity-75 hover:opacity-100"
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-slate-800 px-4 py-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-lg font-semibold opacity-75 hover:opacity-100"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
}

export default Carousel;