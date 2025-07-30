import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import RideCard from "./ride-card";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { NavLink } from "react-router";
import { rides } from "../data/rides";

const RideCarousel: React.FC = () => {
  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
    ],
  };
  return (
    <div className=" flex flex-col w-[100%] mx-auto my-4">
      <div className="flex justify-between mb-4">
        <h2 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
          our iconic rides
        </h2>
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={previous}
            className="flex items-center justify-center size-12 text-xl  rounded-full  text-blue-950 bg-yellow-300 hover:scale-110 font-bold duration-300 delay-100 transition-all ease-in-out"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="flex items-center justify-center size-12 text-xl rounded-full font-bold text-blue-950 bg-yellow-300 hover:scale-110  duration-300 delay-100 transition-all ease-in-out"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <Slider
        ref={(slider) => {
          sliderRef.current = slider;
        }}
        {...settings}
        className="w-full gap-2.5"
      >
        {rides.map((ride) => (
          <RideCard {...ride} key={ride.id} />
        ))}
      </Slider>

      <div className="flex justify-start mt-8">
        <NavLink
          to={"/"}
          className="capitalize h-14 w-full max-w-[328px] font-mulish rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-blue-900 bg-yellow-300 mb-0.5 hover:scale-110  duration-300 delay-100 transition-all ease-in-out"
        >
          explore all rides
        </NavLink>
      </div>
    </div>
  );
};
export default RideCarousel;
