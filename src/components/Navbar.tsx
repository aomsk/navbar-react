import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";

export default function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/skills" },
    { name: "Our Team", link: "/our-team" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-[1]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span></span>
          Navbar
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden">
          {open ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-out ${
            open ? "top-10 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {links.map((itme) => (
            <li key={itme.name} className="md:ml-8 text-[.9rem] font-bold md:my-0 my-7">
              <a href={itme.link} className="uppercase text-gray-800 hover:text-gray-400 duration-500">
                {itme.name}
              </a>
            </li>
          ))}
          <Button title="Get Started" />
        </ul>
      </div>
    </nav>
  );
}
