import { FC } from "react";
import NextImage from "../next-image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

interface Props {}

const Hero: FC<Props> = (props): JSX.Element => {
  return (
    <div className="container grid grid-cols-2 gap-10 mt-28 max-[1000px]:grid-cols-1">
      <div className="w-[80%] max-w-[500px] aspect-square relative mx-auto">
        <NextImage src="/assets/images/home-page/hero.png" alt="Hero banner" />
        <div className="hero-animation w-full h-full absolute -z-10 rounded-full transition"></div>
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="capitalize dark:text-white text-[#000000c7] text-4xl leading-[60px] font-semibold font-josefin">
          Improve your online learning experience better instantly
        </h1>
        <p className="font-josefin dark:text-[#edfff4] text-[#000000ac] text-medium mt-6">
          We have 40K+ Online course & 500K+ Online registered student. Find
          your desired Courses from theme.
        </p>

        <div className="flex items-center h-[50px] mt-3">
          <input
            type="search"
            placeholder="Search Courses..."
            className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-[5px] px-2 h-full flex-1 outline-none font-josefin"
          />
          <div className="w-[50px] dark:bg-secondary bg-tertiary rounded-r-[5px] text-white grid place-items-center h-full">
            <BiSearch size={30} />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div className="w-[46px] aspect-square relative rounded-full overflow-hidden">
            <NextImage
              src="/assets/images/home-page/client-1.jpg"
              alt="Client 1"
            />
          </div>
          <div className="w-[46px] aspect-square relative rounded-full overflow-hidden -ml-5">
            <NextImage
              src="/assets/images/home-page/client-2.jpg"
              alt="Client 2"
            />
          </div>
          <div className="w-[46px] aspect-square relative rounded-full overflow-hidden -ml-5">
            <NextImage
              src="/assets/images/home-page/client-3.jpg"
              alt="Client3"
            />
          </div>
          <p className="font-josefin">
            500K+ People already trusted us.{" "}
            <Link
              href="/"
              className="dark:text-secondary text-tertiary font-bold"
            >
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
