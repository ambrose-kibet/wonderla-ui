import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import type { SidebarLink } from "../data/links";
import { closeSidebar } from "../store";
import { NavLink } from "react-router";

const SidebarLinkComponent: React.FC<{ link: SidebarLink }> = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  const bgColorClass = {
    white: "bg-white",
    blue: "bg-blue-600",
    yellow: "bg-yellow-300",
  }[link.color];

  const textColorClass = {
    white: "text-gray-800",
    blue: "text-white",
    yellow: "text-blue-900",
  }[link.color];

  const infoColorClass = {
    white: "text-gray-500",
    blue: "text-blue-100",
    yellow: "text-blue-700",
  }[link.color];

  const handleLinkClick = () => {
    if (!link.has_dropdown) {
      closeSidebar();
      return;
    }
    if (link.has_dropdown) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div
      className={`rounded-lg overflow-hidden mb-2 ${bgColorClass} border-b border-gray-200`}
    >
      <button
        className={`flex items-center justify-between w-full p-4 focus:outline-none transition-colors duration-200 ${bgColorClass}`}
        onClick={handleLinkClick}
      >
        <div className="flex items-center space-x-4">
          {link.image && (
            <img
              src={link.image}
              alt={link.name}
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = `https://placehold.co/32x32/cccccc/ffffff?text=${link.name
                  .charAt(0)
                  .toUpperCase()}`;
              }}
            />
          )}
          <div className="flex flex-col ">
            <span
              className={`block text-xl mr-auto font-mulish font-medium capitalize !leading-[1.255] ${textColorClass}`}
            >
              {link.name}
            </span>
            <span className={`block text-xs ${infoColorClass}`}>
              {link.info}
            </span>
          </div>
        </div>
        {link.has_dropdown && (
          <LuChevronDown
            className={`text-xl transition-transform duration-300 ${textColorClass} ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </button>

      {/* Dropdown content */}
      {link.has_dropdown && (
        <div
          className={`bg-gray-50 transition-all duration-300 ease-in-out origin-top border-t border-gray-200 overflow-hidden ${
            isOpen
              ? "opacity-100 translate-y-0 scale-y-100 max-h-[500px] p-2"
              : "opacity-0 translate-y-2 scale-y-95 max-h-0 p-0 pointer-events-none"
          }`}
        >
          <div
            className={` grid ${
              (link.dropdown_links || [])[0].image
                ? "grid-cols-2 gap-2.5"
                : "grid-cols-1"
            }`}
          >
            {link.dropdown_links?.map((subLink) => (
              <NavLink
                key={subLink.name}
                to="/"
                className={`flex ${
                  subLink.image
                    ? "items-center flex-col gap-3 rounded-[14px] border border-gray-300 font-medium bg-white/10 p-2 shadow-[0px_5.19px_6.7px_0px_#0000000F]"
                    : ""
                } space-x-3 p-2 rounded-md`}
                onClick={closeSidebar}
              >
                {subLink.image && (
                  <img
                    src={subLink.image}
                    alt={subLink.name}
                    className="w-10 h-10 object-cover rounded-full mx-auto"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `https://placehold.co/24x24/cccccc/ffffff?text=${subLink.name
                        .charAt(0)
                        .toUpperCase()}`;
                    }}
                  />
                )}
                {subLink.icon && (
                  <subLink.icon className="text-lg text-gray-700" />
                )}
                <span className="font-mulish leading-snug font-medium capitalize text-gray-800">
                  {subLink.name}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarLinkComponent;
