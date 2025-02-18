// import NavBar from "../components/navBar"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true})
export default function Home() {
  return (
    <> 
    <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover">
    {/* <p>hi</p> */}
    <NavBar />

    </div>
    </>
  );
}