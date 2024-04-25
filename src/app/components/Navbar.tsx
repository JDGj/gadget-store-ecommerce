"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { CiSearch, CiShoppingCart, CiUser, CiDark } from "react-icons/ci";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", path: "/" },
    { name: "PRODUCTS", path: "/products" },
    { name: "ABOUT", path: "/about" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between px-20 items-center py-6 mb-5 top-0 left-0 sticky bg-white">
      <ul className="flex flex-row space-x-3">
        {links.map((link) => (
          <li
            key={link.path}
            className={pathname === link.path ? "active-link-navbar" : ""}
          >
            <Link href={link.path} className="text-[#363062] py-1 px-2 block">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-[#363062]">
        <Link href={"/"}>
          <img src="/logo.png" alt="Logo" className="w-14 h-14" />
        </Link>
      </div>
      <ul className="flex flex-row space-x-3">
        <li>
          <Link href={"/"} className="text-[#363062]">
            <CiSearch className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[#363062]">
            <CiShoppingCart />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[#363062]">
            <CiDark />
          </Link>
        </li>
        <li>
          <Link href={"/"} className="text-[#363062]">
            BUTTON
          </Link>
        </li>
      </ul>
    </nav>
  );
}
