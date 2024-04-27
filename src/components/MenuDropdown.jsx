import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/collections", label: "Koleksiyonlar" },
  { href: "/collections/mens-clothing", label: "Erkek" },
  { href: "/collections/womens-clothing", label: "Kadın" },
];

export default function MenuDropdown() {
  return (
    <Menu as={Fragment}>
      <Menu.Button className="cursor-pointer xl:hidden absolute left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute lg:-bottom-[180px] -bottom-[190px] left-10 w-[200px] bg-[#fff] border rounded-md flex flex-col px-2">
        {links.map((link) => (
          <Menu.Item key={link.label} className="my-2 hover:bg-[#7856ff] rounded-md px-4 py-1 hover:text-[#fff] transition-colors duration-75">
            <Link to={link.href}>
              {link.label}
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}

{
  /* <span className="cursor-pointer lg:hidden absolute right-10">
<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-8 h-8"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>
</span> */
}
