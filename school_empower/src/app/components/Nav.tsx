// components/Nav.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent w-full py-3">
      <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 items-center gap-4">
        {/* Logo or title */}
        <div className="flex flex-initial items-center">
          <div className="font-bold text-xl">BrandName</div>
        </div>

        {/* hamburguer button */}
        <div className="block md:hidden col-span-3 md:col-span-3 justify-self-end">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* nav */}
        <div
          className={`col-span-3 md:col-span-3 md:flex md:items-center md:justify-between ${
            isOpen ? "block bg-[#08184d] rounded-lg w-full pb-4" : "hidden"
          }`}
        >
          <div className="grid md:flex md:space-x-6 w-full md:w-auto">
            <Link
              href="#"
              className="block md:inline-block py-2 px-4 mt-4 md:mt-0"
            >
              Home
            </Link>
            <Link
              href="#"
              className="block md:inline-block py-2 px-4 mt-4 md:mt-0"
            >
              Product
            </Link>
            <Link
              href="#"
              className="block md:inline-block py-2 px-4 mt-4 md:mt-0"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block md:inline-block py-2 px-4 mt-4 md:mt-0"
            >
              Contact
            </Link>
          </div>

          <div className="mt-4 md:ml-6 md:mt-0 md:flex space-x-3">
            <Button
              label="Login"
              border="border border-transparent"
              background="bg-transparent text-white"
            />
            <Button label="Join Us" capitalize arrow />
          </div>
        </div>
      </div>
    </nav>
  );
}
