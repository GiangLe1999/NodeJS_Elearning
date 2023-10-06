"use client";

import { FC, useState } from "react";
import CourseInfomation from "./course-infomation";
import CourseOptions from "./course-options";
import CourseData from "./course-data";
import CourseContent from "./course-content";

interface Props {}

export type CourseInfoValues = {
  name: string;
  description: string;
  price: string;
  estimatedPrice: string;
  tags: string;
  level: string;
  demoUrl: string;
  thumbnail: string;
};

export const initialCourseInfo = {
  name: "",
  description: "",
  price: "",
  estimatedPrice: "",
  tags: "",
  level: "",
  demoUrl: "",
  thumbnail: "",
};

const initialCourseContentData = [
  {
    videoUrl: "",
    title: "",
    description: "",
    videoSection: "Untitiled Section",
    links: [{ title: "", url: "" }],
    suggestion: "",
  },
];

const CreateCourseForm: FC<Props> = (props): JSX.Element => {
  const [active, setActive] = useState(0);

  const [courseInfo, setCourseInfo] = useState(initialCourseInfo);

  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);

  const [courseContentData, setCourseContentData] = useState(
    initialCourseContentData
  );

  const [courseData, setCourseData] = useState({});

  return (
    <div className="flex">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInfomation
            active={active}
            setActive={setActive}
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
          />
        )}

        {active === 1 && (
          <CourseData
            active={active}
            setActive={setActive}
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
          />
        )}

        {active === 2 && (
          <CourseContent
            active={active}
            setActive={setActive}
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
          />
        )}
      </div>
      <div className="flex-1 fixed z-[-1] top-[80px] right-8">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourseForm;
