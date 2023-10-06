import CreateCourseForm from "@/components/admin-pages/create-course-page/create-course-form";
import Heading from "@/components/heading";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <>
      <Heading
        title="Create Courses | E-Learning"
        description="E-Learning Dashboard for admin of E-Learning Platform"
      />
      <CreateCourseForm />
    </>
  );
};

export default page;
