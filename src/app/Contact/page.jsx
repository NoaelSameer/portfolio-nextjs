// import NavBar from "../components/navBar"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true})
const Contact_Form = dynamic(() => import("../components/contact_form"), { ssr: true})
export default function Home() {
  return (
    <> 
    <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover">
    <NavBar />
      <div className="text-white mt-[5%] px-[6vw] w-full bg-slate-700">
      <h1 className="text-[5vw] font-semibold leading-[1]">Talk to <br />Noael Sameer</h1>
      <p className="text-[1vw]">Fill out your information and I will get back to you as soon as possible.</p>
      </div>
    <Contact_Form />
    </div>
    </>
  );
}