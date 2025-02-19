// import NavBar from "../components/navBar"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true})
export default function Home() {
  return (
    <> 
    <div className="bg-[url('https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739910639/Hero_ilj7dt.jpg')] min-h-[100vh] bg-no-repeat bg-cover">
    <NavBar />
    <div className="text-white mt-[10%] px-[5vw] flex-col">
      <p className="text-[2vw] font-semibold leading-[1] px-[]">
      <span className="text-[#FFF4FF]">My job</span> is to make sure that as our <span className="text-[#FFF44F]">customers' priorities</span> change, as the environment changes,</p>
      <p className="text-[2vw] font-semibold leading-[1] px-[21vw]">we shift that <span className="text-[#FFF44F]">portfolio</span> of products to meet <span className="text-[#FFF44F]">them</span>"</p>
      <p className="text-[2vw] font-semibold leading-[1] px-[34vw]">Marillyn Hewson</p>
   </div>
    </div>
    </>
  );
}