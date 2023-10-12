import { ICourse } from "./../../server/models/course.model";
import axios from "axios";

export const getBannerLayoutData = async () => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-layout/Banner`
    );

    return data.layout.banner;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCoursesData = async () => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-courses`
    );

    return data.courses;
  } catch (error) {
    console.log(error);
  }
};

export const getAllCategories = async () => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-layout/Categories`
    );

    return data.layout.categories;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFAQs = async () => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-layout/FAQ`
    );

    return data.layout.faq;
  } catch (error) {
    console.log(error);
  }
};
