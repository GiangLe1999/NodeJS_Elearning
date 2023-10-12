import { getAllCoursesData } from "@/lib/fetch-data";
import { FC } from "react";
import { ICourse } from "../../../server/models/course.model";
import CourseCard from "../course-card";

interface Props {}

const Courses: FC<Props> = async (props): Promise<JSX.Element> => {
  const courses = (await getAllCoursesData()) as ICourse[];

  return (
    <section className="even-section">
      <div className="container">
        <h2 className="section-title">
          <p>
            Expand Your Career{" "}
            <span className="text-gradient font-bold">Opportunity</span>
          </p>
          <p>With Our Courses</p>
        </h2>

        <div className="grid grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
