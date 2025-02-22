import React from 'react'
// import "../Static"

function NavBar() {
  return (
    <>
    <nav className="flex items-center justify-between w-full px-4 py-2">
      <a href="/"><img src="https://res.cloudinary.com/dxsd4uv7m/image/upload/v1739480005/nek78p5eai9nzks5xwl6.png" alt="Noael Logo" className="h-[10vh] w-[8vw]"/></a>
      <ul className="flex items-center text-[2vw]">
        <li><a href="./Portfolio" className="no-underline text-white px-[2vw]">Portfolio</a></li>
        <li><a href="./Resume" className="no-underline text-white px-[2vw]">Resume</a></li>
        <li><a href="./Contact" className="no-underline text-white px-[2vw]">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}

export default NavBar