import { NavLink } from "react-router";
import type { RideInterface } from "../data/rides";

const RideCard: React.FC<RideInterface> = ({
  location,
  description,
  name,
  video,
}) => {
  return (
    <div className="relative aspect-[229/394] w-[229px] lg:aspect-[246/346] lg:w-[246px] rounded-xl overflow-hidden shadow-lg ">
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        typeof="video/mp4"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://placehold.co/320x180/cccccc/ffffff?text=Video+Not+Available";
        }}
        controls={false}
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(34,48,74,0)_34.08%,_#22304A_100%)]"></div>

      <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 pb-2.5 lg:pb-1 text-white">
        <h3 className="text-lg font-mulish capitalize !leading-[1.255] font-bold">
          {name}
        </h3>
        <p className="text-xs inline-block font-mulish font-normal leading-relaxed mt-px opacity-80">
          {location}
        </p>
        <p className="mt-1.5 line-clamp-4 text-xs leading-[1.255]-sm mb-6 leading-relaxed">
          {description}
        </p>
        <NavLink
          to={"/"}
          className="h-10 w-full max-w-[150px] rounded-lg text-xs font-black uppercase leading-tight flex items-center justify-center text-blue-900 bg-yellow-300 mt-2 hover:scale-110  duration-300 delay-100 transition-all ease-in-out"
        >
          Ride Details
        </NavLink>
      </div>
    </div>
  );
};

export default RideCard;
