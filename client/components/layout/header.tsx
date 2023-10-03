"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import NavItems from "./nav-items";
import ThemeSwitcher from "./theme-switcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../custom-modal";
import Login from "../auth/login";
import Signup from "../auth/signup";

interface Props {}

const Header: FC<Props> = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const openLoginModal = () => {
    setOpenModal(true);
    setRoute("login");
  };

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark-bg dark:border-[#ffffff1c] shadow-xl"
            : "dark:border-[#ffffff1c] dark:shadow"
        } z-[80] fixed top-0 left-0 right-0 bg-white dark:bg-transparent transition duration-500 border-b`}
      >
        <div className="container flex items-center justify-between">
          <Link
            href="/"
            className={`text-[25px] font-josefin font-medium text-black dark:text-white py-4`}
          >
            Elearning
          </Link>

          <div className="flex items-center">
            <NavItems />
            <ThemeSwitcher />

            <div
              className="hidden max-[800px]:block"
              onClick={() => setOpen(true)}
            >
              <HiOutlineMenuAlt3
                size={20}
                className="dark:text-white text-black cursor-pointer"
              />
            </div>

            <HiOutlineUserCircle
              size={20}
              className="dark:text-white text-black cursor-pointer max-[800px]:hidden block mx-[14px]"
              onClick={openLoginModal}
            />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed h-screen top-0 left-0 w-full z-[9999] dark:bg-[unset] bg-[#00000024] transition duration-500 ${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
          onClick={() => setOpen(false)}
        >
          <div className="w-[70%] fixed z-[9999] h-screen bg-white dark:bg-slate-900 top-0 right-0 pb-5 text-center flex flex-col justify-between">
            <div className="flex flex-col justify-center flex-1">
              <NavItems isMobile />
              <HiOutlineUserCircle
                size={20}
                className="dark:text-white text-black cursor-pointer mx-auto mt-4"
                onClick={openLoginModal}
              />
            </div>
            <p className="mt-auto text-sm">
              Elearning 2023 &copy; All rights reserved
            </p>
          </div>
        </div>
      </div>

      {openModal && (
        <>
          {route === "login" && (
            <CustomModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              setRoute={setRoute}
              Component={Login}
            />
          )}

          {route === "signup" && (
            <CustomModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              setRoute={setRoute}
              Component={Signup}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Header;
