import { FaUser } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { navLinks } from "../data/links";
import MainNavLinkComponent from "./link-component";
import { IoTicket } from "react-icons/io5";
import Logo from "./logo";
import { openSidebar } from "../store";

const Navbar: React.FC = () => {
  return (
    <nav className=" w-full fixed top-0 left-0 z-20 my-6 font-mulish ">
      <div className="bg-white shadow-lg p-2 rounded-2xl font-inter w-[90%] mx-auto mt-4">
        <div className="container mx-auto flex items-center justify-between">
          <Logo width={30} />

          <div className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <MainNavLinkComponent key={link.name} link={link} />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 hover:scale-110  duration-300 delay-100 transition-all ease-in-out">
              <FaUser className="text-xs text-blue-900" />
              <span className="text-gray-400 font-black uppercase font-sans text-sm">
                LOGIN
              </span>
            </button>
            <button className="capitalize text-blue-900 bg-yellow-300 flex h-[34px] items-center rounded-lg px-3.5 hover:scale-110  duration-300 delay-100 transition-all ease-in-out">
              <span className="font-mulish !leading-[1.255] flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[-0.03em] text-blue md:text-xs">
                book tickets
              </span>
              <IoTicket className="ml-1 text-xs text-blue-900" />
            </button>

            <button
              className="text-blue text-3xl p-2 cursor-pointer hover:scale-110  duration-300 delay-100 transition-all ease-in-out"
              onClick={openSidebar}
            >
              <VscThreeBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
