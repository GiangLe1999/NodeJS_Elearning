"use client";

import { FC } from "react";
import NextImage from "./next-image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import StyledRating from "./styled-rating";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Props {
  avatar?: string;
  name: string;
  rating?: number;
  content: string;
  createdAt: Date;
}

const Comment: FC<Props> = ({
  avatar,
  name,
  rating,
  content,
  createdAt,
}): JSX.Element => {
  return (
    <div className="border-y dark:border-slate-700 pt-5 pb-6 relative">
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 overflow-hidden rounded-full">
          <NextImage
            src={avatar || "/assets/images/home-page/default-user.png"}
            alt={name}
          />
        </div>

        <div>
          <span className="font-bold text-sm">{name}</span>
          <p className="flex items-center gap-2">
            {rating && (
              <StyledRating
                readOnly
                defaultValue={rating}
                customClasses="mt-1"
              />
            )}

            <span className="font-bold text-slate-500 text-xs">
              {timeAgo.format(new Date(createdAt))}
            </span>
          </p>
        </div>
      </div>
      <div className="text-sm text-slate-500 dark:text-dark_text mt-4">
        {content}
      </div>

      <div className="flex items-center gap-4 mt-4 text-tertiary dark:text-secondary">
        <p className="text-xs mt-1 underline">Reply this?</p>
        <BiSolidLike className="cursor-pointer" />
        <BiSolidDislike
          className="
          cursor-pointer"
        />
      </div>

      <div className="absolute top-6 right-0 cursor-pointer group">
        <BsThreeDotsVertical />

        <div className="absolute top-6 -left-8 shadow-lg border py-2 px-3 z-10 hidden group-hover:block dark:bg-slate-800 bg-white before:absolute before:-top-2 before:-left-0 before:bg-transparent before:w-full before:h-[15px] :before:bg-transparent">
          <span className="text-sm">Report</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
