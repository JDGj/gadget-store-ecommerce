"use client";
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiSearch, CiShoppingCart, CiDark, CiMenuFries } from "react-icons/ci";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  const toggleTheme = () => {
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  };

  const themeIcon =
    theme === "light" ? (
      <CiDark className="w-5 h-5" />
    ) : (
      <BsMoon className="w-4 h-4" />
    );

  const links = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <div className="block top-0 sticky z-50 mb-10">
      <div>
        <nav className="flex justify-between px-4 py-4 md:px-20 md:py-6 items-center xl:py-6 top-0 left-0 sticky bg-white dark:bg-[#867dca] shadow-md">
          <ul className="hidden md:flex flex-row justify-center align-middle space-x-3">
            {links.map((link) => (
              <li
                key={link.path}
                className={
                  pathname === link.path
                    ? "active-link-navbar dark:text-white"
                    : "hover:font-bold dark:text-white"
                }
              >
                <Link href={link.path}>
                  <div className="text-[#363062] dark:text-white py-1 px-2">
                    {link.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-[#363062] dark:text-white">
            <Link href={"/"}>
              <img
                src={theme === "light" ? "/logo.png" : "/logo_light.png"}
                alt="Logo"
                className="w-auto h-10 mx-4"
              />
            </Link>
          </div>
          <ul className="hidden md:flex flex-row justify-center align-middle space-x-3">
            <ul className="flex flex-row space-x-3">
              <li>
                <Link href={"/"} className="text-[#363062] dark:text-white">
                  <CiSearch className="w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link href={"/"} className="text-[#363062] dark:text-white">
                  <CiShoppingCart className="w-5 h-5" />
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="text-[#363062] dark:text-white"
                >
                  {themeIcon}
                </button>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-[#363062] dark:text-white border-[1px] border-[#363062] rounded-full px-7 py-3"
                >
                  LOGIN
                </Link>
              </li>
            </ul>
          </ul>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#363062] dark:text-white focus:outline-none"
            >
              <CiMenuFries className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>
      <div
        className={`md:hidden ${
          isMenuOpen ? "flex justify-center text-center" : "hidden"
        } bg-white shadow-md text-white p-4`}
      >
        <ul className="flex flex-col justify-center align-middle text-center pb-2 pt-0 space-y-2">
          {links.map((link) => (
            <li
              key={link.path}
              className={pathname === link.path ? "active-link-navbar" : ""}
            >
              <Link href={link.path}>
                <div className="text-[#363062] dark:text-white py-1 px-2">
                  {link.name}
                </div>
              </Link>
            </li>
          ))}
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href={"/"} className="text-[#363062] dark:text-white">
                <CiSearch className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link href={"/"} className="text-[#363062] dark:text-white">
                <CiShoppingCart className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="text-[#363062] dark:text-white"
              >
                {themeIcon}
              </button>
            </li>
          </ul>
          <li className="pt-4">
            <Link
              href={"/"}
              className="text-[#363062] dark:text-white border-[1px] border-[#363062] rounded-full px-8 py-3"
            >
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
