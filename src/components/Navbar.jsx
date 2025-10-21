import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from 'react';


const NavLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact us", path: "/contact-Us" },
  { id: 6, name: "Request a Qoute", path: "/request-A-qoute" }
]


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
   const isHome = location.pathname === '/CeramicSolutions-Website-Layout';

  useEffect(() => {
    setIsOpen(false);
  },[location.pathname]);

  return (
    <div className="w-full px-3 absolute z-20 top-9 ">

     <nav className={`max-w-[1320px] rounded-3xl min-h-[87px] mx-auto px-4 flex items-center justify-between ${isHome ? "bg-white" : "bg-[#FF0000]"}`} >

     {/* <nav className="max-w-[1320px] rounded-3xl min-h-[87px] mx-auto px-4 flex items-center justify-between bg-white"> */}

        <div className='w-full xl:max-w-[110px]  max-w-[95px]'>
          <img className='w-full h-full' src={logo} />
        </div>

        <div className='hidden lg:flex items-center justify-center'>
          {NavLinks.map((links) => (
            <NavLink key={links.id}
              to={links.path}
              className={({ isActive }) => isActive ? "text-[#FF0000] text-sm lg:text-base xl:p-7 p-4 underline font-semibold lg:font-bold" : "text-sm lg:text-base hover:text-[#FF0000]  hover:scale-105 xl:p-7 p-4"}>
              {links.name}
            </NavLink>
          ))}
        </div>

        <div className='w-full max-w-[200px] lg:max-w-[150px] xl:max-w-[190px] flex items-center justify-end sm:justify-between lg:justify-end gap-6'>

          <button className={`hidden sm:flex items-center justify-center gap-2 xl:gap-3 transition-all duration-300 ease-in  rounded-full w-full xl:max-w-[186px] max-w-[150px] h-[52px] hover:shadow-md shadow-[#FF000050] group ${isHome ? "bg-[#FF0000] text-white" : "bg-white text-[#FF0000]"}`}>
            <span className='text-sm lg:text-base xl::text-xl group-hover:scale-120'><BsFillTelephoneFill /></span>
            <span className='text-xs lg:text-sm xl:text-base font-bold group-hover:scale-105 '>(865) 621-1717</span>
          </button>

          <div className='lg:hidden relative z-20 flex'>
            <button onClick={() => setIsOpen(!isOpen)} className='relative w-8 h-8 flex items-center justify-center' > 

              <HiOutlineMenu className={`absolute w-10 h-10 transition-all duration-300 cursor-pointer ${isOpen ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"} ${isHome ? "text-[#FF0000]" : "text-white"}`} />

              <RxCross2 className={`absolute w-10 h-10 transition-all duration-300 cursor-pointer ${isOpen ? "opacity-100 scale-100 rotate-0 text-white" : "opacity-0 scale-0 -rotate-90"}`} />

            </button>
          </div>

        </div>

        <div className={`lg:hidden absolute z-10 bg-[#b80d0d] w-full flex flex-col gap-12 items-center justify-center space-y-12 shadow-xl pt-40 py-20 min-h-[900px] -top-9 left-0 right-0 transition-all duration-1000 ease-in-out ${isOpen ? "-translate-x-0 opacity-100" : "translate-x-400 opacity-0"} `}>
          {NavLinks.map((links) => (
            <NavLink key={links.id}
              to={links.path}
              className='text-white'>
              {links.name}
            </NavLink>
          ))}

           <button className={`sm:hidden flex items-center justify-center gap-2 xl:gap-3 transition-all duration-300 ease-in  rounded-full w-full xl:max-w-[186px] max-w-[150px] h-[52px] hover:shadow-md shadow-[#FF000050] group ${isOpen ? "text-[#FF0000] bg-white" : "text-white bg-[#FF0000]"}`}>
            <span className='text-sm lg:text-base xl::text-xl group-hover:scale-120'><BsFillTelephoneFill /></span>
            <span className='text-xs lg:text-sm xl:text-base font-bold group-hover:scale-105 '>(865) 621-1717</span>
          </button>
        </div>

      </nav>
    </div>
  )
}