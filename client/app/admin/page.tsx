"use client";

import AdminSidebar from "@/components/admin-pages/layout/admin-sidebar";
import AdminProtectedPage from "@/components/admin-protected-page";
import Heading from "@/components/heading";
import { NextPage } from "next";

interface Props {}

const page: NextPage<Props> = () => {
  return (
    <AdminProtectedPage>
      <Heading
        title="Admin Dashboard | E-Learning"
        description="E-Learning Dashboard for admin of E-Learning Platform"
      />
      <div className="flex min-h-screen">
        <div className="w-1/5">
          <AdminSidebar />
        </div>

        <div className="flex-1"></div>
      </div>
    </AdminProtectedPage>
  );
};

export default page;
