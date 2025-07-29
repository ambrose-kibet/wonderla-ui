import { NavLink } from "react-router";

const CategorySidebar: React.FC = () => {
  return (
    <div className="bg-blue-950 w-[600px] h-[600px] relative -translate-x-[50%] translate-y-10 flex font-mulish items-center justify-center rounded-full ">
      <div className="w-[600px] h-[600px] flex items-center justify-center rounded-full bg-gradient-to-t from-white to-yellow-400 absolute top-0 left-0"></div>
      <div className=" w-[400px] h-[400px] flex items-center justify-center bg-blue-950 rounded-full z-10">
        <div className={`absolute flex items-center z-20  top-5 right-0 `}>
          {/* Outer white circle with yellow border for the icon */}
          <div
            className="relative w-35 h-35 rounded-full flex items-center justify-center
                      bg-yellow-300 border-2 border-yellow-200 shadow-lg"
          >
            {/* Inner dark blue circle for the icon background */}
            <div
              className="w-30 h-30 rounded-full flex items-center justify-center
                        text-blue-800 bg-white text-5xl sm:text-6xl"
            >
              🎡
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start translate-x-[50%] cursor-pointer">
            <span className="text-white text-xl font-semibold mb-1">Land</span>
            <span className="bg-indigo-500 text-white text-sm font-normal  px-3 py-1 rounded-full">
              72 Rides
            </span>
          </div>
        </div>

        <NavLink
          to={"/category"}
          className={`absolute flex items-center z-20  top-5 right-0 `}
        >
          {/* Outer white circle with yellow border for the icon */}
          <div
            className="relative w-35 h-35 rounded-full flex items-center justify-center
                      bg-yellow-300 border-2 border-yellow-200 shadow-lg"
          >
            {/* Inner dark blue circle for the icon background */}
            <div
              className="w-30 h-30 rounded-full flex items-center justify-center
                        text-blue-800 bg-white text-5xl sm:text-6xl"
            >
              🎡
            </div>
          </div>
          <div className="ml-4 flex flex-col items-start translate-x-[50%] cursor-pointer">
            <span className="text-white text-xl font-semibold mb-1">Land</span>
            <span className="bg-indigo-500 text-white text-sm font-normal  px-3 py-1 rounded-full">
              72 Rides
            </span>
          </div>
        </NavLink>
      </div>

      <NavLink
        to={"/category"}
        className={`absolute flex items-center z-20  top-[40%] right-[-19%] `}
      >
        {/* Outer white circle with yellow border for the icon */}
        <div
          className="relative w-35 h-35 rounded-full flex items-center justify-center
                      bg-transparent "
        >
          {/* Inner dark blue circle for the icon background */}
          <div
            className="w-30 h-30 rounded-full flex items-center justify-center
                        text-blue-800 bg-transparent text-5xl sm:text-6xl"
          >
            🛝
          </div>
        </div>
        <div className="ml-4 flex flex-col items-start translate-x-[50%] cursor-pointer">
          <span className="text-white text-xl font-semibold mb-1">Water</span>
          <span className="bg-indigo-500 text-white text-sm font-normal  px-3 py-1 rounded-full">
            55 Rides
          </span>
        </div>
      </NavLink>

      <NavLink
        to={"/category"}
        className={`absolute flex items-center z-20  bottom-4 right-0 `}
      >
        {/* Outer white circle with yellow border for the icon */}
        <div
          className="relative w-35 h-35 rounded-full flex items-center justify-center
                      bg-transparent "
        >
          {/* Inner dark blue circle for the icon background */}
          <div
            className="w-30 h-30 rounded-full flex items-center justify-center
                        text-blue-800 bg-transparent text-5xl sm:text-6xl"
          >
            🎠
          </div>
        </div>
        <div className="ml-4 flex flex-col items-start translate-x-[50%] cursor-pointer">
          <span className="text-white text-xl font-semibold mb-1">Kids</span>
          <span className="bg-indigo-500 text-white text-sm font-normal  px-3 py-1 rounded-full">
            36 Rides
          </span>
        </div>
      </NavLink>
    </div>
  );
};
export default CategorySidebar;
