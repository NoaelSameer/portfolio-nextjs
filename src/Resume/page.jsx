// import NavBar from "../components/navBar"

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