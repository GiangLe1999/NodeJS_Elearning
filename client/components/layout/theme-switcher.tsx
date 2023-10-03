"use client";

import { useTheme } from "next-themes";
import { FC, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

interface Props {}

const ThemeSwitcher: FC<Props> = (props): JSX.Element | null => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center mx-4 cursor-pointer">
      {theme === "light" ? (
        <BiMoon size={20} color="black" onClick={() => setTheme("dark")} />
      ) : (
        <BiSun size={20} onClick={() => setTheme("light")} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
