import { NavLink } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";
const activeLink = "navbar";

export default function Navbar() {
  return (
    <>
    <MenuDropdown/>
      <nav
        className="z-[-1] xl:z-auto xl:static xl:block hidden absolute left-0 xl:w-auto xl:opacity-100 opacity-0 top-[400px]"
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : "navbar")}
        >
          Ana Sayfa
        </NavLink>
        <NavLink
          to="/collections"
          className={({ isActive }) => (isActive ? activeLink : "navbar")}
        >
          Koleksiyonlar
        </NavLink>
        <NavLink
          to="/collections/mens-clothing"
          className={({ isActive }) => (isActive ? activeLink : "navbar")}
        >
          Erkek
        </NavLink>
        <NavLink
          to="/collections/womens-clothing"
          className={({ isActive }) => (isActive ? activeLink : "navbar")}
        >
          Kadın
        </NavLink>
      </nav>
    </>
  );
}
