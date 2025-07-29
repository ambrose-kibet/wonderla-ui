import type { IconType } from "react-icons";
import { NavLink } from "react-router";
import { LuChevronDown } from "react-icons/lu";

export interface NavLink {
  name: string;
  icon?: IconType; // Optional icon for the link
  has_dropdown: boolean; // Indicates if the link has a dropdown
  image?: string; // Optional image for the link
  dropdown_links?: NavLink[]; // Links for the dropdown if applicable
}

const MainNavLinkComponent: React.FC<{ link: NavLink }> = ({ link }) => {
  const Icon = link.icon;

  return (
    <NavLink
      to="/"
      className="flex items-center space-x-1 p-2 rounded-md  duration-200 group relative"
    >
      {Icon && <Icon className="text-xl text-gray-400" />}
      <span className="text-gray-400 font-black uppercase text-sm inline-block font-mulish  leading-[14px]">
        {link.name}
      </span>
      {link.has_dropdown && (
        <LuChevronDown className=" transition-transform duration-300 text-xs ease-in-out group-hover:rotate-180" />
      )}
      {link.has_dropdown && link.dropdown_links && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2  w-[294px] space-y-2.5 rounded-[20px] bg-white px-4 py-4 shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-3
                     transition-all duration-300 ease-in-out z-10"
        >
          {link.dropdown_links.map((subLink) => (
            <NavLink
              key={subLink.name}
              to="/"
              className="flex items-center space-x-3 p-2 rounded-md transition-colors duration-200 border-b border-gray-200 hover:bg-gray-50"
            >
              {subLink.image && (
                <img
                  src={subLink.image}
                  alt={subLink.name}
                  className="h-[48px] w-[48px] object-cover rounded-[10px]"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `https://placehold.co/32x32/cccccc/ffffff?text=${subLink.name
                      .charAt(0)
                      .toUpperCase()}`;
                  }}
                />
              )}
              {subLink.icon && (
                <subLink.icon className="text-xl text-blue-900" />
              )}
              <span className="text-sm inline-block font-mulish !leading-[1.255] font-bold uppercase text-black-300">
                {subLink.name}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </NavLink>
  );
};

export default MainNavLinkComponent;
