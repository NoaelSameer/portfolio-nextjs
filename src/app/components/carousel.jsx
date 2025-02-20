"use client";

import {motion, useAnimationControls} from "framer-motion"

import Images from "../images/images"
// import { L } from "framer-motion/dist/types.d-6pKw1mTI"
function Carousel() {
    const controls = useAnimationControls();
    let index = 0;

    const nextSlide = async () =>{
        index = (index + 1) % Images.length;
        await controls.start({x : `-${index * 100}%`, transition: {duration: .5}})
        }
    const prevSlide = async () =>{
        index = (index - 1) % Images.length;
        await controls.start({x : `-${index * 100}%`, transition: {duration: .5}})
    }

  return (
    <div className="overflow-hidden bg-slate-600">
        <motion.div className="flex" animate={controls}>
            {Images.map(({src, link}, i)=> (
                <a href={link} key={i}>
                    {/* <motion.img key={i} src={src} initial={{x: i * -100}} animate={{x: 0}} transition={{duration:.5, ease: [0.6, 0.01, -0.05, 0.9]}}/> */}
                 <motion.img key={i} src={src} className="min-w-[100vw]"/>
                </a>
                // <a key={i} href={link}>
                // {/* <motion.img key={i} src={src}/> */}
                // <a/>
            ))}


        </motion.div>
    
    <button onClick={prevSlide} className="absolute left-5 text-white text-[5vw]">Previous</button>
    <button onClick={nextSlide} className="absolute right-5 text-white text-[5vw]">Next</button>
    </div>
  )
}

export default Carousel