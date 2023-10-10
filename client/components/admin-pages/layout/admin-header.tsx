"use client";

import ThemeSwitcher from "@/components/layout/theme-switcher";
import { FC, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

interface Props {}

const AdminHeader: FC<Props> = (props): JSX.Element => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-end fixed p-6 top-2 right-8">
      <ThemeSwitcher />
      <div
        className="relative cursor-pointer m-2"
        onClick={() => setOpen(!open)}
      >
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black -mt-1" />
        <span className="absolute -top-[10px] -right-2 bg-[#3ccba0] rounded-full w-5 h-5 text-xs flex items-center justify-center text-white">
          3
        </span>
      </div>

      {open && (
        <div className="w-[350px] h-[450px] dark:bg-[#111C43] bg-white shadow-xl border dark:border-slate-700 absolute top-16 !z-[9999] rounded">
          <h5 className="text-center text-[20px] text-black dark:text-white p-3">
            Notifications
          </h5>

          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-tertiary dark:text-white">
                New Question Received
              </p>
              <p className="text-tertiary dark:text-white cursor-pointer">
                Mark as read
              </p>
            </div>

            <p className="px-2 text-tertiary dark:text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              culpa iste atque iure mollitia eos, et exercitationem deleniti
              voluptates in.
            </p>
            <p className="p-2 text-tertiary dark:text-white text-sm">
              5 days ago
            </p>
          </div>

          <div className="dark:bg-[#2d3a4ea1] bg-[#00000013] border-b dark:border-b-[#ffffff47] border-b-[#0000000f]">
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-tertiary dark:text-white">
                New Question Received
              </p>
              <p className="text-tertiary dark:text-white cursor-pointer">
                Mark as read
              </p>
            </div>

            <p className="px-2 text-tertiary dark:text-white text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              culpa iste atque iure mollitia eos, et exercitationem deleniti
              voluptates in.
            </p>
            <p className="p-2 text-tertiary dark:text-white text-sm">
              5 days ago
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
