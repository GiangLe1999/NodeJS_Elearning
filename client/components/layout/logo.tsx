import Link from "next/link";
import { FC } from "react";
import { GiBookCover } from "react-icons/gi";

interface Props {}

const Logo: FC<Props> = (props): JSX.Element => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 text-[25px] font-bold text-tertiary dark:text-secondary py-4`}
    >
      <GiBookCover size={28} className="-mt-1" /> Elearning
    </Link>
  );
};

export default Logo;
