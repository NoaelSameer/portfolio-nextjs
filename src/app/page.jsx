import dynamic from "next/dynamic";
import Head from "next/head";

const NavBar = dynamic(() => import("./components/navBar"), { ssr: true });
import Buttons from "./components/index_buttons";
export default function Home() {
  return (
    <>
      <Head> 
        <title>Home</title>
        <meta name="description" content="Portfolio of Noael Sameer, a West-Mec student specializing in website development, responsive design, and modern web technologies." />
      </Head>
      <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/f_auto,q_auto/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover relative">
        <NavBar />
        <div className="text-white mt-[7%] px-[7vw]">
          <h1 className="text-4xl sm:text-[5vw] font-semibold leading-[1]">
            Noael<br />Sameer
          </h1>
          <p className="text-sm sm:text-[1vw]">
            West-Mec student specializing in website development.<br /> Expert in responsive design, user experience, and modern web technologies.
          </p>
          <div className="mt-10">
            <Buttons />
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dxsd4uv7m/image/upload/f_auto,q_auto/v1740201415/image0__5_-transformed_wlqaj6.webp"
          className="w-[10vw] h-[70vh] absolute bottom-0 right-[25%] hidden sm:block"
          alt="Noael Sameer"
        />
      </div>
    </>
  );
}
