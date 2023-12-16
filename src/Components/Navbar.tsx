import {FaChevronRight, FaUser} from "react-icons/fa"
import {MdOutlineDeveloperMode} from "react-icons/md"
import {BsSend} from "react-icons/bs"
import {GiCrossedBones, GiHamburgerMenu} from "react-icons/gi"
import useWindowDimensions from "../Utils/useWindowDimensions";
import { useState } from "react";
function Navbar() {
    const { height, width } = useWindowDimensions();
    const[toggle, setToggle] = useState(false)
  return (
      width>1023?<nav className={` fixed left-0 top-0 bottom-0 text-[#536378] flex flex-col py-5 bg-slate-900 z-10 overflow-y-auto`}>
        <div className="flex flex-col text-white px-5 mt-4">
            <span className="text-3xl font-bold uppercase mb-3">M<MdOutlineDeveloperMode className="inline text-[#e73c7e]" />hammed <br />Sameer</span>
            <span className=" border-t-2 border-[#536378] pb-4 pt-2">Software Developer <br /> Freelancer</span>
        </div>
        <div className="py-8 cursor-pointer hover:text-[#e73c7e] transition mt-8 px-8  flex flex-col items-center justify-center">
            <FaUser className="text-4xl" />
            About
        </div>
        <div className="py-8 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-t flex flex-col items-center justify-center">
            <span className="text-4xl">2+</span>
            Experience
        </div>
        <div className="py-8 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-t flex flex-col items-center justify-center">
            <MdOutlineDeveloperMode className="text-4xl" />
            Projects
        </div>
        <div className="py-8 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-y flex flex-col items-center justify-center">
            <BsSend className="text-4xl" />
            Contact
        </div>
        
      </nav>:
      <>
      <nav className="bg-slate-900 flex justify-between items-center relative z-10">
        <div className="flex flex items-center justify-between text-white px-5 py-3">
            <span className="text-xl font-bold uppercase mb-1">M<MdOutlineDeveloperMode className="inline text-[#e73c7e]" />hammed<br ></br> Sameer</span>
        </div>
        <div className="mx-5 flex h-full items-center text-white">
            {!toggle&&<GiHamburgerMenu className="h-10 w-10 transition-all ease" onClick={()=>{setToggle(true)}}/>}
            {toggle&&<GiCrossedBones className="h-10 w-10 transition-all ease" onClick={()=>{setToggle(false)}}/>}
        </div>
        <div className={`${!toggle?"hidden":""} bg-white absolute left-0 right-0 h-[calc(100vh-5rem)] overflow-y-auto top-20 text-2xl transition-all ease-in-out duration-700`}>
            <div className="py-4 cursor-pointer hover:text-[#e73c7e] transition mt-5 px-8  flex items-center justify-between">
                <div className="flex">
                    <FaUser className="mr-5" />
                    About
                </div>
                <FaChevronRight />
            </div>
            <div className="py-4 cursor-pointer hover:text-[#e73c7e] transition mt-15 px-8  flex items-center justify-between">
                <div className="flex">
                    <span className="mr-5">2+</span>
                    Experience
                </div>
                <FaChevronRight />
            </div>
                
            <div className="py-4 cursor-pointer hover:text-[#e73c7e] transition mt-15 px-8  flex items-center justify-between">
                <div className="flex">
                    <MdOutlineDeveloperMode className="mr-5" />
                    Projects
                </div>
                <FaChevronRight />
            </div>
               
                
            <div className="py-4 cursor-pointer hover:text-[#e73c7e] transition my-15 px-8  flex items-center justify-between">
                <div className="flex">
                    <BsSend className="mr-5" />
                    Contact
                </div>
            <FaChevronRight />
            </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar;