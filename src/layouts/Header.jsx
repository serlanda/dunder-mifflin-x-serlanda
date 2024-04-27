import Navbar from "./Navbar";
import Icons from "./Icons";
import { Link } from "react-router-dom";
import dunder from "../imgs/dunder.jpg";
import Carousel from "./Carousel";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <>
      <Carousel/>
      <TopBar/>
      <header className="bg-[#FFFF] xl:py-7 lg:py-[42px] py-[30px] sticky -top-[1px] px-8 z-30 border-b border-gray-200 w-[100%]">
        <div className="container mx-auto flex flex-grow-0 lg:justify-between justify-center items-center flex-row">
          <Navbar />
          <Link to="/">
      <img src={dunder} alt="Dunder Mifflin Logo" className="lg:w-[230px] w-[200px] lg:h-[150px] h-[130px] absolute lg:-top-[33px] -top-[34px] left-0 right-0 mx-auto object-contain"/>
          </Link>
          <Icons />
        </div>
      </header>
    </>
  );
}
// lg:translate-x-[-57%]
// absolute left-0 right-0 mx-auto w-[257px]

// <Link
// to="/"
// className="dunder text-[25px] tracking-wider font-semibold text-[#ffbe0b] hover:cursor-pointer font-sans mb-[7px] absolute left-0 right-0 mx-auto w-[256.2px]"
// >
// DunderMifflin Store.
// </Link>
