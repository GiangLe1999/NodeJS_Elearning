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

export const getCoursePublicDetails = async (courseId: string) => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-course/${courseId}`
    );

    return data.course;
  } catch (error) {
    console.log(error);
  }
};

export const getStripePublishableKey = async () => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/payment/stripe-publishable-key`
    );

    return data.publishableKey;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseReviews = async (courseId: string) => {
  try {
    const { data } = await axios(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/get-reviews/${courseId}`
    );

    return { reviews: data.course.reviews, ratings: data.course.ratings };
  } catch (error) {
    console.log(error);
  }
};
