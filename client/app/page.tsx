import Categories from "@/components/home-page/categories";
import Courses from "@/components/home-page/courses";
import FAQ from "@/components/home-page/faq";
import Features from "@/components/home-page/features";
import Hero from "@/components/home-page/hero";
import Reviews from "@/components/home-page/reviews";
import Testimonials from "@/components/home-page/testimonials";
import Header from "@/components/layout/header";
import { getAllFAQs } from "@/lib/fetch-data";
import { Types } from "mongoose";
import { NextPage } from "next";
import { IFaq } from "./admin/faq/page";

interface Props {}

const page: NextPage<Props> = async () => {
  const faqs = (await getAllFAQs()) as IFaq[];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Courses />
      <Categories />
      <Features />
      <Testimonials />
      <Reviews />
      <FAQ faqs={faqs} />
    </div>
  );
};

export default page;
