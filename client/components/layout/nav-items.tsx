import { navItemsData } from "@/data/nav-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
  isMobile?: boolean;
}

const NavItems: FC<Props> = ({ isMobile }): JSX.Element => {
  const pathName = usePathname();
  const route = pathName.split("/")[1];

  return (
    <div className={`${isMobile ? "flex flex-col" : "max-[800px]:hidden"}`}>
      {navItemsData.map((item, index) => (
        <Link href={item.url} key={index} className="py-4">
          <span
            className={`${
              pathName === item.url ||
              (item.url.includes(route) && route.length > 1)
                ? "dark:text-secondary text-tertiary font-bold"
                : "dark:text-white text-black"
            } text-lg px-6 font-josefin leading-none`}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
