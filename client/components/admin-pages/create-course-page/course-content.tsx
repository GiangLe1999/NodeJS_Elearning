import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const CourseContent: FC<Props> = (props): JSX.Element => {
  return <div>CourseContent</div>;
};

export default CourseContent;
