import dynamic from "next/dynamic";
import Head from "next/head";

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true });
const Contact_Form = dynamic(() => import("../components/contact_form"), { ssr: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] h-screen bg-no-repeat bg-cover sm:grid-cols-1 overflow-hidden">
        <NavBar />
        <div className="text-white mt-[5%] px-[6vw] w-full bg-slate-700 sm:grid-cols-1">
          <h1 className="text-[5vw] font-semibold leading-[1]">
            Talk to <br />Noael Sameer
          </h1>
          <p className="text-[1vw]">
            Fill out your information and I will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full px-[6vw] mt-[5%] sm:mt-0 sm:p-4 sm:rounded-lg">
          <Contact_Form />
        </div>
      </div>
    </>
  );
}
