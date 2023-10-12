"use client";

import { FC } from "react";
import NextImage from "./next-image";
import { Rating } from "@mui/material";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

interface Props {
  avatar: string;
  name: string;
  rating: number;
  content: string;
}

const Comment: FC<Props> = ({ avatar, name, rating, content }): JSX.Element => {
  return (
    <div className="border-y pt-5 pb-6 relative">
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 overflow-hidden rounded-full">
          <NextImage src={avatar} alt={name} />
        </div>

        <div>
          <span className="font-bold text-sm">{name}</span>
          <p className="flex items-center gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
              className="!text-[#b4690e] !text-sm"
            />

            <span className="font-bold text-slate-500 text-xs">a week ago</span>
          </p>
        </div>
      </div>
      <div className="text-sm text-slate-500 dark:text-dark_text mt-4">
        {content}
      </div>

      <div className="flex items-center gap-4 mt-4 text-tertiary dark:text-secondary">
        <p className="text-xs mt-1 underline">Find this helpful?</p>
        <BiSolidLike className="cursor-pointer" />
        <BiSolidDislike
          className="
          cursor-pointer"
        />
      </div>

      <div className="absolute top-6 right-0 cursor-pointer group">
        <BsThreeDotsVertical />

        <div className="absolute top-6 -left-8 shadow-lg border py-2 px-3 z-10 hidden group-hover:block dark:bg-slate-800 bg-white before:absolute before:-top-2 before:-left-0 before:bg-transparent before:w-full before:h-[15px] before:bg-white">
          <span className="text-sm">Report</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
