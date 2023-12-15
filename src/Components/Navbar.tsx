import {FaUser} from "react-icons/fa"
import {MdOutlineDeveloperMode} from "react-icons/md"
import {BsSend} from "react-icons/bs"
function Navbar() {
//   const { height, width } = useWindowDimensions();
//   const [offset, setOffset] = useState(0);
 
  return (
      <nav className={` fixed left-0 top-0 bottom-0 text-[#536378] flex flex-col py-5 bg-slate-900 z-10`}>
        <div className="flex flex-col text-white px-5 mt-4">
            <span className="text-3xl font-bold uppercase mb-3">M<MdOutlineDeveloperMode className="inline text-[#e73c7e]" />hammed <br />Sameer</span>
            <span className=" border-t-2 border-[#536378] pb-4 pt-2">Software Developer <br /> Freelancer</span>
        </div>
        <div className="py-10 cursor-pointer hover:text-[#e73c7e] transition mt-10 px-8  flex flex-col items-center justify-center">
            <FaUser className="text-4xl" />
            About
        </div>
        <div className="py-10 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-t flex flex-col items-center justify-center">
            <span className="text-4xl">2+</span>
            Experience
        </div>
        <div className="py-10 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-t flex flex-col items-center justify-center">
            <MdOutlineDeveloperMode className="text-4xl" />
            Demo
        </div>
        <div className="py-10 cursor-pointer hover:text-[#e73c7e] transition px-8 border-[#293341] border-y flex flex-col items-center justify-center">
            <BsSend className="text-4xl" />
            Contact
        </div>
        
      </nav>
  );
}

export default Navbar;