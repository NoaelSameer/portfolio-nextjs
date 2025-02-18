// import NavBar from "../components/navBar"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("./components/navBar"), { ssr: true})
const Buttons = dynamic(() => import("./components/index_buttons"), { ssr:true })
export default function Home() {
  return (
    <>
    <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover">
    <NavBar />

      <div className="text-white mt-[7%] px-[7vw]">
        <h1 className="text-[5vw] font-semibold leading-[1]">Noael<br />Sameer</h1>
        <p className="text-[1vw]">West-mec student specializing in website development.<br /> Expert in responsive design, user experience, and modern web technologies.</p>

        <div className="mt-10">
          <Buttons />
        </div>

      </div>

    
    </div>
    </>
  );
}