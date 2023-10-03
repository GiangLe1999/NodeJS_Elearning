import Hero from "@/components/home-page/hero";
import Header from "@/components/layout/header";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
    </div>
  );
};

export default page;
