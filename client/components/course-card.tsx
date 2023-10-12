"use client";

import { FC } from "react";
import { ICourse } from "../../server/models/course.model";
import Link from "next/link";
import NextImage from "./next-image";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaListUl } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

interface Props {
  course: ICourse;
}

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#b4690e",
  },
});

const CourseCard: FC<Props> = ({ course }): JSX.Element => {
  return (
    <div className="rounded-[5px] shadow-md border dark:border-none dark:bg-slate-500 bg-white dark:bg-opacity-20 custom-hover cursor-pointer">
      <Link href="" className="block relative w-full aspect-video">
        <NextImage
          src={course.thumbnail.url}
          alt={course.name}
          className="rounded-t-[5px]"
        />
      </Link>

      <div className="p-4 dark:text-dark_text text-tertiary">
        <h3 className="font-semibold text-lg text-gradient">{course.name}</h3>
        <div className="flex justify-between my-2">
          <StyledRating
            name="half-rating dark:text-dark_text text-tertiary"
            defaultValue={course.ratings}
            precision={0.5}
            readOnly
            size="small"
          />

          <span className="flex text-sm items-center gap-1 font-normal text-tertiary dark:text-dark_text">
            <MdOutlinePeopleAlt className="-mt-[2px]" size={16} />/
            <span className="text-base">{course.purchased}</span> Students
          </span>
        </div>

        <div className="flex justify-between my-2">
          <div className="flex items-center">
            <span className="mr-2 font-bold text-2xl text-gradient">
              {course.price === 0 ? "Free" : "$" + course.price + ".00"}
            </span>

            {course.estimatedPrice && course.estimatedPrice > course.price && (
              <span className="line-through text-lg opacity-50">
                ${course.estimatedPrice}.00
              </span>
            )}
          </div>

          <span className="flex items-center gap-1 font-normal text-tertiary dark:text-dark_text text-sm">
            <FaListUl className="-mt-[3px]" size={13} />/
            <span className="text-base">{course.courseData.length}</span>{" "}
            Lectures
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
