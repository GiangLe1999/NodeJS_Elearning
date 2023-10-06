"use client";

import DashboardHero from "@/components/admin-pages/dashboard-page/dashboard-hero";
import Heading from "@/components/heading";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <>
      <Heading
        title="Admin Dashboard | E-Learning"
        description="E-Learning Dashboard for admin of E-Learning Platform"
      />
      <DashboardHero />
    </>
  );
};

export default page;