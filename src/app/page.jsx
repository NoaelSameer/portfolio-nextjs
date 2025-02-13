// import NavBar from "../components/navBar"
import dynamic from "next/dynamic"

const NavBar = dynamic(() => import("../components/navBar"), { ssr: true})
export default function Home() {
  return (
    <> 
    <div className="bg-black h-[100vh]">
    <NavBar />

    
    </div>
    </>
  );
}