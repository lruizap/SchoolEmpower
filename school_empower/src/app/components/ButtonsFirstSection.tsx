// Components/ButtonsFirstSection

"use client";
import { useState } from "react";

// components

import Button from "./Button";
import RegisterModal from "./Register";
import LoginModal from "./Login";

const Buttons = () => {
  const [showModalRegister, setShowModalRegister] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const openModalRegister = () => {
    setShowModalRegister(true);
  };

  const openModalLogin = () => {
    setShowModalLogin(true);
  };

  const closeModalRegister = () => {
    setShowModalRegister(false);
  };

  const closeModalLogin = () => {
    setShowModalLogin(false);
  };

  return (
    <>
      <div className="mt-4 space-x-4 space-y-4">
        <Button onClick={openModalLogin} label="Join Us"></Button>
        <Button
          onClick={openModalRegister}
          label="Learn More"
          background="transparent"
        ></Button>
      </div>
      <RegisterModal
        showModal={showModalRegister}
        setShowModal={closeModalRegister}
      ></RegisterModal>
      <LoginModal
        showModal={showModalLogin}
        setShowModal={closeModalLogin}
      ></LoginModal>
    </>
  );
};

export default Buttons;
