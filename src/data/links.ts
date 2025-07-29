import { IoLocationOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { GiShipWheel } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";

import type { IconType } from "react-icons";

interface NavLink {
  name: string;
  icon?: IconType;
  has_dropdown: boolean;
  image?: string;
  dropdown_links?: NavLink[];
}
export const navLinks: NavLink[] = [
  {
    name: "parks",
    icon: IoLocationOutline,
    has_dropdown: true,
    dropdown_links: [
      {
        name: "kochi",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp",
        has_dropdown: false,
      },
      {
        name: "bengaluru",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "hyderabad",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "Bhubaneswar",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=48&q=75",
        has_dropdown: false,
      },
    ],
  },
  {
    name: "resorts",
    has_dropdown: true,
    icon: IoLocationOutline,
    dropdown_links: [
      {
        name: "bengaluru",
        icon: IoLocationOutline,
        has_dropdown: false,
      },
      {
        name: "resort",
        image:
          "	https://www.wonderla.com/images/bangalore-resort2.png?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "the isle",
        image: "https://www.wonderla.com/images/isle-resort.png?w=48&q=75",
        has_dropdown: false,
      },
    ],
  },
  {
    name: "offers",
    icon: CiDiscount1,
    has_dropdown: false,
  },
  { name: "rides", icon: GiShipWheel, has_dropdown: false },
  {
    name: "restaurants",
    icon: IoIosRestaurant,
    has_dropdown: false,
  },
];
export interface SidebarLink extends NavLink {
  info: string;
  image: string;
  color: "white" | "blue" | "yellow";
}

export const sidebarLinks: SidebarLink[] = [
  {
    name: "parks",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=32&q=75",
    has_dropdown: true,
    info: "Explore your favourite Wonderla Park",
    color: "white",
    dropdown_links: [
      {
        name: "kochi",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp",
        has_dropdown: false,
      },
      {
        name: "bengaluru",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "hyderabad",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb_30635eba9c.webp?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "Bhubaneswar",
        image:
          "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac_0e6a813c49.webp?w=48&q=75",
        has_dropdown: false,
      },
    ],
  },
  {
    name: "resorts",
    info: "Get a rejuvenating experience at Wonderla Resort",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=48&q=75",
    has_dropdown: true,
    color: "white",
    dropdown_links: [
      {
        name: "resort",
        image:
          "	https://www.wonderla.com/images/bangalore-resort2.png?w=48&q=75",
        has_dropdown: false,
      },
      {
        name: "the isle",
        image: "https://www.wonderla.com/images/isle-resort.png?w=48&q=75",
        has_dropdown: false,
      },
    ],
  },
  {
    name: "offers & combos",
    info: "Plan the perfect day with exciting offers",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=32&q=75",
    has_dropdown: false,
    color: "white",
  },
  {
    name: "timings and guidlines",
    info: "Know the timings and other guidelines",
    image:
      "	https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=32&q=75",
    has_dropdown: false,
    color: "white",
  },
  {
    name: "group bookings",
    info: "reach out to wonderla team",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75",
    has_dropdown: false,
    color: "yellow",
  },
  {
    name: "tour operator portal",
    info: "reach out to wonderla team",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=48&q=75",
    has_dropdown: false,
    color: "blue",
  },
  {
    name: "how to reach",
    info: "Direactions,routes & travel options",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/how_to_reach_f52afe8765.svg?w=48&q=75",
    has_dropdown: false,
    color: "yellow",
  },
  {
    name: "about us",
    info: "know all about wonderla",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=32&q=75",
    has_dropdown: false,
    color: "white",
  },
  {
    name: "quick links",
    info: "Explore more about Wonderla",
    image:
      "https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=32&q=75",
    has_dropdown: true,
    color: "white",
    dropdown_links: [
      {
        name: "restaurants",
        has_dropdown: false,
      },
      {
        name: "merchandise",
        has_dropdown: false,
      },
      {
        name: "events",
        has_dropdown: false,
      },
    ],
  },
  {
    name: "contact us",
    info: "Get in touch with Wonderla team",
    image:
      "	https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=32&q=75",
    has_dropdown: false,
    color: "white",
  },
];
