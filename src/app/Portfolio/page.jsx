import dynamic from "next/dynamic";
import Carousel from "../components/carousel";
import Head from 'next/head';

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      {/* Hero Section */}
      <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover bg-center flex flex-col">
        <NavBar />

        {/* Hero Text Section */}
        <div className="text-white px-[5vw] flex flex-col items-center justify-center flex-grow">
          <div className="max-w-4xl text-center space-y-4">
            <p className="text-[2vw] md:text-[1.5rem] font-semibold leading-tight">
              <span className="text-[#FFF4FF]">"My job</span> is to make sure that as our{" "}
              <span className="text-[#FFF44F]">customers' priorities</span> change, as the environment changes,
            </p>
            <p className="text-[2vw] md:text-[1.5rem] font-semibold leading-tight">
              we shift that <span className="text-[#FFF44F]">portfolio</span> of products to meet{" "}
              <span className="text-[#FFF44F]">them</span>
            </p>
            <p className="text-[2vw] md:text-[1.5rem] font-semibold leading-tight italic">
              — Marillyn Hewson
            </p>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="bg-slate-600 min-h-[50vh] py-8 px-[1vw] flex items-center justify-center">
        <Carousel />
      </div>
    </>
  );
}