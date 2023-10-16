import { FC } from "react";
import ContainNextImage from "./contain-next-image";

interface Props {
  description: string;
}

const NoContentYet: FC<Props> = ({ description }): JSX.Element => {
  return (
    <div>
      <div className="relative w-[70%] mx-auto aspect-[1.5] my-10">
        <ContainNextImage
          src="/assets/images/course-page/no-review.svg"
          alt="No reviews yet"
        />
      </div>
      <p className="text-center text-xl">{description}</p>
    </div>
  );
};

export default NoContentYet;
