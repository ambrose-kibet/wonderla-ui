import { useSignals } from "@preact/signals-react/runtime";
import { IoClose } from "react-icons/io5";
import SidebarLinkComponent from "./sidebar-link-component";
import { sidebarLinks } from "../data/links";
import { isSidebarOpen as isOpen, closeSidebar as onClose } from "../store";
import Logo from "./logo";

const Sidebar: React.FC = () => {
  useSignals();

  return (
    <div
      className={`fixed inset-0 z-50 flex transition-all duration-300 ${
        isOpen.value ? "" : "pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isOpen.value ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sidebar panel */}
      <div
        className={`ml-auto relative h-full w-[480px] bg-white shadow-lg pt-9 px-8 transform transition-transform duration-300 ease-in-out z-60 ${
          isOpen.value ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 pb-4">
          <Logo width={40} />
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200 border border-gray-300 rounded-full p-2 focus:outline-none"
          >
            <IoClose className="text-lg" />
          </button>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto h-[calc(100%-80px)] hide-scrollbar pb-3">
          {sidebarLinks.map((link) => (
            <SidebarLinkComponent key={link.name} link={link} />
          ))}
        </div>
        {/* Footer */}
        <div className="absolute -right-6 bottom-0 aspect-square w-[232px]">
          <img
            src="https://www.wonderla.com/_next/static/media/header-drawer-bottom-icon.0d0f9f60.png?w=256&q=75"
            alt="Footer Image"
            className="w-[240px] h-[240px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
