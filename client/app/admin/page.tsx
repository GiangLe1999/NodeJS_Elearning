"use client";

import DashboardHero from "@/components/admin-pages/dashboard-page/dashboard-hero";
import Heading from "@/components/heading";
import { NextPage } from "next";
import ProtectedPage from "@/components/protected-page";
import { useMount } from "@/hooks/useMount";

interface Props {}

const DashboardPage: NextPage<Props> = () => {
  const hasMounted = useMount();

  if (!hasMounted) return null;

  return (
    <ProtectedPage>
      <Heading
        title="Admin Dashboard | E-Learning"
        description="E-Learning Dashboard for admin of E-Learning Platform"
      />
      <DashboardHero isDashboard />
    </ProtectedPage>
  );
};

export default DashboardPage;
