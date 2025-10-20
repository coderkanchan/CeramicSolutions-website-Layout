import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";


export default function BCrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((x) => x);

  return (
    <div className="w-full max-w-[1320px] mx-auto px-4 flex items-center">

      <Link to={"/"}
        className={`text-xl underline  ${location.pathname === "/" ? "text-white underline" : "text-[#FF0000]"}`}>
        Home
      </Link>

      {paths.map((path, index) => {

        const url = "/" + paths.slice(0, index + 1).join("/");
        const label = path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

        return (
          <span key={url} className="text-xl flex items-center">
            <span >{<IoIosArrowForward />} </span>
            <Link to={url} className=" hover:underline">{label}</Link>
          </span>
        )
      })}
    </div>
  )
};