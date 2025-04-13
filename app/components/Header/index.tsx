"use client";

import { useState } from "react";
import { ItemMenu } from "./ItemManu";
import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const menuItems = [
  {
    url: "/",
    title: "Home",
    dropdown: false,
  },
  {
    url: "/",
    title: "How it Works",
    dropdown: false,
  },
  {
    url: "/",
    title: "Features",
    dropdown: true,
  },
  {
    url: "/",
    title: "About Us",
    dropdown: false,
  },
  {
    url: "/",
    title: "Request Demo",
    dropdown: false,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
          <Image src="/logo.svg" width={142} height={32} alt="logo" />

          <nav className="hidden xl:flex items-center gap-8">
            {menuItems.map(({ url, title, dropdown }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>

          <button onClick={toggleMenu}>
            <Image
              src="/hamburger.svg"
              width={40}
              height={40}
              alt="menu-hamburger"
              className="block xl:hidden cursor-pointer"
            />
          </button>
        </div>

        <div>
          <div>
            <button className="hidden xl:block py-3 px-4 bg-blue-500 rounded-lg text-white font-semibold leading-normal hover:bg-blue-600 transition-colors cursor-pointer">
              Contact
            </button>
          </div>
        </div>
      </GridContainer>

      {/* Sidebar menu for mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button onClick={toggleMenu} className="self-end mb-4">
            <FiX />
          </button>
          {menuItems.map(({ url, title, dropdown }, index) => (
            <ItemMenu
              key={index}
              url={url}
              title={title}
              hasDropdown={dropdown}
            />
          ))}
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </header>
  );
}
