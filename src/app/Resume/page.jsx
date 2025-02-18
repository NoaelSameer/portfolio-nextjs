"use client";

import { useEffect } from "react"
import dynamic from "next/dynamic"
import AOS from "aos";
import "aos/dist/aos.css"
const NavBar = dynamic(() => import("../components/navBar"), { ssr: true})
import Experiences from "../components/experiences";
// const Experiences = dynamic(() => import("../components/experiences"), { ssr: false})
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <> 
    <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover">
    <NavBar />
    
    <h1 className="text-center text-[5vw] font-semibold text-white mt-[13%]">Noael Sameer</h1>
    </div>
    <Experiences/>

    
    {/* </div> */}
    </>
  );
}
// AOS.init();
