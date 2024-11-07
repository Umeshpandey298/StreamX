import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";

export const navigation = [
  {
    label: "Tv shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />,
  },
];

export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <MdHome />,
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <IoIosSearch />,
  },
];
