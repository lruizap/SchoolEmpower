// components/Nav.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";

// Components

import Button from "../components/Button";
import RegisterModal from "./Register";
import LoginModal from "./Login";

export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openModalLogin = () => {
    setShowModalLogin(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalLogin = () => {
    setShowModalLogin(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-transparent w-full py-3">
        <div className="container mx-auto grid grid-cols-4 md:grid-cols-4 items-center gap-4">
          {/* Logo or title */}
          <div className="flex flex-initial items-center">
            <div className="font-bold text-xl">
              <Link href="/" className="hover:text-[#8D5CF6]">
                BrandName
              </Link>
            </div>
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
                href="#home"
                className="block md:inline-block py-2 px-4 mt-4 md:mt-0 hover:text-[#8D5CF6]"
              >
                Home
              </Link>
              <Link
                href="#product"
                className="block md:inline-block py-2 px-4 mt-4 md:mt-0 hover:text-[#8D5CF6]"
              >
                Product
              </Link>
              <Link
                href="#packages"
                className="block md:inline-block py-2 px-4 mt-4 md:mt-0 hover:text-[#8D5CF6]"
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className="block md:inline-block py-2 px-4 mt-4 md:mt-0 hover:text-[#8D5CF6]"
              >
                Contact
              </Link>
            </div>

            <div className="mt-4 md:ml-6 md:mt-0 md:flex space-x-3">
              <Button
                onClick={openModalLogin}
                label="Login"
                border="border border-transparent"
                background="bg-transparent hover:text-[#8D5CF6]"
                hover="none"
              />
              <Button onClick={openModal} label="Join Us" capitalize arrow />
            </div>
          </div>
        </div>
      </nav>
      <RegisterModal
        showModal={showModal}
        setShowModal={closeModal}
      ></RegisterModal>
      <LoginModal
        showModal={showModalLogin}
        setShowModal={closeModalLogin}
      ></LoginModal>
    </>
  );
}
